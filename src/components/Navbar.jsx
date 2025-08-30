function Navbar() {
  return (
    <header className="absolute left-1/2 -translate-x-1/2 z-10 mt-6 flex  items-center">
      <div className="text-white p-4 flex justify-center items-center w-5 h-5 border border-amber-300 rounded-full">
        xx
      </div>
      <nav className=" bg-[#04071d] border border-[#11152f] text-white px-2 sm:px-10 py-4 flex justify-center items-center gap-5 sm:gap-10 rounded-xl ">
        <a href="#About">About</a>
        <a href="#Projects">Projects</a>
        <a href="#Skills">Certifications</a>
        <a href="#Contact">Contact</a>
        <span class="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-cyan-400/0 via-cyan-400/90 to-cyan-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
      </nav>
    </header>
  );
}
export default Navbar;
