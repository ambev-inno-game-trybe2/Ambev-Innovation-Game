import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import useForm from '../hooks/useForm';
import FormField from '../components/FormField';
import appLogo from '../assets/logo2.png';

const initialState = {
  userName: '',
  userEmail: '',
  userAdress: '',
  userCity: '',
  userCountry: '',
  userBirthday: '',
  password: '',
};

export default function SignUp() {
  const [redirect, setRedirect] = useState(false);
  const { values, clearForm, handleChange } = useForm(initialState);

  if (redirect) return <Redirect to="/user_preferences" />;

  return (
    <Container as="section" className="main" fluid>
      <Image src={appLogo} alt="I'm Thirsty Logo" fluid />
      <Form onSubmit={() => setRedirect(!redirect)}>
        <FormField
          placeholder="Nome"
          type="text"
          name="userName"
          required
          value={values.userName}
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Email"
          type="email"
          name="userEmail"
          required
          value={values.userEmail}
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Endereço"
          type="text"
          name="userAdress"
          required
          value={values.userAdress}
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Cidade"
          type="text"
          name="userCity"
          required
          value={values.userCity}
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="País"
          type="text"
          name="userCountry"
          required
          value={values.userCountry}
          onChange={(event) => handleChange(event)}
        />
        <FormField
          type="date"
          name="userBirthday"
          required
          value={values.userBirthday}
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Insira a senha"
          type="password"
          name="password"
          required
          value={values.password}
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Repita a senha"
          type="password"
          name="password"
          required
          value={values.password}
          onChange={(event) => handleChange(event)}
        />
        <button type="button">Cadastre-se</button>
        <button type="button" onClick={() => clearForm()}>
          Limpar
        </button>
      </Form>
    </Container>
  );
}
