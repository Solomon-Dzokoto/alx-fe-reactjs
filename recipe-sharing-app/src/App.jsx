import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/EditRecipeForm";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <h1>Recipe Book</h1>
        <Routes>
          <Route path="/" element={<AddRecipeForm />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
        </Routes>
        <RecipeList />
      </BrowserRouter>
    </div>
  );
};

export default App;
