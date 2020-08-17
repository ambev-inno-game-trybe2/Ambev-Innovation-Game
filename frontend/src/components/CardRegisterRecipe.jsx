import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import useForm from '../hooks/useForm';
import FormField from './FormField';
import { getStates } from '../services/brazillianStatesAPI';
import { getAppThirsty } from '../services/recipesAPI';

function formText(placeholder, name, type, handleChange, values) {
  return (
    <FormField
      placeholder={placeholder}
      type={type}
      name={name}
      value={values}
      required
      onChange={(event) => handleChange(event)}
    />
  );
}

function filterOrigin(place, setFilter) {
  return (
    <select onClick={(e) => setFilter(e.target.value)}>
      <option value="">Todos</option>
      {place.map(({ id, sigla, nome }) => (
        <option key={id} value={sigla ? sigla : nome}>
          {nome}
        </option>
      ))}
    </select>
  );
}

function formDropdown(category, setCategoryValue) {
  return (
    <select onClick={(e) => setCategoryValue(e.target.value)}>
      {category.map((item) => <option key={item} value={item}>{item}</option>)}
    </select>
  )
}

const initialState = {
  title: '',
  description: '',
  preparationMode: '',
};

function CardCadastreRecipe() {
  const { clearForm, handleChange, values } = useForm(initialState);

  const [filterState, setFilterState] = useState();
  const [stateValue, setStateValue] = useState();
  const [filterCity, setFilterCity] = useState();
  const [cityValue, setCityValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const category = ['suco', 'água', 'refrigerante', 'água com gás'];

  useEffect(() => {
    getStates().then((result) => {
      setFilterState(result);
    });
    getStates(stateValue, 'municipios').then((result) => {
      setFilterCity(result);
    });
  }, [stateValue]);

  if (!filterState) return <h1>Carregando...</h1>;

  const formData = Object.assign({}, values, { state: stateValue, city: cityValue, category: categoryValue });

  return (
    <Form onSubmit={() => clearForm()}>
      {formText('Nome da receita', 'title', 'text', handleChange, values.title)}
      {formText('Descrição', 'description', 'textarea', handleChange, values.description)}
      {formText('Modo de preparo', 'preparationMode', 'textarea', handleChange, values.preparationMode)}
      {filterOrigin(filterState, setStateValue)}
      {filterCity && filterOrigin(filterCity, setCityValue)}
      {formDropdown(category, setCategoryValue)}
      {/* <button type="submit" onClick={() => getAppThirsty('/recipes', 'POST', formData)}>Enviar</button> */}
    </Form>
  );
}

export default CardCadastreRecipe;
