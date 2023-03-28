import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => {
    if (
      router.asPath === "/netflixclone" ||
      router.asPath === "/rentaladmin" ||
      router.asPath === "/rentalcustomer"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20  z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image src={logo} className=" w-12 h-12" />
        <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
          <li
            onClick={() => {
              setNav(false);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="headerLink"
          >
            Home
          </li>
          <Link href="/#about" scroll={false}>
            <li className="headerLink">About</li>
          </Link>
          <Link href="/#skills" scroll={false}>
            <li className="headerLink">Skills</li>
          </Link>
          <Link href="/#projects" scroll={false}>
            <li className="headerLink">Projects</li>
          </Link>
          <Link href="/#contact" scroll={false}>
            <li className="headerLink">Contact</li>
          </Link>
        </ul>
        <div className="md:hidden" onClick={handleNav}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/90" : ""
        }
      >
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[65%]md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div className="border-b border-gray-300">
            <div className="flex w-full items-center justify-between">
              <Image src={logo} className=" w-12 h-12" />
              <div
                className="rounded-full shadow-sm shadow-gray-400 p-3 cursor-pointer"
                onClick={handleNav}
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul>
              <li
                onClick={() => {
                  setNav(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="headerLinkPhone"
              >
                Home
              </li>

              <Link href="/#about" scroll={true}>
                <li onClick={() => setNav(false)} className="headerLinkPhone">
                  About
                </li>
              </Link>
              <Link href="/#skills" scroll={false}>
                <li onClick={() => setNav(false)} className="headerLinkPhone">
                  Skills
                </li>
              </Link>
              <Link href="/#projects" scroll={false}>
                <li onClick={() => setNav(false)} className="headerLinkPhone">
                  Projects
                </li>
              </Link>
              <Link href="/#contact" scroll={false}>
                <li onClick={() => setNav(false)} className="headerLinkPhone">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest ">Let's Connect</p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  href="https://www.linkedin.com/in/baihakidemiandra/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  href="https://github.com/baihakidp"
                  target="_blank"
                >
                  <FaGithub />
                </Link>

                <Link
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  href="https://wa.me/6285155430035"
                  scroll={false}
                  target="_blank"
                >
                  <FaWhatsapp />
                </Link>

                <Link
                  href="https://drive.google.com/file/d/1rDXiQ7Hn9rV8hG16dCylytWeejwAP5nW/view?usp=share_link"
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  target="_blank"
                >
                  <BsPersonLinesFill />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
