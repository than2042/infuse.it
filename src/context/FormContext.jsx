"use client";
import { createContext, useState, useContext } from "react";
import { AddUserData } from "../lib/actions";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    username: "",
    clerk_user_id: "",
    short: false,
    long: false,
    easy: false,
    complex: false,
    dairy: false,
    egg: false,
    alc_id: 6,
  });

  const [ingValue, setIngValue] = useState([]);

  const [favValue, setFavValue] = useState([]);

  const submitAction = AddUserData.bind(null, data, ingValue, favValue);

  return (
    <FormContext.Provider
      value={{
        data,
        setData,
        submitAction,
        ingValue,
        setIngValue,
        favValue,
        setFavValue,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export function useForm() {
  return useContext(FormContext);
}
