import StarfieldBackground from "./Particles";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import heroAnimation2 from "../assets/animations/space boy developer.json";

function Hero() {
  return (
    <div
      id="Home"
      className="h-dvh flex flex-col justify-center items-center bg-[var(--bg-primary-dark)] bg-cover text-[var(--text-main-dark)] relative isolate transform-gpu "
    >
      {" "}
      {/* BackgroundEffect */}
      <StarfieldBackground />
      <div className="absolute inset-0 text-white text-center -z-10 bg-[image:radial-gradient(80%_65%_at_50%_-20%,hsl(206,81.9%,65.3%,0.5),rgba(255,255,255,0))]">
        {" "}
      </div>
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-white/5 [mask-image:radial-gradient(75%_50%_at_top_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero"
            width="80"
            height="80"
            x="50%"
            y="-1"
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none"></path>
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#hero)"
        ></rect>
      </svg>
      <div
        data-aos="fade-up"
        className="relative z-10 mx-auto max-w-xl md:max-w-2xl lg:max-w-5xl text-center -translate-y-10"
      >
        <div className="w-56 mx-auto">
          <Lottie animationData={heroAnimation2} loop={true} />
        </div>
        <h1 className="text-[var(--text-title-dark)] mb-3  font-bold tracking-tight text-3xl/[1.07] md:text-5xl/[1.07] lg:text-7xl/[1.07]">
          Hi, I'm{" "}
          <span className="animate-pulse text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] to-blue-300 font-DGAsca">
            Ziad Mostafa
          </span>
        </h1>
        <h1 className="font-bold tracking-tight text-[var(--text-title-dark)] text-xl/[1.07] md:text-2xl/[1.07] lg:text-4xl/[1.07]">
          <Typewriter
            words={[
              "A Front-End Developer passionate about building beautiful and functional web experiences.",
            ]}
            loop={1} // الجملة تتكتب مرة وخلاص
            cursor
            cursorStyle="|"
            typeSpeed={50} // سرعة الكتابة
          />
        </h1>
        <p
          className="mt-6 font-medium text-[var(--text-subtitle-dark)] text-md  md:text-xl"
          style={{ opacity: 1, transform: "none" }}
        >
          Crafting exceptional web experiences with creativity and precision
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col items-center justify-center ">
          <div className="flex gap-5 mb-3">
            <div style={{ opacity: 1, transform: "none" }}>
              <a
                href="#Projects"
                className="flex group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
              >
                {" "}
                <span
                  className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl opacity-0
                        transition-opacity duration-500 group-hover:opacity-100"
                ></span>
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative z-10 rounded-full bg-zinc-950 px-6 py-2 ring-1 ring-white/10">
                  <i className="fa-solid fa-eye mr-2"></i>
                  <span>View My Work</span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </a>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <a
                href="#Contact"
                className="flex group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
              >
                {" "}
                <span
                  className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl opacity-0
                        transition-opacity duration-500 group-hover:opacity-100"
                ></span>
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                </span>
                <div className="relative z-10 rounded-full bg-zinc-950 px-6 py-2 ring-1 ring-white/10">
                  <i className="fas fa-paper-plane mr-2"></i>
                  <span>Contact Me</span>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
              </a>
            </div>
          </div>
          <div className="mb-6">
            <a
              href="/Portfolio/files/ZiadMostafaCV.pdf"
              download
              className="flex group relative rounded-full  p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow"
            >
              {" "}
              <span
                className="absolute inset-0  rounded-full bg-cyan-500/30 blur-xl opacity-0
                        transition-opacity duration-500 group-hover:opacity-100"
              ></span>
              <span className="absolute inset-0  overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              </span>
              <div className="relative z-10  rounded-lg bg-zinc-950 hover:bg-transparent transition duration-300 px-6 py-2 ring-1 ring-white/10">
                <i className="fa-solid fa-download mr-2"></i>
                <span>Downlaod CV</span>
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
            </a>
          </div>
        </div>

        {/* Social-Links */}
        <div className="flex gap-4 justify-center text-white">
          <a
            href="https://www.facebook.com/ziad.mostafa.5245961"
            className="p-3 rounded-full backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
            <div className="relative z-10">
              <svg
                className="w-5 h-5 fill-current text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                viewBox="0 0 320 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M279.14 288l14.22-92.66h-88.91V127.42c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.1 44.38-121.1 124.72V195.3H22.89V288h81.36v224h100.17V288z" />
              </svg>
            </div>
          </a>
          <a
            href="https://github.com/ZiadMostafa01"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full backdrop-blur-lg border border-gray-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-gray-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-gray-500/50 hover:bg-gradient-to-tr hover:from-gray-500/10 hover:to-black/40 group relative overflow-hidden"
          >
            {/* تأثير اللمعة */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

            {/* أيقونة GitHub */}
            <div className="relative z-10">
              <svg
                className="w-5 h-5 fill-current text-gray-300 group-hover:text-white transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58
        0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74
        1.21.09 1.84 1.24 1.84 1.24 1.08 1.84 2.83 1.31 3.52 1.01.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95
        0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 3.01-.4
        c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22
        0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27
        0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                />
              </svg>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ziadmostafa-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-black/60 to-black/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-black/40 group relative overflow-hidden"
          >
            {/* تأثير اللمعة */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

            {/* أيقونة LinkedIn */}
            <div className="relative z-10">
              <svg
                className="w-5 h-5 fill-current text-blue-500 group-hover:text-blue-400 transition-colors duration-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20.45 20.45h-3.55v-5.4c0-1.29-.03-2.96-1.81-2.96-1.81 0-2.09 1.41-2.09 2.87v5.49H9.45V9h3.41v1.56h.05c.47-.89 1.61-1.81 3.31-1.81 3.54 0 4.19 2.33 4.19 5.36v6.34zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.11 20.45H3.56V9h3.55v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <a
        href="#About"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="8em"
          height="8em"
          viewBox="0 0 512 512"
        >
          <path
            fill="#2a81bf"
            d="M293.5 298a7.7 7.7 0 0 0-5.3 2L256 330.9L223.8 300a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z"
            opacity="0"
          >
            <animateTransform
              attributeName="transform"
              begin="-0.65s"
              calcMode="spline"
              dur="1.5s"
              keySplines=".55, 0, .1, 1; .55, 0, .1, 1"
              repeatCount="indefinite"
              type="translate"
              values="0 -30; 0 0; 0 30"
            />
            <animate
              attributeName="opacity"
              begin="-0.65s"
              calcMode="spline"
              dur="1.5s"
              keySplines=".55, 0, .1, 1; .55, 0, .1, 1"
              repeatCount="indefinite"
              values="0; 1; 0"
            />
          </path>
          <path
            fill="#2a81bf"
            d="M293.5 253a7.7 7.7 0 0 0-5.3 2L256 285.9L223.8 255a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z"
            opacity="0"
          >
            <animateTransform
              attributeName="transform"
              begin="-0.6s"
              calcMode="spline"
              dur="1.5s"
              keySplines=".55, 0, .1, 1; .55, 0, .1, 1"
              repeatCount="indefinite"
              type="translate"
              values="0 -30; 0 0; 0 30"
            />
            <animate
              attributeName="opacity"
              begin="-0.6s"
              calcMode="spline"
              dur="1.5s"
              keySplines=".55, 0, .1, 1; .55, 0, .1, 1"
              repeatCount="indefinite"
              values="0; 1; 0"
            />
          </path>
          <path
            fill="#2a81bf"
            d="M293.5 208a7.7 7.7 0 0 0-5.3 2L256 240.9L223.8 210a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z"
            opacity="0"
          >
            <animateTransform
              attributeName="transform"
              begin="-0.55s"
              calcMode="spline"
              dur="1.5s"
              keySplines=".55, 0, .1, 1; .55, 0, .1, 1"
              repeatCount="indefinite"
              type="translate"
              values="0 -30; 0 0; 0 30"
            />
            <animate
              attributeName="opacity"
              begin="-0.55s"
              calcMode="spline"
              dur="1.5s"
              keySplines=".55, 0, .1, 1; .55, 0, .1, 1"
              repeatCount="indefinite"
              values="0; 1; 0"
            />
          </path>
          <path
            fill="#2a81bf"
            d="M293.5 163a7.7 7.7 0 0 0-5.3 2L256 195.9L223.8 165a7.8 7.8 0 0 0-10.6 0a6.9 6.9 0 0 0 0 10l37.5 35.8a7.8 7.8 0 0 0 10.6 0l37.5-35.7a6.9 6.9 0 0 0 0-10.1a7.7 7.7 0 0 0-5.3-2.1Z"
            opacity="0"
          >
            <animateTransform
              attributeName="transform"
              begin="-0.5s"
              calcMode="spline"
              dur="1.5s"
              keySplines=".55, 0, .1, 1; .55, 0, .1, 1"
              repeatCount="indefinite"
              type="translate"
              values="0 -30; 0 0; 0 30"
            />
            <animate
              attributeName="opacity"
              begin="-0.5s"
              calcMode="spline"
              dur="1.5s"
              keySplines=".55, 0, .1, 1; .55, 0, .1, 1"
              repeatCount="indefinite"
              values="0; 1; 0"
            />
          </path>
        </svg>
      </a>
    </div>
  );
}
export default Hero;
