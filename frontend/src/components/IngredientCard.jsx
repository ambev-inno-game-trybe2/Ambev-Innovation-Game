import React from 'react';
import PropTypes from 'prop-types';

const IngredientCard = ({ ingredient }) => {
  return (
    <div>
      <h4>{ingredient.name}</h4>
      {ingredient.alternative_names.map((altName) => (
        <p key={altName}>{altName}</p>
      ))}
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
