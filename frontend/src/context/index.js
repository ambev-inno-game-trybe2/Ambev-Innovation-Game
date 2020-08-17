import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [authOn, setAuthOn] = useState(false);

  const context = { authOn };

  return (
    <>
      <AppContext.Provider value={context}>{children}</AppContext.Provider>
    </>
  );
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
