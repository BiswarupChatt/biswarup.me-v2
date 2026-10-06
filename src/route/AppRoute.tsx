import { lazy, Suspense } from "react";
import { Box, CircularProgress } from "@mui/material";
import { Route, Routes } from "react-router-dom";

const About = lazy(() => import("../views/about/About"));
const Projects = lazy(() => import("../views/projects/Projects"));
const Home = lazy(() => import("../views/home/Home"));
const Contact = lazy(() => import("../views/contact/Contact"));
const Cv = lazy(() => import("../views/cv/Cv"));

const routeFallback = (
  <Box sx={{ display: "flex", justifyContent: "center", py: 8, width: "100%" }}>
    <CircularProgress size={28} />
  </Box>
);

export default function AppRoute() {
  return (
    <Suspense fallback={routeFallback}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<Cv />} />
      </Routes>
    </Suspense>
  );
}
