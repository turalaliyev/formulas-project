import React from "react";
import { useItemStore } from "../store/useItemStore";
import Item from "./Item";

const ItemList: React.FC = () => {
  const { items, updateItem } = useItemStore();

  const handleNameChange = (index: number, name: string) => {
    const item = items[index];
    updateItem(index, { ...item, name });
  };

  const handleValueChange = (index: number, value: number) => {
    const item = items[index];
    updateItem(index, { ...item, value });
  };

  return (
    <div className="mt-8 w-[100%]">
      {items.map((item, index) => (
        <Item
          index={index}
          item={item}
          handleValueChange={handleValueChange}
          handleNameChange={handleNameChange}
        />
      ))}
    </div>
  );
};

export default ItemList;
