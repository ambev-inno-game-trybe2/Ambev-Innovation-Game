import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import useForm from '../hooks/useForm';
import FormField from '../components/FormField';
import appLogo from '../assets/logo2.png';
import facebookLogin from '../assets/facebook-login-icon-19.jpg';
import googleLogin from '../assets/btn_google_signin_light_normal_web.png';
import '../styles/Login.css';

const initialState = {
  userName: '',
  password: '',
};

export default function Login() {
  const { values, clearForm, handleChange } = useForm(initialState);
  return (
    <Container as="section" fluid>
      <Image src={appLogo} alt="I'm Thirsty Logo" fluid className="logo" />
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
        <div className="button-container">
          <Button
            as="input"
            variant="secondary"
            type="submit"
            value="Login"
            className="login-button"
          />
          <Link to="/signup">
            <Button variant="secondary" className="login-button">
              Cadastre-se
            </Button>
          </Link>
        </div>
      </Form>
      <div className="button-container">
        <input
          className="login-button"
          type="image"
          src={facebookLogin}
          alt="alternative login with Facebook"
        />
        <input
          className="login-button"
          type="image"
          src={googleLogin}
          alt="alternative login with Google"
        />
      </div>
    </Container>
  );
}
