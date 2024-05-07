import * as React from "react";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const AccountMenu = styled(Menu)`
  .MuiMenu-paper {
    align-self: stretch;
    border-radius: 7px;
    background: linear-gradient(
      180deg,
      rgba(243, 243, 245, 0.8) 0%,
      rgba(242, 242, 242, 0.8) 100%
    );
    box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(50px);
    font-size: 14px;
    color: #000;
    font-weight: 400;
    letter-spacing: 0.5px;
    line-height: 129%;
    padding: 5px;
    width: 240px;
  }
  .MuiMenu-list {
    padding-top: 0;
    padding-bottom: 0;
  }
  .MuiMenuItem-root {
    margin-top: 0;
  }
`;

const AccountMenuItem = styled(MenuItem)`
  && {
    font-feature-settings: "clig" off, "liga" off;
    font-family: Verizon NHG DS, -apple-system, Roboto, Helvetica, sans-serif;
    margin-top: 5px;
  }
`;

interface MyComponentProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  onClose: () => void;
}

const MenuComponent: React.FC<MyComponentProps> = ({
  anchorEl,
  open,
  onClose,
}) => {
  const options = [
    "Options Item 1",
    "Options Item 2", 
    "Options Item 3",
    "Options Item 4",
  ];
  const navigate = useNavigate();
  const handleMyAccount = () => {
    navigate("/myaccount");
  };

  return (
    <AccountMenu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      <AccountMenuItem onClick={handleMyAccount}>My Account</AccountMenuItem>
      {options.map((option, index) => (
        <AccountMenuItem key={index}>{option}</AccountMenuItem>
      ))}
    </AccountMenu>
  );
};

export default MenuComponent;