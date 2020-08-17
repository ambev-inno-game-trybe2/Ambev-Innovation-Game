import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import useForm from '../hooks/useForm';
import FormField from '../components/FormField';
import appLogo from '../assets/logo2.png';
import facebookLogin from '../assets/facebook-login-icon-19.jpg';
import googleLogin from '../assets/btn_google_signin_light_normal_web.png';
import '../styles/background.css';

const initialState = {
  userName: '',
  password: '',
};

export default function Home() {
  const { values, clearForm, handleChange } = useForm(initialState);
  return (
    <Container as="section" className="main" fluid>
      <Image src={appLogo} alt="I'm Thirsty Logo" fluid />
      <Form onSubmit={() => clearForm()}>
        <FormField
          placeholder="Nome"
          type="text"
          name="userName"
          value={values.userName}
          required
          onChange={(event) => handleChange(event)}
        />
        <FormField
          placeholder="Senha"
          type="password"
          name="password"
          value={values.password}
          required
          onChange={(event) => handleChange(event)}
        />
        <button type="button">Login</button>
        <Link to="/signup">
          <button type="button">Cadastre-se</button>
        </Link>
      </Form>
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
    </Container>
  );
}
