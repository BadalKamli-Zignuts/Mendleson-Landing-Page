import React, { useState } from "react";
import Logo from "../../assets/logo-1 1.png";

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent text-black roboto-regular">
      <div className="mx-auto">
        <div className="flex justify-between items-center text-nowrap">
          {/* Logo */}
          <div>
            <a href="/logo" className="font-bold text-lg">
              <img className="w-1/2 lg:w-full" src={Logo} alt="Logo" />
            </a>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="lg:flex hidden">
            <a href="/aboutUs" className="mx-4">
              About Us
            </a>
            <a href="/services" className="mx-4">
              Services
            </a>
            <a href="/team" className="mx-4">
              Team
            </a>
            <a href="/clients" className="mx-4">
              Clients
            </a>
            <a href="contactUs" className="mx-4">
              Contact Us
            </a>
          </div>
          
          {/* Hamburger Icon for Small Screens */}
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        </div>
        
        {/* Responsive Menu for Small Screens */}
        {isOpen && (
          <div className="flex flex-col items-end z-100">
            <div className="flex flex-col w-1/2 text-sm p-1 rounded-lg bg-gray-50 border border-gray-200 items-end md:text-base lg:hidden">
              <a
                href="/aboutUs"
                className="w-full border-b-2 hover:bg-gray-200 rounded-md p-1"
              >
                About Us
              </a>
              <a
                href="/services"
                className="w-full border-b-2 hover:bg-gray-200 rounded-md p-1"
              >
                Services
              </a>
              <a
                href="/team"
                className="w-full border-b-2 hover:bg-gray-200 rounded-md p-1"
              >
                Team
              </a>
              <a
                href="/clients"
                className="w-full border-b-2 hover:bg-gray-200 rounded-md p-1"
              >
                Clients
              </a>
              <a
                href="/contactUs"
                className="w-full border-b-2 hover:bg-gray-200 rounded-md p-1"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
