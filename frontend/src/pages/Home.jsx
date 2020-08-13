import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../hooks/useForm';
import FormField from '../components/FormField';
import appLogo from '../assets/logo2.png';
import facebookLogin from '../assets/facebook-login-icon-19.jpg';
import googleLogin from '../assets/btn_google_signin_light_normal_web.png';

const initialState = {
  userName: '',
  password: '',
};

export default function Home() {
  const { clearForm, handleChange } = useForm(initialState);
  return (
    <section>
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
          placeholder="Senha"
          type="text"
          name="password"
          required
          onChange={(event) => handleChange(event)}
        />
        <button type="button">Login</button>
        <Link to="/signup">
          <button type="button">Cadastre-se</button>
        </Link>
      </form>
      <div>
        <input
          type="image"
          src={facebookLogin}
          alt="alternative login with Facebook"
        />
        <input
          type="image"
          src={googleLogin}
          alt="alternative login with Google"
        />
      </div>
    </section>
  );
}
