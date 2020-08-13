import React from 'react';
import FormField from '../components/FormField';
import appLogo from '../assets/logo2.png';

export default function SignUp() {
  return (
    <main>
      <img src={appLogo} alt="I'm Thirsty Logo" />
      <form>
        <FormField placeholder="Nome" type="text" name="userName" required />
        <FormField placeholder="Email" type="email" name="userEmail" required />
        <FormField
          placeholder="Endereço"
          type="text"
          name="userAdress"
          required
        />
        <FormField placeholder="Cidade" type="text" name="userCity" required />
        <FormField placeholder="País" type="text" name="userCountry" required />
        <FormField type="date" name="birthday" required />
        <FormField
          placeholder="Insira a senha"
          type="password"
          name="password"
          required
        />
        <FormField
          placeholder="Repita a senha"
          type="password"
          name="password"
          required
        />
        <button type="button">Cadastre-se</button>
      </form>
    </main>
  );
}
