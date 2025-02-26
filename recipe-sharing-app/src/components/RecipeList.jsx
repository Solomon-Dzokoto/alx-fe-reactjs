import { useRecipeStore } from "./recipeStore";
import { Link } from "react-router-dom";

const RecipeList = () => {


  const recipes = useRecipeStore((state) => state.recipes);


  return (
    <div className="bg-white/60 mt-4 w-full space-y-2 rounded">
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/details/${recipe.id}`}>
            <button>Edit</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
