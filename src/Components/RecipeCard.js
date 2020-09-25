
import React from 'react';

const onDragStart = (evt, id) => {
  console.log('dragstart: ', id);
  evt.dataTransfer.setData('id', id); // Set the recipe ID for the drag event
};

function RecipeCard ({ recipe, context }) {
  const theme = context.isLightTheme ? context.cardLight : context.cardDark;
  const titleColor = context.isLightTheme
    ? 'has-text-grey-dark'
    : 'has-text-white';

  return (
    <div
      className={`${theme} card tile is-child all-rounded my-2 recipe draggable`}
      draggable
      onDragStart={e => onDragStart(e, recipe.id)}
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

export default RecipeCard;
