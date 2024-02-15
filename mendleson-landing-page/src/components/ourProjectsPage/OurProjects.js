import React from "react";
import ProjectImage1 from "../../assets/Our Project_ 1 img 1.png";
import ProjectImage2 from "../../assets/Our Project _ 2 img 1.png";
import ProjectImage3 from "../../assets/Our Project_ 3 img 1.png";
import Group33 from "../../assets/Group 33.png";

const OurProjects = () => {
  return (
    <div className="mt-40 text-black md:mt-60 lg:mt-48">
      {/* Section Title */}
      <h2 className="text-4xl rubik-medium mb-12 lg:text-5xl lg:rubik-medium lg:flex lg:flex-col lg:justify-center lg:items-center">
        OUR PROJECTS
        <img src={Group33} className="py-2 w-4/5 md:w-[54%] lg:w-[52%] xl:w-[30%]" alt="" />
      </h2>

      {/* First Part: Single Image */}
      <div className="flex flex-col gap-y-6 lg:flex-row lg:justify-center lg:gap-x-6">
        <div className="">
          <img src={ProjectImage1} alt="Project 1" className="lg:w-full" />
        </div>

        {/* Second Part: Two Images in 2 Rows */}
        <div className="flex flex-col gap-y-6 lg:gap-y-6">
          {/* Project Image 2 */}
          <div>
            <img src={ProjectImage2} alt="Project 2" className="lg:w-full" />
          </div>
          {/* Project Image 3 */}
          <div>
            <img src={ProjectImage3} alt="Project 3" className="lg:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
