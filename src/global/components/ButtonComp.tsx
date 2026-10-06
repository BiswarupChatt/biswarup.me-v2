// React Imports ----------
import React, { ReactNode } from "react";

// MUI Imports ----------
import {
  Box,
  Button,
  Tooltip,
  ButtonProps,
  CircularProgress,
} from "@mui/material";

interface ButtonCompProps {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  tooltip?: string;
  fullWidth?: boolean;
  testId?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  size?: ButtonProps["size"];
  sx?: ButtonProps["sx"];
  disabled?: boolean;
  color?: ButtonProps["color"];
  type?: ButtonProps["type"];
  variant?: "contained" | "outlined" | "text";
  disabledStyle?: React.CSSProperties;
  borderRadius?: string;
}

const ButtonComp: React.FC<ButtonCompProps> = ({
  children,
  startIcon,
  endIcon,
  isLoading = false,
  loadingText = "Loading...",
  tooltip,
  fullWidth = false,
  testId,
  target,
  variant = "contained",
  disabledStyle,
  sx,
  borderRadius = "20px",
  ...rest
}) => {
  const { href, rel, onClick, ...buttonRest } = rest;
  const combinedSx = {
    ...(buttonRest.disabled && disabledStyle ? disabledStyle : {}),
    borderRadius,
    height: "40px",
    boxShadow: "none",
    fontWeight: "bold",
    ...sx,
  };

  const buttonContent = isLoading ? (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
      <CircularProgress size={20} color="inherit" />
      {loadingText}
    </Box>
  ) : (
    <>
      {startIcon && (
        <Box
          component="span"
          sx={{ marginRight: 1, display: "flex", alignItems: "center" }}
        >
          {startIcon}
        </Box>
      )}
      {children}
      {endIcon && (
        <Box
          component="span"
          sx={{ marginLeft: 1, display: "flex", alignItems: "center" }}
        >
          {endIcon}
        </Box>
      )}
    </>
  );

  const commonButtonProps = {
    variant,
    disabled: isLoading || buttonRest.disabled,
    fullWidth,
    sx: combinedSx,
    "data-testid": testId,
  };

  if (href) {
    return (
      <Tooltip title={tooltip || ""} arrow>
        <Button
          href={href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : rel}
          onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
          {...buttonRest}
          {...commonButtonProps}
        >
          {buttonContent}
        </Button>
      </Tooltip>
    );
  }

  return (
    <Tooltip title={tooltip || ""} arrow>
      <Button
        onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
        {...buttonRest}
        {...commonButtonProps}
      >
        {buttonContent}
      </Button>
    </Tooltip>
  );
};

export default ButtonComp;
