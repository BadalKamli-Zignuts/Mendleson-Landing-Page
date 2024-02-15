import React from "react";
import HomePage from "./homePage/HomePage";
import About from "./aboutUsPage/About";
import OurServices from "./ourServicesPage/OurServices";
import OurProjects from "./ourProjectsPage/OurProjects";
import OurTeam from "./ourTeamPage/OurTeam";
import OurClients from "./clientsPage/OurClients";
import Footer from "./footer/Footer";

// Main Component: Renders the main structure of the website
const Main = () => {
  return (
    <div>
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
