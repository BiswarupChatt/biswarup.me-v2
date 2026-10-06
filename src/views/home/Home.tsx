import WrapperComp from "../../global/components/WrapperComp";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import ContactComp from "../../global/components/ContactComp";
import InfiniteScrollComp from "../../global/components/InfiniteScrollComp";

export default function Home() {
  return (
    <>
      <title>Home - Full Stack Developer, MERN Stack Developer</title>
      <WrapperComp>
        <Hero />
      </WrapperComp>
      <InfiniteScrollComp />
      <WrapperComp>
        <AboutMe />
        <ContactComp />
      </WrapperComp>
    </>
  );
}
