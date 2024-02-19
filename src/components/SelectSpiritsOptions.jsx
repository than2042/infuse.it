"use client";

import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function IngredientsInput({ fav_spiritsOptions, handleChange }) {
  return (
    <Autocomplete
      multiple
      id="tags-standard"
      name="title"
      onChange={handleChange}
      options={fav_spiritsOptions}
      getOptionLabel={(option) => option.fav_spirits}
      filterSelectedOptions
      style={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Select Your Favourite Spirits"
          placeholder="Select Your Favourite Spirits"
        />
      )}
    />
  );
}
