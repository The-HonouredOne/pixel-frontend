import React, { useState } from "react";
import pixellogo from "../assets/canvapixel.png";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-transparent lg:pt-5 lg:px-10 pt-2 ">
      <div className="container  mx-auto flex items-center justify-between  px-4 py-4">
        {/* Logo -------------------------------------------------------------------------------------*/}
        <div className="w-28">
         <Link to='/jobs'>
          <img src={pixellogo} alt="logo" className="w-full h-auto" />
         </Link>
        </div>

        {/* Desktop Nav------------------------------------------------------------------------- */}
        <ul className="hidden md:flex gap-6 items-center text-white font-medium">
          {["Jobs", "Companies", "About", "Contact"].map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) =>
                  `px-3 py-1 rounded-2xl hover:text-blue-200 ${isActive ? "bg-gray-600/60 text-blue-200 shadow" : ""
                  }`
                }
              >
                {item}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Buttons -----------------------------------------------------------------------*/}
        <div className="hidden md:flex gap-4">
          <button className="text-white">Login</button>
          <button className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button ----------------------------------------------*/}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu --------------------------------------------*/}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 text-white absolute top-20 left-0 w-full px-6 py-4">
          <ul className="flex flex-col gap-4 text-lg">
            {["Jobs", "Companies", "About", "Contact"].map((item, idx) => (
              <li key={idx}>
                <NavLink
                  to={`/${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3">
            <button className="w-full border border-white py-2 rounded-lg">
              Login
            </button>
            <button className="w-full py-2 rounded-lg bg-blue-500 hover:bg-blue-600">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
