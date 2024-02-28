"use client";

import { revalidatePath } from "next/cache";
import { createContext, useState, useContext, useEffect } from "react";

const UserContext = createContext();
export function UserProvider({ children, userId }) {
  const [userData, setUserData] = useState([]);
  const [favSpirits, setFavSpirits] = useState([]);
  const [cabinetIng, setCabinetIng] = useState([]);

  useEffect(() => {
    if (userId) {
      async function fetchUserData() {
        try {
          const api = "/api/database";
          const response = await fetch(api);
          const data = await response.json(); //added removed line of code
          const userInfo = data.userInfo;
          const favSpirits = data.favSpirits;
          const cabinetIng = data.cabinetIng;
          setUserData(userInfo);
          setFavSpirits(favSpirits);
          setCabinetIng(cabinetIng);
        } catch (error) {
          console.error("Error fetching user data", error);
        }
      }
      fetchUserData();
    }
  }, [userId]);

  const fetchUpdatedUserData = async () => {
    try {
      const api = `/api/database`;
      const response = await fetch(api);
      const data = await response.json();
      const userInfo = data.userInfo;
      const favSpirits = data.favSpirits;
      const cabinetIng = data.cabinetIng;
      setUserData(userInfo);
      setFavSpirits(favSpirits);
      setCabinetIng(cabinetIng);
      revalidatePath("/profile");
    } catch (error) {
      console.error("Error fetching updated user data", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        favSpirits,
        setFavSpirits,
        cabinetIng,
        setCabinetIng,
        fetchUpdatedUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  return useContext(UserContext);
}
