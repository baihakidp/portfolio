import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="maw-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm -tracking-widest text-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-black">Baihaki</span>
          </h1>
          <h1 className="py-4 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            As a front-end web developer, my primary focus is on building
            responsive and visually engaging web applications.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://www.linkedin.com/in/baihakidemiandra/"
              target="_blank"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://github.com/baihakidp"
              target="_blank"
            >
              <FaGithub />
            </Link>
            <Link
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              href="https://wa.me/6285155430035"
              scroll={false}
              target="_blank"
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1P2718S77za94pI7Hsvl_4t0SHSrjG11n/view"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
              target="_blank"
            >
              <BsFillPersonLinesFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
