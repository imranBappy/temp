import React from "react";
import MuiButton from "@mui/material/Button";

const Button = ({
  variant = "contained",
  color = "primary",
  children,
  title = children,
  onClick,
  size = "large",
  ...props
}) => {
  return (
    <MuiButton
      variant={variant}
      color={color}
      onClick={onClick}
      size={size}
      {...props}
    >
      {title}
    </MuiButton>
  );
};

export default Button;
