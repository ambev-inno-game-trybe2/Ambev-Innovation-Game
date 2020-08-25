import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card'
import '../styles/IngredientCard.css';

const IngredientCard = ({ ingredient }) => {
  return (
    <Card border="secondary" className="ingredient-card" bg="light">
      <Card.Body>
        <Card.Title>{ingredient.name}</Card.Title>
        {ingredient.nickname.map((nick) => (
          <Card.Text key={nick}>{nick}</Card.Text>
        ))}
        <Card.Text>Liked for: {ingredient.liked}</Card.Text>
      </Card.Body>
    </Card>
  );
};

IngredientCard.propTypes = {
  ingredient: PropTypes.shape({
    name: PropTypes.string,
    nickname: PropTypes.arrayOf(PropTypes.string),
    liked: PropTypes.number,
  }).isRequired,
};

export default IngredientCard;
