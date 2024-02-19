"use client";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleInput({ handleChange }) {
  return (
    <ToggleButtonGroup color="primary" exclusive onChange={handleChange}>
      <ToggleButton value={true} name="short">
        Short
      </ToggleButton>
      <ToggleButton value={true} name="Long">
        Long
      </ToggleButton>
      <ToggleButton value={true} name="Easy">
        Easy
      </ToggleButton>
      <ToggleButton value={true} name="Complex">
        Complex
      </ToggleButton>
      <ToggleButton value={true} name="Egg">
        Egg
      </ToggleButton>
      <ToggleButton value={true} name="Dairy">
        Dairy
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
