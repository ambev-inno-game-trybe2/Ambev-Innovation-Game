import React from 'react';
import PropTypes from 'prop-types';
import IngredientCard from '../components/IngredientCard';

export default function UserPreferences({ ingredients }) {
  return <section>
    <h1>Escolha 5 ingredientes</h1>
    {ingredients.map((ingredient) => (
      <IngredientCard key={ingredient.name} ingredient={ingredient} />
    ))}
    <button type="button">Finalizar</button>
  </section>;
}
