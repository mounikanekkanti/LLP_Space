import * as React from "react";
import TextField from "@mui/material/TextField";

interface PasswordInputProps {
  label: string;
  inputType: string;
}

const InputField: React.FC<PasswordInputProps> = ({ label, inputType }) => {
  return (
    <div className="input">
      <label className="label">{label}</label>
      <div className="inputclass1">
        <div className="inputclass2">
          <TextField
            className="inputclass3"
            type={inputType}
            variant="outlined"
            fullWidth
          />
          <div className="input-icon" />
        </div>
      </div>
      <style>{`
        .input {
          max-width: 328px;
          display: flex;
          flex-direction: column;
          margin-bottom: 24px;
        }

        .label {
          color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
          font-feature-settings: "clig" off, "liga" off;
          width: 100%;
          font: 400 12px/133% Verizon NHG DS, -apple-system, Roboto, Helvetica,
            sans-serif;
        }

        .input-container {
          border-radius: 4px;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          margin-top: 4px;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .input-wrapper {
          border-radius: 4px;
          border: 1px solid rgba(111, 113, 113, 1);
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          padding: 1px 60px;
          position: relative;
        }

        .input-icon {
          border-radius: 0 3px 3px 0;
          background-color: var(--vds-form-controls-background-onlight, #fff);
          width: 11px;
          height: 42px;
          position: absolute;
          right: 0;
        }
        .inputclass1 {
            border-radius: 4px;
            background-color: var(--vds-form-controls-background-onlight, #fff);
            display: flex;
            margin-top: 4px;
            width: 328px;
            max-width: 100%;
            flex-direction: column;
            justify-content: center;
          }
          .inputclass2 {
            justify-content: center;
            align-items: end;
            border-radius: 4px;
            border-color: rgba(111, 113, 113, 1);
            border-style: solid;
            border-width: 1px;
            display: flex;
            flex-direction: column;
          }
          @media (max-width: 991px) {
            .inputclass2 {
              max-width: 100%;
              padding-left: 20px;
            }
          }
          .inputclass3 {
            border-radius: 0px 3px 3px 0px;
            width: 360px;
            max-width: 100%;
            height: 42px;
          }
          .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input {
            width: 100%;
            height: 42px;
            padding: 0;
          }
          .css-md26zr-MuiInputBase-root-MuiOutlinedInput-root {
            padding: 0 8px;
            outline: 0;
          }
          input::after {
            border-bottom: none !important;
          }
      `}</style>
    </div>
  );
};

export default InputField;
