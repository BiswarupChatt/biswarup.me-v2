import { Avatar, Box, Typography } from "@mui/material";
import ProfileImage from "../../../assets/profile-img.jpg";

export default function Hero() {
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Avatar src={ProfileImage} sx={{ width: "80px", height: "80px" }} />
      </Box>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="left"
        sx={{
          width: { xs: "100%", md: "80%" },
        }}
      >
        Stuff I’ve{" "}
        <Box
          component="span"
          sx={{ color: (theme) => theme.palette.custom.blue.main }}
        >
          Built{" "}
        </Box>
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mt: 2,
          textAlign: "justify",
        }}
      >
        From visual storytelling to interactive experiences, I’ve built projects
        that blend creativity with functionality. Each creation reflects my
        journey of transforming ideas into engaging digital solutions.
      </Typography>
    </>
  );
}
