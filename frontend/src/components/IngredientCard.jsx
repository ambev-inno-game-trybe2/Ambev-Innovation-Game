import React from 'react';
import PropTypes from 'prop-types';
import '../styles/IngredientCard.css';

const IngredientCard = ({ ingredient }) => {
  return (
    <div className="ingredient-card">
      <h4>{ingredient.name}</h4>
      {ingredient.nickname.map((nick) => (
        <p key={nick}>{nick}</p>
      ))}
      <p>Liked for: {ingredient.liked}</p>
    </div>
  );
};

IngredientCard.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string,
    nickname: PropTypes.arrayOf(PropTypes.string),
    liked: PropTypes.string,
  }).isRequired,
};

export default IngredientCard;
