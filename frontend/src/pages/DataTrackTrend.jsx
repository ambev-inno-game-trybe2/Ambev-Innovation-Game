import React, { useEffect, useState, useContext } from 'react';

import context from '../context/context';
import CardTrackTrend from '../components/CardTrackTrend';
import { receitasMock } from '../mock/mockTables';
import getRecipes from '../services/recipesAPI';

function DataTrackTrend() {
  const { filterState, filterCity } = useContext(context);
  const [recipes, setRecipes] = useState();
  const [filter, setFilter] = useState('receitas');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching && !recipes) {
      setIsFetching(true);
      // getRecipes(filter, filterState, filterCity).then(result => {
      setRecipes(receitasMock);
      setIsFetching(false);
      // });
    }
  }, [isFetching]);

  if (isFetching) return <h1>Carregando...</h1>

  return (
    <section >
      <select onClick={e => setFilter(e.target.value)}>
        <option value="recipes">Receitas</option>
        <option value="ingredients">Ingredientes</option>
      </select>
      {recipes && (<CardTrackTrend recipes={recipes} />)}
    </section>
  );
}

export default DataTrackTrend;
