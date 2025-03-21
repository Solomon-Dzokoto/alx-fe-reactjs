import React, { useState } from "react";
import data from "/data/data.json?url";
import { useNavigate } from "react-router-dom";
import useData from "../store/useData";

const AddRecipeForm = () => {
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const updateRecipe = useData((state) => state.updateRecipe);
  const [errors, setErrors] = useState("");
  const navigate = useNavigate();

  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors("");
    try {
      if (!name || !ingredients || !steps) {
        setErrors("Please fill all the fields");
        return;
      }
      const validate = ingredients.split(" ").length < 2;
      if (validate) {
        setErrors("Please add at least two ingredients");
        return;
      }
      updateRecipe({
        id: data.length + 1,
        title: name,
        ingredients,
        steps,
      });
      setErrors("recipe added  successfully");
      setErrors("");
      setIngredients("");
      setSteps("");
      setName("");
      navigate("/");
    } catch (err) {
      console.log("Errors adding data", err);
      setErrors("Errors adding data");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-xl text-blue-600 text-center font-bold mb-6">
        Add your Recipe steps
      </h1>
      {errors && <p className="text-red-700 text-center ">{errors}</p>}
      <form
        className="md:w-1/2 w-[80%] mx-auto space-y-4 bg-white rounded-3xl shadow-2xl p-8 "
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
        <label className="block">Steps or steps to take:</label>
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
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
