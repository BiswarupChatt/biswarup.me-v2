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

interface ButtonCompProps extends ButtonProps {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading?: boolean;
  loadingText?: string;
  tooltip?: string;
  fullWidth?: boolean;
  testId?: string;
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
  variant = "contained",
  disabledStyle,
  sx,
  borderRadius = "20px",
  ...rest
}) => {
  const combinedSx = {
    ...(rest.disabled && disabledStyle ? disabledStyle : {}),
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

  return (
    <Tooltip title={tooltip || ""} arrow>
      <Button
        variant={variant}
        disabled={isLoading || rest.disabled}
        fullWidth={fullWidth}
        sx={combinedSx}
        data-testid={testId}
        {...rest}
      >
        {buttonContent}
      </Button>
    </Tooltip>
  );
};

export default ButtonComp;
