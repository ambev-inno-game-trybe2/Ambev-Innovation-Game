import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {Home}
        </Route>
        <Route path="/signup">{SignUp}</Route>
        <Route>{NotFound}</Route>
      </Switch>
    </div>
  );
}

export default App;
