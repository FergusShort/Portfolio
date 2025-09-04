import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import InteractiveBackground from "./components/InteractiveBackground/InteractiveBackground";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import FloatingElements from "./components/FloatingElements/FloatingElements";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects";
import Gallery from "./sections/Gallery/Gallery";
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

function App() {
  return (
    <>
      <InteractiveBackground />
      <FloatingElements />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Gallery />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
