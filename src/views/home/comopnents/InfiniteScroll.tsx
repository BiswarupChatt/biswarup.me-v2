import React from "react";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import javascript from "../../../assets/icons/js.png";
import typeScript from "../../../assets/icons/typescript.png";
import reactjs from "../../../assets/icons/react.png";
import redux from "../../../assets/icons/redux.png";
import nodejs from "../../../assets/icons/nodejs.png";
import expressjs from "../../../assets/icons/expressjs.png";
import mongodb from "../../../assets/icons/mongodb.png";
import html5 from "../../../assets/icons/html5.png";
import css from "../../../assets/icons/css.png";
import tailwind from "../../../assets/icons/tailwind.png";
import materialUi from "../../../assets/icons/material-ui.png";
import bootstrap from "../../../assets/icons/bootstrap.png";
import vercel from "../../../assets/icons/vercel.png";
import postman from "../../../assets/icons/postman.png";
import TanStack from "../../../assets/icons/TanStack.png";
import Slider from "react-slick";

interface TechItem {
  id: number;
  name: string;
  icon: string;
}

const techItems: TechItem[] = [
  {
    id: 1,
    name: "JavaScript",
    icon: javascript,
  },
  { id: 2, name: "TypeScript", icon: typeScript },
  { id: 3, name: "React.js", icon: reactjs },
  { id: 4, name: "Redux", icon: redux },
  { id: 5, name: "Node.js", icon: nodejs },
  { id: 6, name: "Express.js", icon: expressjs },
  { id: 7, name: "MongoDB", icon: mongodb },
  { id: 8, name: "HTML5", icon: html5 },
  { id: 9, name: "CSS", icon: css },
  { id: 10, name: "Tailwind CSS", icon: tailwind },
  { id: 11, name: "Material-UI", icon: materialUi },
  { id: 12, name: "Bootstrap", icon: bootstrap },
  { id: 13, name: "Vercel", icon: vercel },
  { id: 14, name: "Postman", icon: postman },
  { id: 15, name: "TanStack Query", icon: TanStack },
];

const TechCard: React.FC<{ item: TechItem }> = ({ item }) => (
  <Box
    sx={{
      minWidth: 120,
      height: 30,
      backgroundColor: (theme) => theme.palette.secondary.main,
      margin: "0 8px",
      borderRadius: 15,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "14px",
      cursor: "pointer",
      transition: "transform 0.2s",
      "&:hover": {
        transform: "scale(1.05)",
        backgroundColor: (theme) => theme.palette.secondary.dark,
      },
      flexShrink: 0,
    }}
  >
    <img
      src={item.icon}
      alt={item.name}
      style={{ marginRight: 8, width: "15px" }}
    />
    {item.name}
  </Box>
);

const InfiniteScroll: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    variableWidth: true, 
  };

  return (
    <Box sx={{ width: "95vw", overflow: "hidden", padding: "16px 0" }}>
      <Slider {...settings}>
        {techItems.map((item) => (
          <TechCard key={item.id} item={item} />
        ))}
      </Slider>
    </Box>
  );
};

export default InfiniteScroll;
