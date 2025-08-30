import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scrolling
    });
  };
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 onClick={scrollToTop} className="text-xl font-bold"><Link to="/" className="hover:text-teal-400">Nirmal Barot</Link></h1>
      <div className="space-x-6">
        <a href="#about" className="hover:text-teal-400">About</a>
        <a href="#skills" className="hover:text-teal-400">Skills</a>
        <a href="#projects" className="hover:text-teal-400">Projects</a>
        <a href="#contact" className="hover:text-teal-400">Contact</a>
        <Link to="/certificates" className="hover:text-teal-400">Certificates</Link>
      </div>
    </nav>
  );
};

export default Navbar;
