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
      <Typography variant="h3" fontWeight="bold" sx={{ width: "80%" }}>
        Let Me Take Care of Your Websites
      </Typography>
      <Typography
        variant="h6"
        sx={{ width: "80%", mt: 2, textAlign: "justify" }}
      >
        As a Full Stack Developer skilled in the MERN Stack , I build
        responsive, high-performance websites and web applications. Using
        technoligies like JavaScript, TypeScript, React, Redux and Redux
        Toolkit, I craft everything from online stores to apps that grow with
        you— all with clean code and awesome design.
      </Typography>
      <Box sx={{ display: "flex", gap: 1, mt: 2, alignItems: "center" }}>
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
