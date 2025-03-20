import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = data.find((recipe) => recipe.id === parseInt(id));
  console.log(id);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl text-blue-800 font-extrabold text-center">
        Recipe Detail
      </h1>
      <li
        key={recipe.id}
        className="flex flex-col group p-4 bg-white rounded-lg shadow-2xl "
      >
        <img
          className="p-4 group-hover:scale-[1.1]   transition-scale duration-200 overflow-hidden"
          src={recipe?.image}
          alt={recipe?.title}
        />
        <div className="">
          <h2 className="text-xl text-gray-950 font-bold">{recipe?.title}</h2>
          <p className="">{recipe?.summary}</p>
        </div>
      </li>
    </div>
  );
};

export default RecipeDetail;
