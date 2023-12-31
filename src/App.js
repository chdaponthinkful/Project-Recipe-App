import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.


  const createRecipes = (newRecipe) =>{
    setRecipes((prevRecipes) => [...prevRecipes, newRecipe]);
  };
  

   
  const deleteRecipes = (indexToDelete) => {
  console.log(indexToDelete)
    setRecipes((currentRecipes) =>
      currentRecipes.filter((recipe, index) => index !== indexToDelete)
              )
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList 
        recipes={recipes}
        deleteRecipes={deleteRecipes}
        />
      <RecipeCreate createRecipes={createRecipes}/>
    </div>
  );
}

export default App;
