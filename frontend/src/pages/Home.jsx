import React from 'react';
import FormField from '../components/FormField';
import appLogo from '../assets/logo1.png';
import facebookLogin from '../assets/facebook-login-icon-19.jpg';
import googleLogin from '../assets/btn_google_signin_light_normal_web.png';

export default function Home() {
  return (
    <main>
      <img src={appLogo} alt="I'm Thirsty Logo" />
      <FormField
        placeholder="Insira seu nome"
        type="text"
        name="userName"
        required
      />
      <FormField
        placeholder="Insira sua senha"
        type="text"
        name="password"
        required
      />
      <button type="button">Login</button>
      <img src={facebookLogin} alt="alternative login with Facebook" />
      <img src={googleLogin} alt="alternative login with Google" />
    </main>
  );
}
