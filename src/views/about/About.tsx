import WrapperComp from "../../global/components/WrapperComp";
import Experience from "./Components/Experience";
import ContactComp from "../../global/components/ContactComp";
import Hero from "./Components/Hero";
import InfiniteScrollComp from "../../global/components/InfiniteScrollComp";

export default function About() {
  return (
    <>
      <title>
        About | biswarup.me | Full Stack Developer | MERN Stack Developer
      </title>
      <WrapperComp>
        <Hero />
        <Experience />
      </WrapperComp>
      <InfiniteScrollComp/>
      <WrapperComp>
        <ContactComp />
      </WrapperComp>
    </>
  );
}
