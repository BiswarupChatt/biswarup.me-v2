import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardMedia from "@mui/material/CardMedia";
import myFitnessHub from "../../../assets/projects/my-fitness-hub.webp";
import rangmashal from "../../../assets/projects/rangmashal.webp";
import sunosea from "../../../assets/projects/sun-o-sea.webp";
import ButtonComp from "../../../global/components/ButtonComp";

interface Project {
  name: string;
  description: string;
  image: string;
  liveLink: string;
  codeLink?: string;
  backendCodeLink?: string;
}

const projects: Project[] = [
  {
    name: "My Fitness Hub",
    description:
      "My Fitness Hub is a full-stack platform designed for independent fitness coaches, offering an ideal solution for managing their clients. Built with Context API, Redux, and Material-UI for a seamless front-end experience, it integrates payment processing, Node.js, and MongoDB on the back end to deliver a robust, scalable tool for fitness professionals.",
    image: myFitnessHub,
    liveLink: "https://my-fitness-hub-fe.vercel.app/",
    codeLink: "https://github.com/BiswarupChatt/my-fitness-hub-fe",
    backendCodeLink: "https://github.com/BiswarupChatt/my-fitness-hub-be",
  },
  {
    name: "Rangmashal",
    description:
      "Rangmashal is a responsive website crafted for an NGO seeking to establish a strong digital presence. I developed this project with a focus on the front end, leveraging React and Material-UI to create an intuitive and visually appealing interface that adapts seamlessly across all screen sizes.",
    image: rangmashal,
    liveLink: "https://rangmashal.org.in/",
    codeLink: "https://github.com/BiswarupChatt/rangmashal",
  },
  {
    name: "Sun O Sea Design House",
    description:
      "Sun O Sea Design House is a responsive website created to enhance the digital presence of a design-focused entity. Built with a front-end emphasis, I utilized React and Material-UI to craft an engaging and user-friendly interface that delivers a seamless experience across all screen sizes.",
    image: sunosea,
    liveLink: "https://www.sunoseadesignhouse.in/",
  },
];

const ProjectShowcase: React.FC = () => {
  return (
    <Grid container spacing={3} justifyContent="center" sx={{ mt: 5 }}>
      {projects.map((project, index) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 4 }}
          sx={{ display: "flex" }}
          key={index}
        >
          <Card
            sx={{
              maxWidth: 345,
              mx: "auto",
              // boxShadow: 3,
              "&:hover": { boxShadow: 6 },
            }}
          >
            {/* Image with Overlay */}
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                height="200" // Fixed height for consistency, adjust as needed
                image={project.image}
                alt={project.name}
                sx={{ objectFit: "cover" }} // Ensure image fills space
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                  transition: "background-color 0.3s",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                  },
                }}
              />
              <ButtonComp
                variant="contained"
                href={project.liveLink}
                target="_blank"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  opacity: 0.9,
                  "&:hover": { opacity: 1 },
                  backgroundColor: (theme) => theme.palette.custom.blue.light,
                }}
              >
                Live Preview
              </ButtonComp>
            </Box>

            {/* Card Content */}
            <CardContent>
              <Typography variant="h5" fontWeight="bold">
                {project.name}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ my: 1 }}>
                {project.description}
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {project.codeLink && (
                  <ButtonComp
                    variant="contained"
                    href={project.codeLink}
                    target="_blank"
                    size="small"
                  >
                    Frontend Code
                  </ButtonComp>
                )}
                {project.backendCodeLink && (
                  <ButtonComp
                    variant="contained"
                    href={project.backendCodeLink}
                    target="_blank"
                    size="small"
                  >
                    Backend Code
                  </ButtonComp>
                )}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectShowcase;
