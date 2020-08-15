import React, { useState } from 'react';
import PropTypes from 'prop-types';
import context from './context';

const Provider = ({ children }) => {
  const [filterState, setFilterState] = useState();
  const [filterCity, setFilterCity] = useState();
 
  const storeContext = {
    filterState,
    setFilterState,
    filterCity,
    setFilterCity,
  };

  return <context.Provider value={storeContext}>{children}</context.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
