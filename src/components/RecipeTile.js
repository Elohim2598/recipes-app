import React from 'react';

export default function RecipeTile({ recipe }) {
  return (
    //recipe.recipe.image.match(/\.(jpeg|jpg|gif|png)$/) != null && (
    <div className="recipeTile-container">
      <div className="recipeTile">
        <img
          className="image"
          src={recipe.recipe.image}
          alt={recipe.recipe.label}
        />

        <h2 className="recipe-title">{recipe.recipe.label}</h2>
        <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
          See full recipe
        </a>

        <p className="cal">
          Calories: {Math.floor(recipe.recipe.calories)} cal
        </p>
        <ul className="ingredients">
          {recipe.recipe.ingredients.map((ingredient, index) => (
            <li className="ingredient" key={index}>
              {ingredient.text}.
            </li>
          ))}
        </ul>
      </div>
    </div>
    //)
  );
}
