import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import RecipesList from './pages/RecipesList';
import IngredientsList from './pages/IngredientsList';
import RecipeDetail from './pages/RecipeDetail';

function App() {
  return (
    <main className="App text-center">
      <Switch>
        <Route exact path="/recipes" component={RecipesList} />
        <Route exact path="/ingredients" component={IngredientsList} />
        <Route exact path="/recipes/:id" component={RecipeDetail} />
        <Route component={NotFound} />
      </Switch>
    </main>
  );
}

export default App;
