import { JSX, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TerminalIcon from "@mui/icons-material/Terminal";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CoPresentIcon from "@mui/icons-material/CoPresent";

// Icon map for dynamic rendering
const iconMap: Record<string, JSX.Element> = {
  terminal: <TerminalIcon />,
  code: <CodeIcon />,
  learning: <AutoStoriesIcon />,
  design: <DesignServicesIcon />,
  trendingUp: <TrendingUpIcon />,
  creativeHead: <CoPresentIcon />,
};

const formatDate = (date: Date) =>
  date.toLocaleString("en-US", { month: "short", year: "numeric" });

const formatDuration = (startDate: Date, endDate: Date) => {
  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    endDate.getMonth() -
    startDate.getMonth();

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years) {
    parts.push(`${years} ${years === 1 ? "yr" : "yrs"}`);
  }

  if (months) {
    parts.push(`${months} ${months === 1 ? "mo" : "mos"}`);
  }

  return parts.length ? parts.join(" ") : "1 mo";
};

const formatExperienceDate = (
  startDate: string,
  endDate?: string,
  isCurrent = false
) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const endLabel = isCurrent ? "Present" : formatDate(end);

  return `${formatDate(start)} - ${endLabel} (${formatDuration(start, end)})`;
};

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "RedoQ Software Services Pvt. Ltd.",
      startDate: "2025-03-01",
      isCurrent: true,
      description:
        "Solving complex development challenges by designing scalable, high-performance web applications.",
      icon: "terminal",
    },
    {
      title: "Full Stack Developer",
      company: "Hovsol Technologies Pvt. Ltd.",
      startDate: "2024-10-01",
      endDate: "2025-03-01",
      description:
        "Developed and maintained scalable SaaS and CRM applications using the MERN stack. Collaborated on both client projects and in-house applications.",
      icon: "code",
    },
    {
      title: "Internship",
      company: "DCT Academy, Bangalore",
      startDate: "2023-12-01",
      endDate: "2024-07-01",
      description:
        "Completed an extensive MERN stack internship focusing on building full-stack applications, APIs, and implementing modern development practices.",
      icon: "learning",
    },
    {
      title: "Career Transition",
      company: "",
      startDate: "2023-12-01",
      endDate: "2024-09-01",
      description:
        "Transitioned from graphic design to full-stack development. Enhanced coding skills, learned advanced React, Node.js, and modern web frameworks.",
      icon: "trendingUp",
    },
    {
      title: "Graphic Designer",
      company: "Freelance",
      startDate: "2019-01-01",
      endDate: "2024-01-01",
      description:
        "Delivered creative design solutions, including branding, UI design, and marketing materials for various clients across multiple industries.",
      icon: "design",
    },
    {
      title: "Creative Head",
      company: "Jogger Dada",
      startDate: "2019-01-01",
      endDate: "2024-04-01",
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

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {displayedExperiences.map((exp, index) => (
          <Box
            key={index}
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "40px 1fr", sm: "1fr 52px 1fr" },
              gap: { xs: 2, sm: 3 },
              alignItems: "start",
            }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: { xs: "none", sm: "block" },
                pt: 1,
                textAlign: "right",
              }}
            >
              {formatExperienceDate(exp.startDate, exp.endDate, exp.isCurrent)}
            </Typography>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                minHeight: "100%",
              }}
            >
              <Box
                sx={{
                  bgcolor: (theme) => theme.palette.custom.blue.main,
                  color: "common.white",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                {iconMap[exp.icon] || <WorkIcon />}
              </Box>
              {index < displayedExperiences.length - 1 && (
                <Box
                  sx={{
                    position: "absolute",
                    top: 40,
                    bottom: -24,
                    width: "2px",
                    bgcolor: "divider",
                  }}
                />
              )}
            </Box>
            <Box sx={{ py: 0.5 }}>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ display: { xs: "block", sm: "none" }, mb: 0.5 }}
              >
                {formatExperienceDate(
                  exp.startDate,
                  exp.endDate,
                  exp.isCurrent
                )}
              </Typography>
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
            </Box>
          </Box>
        ))}
      </Box>

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
