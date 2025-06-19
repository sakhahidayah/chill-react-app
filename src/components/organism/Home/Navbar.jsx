import NavbarItems from "../../molecules/NavbarItems";
function Navbar() {
  return (
    <>
      <nav className="bg-[#181A1C]  text-slate-400 px-5 py-2 lg:px-20 lg:py-6 border-b-2">
        <NavbarItems />
      </nav>
    </>
  );
}

export default Navbar;
