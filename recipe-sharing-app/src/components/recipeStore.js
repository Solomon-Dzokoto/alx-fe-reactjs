import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => {
      console.log(newRecipe)
      return { recipes: [...state.recipes, newRecipe] }
    }),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe : (newRecipe) => set((state)=>{
    const index = state.recipes.findIndex(recipe => recipe.id === newRecipe?.id);
    if (!index){
       console.log("No available index")
    }
    const updatedRecipes = [...state.recipes];
    updatedRecipes[index] = newRecipe;
    return { recipes: updatedRecipes };
  }),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  }))
}));
