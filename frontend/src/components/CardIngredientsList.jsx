import React from 'react';
import { Link } from 'react-router-dom';

function CardIngredientsList({ ingredients }) {
  const { name, liked, image, nickname } = ingredients;

  return (
    <section className="CardOrder card">
      <img src={image} alt={`ingredient ${name}`} />
      <p>{name}</p>
      <p>Curtidas: {liked}</p>
    </section>
  );
};

export default CardIngredientsList;
