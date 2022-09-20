import React, { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [filterTypeVisibility, setFilterTypeVisibility] = useState(false);

  const toggleFilterType = (e) => {
    e.preventDefault();
    setFilterTypeVisibility(!filterTypeVisibility);
  };

  return (
    <AppContext.Provider value={{ filterTypeVisibility, toggleFilterType }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
