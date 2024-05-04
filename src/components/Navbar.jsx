import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-900  p-5 gap-6 flex items-center justify-center rounded-b-xl">
      <NavLink to="/" className="focus:text-[#dea733] duration-300">
        Home
      </NavLink>
      <NavLink to="/about" className="focus:text-[#dea733] duration-300">
        About
      </NavLink>
      <NavLink to="/contact" className="focus:text-[#dea733] duration-300">
        Contact
      </NavLink>
      <NavLink to="*" className="focus:text-[#dea733] duration-300">
        404
      </NavLink>
    </nav>
  );
};

export default Navbar;
