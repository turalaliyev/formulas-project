import create from "zustand";

type FormulaState = {
  formula: string;
  input: string;
  setFormula: (formula: string) => void;
  setInput: (input: string) => void;
};

export const useFormulaStore = create<FormulaState>((set) => ({
  formula: "",
  input: "",
  setFormula: (formula) => set({ formula }),
  setInput: (input) => set({ input }),
}));
