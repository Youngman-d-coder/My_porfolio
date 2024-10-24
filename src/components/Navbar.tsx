import React from "react";
import { Link } from "react-router-dom";

// Define the props for the Navbar component
interface NavbarProps {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar, isSidebarOpen }) => {
  const logo = ["{ . /NC }"];

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-800 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-semibold"> {logo} </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            <Link to="/" className="hover:text-blue-800 hover:bg-white p-2">
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-800 hover:bg-white p-2"
            >
              About
            </Link>
            <Link
              to="/projects"
              className="hover:text-blue-800 hover:bg-white p-2"
            >
              Projects
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-800 hover:bg-white p-2"
            >
              Contact
            </Link>
            <Link
              to="/skills"
              className="hover:text-blue-800 hover:bg-white p-2"
            >
              Skills
            </Link>
          </div>

          {/* Hamburger for mobile */}
          <div className="md:hidden">
            <button
              className="hover:text-blue-800 hover:bg-white p-2 focus:outline-none"
              onClick={toggleSidebar}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isSidebarOpen && (
        <div className="md:hidden bg-blue-800 text-white p-4 space-y-2">
          <Link
            to="/"
            className="block hover:text-blue-800 hover:bg-white p-2"
            onClick={toggleSidebar}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block hover:text-blue-800 hover:bg-white p-2"
            onClick={toggleSidebar}
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block hover:text-blue-800 hover:bg-white p-2"
            onClick={toggleSidebar}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="block hover:text-blue-800 hover:bg-white p-2"
            onClick={toggleSidebar}
          >
            Contact
          </Link>
          <Link
            to="/skills"
            className="block hover:text-blue-800 hover:bg-white p-2"
            onClick={toggleSidebar}
          >
            Skills
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
