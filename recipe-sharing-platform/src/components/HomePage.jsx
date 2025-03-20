import React, { useState, useEffect } from "react";
import data from "../data";
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  const fetchRecipe = async () => {
    setLoading(true);
    try {
      const response = await fetch("/data.json");
      const data = await response.json();
      console.log(data);
      setRecipes(data);
      setLoading(false);
    } catch {
      console.log("Error fetching data");
      setError("Error fetching data");
      setLoading(false);
    } finally {
      console.log("Fetching data completed");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchRecipe();
  }, []);

  return (
    <div className=" container mx-auto p-4">
      <h1>Home page</h1>
      <ul className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
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
              <h2 className="text-xl text-gray-950 font-bold">
                {recipe?.title}
              </h2>
              <p className="">{recipe?.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
