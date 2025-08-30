import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BrandSlider from "./components/Marquee";
// import HeroParticles from "./components/HeroParticles";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      {/* <div className="h-[1px] bg-zinc-700"></div> */}
      <Projects />
      {/* <div className="h-[1px] bg-zinc-700"></div> */}
      <Contact />
      {/* <Footer /> */}
      <a
        href="#Home"
        className="fixed bottom-5 right-5 w-10 h-10 shadow-lg flex justify-center items-center rounded-full border border-blue-500/20 text-blue-500"
      >
        <i className="fas fa-arrow-up"></i>
      </a>
    </>
  );
}

export default App;
