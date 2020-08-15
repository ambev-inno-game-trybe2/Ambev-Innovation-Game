import React from 'react';
import { Link } from 'react-router-dom';

function CardRecipesList({ recipes }) {
  const { _id: id, name, origin: { state, city }, category, liked, image, ingredients } = recipes;

  return (
    <Link to={`/recipes/${id}`}>
      <section className="CardOrder card">
        <img src={image} alt={`receita ${name}`} />
        <p>{name}</p>
        <p>Origem: {city}, {state}</p>
        <p>Categoria: {category}</p>
        <p>Curtidas: {liked}</p>
        {/* <ul>Ingredientes: {ingredients.map(({ _id }) => functionRequisiçãoDosingredites(_id))}</ul> */}
      </section>
    </Link>
  );
};

export default CardRecipesList;
