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
      <Typography variant="h6" textAlign="justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
        consectetur laudantium eveniet beatae eum doloremque iure libero nemo,
        magnam ea earum asperiores repellat, quisquam expedita dicta. Blanditiis
        maxime delectus vero! laudantium eveniet beatae eum doloremque iure
        libero nemo, magnam ea earum asperiores repellat, quisquam expedita
        dicta. Blanditiis maxime delectus vero!
      </Typography>
      <Box sx={{ mx: "auto", mt: 2 }}>
        <ButtonComp variant="outlined" onClick={() => navigate("/about")}>
          Read More
        </ButtonComp>
      </Box>
    </Box>
  );
}
