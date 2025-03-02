import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonComp from "./ButtonComp";

export default function ContactComp() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.background.default,
          p: 4,
          borderRadius: "16px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: (theme) => theme.palette.custom.blue.lighter,
            borderRadius: "20px",
            p: 1,
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
          <Typography variant="body2" fontSize="10px">
            Available for work
          </Typography>
        </Box>

        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            color: (theme) => theme.palette.text.primary,
            mb: 3,
          }}
        >
          Ready to spark your <br />
          next game-changing idea?
        </Typography>
        <ButtonComp variant="contained" onClick={() => navigate("/contact")}>
          Contact Me
        </ButtonComp>
      </Box>
    </>
  );
}
