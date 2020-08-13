import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <section>
      <h4>{recipe.name}</h4>
      {recipe.ingredient.map(ingredient => (
        <div>
          <h5>{ingredient.name}</h5>
          <h5>{ingredient.quantity}</h5>
        </div>
      ))}
      <h4>Modo de Preparo: {recipe.prepareMode}</h4>
      <button type="button">Curtir Receita</button>
    </section>
  )
}

export default RecipeDetails;
