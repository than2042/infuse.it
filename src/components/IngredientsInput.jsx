"use client";

import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function IngredientsInput({ ingredientsOptions, handleChange }) {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      name="title"
      //   value={(option) => option.id}
      handleChange={handleChange}
      options={ingredientsOptions}
      getOptionLabel={(option) => option.ingredients}
      filterSelectedOptions
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Select Your Ingredients"
          placeholder="Select Your Ingredients"
        />
      )}
    />
  );
}
