import React, { useEffect, useState } from 'react';

import CardTrackTrend from '../components/CardRecipesList';

const getUser = () => JSON.parse(localStorage.getItem('user'));

function HeaderAuthorization() {
  const token = getUser().token;
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  }
}

const getRecipes = async () => {
  const URL_API_RECEITS = 'http://localhost:3001/admin/orders';

  const response = await fetch(URL_API_RECEITS, HeaderAuthorization());
  const data = await response.json();
  return data;
}

function DataTrackTrend() {

  const [recipes, setRecipes] = useState();
  const [filter, setFilter] = useState('receitas');
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    if (!isFetching && !recipes) {
      setIsFetching(true);
      getRecipes().then(result => {
        setRecipes(result);
        setIsFetching(false);
      });
    }
  }, [isFetching]);

  if (isFetching) return <h1>Carregando...</h1>

  return (
    <section >
      <select onClick={e => setFilter(e.target.value)}>
        <option value="recipes">Receitas</option>
        <option value="ingredients">Ingredientes</option>
      </select>
      {recipes && <CardTrackTrend recipes={recipes} />}
    </section>
  );
}

export default DataTrackTrend;
