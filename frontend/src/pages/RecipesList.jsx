import React, { useEffect, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';

import context from '../context/context';
import CardFilterRecipesList from '../components/CardFilterRecipesList';
import { receitasMock } from '../mock/mockTables';
import { getFilterRecipes, getUser } from '../services/recipesAPI';
import Button from 'react-bootstrap/Button';
import '../styles/recipeList.css';

function RecipesList({ location: { pathname } }) {
  const { filterState, filterCity } = useContext(context);
  const [recipes, setRecipes] = useState();
  const [isFetching, setIsFetching] = useState(false);
  console.log('filtercity', filterCity)
  console.log('filterState', filterState)

  useEffect(() => {
    if (!isFetching && !recipes) {
      setIsFetching(true);
      // getFilterRecipes(pathname, filterState, filterCity).then(result => {
      setRecipes(receitasMock);
      setIsFetching(false);
      // });
    }
  }, [isFetching]);

  // if (!getUser()) return <Redirect to="/login" />
  if (isFetching) return <h1>Carregando...</h1>;

  return (
    <section>
      <Link to={'/ingredients'}>
        <Button type="button">Visualizar página de ingredientes</Button>
      </Link>
      {recipes && <CardFilterRecipesList recipes={recipes} />}
    </section>
  );
}

export default RecipesList;
