import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipes, setRecipes] = useState([]);

  console.log("Use Params ID:", id);
  const fetchRecipe = async () => {
    try {
      const response = await fetch("/data.json");
      const data = await response.json();
      setRecipes(data);
    } catch {
      console.log("Error fetching data");
    } finally {
      console.log("Fetching data completed");
    }
  };
  useEffect(() => {
    fetchRecipe();
  }, []);

  const recipe = recipes.find((recipe) => recipe?.id === parseInt(id));
  console.log("Recipe:", recipe);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-blue-800 font-extrabold text-center">
        Recipe Detail
      </h1>
      <div
        key={recipe?.id}
        className="flex flex-col w-[60%] mx-auto group p-4 bg-white rounded-lg shadow-2xl "
      >
        <div className="rounded-lg overflow-hidden">
          <img
            className="group-hover:scale-[1.1]   transition-scale duration-200 overflow-hidden"
            src={recipe?.image}
            alt={recipe?.title}
          />
        </div>
        <div className="">
          <h2 className="text-xl text-gray-950 font-bold">{recipe?.title}</h2>
          <p className="">{recipe?.summary}</p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-8 w--[80%] mx-auto justify-between">
        <ul>
          <h1 className="text-xl text-center mb-6 text-blue-800 font-bold ">
            {" "}
            Ingredients
          </h1>
          {recipe?.ingredients?.map((ingredient, index) => (
            <li className=" list-disc " key={index}>
              {ingredient?.name}-{ingredient?.quantity}
            </li>
          ))}
        </ul>
        <ul>
          <h1 className="text-xl text-center mb-6 text-blue-800 font-bold ">
            {" "}
            Instructions
          </h1>

          {recipe?.instructions?.map((direction, index) => (
            <li className=" list-disc " key={index}>
              {direction}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
