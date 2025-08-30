import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function HeroParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false }, // عشان ميغطيش الشاشة كلها
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            resize: true,
          },
        },
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          opacity: {
            value: 0.5,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            random: true,
            straight: false,
            outModes: "out",
          },
        },
      }}
      className="pointer-events-none absolute -top-36 left-1/2 h-[32rem] w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden lg:w-[60rem]"
    />
  );
}

export default HeroParticles;
