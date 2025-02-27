import { Route, Routes } from "react-router-dom";
import About from "../views/about/About";
import Projects from "../views/projects/Projects";
import Home from "../views/home/Home";

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
