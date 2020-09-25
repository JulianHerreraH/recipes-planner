import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import NewRecipeForm from "./NewRecipeForm";

const onDragOver = (evt) => {
  evt.preventDefault();
};

const onDragStart = (evt, id) => {
  console.log("dragstart: ", id);
  evt.dataTransfer.setData("id", id); // Set the recipe ID for the drag event
};

const RenderRecipeCard = ({ recipe, context }) => {
  const theme = context.isLightTheme ? context.cardLight : context.cardDark;
  const titleColor = context.isLightTheme
    ? "has-text-grey-dark"
    : "has-text-white";

  return (
    <div
      className={`${theme} card tile is-child all-rounded my-2 recipe draggable`}
      draggable
      onDragStart={(e) => onDragStart(e, recipe.id)}
    >
      <header className="card-header">
        <p className={` ${titleColor} card-header-title`}>{recipe.title}</p>
        <button className="button is-danger is-small is-rounded mt-2 mx-2">
          ♥
        </button>
      </header>
      <div className="card-content">
        <div className="content">
          <p className="is-size-6 is-uppercase has-text-weight-semibold">
            Ingredients
          </p>
          <ul>
            {recipe.ingredients.map((ing, ndx) => {
              return <li key={ndx}>{ing}</li>;
            })}
          </ul>
          <hr></hr>
          <p className="is-size-6 is-uppercase has-text-weight-semibold">
            Steps
          </p>
          <ol>
            {recipe.steps.map((ing, ndx) => {
              return <li key={ndx}>{ing}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

const RenderDayArticle = ({ context, day }) => {
  const theme = context.isLightTheme ? context.cardLight : context.cardDark;
  return (
    <article className={`box ${theme} all-rounded has-text-centered`}>
      <p className="is-size-5-tablet is-uppercase">{day}</p>
    </article>
  );
};

const RenderColumn = ({ day, recipes, context }) => {
  return (
    <div className={`tile is-parent is-vertical  droppable`}>
      <RenderDayArticle context={context} day={day} key={day} />
      {recipes.map((recipe) => (
        <RenderRecipeCard recipe={recipe} context={context} key={recipe.id} />
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
              <RenderColumn day={day} recipes={dayRecipes} context={context} />
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
