import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import CardIngredientsList from '../components/CardIngredientsList';
import { ingredientesMock } from '../mock/mockTables';
import getAppThirsty from '../services/recipesAPI';

function IngredientsList({ location: { pathname } }) {
  const [ingredients, setIngredients] = useState();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching && !ingredients) {
      setIsFetching(true);
      // getAppThirsty(pathname).then(result => {
      setIngredients(ingredientesMock);
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
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <CardIngredientsList ingredients={ingredient} key={index} />
        ))}
    </section>
  );
}

export default IngredientsList;
