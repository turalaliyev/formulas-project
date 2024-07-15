import { Button, Card, Flex, Input } from "antd";
import Title from "antd/es/typography/Title";
import React, { useState } from "react";
import { useItemStore } from "../store/useItemStore";

interface ItemType {
  index: number;
  item: any;
  handleValueChange: (index: number, value: number) => void;
  handleNameChange: (index: number, value: string) => void;
}

const Item = ({
  index,
  item,
  handleValueChange,
  handleNameChange,
}: ItemType) => {
  const [edit, setEdit] = useState(false);
  const deleteItem = useItemStore((state) => state.deleteItem);

  return (
    <div className="w-[100%] mb-3">
      <Card>
        <div>
          {!edit && (
            <div>
              <Title level={4}>
                {item.name} {`(${item.value})`}
              </Title>
            </div>
          )}
          {edit && (
            <div key={index}>
              <Input
                type="text"
                value={item.name}
                onChange={(e) => handleNameChange(index, e.target.value)}
              />
              <Input
                type="number"
                value={item.value}
                onChange={(e) =>
                  handleValueChange(index, Number(e.target.value))
                }
              />
            </div>
          )}
        </div>
        <Flex gap={6}>
          <Button type="primary" onClick={() => setEdit(!edit)}>
            {edit ? "Save" : "Edit"}
          </Button>
          <Button
            className="bg-red-700 text-white"
            onClick={() => deleteItem(index)}
          >
            Delete
          </Button>
        </Flex>
      </Card>
    </div>
  );
};

export default Item;
