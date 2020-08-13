import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

function App() {
  return (
    <main className="App text-center">
      <Switch>
        <Route exact path="/">
          {Home}
        </Route>
        <Route path="/signup">{SignUp}</Route>
        <Route>{NotFound}</Route>
      </Switch>
    </main>
  );
}

export default App;
