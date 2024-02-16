import React from "react";
import AboutUsImage from "../../assets/about us 1.png";
import AboutUsContent from "./AboutUsContent";
import Asset5 from "../../assets/Asset 5 1.png";

const About = () => {
  return (
    <div className="lg:mt-16 text-black">
      {/* Main Container */}
      <div className="flex flex-col gap-y-16 lg:flex-row lg:items-center lg:justify-evenly ">
        {/* Image Section */}
        <div className="mt-20">
          <img src={AboutUsImage} alt="" className="" />
        </div>
        {/* Content Section */}
        <div className="w-full">
          <AboutUsContent />
        </div>
      </div>
      {/* Absolute Positioned Image */}
      <img
        src={Asset5}
        className="absolute left-0 w-1/3 md:w-1/4 lg:w-1/5"
        alt=""
      />
    </div>
  );
};

export default About;
