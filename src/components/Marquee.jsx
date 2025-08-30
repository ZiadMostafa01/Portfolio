import Marquee from "react-fast-marquee";
import ReactIcon from "../assets/images/svg/React-Logo-Dark.svg";
import TailwindIcon from "../assets/images/svg/Tailwind-Logo-Dark.svg";
import JavaScriptIcon from "../assets/images/svg/JavaScript-Logo.svg";
import HtmlIcon from "../assets/images/svg/Html-5-Logo.svg";
import CSSIcon from "../assets/images/svg/CSS-3-Logo.svg";
import NodeJSIcon from "../assets/images/svg/Nodejs-Logo.svg";
import NextJSIcon from "../assets/images/svg/Nextjs-Logo.svg";
import JavaScriptDarkMode from "../assets/images/skills-icons/JavaScript-Icon-Light.png";
import HtmlDarkMode from "../assets/images/skills-icons/Html5-Icon-Light.png";
import CSSDarkMode from "../assets/images/skills-icons/CSS3-Icon-Light.png";
import TailwindDarkMode from "../assets/images/skills-icons/Tailwind-Icon-Light.png";
import ReactDarkMode from "../assets/images/skills-icons/React-Icon-Light.png";

function BrandSlider() {
  return (
    <div className="relative bg-[var(--bg-dark-primary)] h-24 overflow-hidden ">
    {/* طبقة التدرج للجانب الأيسر */}
    <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[var(--bg-dark-primary)] to-transparent"></div>

    {/* طبقة التدرج للجانب الأيمن */}
    <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[var(--bg-dark-primary)] to-transparent"></div>
    {/* bg-[#09090b] */}
    <Marquee
      speed={100}
      gradient={false} // نعطيل التدرج المدمج
      className="h-full"
    >
      <div className="flex items-center h-full gap-20 px-4">
        {/* <img src={ReactIcon} className="h-12" alt="brand" /> */}
        {/* <img src={TailwindIcon} className="h-12" alt="brand" />
        <img src={JavaScriptIcon} className="h-12" alt="brand" />
        <img src={HtmlIcon} className="h-12" alt="brand" />
        <img src={CSSIcon} className="h-12" alt="brand" /> */}
        {/* <img src={NodeJSIcon} className="h-20" alt="brand" />
        <img src={NextJSIcon} className="h-20 " alt="brand" /> */}
        <img src={JavaScriptDarkMode} className="h-12 " alt="brand" />
        <img src={HtmlDarkMode} className="h-12 " alt="brand" />
        <img src={CSSDarkMode} className="h-12 " alt="brand" />
        <img src={TailwindDarkMode} className="h-10 " alt="brand" />
        <img src={ReactDarkMode} className="h-12 " alt="brand" />
      </div>
    </Marquee>
  </div>
  );
}
export default BrandSlider;

 
