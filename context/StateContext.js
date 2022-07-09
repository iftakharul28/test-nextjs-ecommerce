import React, { createContext, useContext, useMemo, useState } from 'react';

const Context = createContext();
export const StateContext = ({ children, products }) => {
  const [showNav, setShowNav] = useState(false);
  const [data] = useState(products);

  return (
    <Context.Provider
      value={{
        showNav,
        setShowNav,
        data,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
