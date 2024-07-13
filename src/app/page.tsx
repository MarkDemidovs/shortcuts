import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Link from "next/link";

export default function Home() {
  return (<>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      </>
  );
}
