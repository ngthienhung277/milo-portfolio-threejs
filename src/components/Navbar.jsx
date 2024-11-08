import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-11 h-9 rounded-lg bg-white items-center justify-center flex font-bold shadow-md "
      >
        <p className="blue-gradient_text">Milô</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Hangout
        </NavLink>
        {/* <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-blue-500" : "text-black"
          }
        >
          Projects
        </NavLink> */}
      </nav>
    </header>
  );
};

export default Navbar;
