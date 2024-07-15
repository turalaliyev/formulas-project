import React, { useState } from "react";
import { useItemStore } from "../store/useItemStore";
import { Button, Flex, Input } from "antd";

const AddItemForm: React.FC = () => {
  const [name, setName] = useState("");
  const [value, setValue] = useState<number | "">("");
  const addItem = useItemStore((state) => state.addItem);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && value !== "") {
      addItem({ name, value: Number(value) });
      setName("");
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap={6}>
        <Flex vertical gap={15}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="number"
            placeholder="Value"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            required
          />
        </Flex>
        <Button className="h-20" type="primary" htmlType="submit">
          Add
        </Button>
      </Flex>
    </form>
  );
};

export default AddItemForm;
