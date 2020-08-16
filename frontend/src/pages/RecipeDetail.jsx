import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { receitaDetalheMock } from '../mock/mockTables';
import { getAppThirsty } from '../services/recipesAPI';
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
