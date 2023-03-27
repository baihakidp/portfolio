import Image from "next/image";
import React from "react";
import admin from "../assets/admin.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const rentaladmin = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10'">
          <Image
            src={admin}
            className="absolute -z-10"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2 ">
            <h2 className="py-2">Netflix Clone</h2>
            <h3>Next JS / Tailwind / Firebase</h3>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="py-2">Overview</h2>
          <p>
            A group project using React JS. You can try by log in with the same
            email on customer website. Users are able to create, add, delete,
            edit car API.
          </p>
          <Link
            href="https://adminplatinum.vercel.app/dashboard"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          </Link>
          <Link
            href="https://github.com/baihakidp/adminplatinum"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-1">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Redux
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" /> Binar API
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default rentaladmin;
