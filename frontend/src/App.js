import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import UserPreferences from './pages/UserPreferences';

function App() {
  return (
    <main className="App text-center">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user_preferences" component={UserPreferences} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
