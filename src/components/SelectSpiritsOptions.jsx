"use client";

import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

export default function IngredientsInput({
  fav_spiritsOptions,
  handleFavChange,
  favValue,
}) {
  return (
    <Autocomplete
      multiple
      id="fav_spirits"
      name="title"
      value={favValue || null}
      onChange={handleFavChange}
      options={fav_spiritsOptions}
      getOptionLabel={(option) => option.fav_spirits}
      renderTags={(tagValue, getTagProps) => {
        return tagValue.map((option, index) => (
          <Chip
            {...getTagProps({ index })}
            key={option.id}
            label={option.fav_spirits}
          />
        ));
      }}
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
