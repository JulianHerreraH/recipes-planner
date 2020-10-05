import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const onDragStart = (evt, id) => {
  console.log('dragstart: ', id);
  evt.dataTransfer.setData('id', id); // Set the recipe ID for the drag event
};

function RecipeCard({ recipe, removeRecipe, favRecipe }) {
  const context = useContext(ThemeContext);
  const theme = context.isLightTheme ? context.cardLight : context.cardDark;
  const titleColor = context.isLightTheme
    ? 'has-text-grey-dark'
    : 'has-text-white';

  const favColor = recipe.isFav ? 'is-danger' : 'is-danger is-light';

  const deleteRecipe = e => {
    e.preventDefault();
    removeRecipe(recipe.id);
  };

  const favoriteRecipe = e => {
    e.preventDefault();
    favRecipe(recipe.id);
  };

  return (
    <div
      className={`${theme} card is-child all-rounded my-2 recipe draggable`}
      draggable
      onDragStart={e => onDragStart(e, recipe.id)}
    >
      <header className="card-header">
        <p className={` ${titleColor} card-header-title`}>{recipe.title}</p>
        <button
          className={`button ${favColor} is-small is-rounded mt-2 mx-2`}
          onClick={favoriteRecipe}
        >
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
        <button
          className="button is-warning is-small is-rounded mt-2 mx-2"
          onClick={deleteRecipe}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
