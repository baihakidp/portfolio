import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectItem from "./ProjectItem";
import Netflix from "../assets/project1.png";
import Customer from "../assets/customer.png";
import Admin from "../assets/admin.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-black text-xl tracking-widest">Projects</p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Netflix Clone"
            utils="Next JS"
            backgroundImg={Netflix}
            projectUrl="/netflixclone"
          />
          <ProjectItem
            title="Rental Car Customer"
            utils="React"
            backgroundImg={Customer}
            projectUrl="/rentalcustomer"
          />
          <ProjectItem
            title="Rental Car Admin"
            utils="React"
            backgroundImg={Admin}
            projectUrl="/rentaladmin"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
