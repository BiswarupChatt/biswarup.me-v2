import { Avatar, Box, Typography } from "@mui/material";
import ProfileImage from "../../../assets/profile-img.jpg";
import SocialIcon from "../../../global/components/SocialIcon";

import { useNavigate } from "react-router-dom";
import ButtonComp from "../../../global/components/ButtonComp";

export default function Hero() {
  const navitage = useNavigate();
  return (
    <>
      <Box sx={{ mb: 4 }}>
        <Avatar src={ProfileImage} sx={{ width: "80px", height: "80px" }} />
      </Box>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ width: { xs: "100%", md: "80%" } }}
      >
        Let Me{" "}
        <Box
          component="span"
          sx={{ color: (theme) => theme.palette.custom.blue.main }}
        >
          Take Care of Your{" "}
        </Box>
        Web Apps
      </Typography>
      <Typography
        variant="h6"
        sx={{ width: { xs: "100%", md: "80%" }, mt: 2, textAlign: "justify" }}
      >
        A Full Stack Developer skilled in the MERN Stack. I build responsive,
        high-performance websites and web applications using technologies like
        JavaScript, TypeScript, React, Redux Toolkit,Node.js, Express.js, and
        MongoDB. From online stores to scalable apps, I focus on delivering
        clean code and awesome design.
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          mt: 2,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <SocialIcon />
        <ButtonComp
          variant="outlined"
          sx={{ minWidth: "150px" }}
          onClick={() => navitage("/cv")}
        >
          My CV
        </ButtonComp>
      </Box>
    </>
  );
}
