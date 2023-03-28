import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import contact from "../assets/contact.jpg";
import { HiOutlineChevronUp } from "react-icons/hi";
import emailjs, { sendForm } from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  function handleSend() {
    setIsSent(true);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs;
    sendForm(
      "service_fkf9c6w",
      "template_l08q90e",
      form.current,
      "ZlJ3EHugeOnlalc5e"
    ).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-black text-xl tracking-widest">Contact</p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  src={contact}
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2">Baihaki Demiandra Putra</h2>
                <p>Front-End Developer</p>
                <p>
                  I am available for internship or full-time positions. Contact
                  me and let's talk.
                </p>
                <div>
                  <p className="uppercase pt-8">Connect With Me</p>
                  <div className="flex items-center justify-between py-4">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link
                        href="https://www.linkedin.com/in/baihakidemiandra/"
                        target="_blank"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link href="https://github.com/baihakidp" target="_blank">
                        <FaGithub />
                      </Link>
                    </div>
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <Link
                        href="https://wa.me/6285155430035"
                        scroll={false}
                        target="_blank"
                      >
                        <FaWhatsapp />
                      </Link>
                    </div>
                    <Link
                      href="https://drive.google.com/file/d/1rDXiQ7Hn9rV8hG16dCylytWeejwAP5nW/view"
                      className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
                    >
                      <BsFillPersonLinesFill />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={sendEmail} ref={form}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2"></div>
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="user_name"
                    required
                  />
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="user_email"
                    required
                  />
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    rows="10"
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    name="message"
                    required
                  />
                </div>
                <button onClick={handleSend} className="w-full p-4 mt-4">
                  Send Message
                </button>
                {isSent && (
                  <p className="pt-3">
                    Thanks for the message! Looking forward to speaking to you
                    soon.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300"
        >
          <HiOutlineChevronUp size={30} />
        </button>
      </div>
    </div>
  );
};

export default Contact;
