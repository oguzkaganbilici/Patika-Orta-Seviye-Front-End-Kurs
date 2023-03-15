import { useState, createContext, useContext } from "react";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [theCity, setCity] = useState("Ordu");
  const values = {
    theCity,
    setCity
  };

  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

const CityTheme = () => useContext(CityContext);
export default CityTheme;
