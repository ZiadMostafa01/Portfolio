const btnStyles = {
  primary: "bg-indigo-700 py-3 px-4 rounded-md cursor-pointer",
  secondary:
    "bg-transparent text-indigo-500 border border-indigo-700 py-3 px-4 rounded-md hover:bg-indigo-700 hover:text-white transition duration-300 cursor-pointer",
};
const sideBarBtns = {
  primary: "cursor-pointer",
  secondary: "",
};
function Sidebar({ onSelect }) {
  return (
    <aside className="w-[300px] flex flex-col justify-between items-center bg-[#0d0f22] text-white py-16">
      <h1>Ziad</h1>
      <ul className="flex flex-col gap-5">
        <li>
          <button
            className={`${sideBarBtns.primary}`}
            onClick={() => onSelect("hero")}
          >
            HOME
          </button>
        </li>
        <li>
          <button
            className={`${sideBarBtns.primary}`}
            onClick={() => onSelect("about")}
          >
            ABOUT
          </button>
        </li>
        <li>
          <button
            className={`${sideBarBtns.primary}`}
            onClick={() => onSelect("projects")}
          >
            PROJECTS
          </button>
        </li>
        <li>
          <button
            className={`${sideBarBtns.primary}`}
            onClick={() => onSelect("contact")}
          >
            CONTACT
          </button>
        </li>
      </ul>
      <button className={`${btnStyles.primary}`}>
        <i className="fa-solid fa-download mr-2"></i>
        <span>Downlaod CV</span>
      </button>
      <div style={{ opacity: 1, transform: "none" }}>
        <button class="group relative rounded-full p-px text-sm/6 text-zinc-400 duration-300 hover:text-zinc-100 hover:shadow-glow cursor-pointer hover:scale-[1.01] ">
          {" "}
          <span
            className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl opacity-0
                        transition-opacity duration-500 group-hover:opacity-100"
          ></span>
          <span class="absolute inset-0 overflow-hidden rounded-full">
            <span class="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
          </span>
          <div class="relative z-10 rounded-full bg-zinc-950 px-4 py-1.5 ring-1 ring-white/10">
            <i className="fa-solid fa-download mr-2"></i>
            <span>Downlaod CV</span>
          </div>
          <span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
        </button>
      </div>
    </aside>
  );
}
export default Sidebar;
