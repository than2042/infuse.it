"use client";
import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useState } from "react";

export default function ToggleInput({ preferences, setPreferences }) {
  const handleToggle = (event, newPreferences) => {
    setPreferences(newPreferences);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={preferences}
      onChange={handleToggle}
    >
      <div className="flex gap-2">
        <div className="w-3/5 flex flex-col gap-2">
          <ToggleButton value="short" name="short" className="m-1">
            Short
          </ToggleButton>
          <ToggleButton value="Long" name="Long">
            Long
          </ToggleButton>
        </div>
        <div className="w-3/5 flex flex-col gap-2 ">
          <ToggleButton value="Easy" name="Easy">
            Easy
          </ToggleButton>
          <ToggleButton value="Complex" name="Complex">
            Complex
          </ToggleButton>
        </div>
        <div className="w-3/5 flex flex-col gap-2 ">
          <ToggleButton value="Egg" name="Egg">
            Egg
          </ToggleButton>
          <ToggleButton value="Dairy" name="Dairy">
            Dairy
          </ToggleButton>
        </div>
      </div>
    </ToggleButtonGroup>
  );
}
