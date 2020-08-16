import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import useForm from '../hooks/useForm';
import FormField from '../components/FormField';
import CardCadastreRecipe from '../components/CardCadastreRecipe';

function CadastreRecipe() {
  return (
    <Container as="section" className="main" fluid>
      <CardCadastreRecipe />
      <Link to="/signup">
        <button type="button">Cadastre-se</button>
      </Link>
    </Container>
  );
}

export default CadastreRecipe;
