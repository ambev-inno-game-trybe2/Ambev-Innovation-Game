import React from 'react';
import PropTypes from 'prop-types';

const IngredientCard = ({ ingredient }) => {
  return (
    <div>
      <h4>{ingredient.name}</h4>
      {ingredient.nickname.map((nick) => (
        <p key={nick}>{nick}</p>
      ))}
      <p>`Liked for: ${ingredient.liked}`</p>
    </div>
  );
};

IngredientCard.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string,
    alternative_names: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default IngredientCard;