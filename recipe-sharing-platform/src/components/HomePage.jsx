import React, { useState, useEffect } from "react";
import useData from "../store/useData";
import { Link } from "react-router-dom";
const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const { recipes, updateRecipe } = useData();

  useEffect(() => {
    const fetchRecipe = async () => {
      setLoading(true);
      try {
        const response = await fetch("/data/data.json");
        const data = await response.json();
        console.log("fetch Recipe data successfully:", data);
        updateRecipe(data);
      } catch {
        console.log("Error fetching data");
        setLoading(false);
      } finally {
        console.log("Fetching data completed");
        setLoading(false);
      }
    };
    fetchRecipe()
  }, [updateRecipe]);

  console.log(recipes);
  console.log(updateRecipe);

  if (loading) <>Loading...</>;
  return (
    <div className=" container mx-auto p-4">
      <h1 className="text-2xl text-blue-800 font-extrabold text-center">
        Home page
      </h1>
      <ul className="grid grid-cols-1 gap-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {(recipes || [])?.map((recipe) => (
          <li
            key={recipe?.id}
            className="flex flex-col group p-4 bg-white rounded-lg shadow-2xl "
          >
            <Link to={`/recipe/${recipe?.id}`}>
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
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
