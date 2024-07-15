import React from "react";
import AddItemForm from "./components/AddItemForm";
import ItemList from "./components/ItemList";
import FormulaInput from "./components/FormulaInput";
import { Col, Flex, Row } from "antd";
import Title from "antd/es/typography/Title";

const App: React.FC = () => {
  return (
    <div>
      <Flex className="m-4 justify-center text-center">
        <Title level={2}>
          On this small project, you can create an input variables and then use
          them in formula by selecting an item name. It will immediately appear
          in Formula input, and you can manupulate it arithmetically
        </Title>
      </Flex>
      <Row>
        <Col span={8}>
          <Flex vertical className="w-[100%]">
            <div className="p-10">
              <Title level={2}>Inputs</Title>
              <AddItemForm />
              <ItemList />
            </div>
          </Flex>
        </Col>
        <Col span={16}>
          <div className="p-10">
            <Title level={2}>Formulas</Title>
            <FormulaInput />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
