"use client";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectAlcOptions({ handleChange, data }) {
  return (
    <div>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Alcoholic/Non
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          name="alc_id"
          value={data}
          onChange={handleChange}
          label="Alcoholic or Non-Alcoholic?"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={4}>Alcoholic</MenuItem>
          <MenuItem value={5}>Non-Alcoholic</MenuItem>
          <MenuItem value={6}>Both</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
