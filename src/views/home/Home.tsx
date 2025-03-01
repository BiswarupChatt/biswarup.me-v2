import { Avatar, Box, Button, IconButton, Typography } from "@mui/material";
import WrapperComp from "../../global/components/WrapperComp";
import ProfileImage from "../../assets/profile-img.jpg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import InfiniteScroll from "./comopnents/InfiniteScroll";

export default function Home() {
  return (
    <>
      <WrapperComp>
        <title>Home - Full Stack Developer, MERN Stack Developer</title>
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
          <Button
            variant="contained"
            sx={{
              minWidth: "100px",
              my: 2,
              fontWeight: "bold",
            }}
          >
            Know More About Me
          </Button>
          <Button
            variant="outlined"
            sx={{
              minWidth: "150px",
              my: 2,
              fontWeight: "bold",
              borderColor: "primary.main",
              color: "primary.main",
              "&:hover": {
                backgroundColor: "primary.main",
                color: (theme) => theme.palette.background.default,
                borderColor: "transparent",
                transition: "all 0.3s ease",
              },
            }}
          >
            My CV
          </Button>
        </Box>
        <Box>
          <IconButton color="primary">
            <LinkedInIcon />
          </IconButton>
          <IconButton color="primary">
            <GitHubIcon />
          </IconButton>
          <IconButton color="primary">
            <InstagramIcon />
          </IconButton>
        </Box>
      </WrapperComp>
      <InfiniteScroll />
      <WrapperComp>
        <Box
          sx={{
            mx: "auto",
            backgroundColor: (theme) => theme.palette.secondary.main,
          }}
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima magni
          exercitationem corrupti tempore temporibus. Laborum earum debitis
          minus, at nesciunt fugit voluptas dicta quaerat voluptatem porro
          repudiandae, tempore, placeat praesentium.{" "}
        </Box>
      </WrapperComp>
    </>
  );
}
