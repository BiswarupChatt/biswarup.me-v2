import { JSX, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TerminalIcon from "@mui/icons-material/Terminal";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CoPresentIcon from '@mui/icons-material/CoPresent';

// Icon map for dynamic rendering
const iconMap: Record<string, JSX.Element> = {
  terminal: <TerminalIcon />,
  code: <CodeIcon />,
  learning: <AutoStoriesIcon />,
  design: <DesignServicesIcon />,
  trendingUp: <TrendingUpIcon />,
  creativeHead: <CoPresentIcon />,
};

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: "React Js Developer",
      company: "RedoQ Software Services Pvt. Ltd.",
      date: "March 2025 (Currently Working)",
      description:
        "Solving complex development challenges by designing scalable, high-performance web applications.",
      icon: "terminal",
    },
    {
      title: "Full Stack Developer",
      company: "Hovsol Technologies Pvt. Ltd.",
      date: "Oct 2024 - March 2025 (6 mos)",
      description:
        "Developed and maintained scalable SaaS and CRM applications using the MERN stack. Collaborated on both client projects and in-house applications.",
      icon: "code",
    },
    {
      title: "Internship",
      company: "DCT Academy, Bangalore",
      date: "Dec 2023 - July 2024 (8 mos)",
      description:
        "Completed an extensive MERN stack internship focusing on building full-stack applications, APIs, and implementing modern development practices.",
      icon: "learning",
    },
    {
      title: "Career Transition",
      company: "",
      date: "Dec 2023 - September 2024 (10 mos)",
      description:
        "Transitioned from graphic design to full-stack development. Enhanced coding skills, learned advanced React, Node.js, and modern web frameworks.",
      icon: "trendingUp",
    },
    {
      title: "Graphic Designer",
      company: "Freelance",
      date: "2019 - 2024 (5 yrs)",
      description:
        "Delivered creative design solutions, including branding, UI design, and marketing materials for various clients across multiple industries.",
      icon: "design",
    },
    {
      title: "Creative Head",
      company: "Jogger Dada",
      date: "2019 - April 2024 (5 yrs 4 mos)",
      description:
        "Led the creative vision, branding, and design strategy. Oversaw all aspects of visual identity, digital media, and product design.",
      icon: "creativeHead",
    },
  ];

  // Display the first 3 experiences or all if showAll is true
  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <Box sx={{ my: 5, display: "flex", flexDirection: "column" }}>
      {/* Header */}
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
          Experience
        </Typography>
      </Box>

      {/* Timeline */}
      <Timeline position="alternate-reverse">
        {displayedExperiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {exp.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot
                sx={{ bgcolor: (theme) => theme.palette.custom.blue.main }}
              >
                {iconMap[exp.icon] || <WorkIcon />}
              </TimelineDot>
              {index < experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6" component="span">
                {exp.title}
              </Typography>
              {exp.company && (
                <Typography variant="subtitle1" color="textSecondary">
                  {exp.company}
                </Typography>
              )}
              {exp.description && (
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {exp.description}
                </Typography>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>

      {/* Show More / Show Less Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Button
          variant="text"
          onClick={() => setShowAll(!showAll)}
          endIcon={
            showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />
          }
        >
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </Box>
    </Box>
  );
}
