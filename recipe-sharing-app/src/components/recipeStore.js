import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filteredRecipes: [],
  filterRecipes:()=>set(state=>({
    filteredRecipes: state.recipes.filter(recipe => recipe.name.toLowerCase().includes(state.searchTerm.toLowerCase()))
  })),
  addRecipe: (newRecipe) =>
    set((state) => {
      console.log(newRecipe)
      const added = [...state.recipes, newRecipe]
      console.log(added)
      return { recipes: added }
    }),
  setRecipes: (recipes) => set({ recipes }),
  updateRecipe : (newRecipe) => set((state)=>{
    const index = state.recipes.findIndex(recipe => recipe.id === newRecipe?.id);
    if (index===-1){
       console.log("No available index")
    }
    console.log(index)
    const updatedRecipes = [...state.recipes];
    updatedRecipes[index] = newRecipe;
    console.log(updatedRecipes)
    return { recipes: updatedRecipes };
  }),
  deleteRecipe: (id) => set((state) => {{
    const eliminate = state.recipes.filter(recipe => recipe.id !== id)
   return { recipes: [...eliminate]}
  }})
}));
