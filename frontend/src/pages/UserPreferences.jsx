import React, { useState } from 'react';
import PropTypes from 'prop-types';
import IngredientCard from '../components/IngredientCard';
import InfoModal from '../components/InfoModal';

const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque voluptates id iste nemo distinctio error recusandae perspiciatis molestias minus possimus iure vel aliquam, blanditiis provident voluptatem, voluptatum consequuntur voluptas laudantium?`;

export default function UserPreferences({ ingredients }) {
  const [showModal, setShowModal] = useState(true);
  return (
    <section>
      <InfoModal
        show={showModal}
        text={text}
        onHide={() => setShowModal(!showModal)}
      />
      <h1>Escolha 5 ingredientes</h1>
      {ingredients.map((ingredient) => (
        <IngredientCard key={ingredient.name} ingredient={ingredient} />
      ))}
      <button type="button">Pular</button>
      <button type="button">Finalizar</button>
    </section>
  );
}

UserPreferences.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.obj).isRequired,
};
