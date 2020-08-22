import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import IngredientCard from '../components/IngredientCard';
import InfoModal from '../components/InfoModal';
import { ingredientesMock as ingredients } from '../mock/mockTables';

const text = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque voluptates id iste nemo distinctio error recusandae perspiciatis molestias minus possimus iure vel aliquam, blanditiis provident voluptatem, voluptatum consequuntur voluptas laudantium?`;

export default function UserPreferences() {
  const [showModal, setShowModal] = useState(true);
  return (
    <section>
      <InfoModal
        show={showModal}
        text={text}
        onHide={() => setShowModal(!showModal)}
      />
      <h1>Escolha 5 ingredientes</h1>
      <Container fluid>
        {' '}
        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.name} ingredient={ingredient} />
        ))}
        <Button variant="secondary" value="Pular" />
        <Button variant="secondary" value="Finalizar" />
      </Container>
    </section>
  );
}
