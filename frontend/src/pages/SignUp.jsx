import React, { useState } from 'react';
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
  const { clearForm, handleChange } = useForm(initialState);
  return (
    <main>
      <img src={appLogo} alt="I'm Thirsty Logo" />
      <form onSubmit={() => clearForm()}>
        <FormField
          placeholder="Nome"
          type="text"
          name="userName"
          required
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Email"
          type="email"
          name="userEmail"
          required
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Endereço"
          type="text"
          name="userAdress"
          required
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Cidade"
          type="text"
          name="userCity"
          required
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="País"
          type="text"
          name="userCountry"
          required
          onChange={(event) => handleChange(event)}
        />
        <FormField
          type="date"
          name="userBirthday"
          required
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Insira a senha"
          type="password"
          name="password"
          required
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Repita a senha"
          type="password"
          name="password"
          required
          onChange={(event) => handleChange(event)}
        />
        <button type="button">Cadastre-se</button>
        <button type="button" onClick={() => clearForm()}>
          Limpar
        </button>
      </form>
    </main>
  );
}
