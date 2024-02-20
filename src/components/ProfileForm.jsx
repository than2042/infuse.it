"use client";
import SelectAlcOptions from "./SelectAlcOptions";
import SelectSpiritsOptions from "./SelectSpiritsOptions";
import IngredientsInput from "./IngredientsInput";
import ToggleInput from "./ToggleInput";
import * as React from "react";
import TextField from "@mui/material/TextField";
import { useForm } from "@/context/FormContext";

export default function ProfileForm({
  fav_spiritsOptions,
  ingredientsOptions,
}) {
  const {
    data,
    setData,
    submitAction,
    ingValue,
    setIngValue,
    favValue,
    setFavValue,
  } = useForm();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name);
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitAction();
    setData("");
  };

  const handleIngChange = (event, newIngValue) => {
    console.log("newIngValue", newIngValue);
    setIngValue(newIngValue);
    console.log("ingValue", ingValue);
  };

  const handleFavChange = (event, newFavValue) => {
    console.log("newFavValue", newFavValue);
    setFavValue(newFavValue);
    console.log("favValue", favValue);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          name="username"
          onChange={handleChange}
        />
        <SelectSpiritsOptions
          name="fav_spirits_id"
          handleFavChange={handleFavChange}
          fav_spiritsOptions={fav_spiritsOptions}
          favValue={favValue}
        />
        <SelectAlcOptions
          name="alc_id"
          handleChange={handleChange}
          data={data}
        />
        <ToggleInput handleChange={handleChange} data={data} />
        <IngredientsInput
          name="cabinet_id"
          handleIngChange={handleIngChange}
          ingredientsOptions={ingredientsOptions}
          ingValue={ingValue}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
