import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import UserPreferences from './pages/UserPreferences';

function App() {
  return (
    <Container as="main" fluid>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user_preferences" component={UserPreferences} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
