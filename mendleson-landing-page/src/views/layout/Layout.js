import React from "react";
import HomePage from "../home/HomePage";
import About from "../about-us/About";
import OurServices from "../our-services/OurServices";
import OurProjects from "../our-project/OurProjects";
import OurTeam from "../our-team/OurTeam";
import OurClients from "../clients/OurClients";
import Footer from "./Footer";
import Navbar from "./Navbar";

// Main Component: Renders the main structure of the website
const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Home Page Section */}
      <HomePage />

      {/* About Us Section */}
      <About />

      {/* Our Services Section */}
      <OurServices />

      {/* Our Team Section */}
      <OurTeam />

      {/* Our Projects Section */}
      <OurProjects />

      {/* Our Clients Section */}
      <OurClients />

      {/* Footer Section */}
      <Footer />

      {/* Copyright Information */}
      <div className="text-black m-5 text-center">
        &copy; Copyright 2018 Mendleson Communication Pty Ltd
      </div>
    </div>
  );
};

export default Main;
