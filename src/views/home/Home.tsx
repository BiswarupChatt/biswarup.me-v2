import WrapperComp from "../../global/components/WrapperComp";
import Hero from "./comopnents/Hero";
import InfiniteScroll from "./comopnents/InfiniteScroll";
import AboutMe from "./comopnents/AboutMe";
import ContactComp from "../../global/components/ContactComp";

export default function Home() {
  return (
    <>
      <title>Home - Full Stack Developer, MERN Stack Developer</title>
      <WrapperComp>
        <Hero />
      </WrapperComp>
      <InfiniteScroll />
      <WrapperComp>
        <AboutMe />
        <ContactComp />
      </WrapperComp>
    </>
  );
}
