import React from "react";
import { Select, MenuItem, SelectChangeEvent } from "@mui/material";

interface MyComponentProps {
  options: Array<{ value: string; label: string }>;
  onChange: (event: SelectChangeEvent<string>) => void;
  value: string;
  label: string;
}

function AutoComplete({ options, onChange, value, label }: MyComponentProps) {
  // Add the default "Select" option
  const defaultOption = { value: "", label: "Select" };
  const allOptions = [defaultOption, ...options];

  return (
    <>
      <div className="drop-container">
        <div className="drop-label">{label}</div>
        <div className="select-container">
          <Select
            value={value}
            onChange={onChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            className="select"
          >
            {allOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </div>
      </div>
      <style>{`
        .drop-container {
          align-self: stretch;
          display: flex;
          max-width: 328px;
          flex-direction: column;
        }
        .drop-label {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          width: 100%;
          font: 400 12px/133% Verizon NHG TX, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        .select-container {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          display: flex;
          margin-top: 4px;
          width: 100%;
          flex-direction: column;
          justify-content: center;
        }
        .select {
          width: 100%;
        }
        .MuiOutlinedInput-input {
            padding: 10.5px 14px;
        }
      `}</style>
    </>
  );
}

export default AutoComplete;
