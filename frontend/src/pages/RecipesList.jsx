import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import context from '../context/context';
import CardFilterRecipesList from '../components/CardFilterRecipesList';
import { receitasMock } from '../mock/mockTables';
import { getFilterRecipes } from '../services/recipesAPI';

function RecipesList({ location: { pathname } }) {
  const { filterState, filterCity } = useContext(context);
  const [recipes, setRecipes] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching && !recipes) {
      setIsFetching(true);
      // getFilterRecipes(pathname, filterState, filterCity).then(result => {
      setRecipes(receitasMock);
      setIsFetching(false);
      // });
    }
  }, [isFetching]);

  if (isFetching) return <h1>Carregando...</h1>;

  return (
    <section>
      <Link to={'/ingredients'}>
        <button type="button">Visualizar página de ingredientes</button>
      </Link>
      {recipes && <CardFilterRecipesList recipes={recipes} />}
    </section>
  );
}

export default RecipesList;
