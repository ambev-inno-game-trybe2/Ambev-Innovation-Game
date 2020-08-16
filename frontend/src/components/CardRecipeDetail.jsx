import React from 'react';

import Heart from '../images/heart.svg';
import RedHeart from '../images/redheart.svg';
import { getAppThirsty } from '../services/recipesAPI';
import '../styles/cardRecipeDetail.css';

const CardRecipeDetails = ({ recipe }) => {
  const { title, description, origin: { state, city }, category, ingredients, preparationMode } = recipe;
  const { liked, image, likedId = [] } = recipe;

  const recipeLiked = likedId.includes('iddousuario');

  return (
    <section>
      <img src={image} alt={`receita ${title}`} />
      <h4>{title}</h4>
      <p>{description}</p>
      {ingredients.map(ingredient => (
        <ul>
          <li>{ingredient.title}</li>
          <li>{ingredient.quantity}</li>
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
        <h4>Modo de Preparo: {preparationMode}</h4>
    </section>
  )
}

export default CardRecipeDetails;
