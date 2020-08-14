import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import RecipeList from './pages/RecipeList';

function App() {
  return (
    <main className="App text-center">
      <Switch>
        <Route exact path="/recipes" component={RecipeList} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
