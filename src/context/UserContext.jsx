"use client";

import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();
export function UserProvider({ children, userId }) {
  const [userData, setUserData] = useState([]);
  const [favSpirits, setFavSpirits] = useState([]);
  const [cabinetIng, setCabinetIng] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      const api = "/api/database";
      const response = await fetch(api);
      const data = await response.json(); //added removed line of code
      const userInfo = data.userInfo;
      const favSpirits = data.favSpirits;
      const cabinetIng = data.cabinetIng;
      setUserData(userInfo);
      setFavSpirits(favSpirits);
      setCabinetIng(cabinetIng);
    }
    fetchUserData();
  }, [userId]);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        favSpirits,
        setFavSpirits,
        cabinetIng,
        setCabinetIng,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  return useContext(UserContext);
}
