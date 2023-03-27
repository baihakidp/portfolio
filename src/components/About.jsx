import Image from "next/image";
import Link from "next/link";
import React from "react";
import myphoto from "../assets/my photo.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="text-xl tracking-widest uppercase text-black">About</p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I am a chemical analyst who is transitioning to become a front-end
            developer. Ever since I was a child, my fascination with technology
            and computers has been a constant part of my life. Fueled by this
            passion, I decided to embark on a career as a front-end developer.
            To achieve this goal, I enrolled in an intensive bootcamp program in
            late 2022, where I am eager to learn and master the latest tools and
            techniques in the field of front-end development.
          </p>
          <p className="py-2 text-gray-600">
            I am now spending my time building projects with Next JS, Tailwind
            CSS, Firebase, and still learning new technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={myphoto} className="rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default About;
