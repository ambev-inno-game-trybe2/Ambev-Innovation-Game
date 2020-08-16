import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';
import useForm from '../hooks/useForm';
import FormField from '../components/FormField';
import { getStates } from '../services/brazillianStatesAPI';

function formText(placeholder, name, type, handleChange) {
  return (
    <FormField
      placeholder={placeholder}
      type={type}
      name={name}
      required
      onChange={(event) => handleChange(event)}
    />
  );
}

function filterOrigin(place, setFilter) {
  if (!setFilter)
    return (
      <select>
        <option value="">Todos</option>
        {place.map(({ id, sigla, nome }) => (
          <option key={id} value={sigla ? sigla : nome}>
            {nome}
          </option>
        ))}
      </select>
    );

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

function formDropdown(category) {
  return (
    <select>
      {category.map((item) => <option key={item} value={item}>{item}</option>)}
    </select>
  )
}

const initialState = {
  title: '',
  description: '',
  preparationMode: '',
  category: '',
};

function CardCadastreRecipe() {
  const { clearForm, handleChange } = useForm(initialState);

  const [filterState, setFilterState] = useState();
  const [stateValue, setStateValue] = useState();
  const [filterCity, setFilterCity] = useState();
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

  return (
    <Form onSubmit={() => clearForm()}>
      {formText('Nome da receita', 'title', 'text', handleChange)}
      {formText('Descrição', 'description', 'textarea', handleChange)}
      {formText('Modo de preparo', 'preparationMode', 'textarea', handleChange)}
      {filterOrigin(filterState, setStateValue)}
      {filterCity && filterOrigin(filterCity)}
      {formDropdown(category)}
      <button type="button">Login</button>
    </Form>
  );
}

export default CardCadastreRecipe;
