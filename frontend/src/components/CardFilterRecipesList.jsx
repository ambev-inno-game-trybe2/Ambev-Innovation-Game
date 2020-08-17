import React, { useContext } from 'react';

import context from '../context/context';
import CardRecipesList from './CardRecipesList';

function filterOrigin(recipes, place, filterRecipes) {
  let funcFilter = '';

  if (place === 'state') funcFilter = filterRecipes[0];
    funcFilter = filterRecipes[1];

  return (
    <select onClick={(e) => funcFilter(e.target.value)}>
      <option value="All">Todos</option>
      {recipes.map((recipe) => (
        <option key={recipe._id} value={recipe.origin[place]}>
          {recipe.origin[place]}
        </option>
      ))}
    </select>
  );
};

function CardTrackTrend({ recipes }) {
  const { setFilterState, setFilterCity } = useContext(context);
  const filterRecipes = [setFilterState, setFilterCity];

  return (
    <section>
      {filterOrigin(recipes, 'state', filterRecipes)}
      {filterOrigin(recipes, 'city', filterRecipes)}
      {recipes.map((recipe, index) => <CardRecipesList recipes={recipe} key={index} />)}
    </section>
  );
};

export default CardTrackTrend;
