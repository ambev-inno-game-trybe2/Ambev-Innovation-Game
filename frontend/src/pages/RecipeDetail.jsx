import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { receitaDetalheMock } from '../mock/mockTables';
import { getAppThirsty, getUser } from '../services/recipesAPI';
import CardRecipeDetails from '../components/CardRecipeDetail';

function RecipeDetail({ location: { pathname } }) {
  const [recipe, setRecipe] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching && !recipe) {
      setIsFetching(true);
      // getAppThirsty(pathname).then(result => {
        setRecipe(receitaDetalheMock);
      setIsFetching(false);
      // });
    }
  }, [isFetching]);

  // if (!getUser()) return <Redirect to="/login" />
  if (isFetching) return <h1>Carregando...</h1>;

  return (
    <section>
      <Link to={'/recipes'}>
        <button>Visualizar página de receitas</button>
      </Link>
      {recipe && <CardRecipeDetails recipe={recipe} />}
    </section>
  );
}

export default RecipeDetail;
