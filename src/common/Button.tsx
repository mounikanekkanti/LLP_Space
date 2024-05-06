import * as React from "react";
import Button, { ButtonProps } from "@mui/material/Button";

interface PageButtonProps extends ButtonProps {
  children: React.ReactNode;
  buttonType?: "primary" | "secondary";
}

export default function PageButton({
  children,
  buttonType = "primary",
  ...rest
}: PageButtonProps) {
    const primaryButtonStyles = {
        backgroundColor: "#000",
        color: "#fff",
        border: "1px solid #000",
        marginRight: "14px",
        "&:hover": {
            backgroundColor: "#000",
          },
      };
    
      const secondaryButtonStyles = {
        backgroundColor: "#fff",
        color: "#000",
        border: "1px solid #000",
        marginRight: "14px",
        "&:hover": {
            backgroundColor: "#fff",
          },
      };
    
      const buttonStyles = buttonType === "primary" ? primaryButtonStyles : secondaryButtonStyles;
    

  return (
    <>
      <Button
        {...rest}
        sx={{
          borderRadius: "22px",
          whiteSpace: "nowrap",
          letterSpacing: "0.5px",
          justifyContent: "center",
          padding: "12px 24px",
          textTransform: "capitalize",
          font: '700 16px Verizon NHG DS, -apple-system, Roboto, Helvetica, sans-serif',
          ...buttonStyles,
        }}
      >
        {children}
      </Button>
    </>
  );
}
