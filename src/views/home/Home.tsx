import { Avatar, Box, Typography } from "@mui/material";
import WrapperComp from "../../global/components/WrapperComp";
import ProfileImage from "../../assets/profile-img.jpg";

export default function Home() {
  return (
    <WrapperComp>
      <title>Home</title>
      <Box sx={{ mb: 4 }}>
        <Avatar src={ProfileImage} sx={{ width: "80px", height: "80px" }} />
      </Box>
      <Typography variant="h3" fontWeight="bold" sx={{ width: "80%" }}>
        Software designer, founder, and amateur astronaut.
      </Typography>
    </WrapperComp>
  );
}
