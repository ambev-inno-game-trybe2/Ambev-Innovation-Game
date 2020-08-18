import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import { getUser } from '../services/recipesAPI';
import CardRegisterRecipe from '../components/CardRegisterRecipe';

function CadastreRecipe() {
  // if (!getUser()) return <Redirect to="/login" />

  return (
    <Container as="section" className="main" fluid>
      <CardRegisterRecipe />
      <Link to="/signup">
        <button type="button">Cadastre-se</button>
      </Link>
    </Container>
  );
}

export default CadastreRecipe;
