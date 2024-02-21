"use client";
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";

export default function IngredientsInput({
  ingredientsOptions,
  handleIngChange,
  ingValue,
}) {
  return (
    <div>
      <Autocomplete
        multiple
        id="cabinet_ingredients"
        value={ingValue || null}
        onChange={handleIngChange}
        options={ingredientsOptions}
        getOptionLabel={(option) => option.ingredients}
        renderTags={(tagValue, getTagProps) => {
          return tagValue.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option.id}
              label={option.ingredients}
            />
          ));
        }}
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
    </div>
  );
}
