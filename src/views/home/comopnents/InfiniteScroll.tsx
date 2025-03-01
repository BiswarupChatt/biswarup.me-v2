import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";

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
      style={{
        marginRight: 8,
        // height: "15px",
        width: "15px",
      }}
    />
    {item.name}
  </Box>
);

const InfiniteScroll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Duplicate items three times for smooth looping
  const loopedItems: TechItem[] = [
    ...techItems,
    ...techItems,
    ...techItems,
  ].map((item, index) => ({
    ...item,
    id: index + 1,
  }));

  // Calculate the width of one complete set of items
  const singleSetWidth = techItems.length * 136; // 120px width + 16px total margin

  // Infinite scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    const scrollSpeed = 1; // Adjust speed here

    const animateScroll = () => {
      if (!scrollContainer) return;

      // Increment scroll position
      scrollContainer.scrollLeft += scrollSpeed;

      // When reaching the end of first set, reset to start
      if (scrollContainer.scrollLeft >= singleSetWidth) {
        scrollContainer.scrollLeft -= singleSetWidth;
      }

      // Continue animation
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animateScroll);

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [singleSetWidth]);

  return (
    <Box
      sx={{
        width: "95vw",
        overflow: "hidden",
        padding: "16px 0",
      }}
    >
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          overflowX: "hidden",
          whiteSpace: "nowrap",
          scrollBehavior: "smooth",
          padding: "0 16px",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {loopedItems.map((item) => (
          <TechCard key={item.id} item={item} />
        ))}
      </Box>
    </Box>
  );
};

export default InfiniteScroll;
