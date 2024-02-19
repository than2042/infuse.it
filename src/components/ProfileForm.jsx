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
  const { data, setData, submitAction } = useForm();

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
          handleChange={handleChange}
          fav_spiritsOptions={fav_spiritsOptions}
          data={data}
        />
        <SelectAlcOptions
          name="alc_id"
          handleChange={handleChange}
          data={data}
        />
        <ToggleInput handleChange={handleChange} data={data} />
        <IngredientsInput
          name="cabinet_id"
          handleChange={handleChange}
          ingredientsOptions={ingredientsOptions}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
