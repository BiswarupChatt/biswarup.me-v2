import { Box, Typography } from "@mui/material";
import ButtonComp from "../../../global/components/ButtonComp";
import { useNavigate } from "react-router-dom";

export default function AboutMe() {
  const navigate = useNavigate();
  return (
    <Box sx={{ mb: 5, display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.custom.blue.main,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            mr: 1,
          }}
        />
        <Typography variant="h6" fontWeight="bold" textAlign="center">
          About Me
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          textAlign: "justify",
          // fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
        }}
      >
        While working as a freelance graphic designer, I started wondering about
        more than just how things looked—I wanted to understand how they
        actually worked. This curiosity led me to explore coding and building
        interactive experiences.
      </Typography>
      <Box sx={{ mx: "auto", mt: 2 }}>
        <ButtonComp variant="outlined" onClick={() => navigate("/about")}>
          Read More
        </ButtonComp>
      </Box>
    </Box>
  );
}
