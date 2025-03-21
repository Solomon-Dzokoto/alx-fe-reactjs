import { create } from "zustand";

const useData = create((set) => ({
  recipes: [],
  updataRecipe: (newRecipe) =>
    set((state) => ({ data: [...state.data, newRecipe] })),
}));

export default useData;
