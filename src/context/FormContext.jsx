"use client";
import { createContext, useState, useContext, useEffect } from "react";
import { AddUserData } from "../lib/actions";
import { UpdateUserData } from "../lib/actions";

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
  const [preferences, setPreferences] = useState([]);

  useEffect(() => {
    preferences.includes("Short")
      ? setData((prevData) => ({ ...prevData, short: true }))
      : setData((prevData) => ({ ...prevData, short: false }));
    preferences.includes("Long")
      ? setData((prevData) => ({ ...prevData, long: true }))
      : setData((prevData) => ({ ...prevData, long: false }));
    preferences.includes("Easy")
      ? setData((prevData) => ({ ...prevData, easy: true }))
      : setData((prevData) => ({ ...prevData, easy: false }));
    preferences.includes("Complex")
      ? setData((prevData) => ({ ...prevData, complex: true }))
      : setData((prevData) => ({ ...prevData, complex: false }));
    preferences.includes("Dairy")
      ? setData((prevData) => ({ ...prevData, dairy: true }))
      : setData((prevData) => ({ ...prevData, dairy: false }));
    preferences.includes("Egg")
      ? setData((prevData) => ({ ...prevData, egg: true }))
      : setData((prevData) => ({ ...prevData, egg: false }));
  }, [preferences]);

  const submitAction = AddUserData.bind(null, data, ingValue, favValue);

  const submitActionUpdateCabinet = UpdateUserData.bind(
    null,
    data,
    ingValue,
    favValue
  );

  return (
    <FormContext.Provider
      value={{
        data,
        setData,
        submitAction,
        submitActionUpdateCabinet,
        ingValue,
        setIngValue,
        favValue,
        setFavValue,
        preferences,
        setPreferences,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export function useForm() {
  return useContext(FormContext);
}
