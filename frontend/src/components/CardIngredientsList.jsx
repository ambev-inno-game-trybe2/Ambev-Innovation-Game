import React from 'react';
import { Link } from 'react-router-dom';

function CardIngredientsList({ ingredients }) {
  const { _id: id, name, liked, image, nickname } = ingredients;

  return (
    <Link to={`/ingredients/${id}`}>
      <section className="CardOrder card">
        <img src={image} alt={`ingredient ${name}`} />
        <p>{name}</p>
        <p>Curtidas: {liked}</p>
      </section>
    </Link>
  );
};

export default CardIngredientsList;
