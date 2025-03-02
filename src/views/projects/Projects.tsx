import WrapperComp from "../../global/components/WrapperComp";
import Hero from "./components/Hero";
import ProjectShowcase from "./components/ProjectShowcase";
import ContactComp from "../../global/components/ContactComp";
import InfiniteScrollComp from "../../global/components/InfiniteScrollComp";

export default function Projects() {
  return (
    <>
      <WrapperComp>
        <Hero />
        <ProjectShowcase />
      </WrapperComp>
      <InfiniteScrollComp />
      <WrapperComp>
        <ContactComp />
      </WrapperComp>
    </>
  );
}
