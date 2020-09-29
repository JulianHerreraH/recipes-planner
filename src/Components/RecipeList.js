import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import NewRecipeForm from "./NewRecipeForm";
import RecipeCard from './RecipeCard'

const onDragOver = (evt) => {
  evt.preventDefault();
};

const RenderDayArticle = ({ day, total }) => {
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.cardLight : context.cardDark;
  return (
    <article className={`box ${theme} all-rounded has-text-centered`}>
      <div className="is-size-5-tablet is-uppercase">{day}
      
      <span className="tag is-rounded is-small is-danger mx-1">{total}</span>
      </div>
    </article>
  );
};

const RenderColumn = ({ day, recipes, removeRecipe }) => {
  return (
    <div className={`tile is-parent is-vertical  droppable`}>
      <RenderDayArticle day={day} key={day} total={recipes.length} />
      {recipes.map(recipe => (
        <RecipeCard
          recipe={recipe}
          removeRecipe={removeRecipe}
          key={recipe.id}
        />
      ))}
    </div>
  );
};

function RecipeList() {
  const [recipes, setRecipes] = useState([
    {
      id: 0,
      title: "Arroz con pollo",
      ingredients: ["arroz", "pollo"],
      steps: ["herviri pollo", "cocinar arroz"],
      day: "Sunday",
    },
    {
      id: 1,
      title: "Pizza",
      ingredients: [],
      steps: [],
      day: "Monday",
    },
    {
      id: 2,
      title: "Bucatini carbonara y ensalada",
      ingredients: ["bucatini", "parmesano", "cerdo", "huevos"],
      steps: ["ver video", "ver receta aderezo", "2", "3", "4"],
      day: "Tuesday",
    },
    {
      id: 3,
      title: "Tortas de atun",
      ingredients: ["atun", "papa"],
      steps: ["ver receta", "calentar frijol"],
      day: "Wednesday",
    },
    {
      id: 4,
      title: "Pollo a la matequilla",
      ingredients: ["arroz", "pollo"],
      steps: ["herviri pollo", "cocinar arroz"],
      day: "Thursday",
    },
    {
      id: 5,
      title: "Tornillos vegetarianos",
      ingredients: ["arroz", "pollo"],
      steps: ["herviri pollo", "cocinar arroz"],
      day: "Friday",
    },
    {
      id: 6,
      title: "Pensar",
      ingredients: ["arroz", "pollo"],
      steps: ["herviri pollo", "cocinar arroz"],
      day: "Saturday",
    },
    {
      id: 7,
      title: "Tornillos vegetarianos",
      ingredients: ["arroz", "pollo"],
      steps: ["herviri pollo", "cocinar arroz"],
      day: "Tuesday",
    },
  ]);
  const [days] = useState([
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]);
  const [isModalOpen, setModal] = useState(false)
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? "main-content" : "main-content-dark";

  const onDrop = (evt, day) => {
    console.log(recipes);
    let recipeId = evt.dataTransfer.getData("id");
    let recipesN = recipes.filter((recipe) => {
      if (recipe.id === parseInt(recipeId)) {
        recipe.day = day;
      }
      return recipe;
    });
    setRecipes([...recipesN]);
  };

  const addRecipe = (recipe) => {
    const id = recipes.length 
    setRecipes(prevState => ([...prevState, {...recipe, id}]));
  }

  const removeRecipe = (id) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  return (
    <>
      <NewRecipeForm
        isModalOpen={isModalOpen}
        setModal={setModal}
        days={days}
        addRecipe={addRecipe}
      />
      <div className={`tile is-ancestor mt-3 ${theme}`}>
        {days.map(day => {
          const dayRecipes = recipes.filter(recipe => recipe.day === day);
          return (
            <div
              onDragOver={e => onDragOver(e)}
              onDrop={e => onDrop(e, day)}
              key={day}
              className="flipped"
            >
              <RenderColumn 
                day={day} 
                recipes={dayRecipes} 
                removeRecipe={removeRecipe}
              />
            </div>
          );
        })}
      </div>
      <button
        onClick={() => setModal(!isModalOpen)}
        className={`button is-danger is-rounded is-medium floating`}
      >
        New
      </button>
    </>
  );
  
}

export default RecipeList;
