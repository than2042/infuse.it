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
    alc: "",
    fav_spirits_id: [],
    cabinet_id: [],
  });

  const submitAction = AddUserData.bind(null, data);

  return (
    <FormContext.Provider value={{ data, setData, submitAction }}>
      {children}
    </FormContext.Provider>
  );
};

export function useForm() {
  return useContext(FormContext);
}
