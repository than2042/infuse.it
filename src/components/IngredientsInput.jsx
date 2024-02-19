"use client";
import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { useState } from "react";

export default function IngredientsInput({ ingredientsOptions }) {
  const [value, setValue] = useState([]);
  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setValue(newValue);
    console.log("value", value);
  };

  return (
    <div>
      <Autocomplete
        multiple
        id="tags-standard"
        value={value || null}
        onChange={handleChange}
        options={ingredientsOptions}
        getOptionLabel={(option) => option.ingredients}
        // isOptionEqualToValue={(option, value) => option.value === value.value}
        // renderOption={(props, option) => {
        //   return (
        //     <li {...props} key={option.id}>
        //       {option.ingredients}
        //     </li>
        //   );
        // }}
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
      <p>
        Selected Ingredients:
        {value.length > 0 ? value[0].ingredients : null}
      </p>
    </div>
  );
}
