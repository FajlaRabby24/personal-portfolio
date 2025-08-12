import { FaBarsProgress } from "react-icons/fa6";

const Navbar = () => {
  const links = (
    <>
      <li>
        <a
          className="text-black md:text-white font-bold md:font-semibold "
          href="#home"
        >
          Home
        </a>
      </li>
      <li>
        <a
          className="text-black md:text-white font-bold md:font-semibold "
          href="#about-me"
        >
          About
        </a>
      </li>
      <li>
        <a
          className="text-black md:text-white font-bold md:font-semibold "
          href="#skills"
        >
          Skills
        </a>
      </li>
      <li>
        <a
          className="text-black md:text-white font-bold md:font-semibold "
          href="#projects"
        >
          Projects
        </a>
      </li>
      <li>
        <a
          className="text-black md:text-white font-bold md:font-semibold "
          href="#contact"
        >
          Contact
        </a>
      </li>
    </>
  );

  return (
    <nav className="max-w-7xl mx-auto ">
      <div className="navbar">
        <div className="navbar-start gap-3">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="md:hidden">
              <FaBarsProgress color="white" size={25} />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className=" text-xl">
            <h3 className="font-bold text-4xl  md:text-5xl text-white ">FR</h3>
          </a>
        </div>
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
        </div>
        <div className="navbar-end">
          <button className="button">Resume</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
