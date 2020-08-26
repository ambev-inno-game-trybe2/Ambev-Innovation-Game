import React, { useContext } from 'react';

import context from '../context/context';
import CardRecipesList from './CardRecipesList';
import Form from 'react-bootstrap/Form';
import '../styles/filterRecipes.css';


function filterOrigin(recipes, place, filterRecipes) {
  let funcFilter = '';

  if (place === 'state') funcFilter = filterRecipes[0];
  if (place === 'city')  funcFilter = filterRecipes[1];

  return (
    <Form.Control as="select"  onClick={(e) => funcFilter(e.target.value)}>
      <option value="All">Todos</option>
      {recipes.map((recipe) => (
        <option key={recipe._id} value={recipe.origin[place]}>
          {recipe.origin[place]}
        </option>
      ))}
    </Form.Control>
  );
};

function CardTrackTrend({ recipes }) {
  const { setFilterState, setFilterCity } = useContext(context);
  const filterRecipes = [setFilterState, setFilterCity];

  return (
    <section>
      <section className="filter-recipe-select">
      Filtrar por Estado: {filterOrigin(recipes, 'state', filterRecipes)}
      Filtrar por Cidade: {filterOrigin(recipes, 'city', filterRecipes)}
      </section>
      {recipes.map((recipe, index) => <CardRecipesList recipes={recipe} key={index} />)}
    </section>
  );
};

export default CardTrackTrend;
