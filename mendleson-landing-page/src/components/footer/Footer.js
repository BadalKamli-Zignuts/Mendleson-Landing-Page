import React from "react";
import LinkedinLogo from "../../assets/linkedin 1.png";
import GoogleLogo from "../../assets/Group 20.png";
import FacebookLogo from "../../assets/facebook 1.png";

const Footer = () => {
  return (
    <footer className="mt-40 mb-10 text-black bg-[#BFDBFF] p-8 md:p-16">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:pl-10">
        {/* Social Column */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center">
              <img src={FacebookLogo} alt="Facebook Logo" />
              Facebook
            </li>
            <li className="flex gap-2 items-center">
              <img src={LinkedinLogo} alt="LinkedIn Logo" />
              LinkedIn
            </li>
            <li className="flex gap-2 items-center">
              <img src={GoogleLogo} alt="Google Logo" />
              Google
            </li>
          </ul>
        </div>

        {/* Explore Column */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2">
            <li>Services</li>
            <li>Team</li>
            <li>Clients</li>
          </ul>
        </div>

        {/* Contact Column */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p>
            {/* Sample Lorem Ipsum Text */}
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas.
          </p>
        </div>

        {/* Email Column */}
        <div className="col-span-1">
          <h3 className="text-xl font-semibold mb-4">Email</h3>
          {/* Email with word wrap */}
          <p className="break-words"> mendlesoncommunication@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
