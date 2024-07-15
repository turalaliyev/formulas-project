import create from "zustand";

type Item = {
  name: string;
  value: number;
};

type ItemState = {
  items: Item[];
  queryInput: string;
  formulaInput: string;
  addItem: (item: Item) => void;
  updateItem: (index: number, item: Item) => void;
  deleteItem: (index: number) => void;
  setQueryInput: (input: string) => void;
  setFormulaInput: (input: string) => void;
};

export const useItemStore = create<ItemState>((set) => ({
  items: [],
  queryInput: "",
  formulaInput: "",
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  deleteItem: (index) =>
    set((state) => {
      const newItems = state.items.filter((_, i) => i !== index);
      return { items: newItems };
    }),
  updateItem: (index, item) =>
    set((state) => {
      const newItems = [...state.items];
      newItems[index] = item;
      return { items: newItems };
    }),
  setQueryInput: (input) => set({ queryInput: input }),
  setFormulaInput: (input) => set({ formulaInput: input }),
}));
