import { Box, BoxProps } from "@mui/material";

interface WrapperCompProps extends BoxProps {
  children: React.ReactNode;
}

const WrapperComp: React.FC<WrapperCompProps> = ({ children, sx }) => {
  return (
    <Box
      sx={{
        height: "auto",
        width: "auto",
        paddingX: "20px",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default WrapperComp;
