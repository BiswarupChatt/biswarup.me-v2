import WrapperComp from "../../global/components/WrapperComp";
import Experience from "./Components/Experience";
import ContactComp from "../../global/components/ContactComp";
import Hero from "./Components/Hero";

export default function About() {
  return (
    <>
      <title>
        About | biswarup.me | Full Stack Developer | MERN Stack Developer
      </title>
      <WrapperComp>
        <Hero />
        <Experience />
        <ContactComp />
      </WrapperComp>
    </>
  );
}
