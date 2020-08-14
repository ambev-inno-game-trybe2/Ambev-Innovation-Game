import React from 'react';

import CardRecipesList from './CardRecipesList';

function filterOrigin(recipes, place) {
  <select onClick={(e) => { }}>
    <option value="All">All</option>
    {recipes.map((recipe) => (
      <option key={recipe._id} value={recipe.origin[place]}>
        {recipe.origin[place]}
      </option>
    ))}
  </select>
};

function CardTrackTrend({ recipes }) {

  return (
    <section>
      {filterOrigin(recipes, 'state')}
      {filterOrigin(recipes, 'city')}
      <CardRecipesList recipes={recipes} />
    </section>
  );
};

export default CardTrackTrend;
