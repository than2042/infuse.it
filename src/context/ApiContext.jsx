"use client";

import { createContext, useState, useContext, useEffect } from "react";

const ApiContext = createContext();
export function ApiProvider({ children }) {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function fetchDrinks() {
      const api = "/api/retrieveCocktails";
      const response = await fetch(api);
      const data = await response.json(); //added removed line of code
      setDrinks(data);
    }
    fetchDrinks();
  }, []);

  return (
    <ApiContext.Provider value={{ drinks, setDrinks }}>
      {children}
    </ApiContext.Provider>
  );
}
export function useApi() {
  return useContext(ApiContext);
}
