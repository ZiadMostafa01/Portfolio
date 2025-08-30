import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 300 ? setshowScrollBtn(true) : setshowScrollBtn(false);
    });
  }, []);
  const [showScrollBtn, setshowScrollBtn] = useState(false);
  return (
    <>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <Contact />

        <a
          href="#Home"
          style={{opacity: showScrollBtn ? 1 : 0}}
          className="fixed bottom-5 right-5 w-10 h-10 shadow-lg flex justify-center items-center rounded-full transition duration-700 border border-blue-500/20 text-blue-500"
        >
          <i className="fas fa-arrow-up"></i>
        </a>
   
    </>
  );
}

export default App;
