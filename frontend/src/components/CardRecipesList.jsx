import React from 'react';
import { Link } from 'react-router-dom';

function CardRecipesList({ recipes }) {
  const { _id: id, title, origin: { state, city }, category, liked, image, ingredients } = recipes;

  return (
    <Link to={`/recipes/${id}`}>
      <section className="CardOrder card">
        <img src={image} alt={`receita ${title}`} />
        <p>{title}</p>
        <p>Origem: {city}, {state}</p>
        <p>Categoria: {category}</p>
        <p>Curtidas: {liked}</p>
        {/* {ingredients.map(ingredient => (
        <div>
          <h5>{ingredient.title}</h5>
          <h5>{ingredient.quantity}</h5>
        </div>
      ))} */}
      </section>
    </Link>
  );
};

export default CardRecipesList;
