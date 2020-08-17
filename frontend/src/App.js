import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';
import RecipesList from './pages/RecipesList';
import IngredientsList from './pages/IngredientsList';
import RecipeDetail from './pages/RecipeDetail';
import RegisterRecipe from './pages/RegisterRecipe';
import UserPreferences from './pages/UserPreferences';
import './styles/background.css';

function App() {
  return (
    <Container as="main" className="main" fluid>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/user_preferences" component={UserPreferences} />
        <Route exact path="/ingredients" component={IngredientsList} />
        <Route exact path="/recipes" component={RecipesList} />
        <Route exact path="/recipes/register" component={RegisterRecipe} />
        <Route exact path="/recipes/:id" component={RecipeDetail} />
        <Route component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
