"use client";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function ToggleInput({ handleChange }) {
  return (
    <ToggleButtonGroup color="primary" exclusive onChange={handleChange}>
      <div className="flex gap-2">
        <div className="w-3/5 flex flex-col gap-2">
          <ToggleButton value={true} name="short" className="m-1">
            Short
          </ToggleButton>
          <ToggleButton value={true} name="Long">
            Long
          </ToggleButton>
        </div>
        <div className="w-3/5 flex flex-col gap-2 ">
          <ToggleButton value={true} name="Easy">
            Easy
          </ToggleButton>
          <ToggleButton value={true} name="Complex">
            Complex
          </ToggleButton>
        </div>
        <div className="w-3/5 flex flex-col gap-2 ">
          <ToggleButton value={true} name="Egg">
            Egg
          </ToggleButton>
          <ToggleButton value={true} name="Dairy">
            Dairy
          </ToggleButton>
        </div>
      </div>
    </ToggleButtonGroup>
  );
}
