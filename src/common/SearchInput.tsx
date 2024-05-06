import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

interface SearchInputProps {
  placeholder: string;
}

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));


const SearchInput: React.FC<SearchInputProps> = ({ placeholder }) => {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <div className="search-container">
        <div className="search-textfield">
          <TextField
            className="textfield"
            placeholder={placeholder}
            variant="standard"
            inputProps={{ "aria-label": "search" }}
            value={searchTerm}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <div className="search-img">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/443f2c04915a0180ea1735736b6c0a27f3819cd061f59e4d6d14f44ec752f6e7?apiKey=a938513dc279413eaac5ce0f8c637f66&"
              className="search-img2"
            />
            <div className="final" />
          </div>
        </div>
      </div>
      <style>{`
      .search-container{
        align-self: stretch;
        border-radius: 4px;
        background-color: var(--vds-form-controls-background-onlight, #fff);
        display: flex;
        flex-direction: column;
        gap: 0px;
        justify-content: center;
        border-radius: 4px;
        border-color: rgba(111, 113, 113, 1);
        border-style: solid;
        border-width: 1px;
      }
      .search-textfield {
        justify-content: flex-end;
        border-radius: 4px;
        width: 328px;
        display: flex;
        gap: 20px;
        padding: 1px 1px 1px 12px;
      }
      .textfield {
        color: var(--vds-elements-text-icons-borders-primary-onlight, #000);
        font-feature-settings: "clig" off, "liga" off;
        letter-spacing: 0.5px;
        gap: 0px;
        margin: auto 0;
        font: 400 16px Verizon NHG DS, -apple-system, Roboto, Helvetica,
          sans-serif;
        width: 260px;
        display: flex;
      }
      .search-img {
        display: flex;
        gap: 0px;
      }
      .search-img2 {
        aspect-ratio: 1;
        object-fit: auto;
        object-position: center;
        width: 24px;
        z-index: 10;
        gap: 0px;
        margin: auto 0;
      }
      .final {
        border-radius: 0px 3px 3px 0px;
        background-color: var(--vds-form-controls-background-onlight, #fff);
        width: 11px;
        height: 42px;
        gap: 0px;
      }
      .css-1eed5fa-MuiInputBase-root-MuiInput-root::before {
        border-bottom: none !important;
      }
      input::placeholder {
        color: #000 !important;
      }
    `}</style>
    </>
  );
};

export default SearchInput;
