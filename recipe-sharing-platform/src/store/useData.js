import { create } from "zustand";

const useData = create((set) => ({
  recipes: [],
  updateRecipe: (newRecipe) => set(({ recipes: newRecipe })),
  addRecipe:(newRecipe)=>set((state)=>({recipes:[...state.recipes,newRecipe]}))
}));

export default useData;
