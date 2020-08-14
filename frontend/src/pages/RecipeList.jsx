import React from 'react';
import useAxios from 'axios-hooks';

import CardRecipesList from '../components/CardRecipesList';

function RecipeList() {
  const [{ data, loading, error }] = useAxios('http://localhost:3001/recipes');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <section >
      {data.map((result, index) => <CardRecipesList recipes={result} key={index} />)}
    </section>
  );
}

export default RecipeList;
