import React from 'react';
import { Link } from 'react-router-dom';
import FormField from '../components/FormField';
import appLogo from '../assets/logo2.png';
import facebookLogin from '../assets/facebook-login-icon-19.jpg';
import googleLogin from '../assets/btn_google_signin_light_normal_web.png';

export default function Home() {
  return (
    <section>
      <img src={appLogo} alt="I'm Thirsty Logo" />
      <form>
        <FormField placeholder="Nome" type="text" name="userName" required />
        <FormField placeholder="Senha" type="text" name="password" required />
        <button type="button">Login</button>
        <Link to="/signup">
          <button type="button">Cadastre-se</button>
        </Link>
      </form>
      <div>
        <img src={facebookLogin} alt="alternative login with Facebook" />
        <img src={googleLogin} alt="alternative login with Google" />
      </div>
    </section>
  );
}
