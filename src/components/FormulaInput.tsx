import React, { useState } from "react";
import { Input, Space, AutoComplete, Button, Flex } from "antd";
import { useItemStore } from "../store/useItemStore";

const FormulaInput: React.FC = () => {
  const { items } = useItemStore();
  const [formula, setFormula] = useState<string>("");

  const handleInputChange = (value: string) => {
    setFormula(value);
  };

  const handleItemSelect = (value: string, option: { value: string }) => {
    const item = items.find((item) => item.name === value);
    if (item) {
      const newTag = `{${item.name}}`;
      setFormula((prev) => `${prev}${newTag}`);
    }
  };

  const calculateFormula = () => {
    try {
      let evaluatedFormula = formula;

      evaluatedFormula = evaluatedFormula.replace(
        /\{([^}]+)\}/g,
        (_, match) => {
          const item = items.find((item) => item.name === match.trim());
          return item ? item.value.toString() : "0";
        }
      );

      // eslint-disable-next-line no-eval
      const result = eval(evaluatedFormula);
      setFormula(result.toString());
    } catch (error) {
      console.error("Error calculating formula:", error);
    }
  };

  const filteredItems = items.map((item) => ({ value: item.name }));

  return (
    <div>
      <Input
        size="large"
        placeholder="Write a formula"
        className="mb-5"
        value={formula}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <Flex gap={10}>
        <AutoComplete
          options={filteredItems}
          onSelect={handleItemSelect}
          placeholder="Type an item name..."
          style={{ width: "40%" }}
        />
        <Space>
          <Button type="primary" onClick={calculateFormula}>
            Calculate
          </Button>
        </Space>
      </Flex>
    </div>
  );
};

export default FormulaInput;
