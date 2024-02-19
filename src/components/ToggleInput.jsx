"use client";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleInput({ handleChange, data }) {
  //   const [alignment, setAlignment] = React.useState("web");

  //   const handleChange = (event, newAlignment) => {
  //     setAlignment(newAlignment);
  //   };

  return (
    <ToggleButtonGroup
      color="primary"
      value={data}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
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
