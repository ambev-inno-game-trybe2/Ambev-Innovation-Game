import React from 'react';

import Heart from '../images/heart.svg';
import RedHeart from '../images/redheart.svg';
import { getAppThirsty } from '../services/recipesAPI';

const CardRecipeDetails = ({ recipe }) => {
  const { title, description, origin: { state, city }, category, ingredients, preparationMode } = recipe;
  const { liked, image, likedId = [] } = recipe;

  const recipeLiked = likedId.includes('iddousuario');

  return (
    <section className="card-recipe card-recipe-detail">
      <img src={image} alt={`receita ${title}`} />
      <h4>{title}</h4>
      <p>{description}</p>
      {ingredients.map(ingredient => (
        <ul>
          <li>Ingrediente: {ingredient.name}, Quantidade: {ingredient.quantity}</li>
        </ul>
      ))}
      <p>Origem: {city}, {state}</p>
      <p>Categoria: {category}</p>
      <p>Curtidas: {liked}</p>
      <input
        type="image"
        // onClick={() => getAppThirsty('/recipes', 'PATCH', { liked: 1 })}
        src={recipeLiked ? RedHeart : Heart}
        className="favorite-icon"
        />
        <h4><strong>Modo de Preparo: </strong>{preparationMode}</h4>
    </section>
  )
}

export default CardRecipeDetails;
