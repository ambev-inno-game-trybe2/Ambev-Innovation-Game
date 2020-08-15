import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import context from '../context/context';
import CardFilterRecipesList from '../components/CardFilterRecipesList';
import { receitasMock } from '../mock/mockTables';
import getRecipes from '../services/recipesAPI';

function RecipesList({ location: { pathname } }) {
  const { filterState, filterCity } = useContext(context);
  const [recipes, setRecipes] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching && !recipes) {
      setIsFetching(true);
      // getRecipes(pathname, filterState, filterCity).then(result => {
      setRecipes(receitasMock);
      setIsFetching(false);
      // });
    }
  }, [isFetching]);

  if (isFetching) return <h1>Carregando...</h1>;
  const viewNewPage = (pathname === '/recipes') ? 'ingredientes' : 'receitas';

  return (
    <section>
      <Link to={`/${(viewNewPage === 'ingredientes') ? 'ingredients' : 'recipes'}`}>
        <button>
          {`Visualizar página de ${viewNewPage}`}
        </button>
      </Link>
      {recipes && <CardFilterRecipesList recipes={recipes} />}
    </section>
  );
}

export default RecipesList;
