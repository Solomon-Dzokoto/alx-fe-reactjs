import React, { useState } from "react";
import data from "/data/data.json?url";
import { useNavigate } from "react-router-dom";
import useData from "../store/useData";

const AddRecipeForm = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparations, setPreparations] = useState("");
  const updateRecipe = useData((state) => state.updateRecipe);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!name || !ingredients || !preparations) {
        setError("Please fill all the fields");
        return;
      }
      if (ingredients.split(" ").length < 2) {
        setError("Please add at least two ingredients");
        return;
      }
      updateRecipe({
        id: data.length + 1,
        title: name,
        ingredients,
        preparations,
      });
      setError("recipe added  successfully");
      setError("");
      setIngredients("");
      setPreparations("");
      setName("");
      navigate("/");
    } catch (err) {
      console.log("Error adding data", err);
      setError("Error adding data");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-xl text-blue-600 text-center font-bold mb-6">
        Add your Recipe Preparations
      </h1>
      {error && <p className="text-red-700 text-center ">{error}</p>}
      <form
        className="w-1/2 mx-auto space-y-4 bg-white rounded-3xl shadow-2xl p-8 "
        onSubmit={handleSubmit}
      >
        <label className="block">Recipe Name:</label>
        <input
          placeholder="Add your title of recipe"
          className=" border-2 w-full p-2 rounded-2xl mt-2 "
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
        />
        <label className="block">Ingredients:</label>
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Add your ingredients"
          className="w-full border-2 p-2 rounded-2xl mt-2  h-[8rem]"
        />
        <label className="block">Steps or Preparations to take:</label>
        <textarea
          value={preparations}
          onChange={(e) => setPreparations(e.target.value)}
          className="w-full border-2 p-2 rounded-2xl mt-2  h-[8rem]"
        />
        <button
          className="bg-blue-600 text-white p-2 rounded-2xl"
          type="submit"
        >
          Add your Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
