import React from "react";
import { RiMapPinLine } from "react-icons/ri";
import { BsEnvelope } from "react-icons/bs";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="bg-[#161439] px-2 py-2 text-white md">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <span>
                  <RiMapPinLine color="#D3D3D3" />
                </span>
                <span className="text-xm text-xsmall leading-3">
                  589 5th Ave, NY 10024, USA
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <BsEnvelope color="#d3d3d3" />
                </span>
                <span className="text-xm text-xsmall leading-3  tracking-[0.5px]">
                  info@skillgrodemo.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-2">
                <span className="text-[#D3D3D3]">Call us:</span>
                <span className="text-xsmall  leading-3">+91854874547544</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xsmall text-[#D3D3D3]">
                  Follow Us On :{" "}
                </span>
                <span className="text-xm text-xsmall leading-3  tracking-[0.5px]">
                  <div className="flex gap-2">
                    <FaFacebookF size={13} />
                    <FaTwitter size={13} />
                    <IoLogoWhatsapp size={13} />
                    <FaYoutube size={13} />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="py-3 border-b">
        <div className="container mx-auto">
          <div className="flex space-x-3 items-center justify-between">
            <div className="flex items-center justify-between gap-4">
              <div>
                <Image
                  src="https://skillgro-react.netlify.app/assets/img/logo/logo.svg"
                  width={150}
                  height={100}
                  alt="text"
                />
              </div>
              <nav className="ml-[50px]">
                <ul className="flex items-center space-x-4">
                  <li className="font-semibold">Categories</li>
                  <li>About Us</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-3 space-x-4">
              <div className="border border-gray-400 w-[300px] rounded-full p-1">
                <div className="w-full flex items-center">
                  <input
                    type="text"
                    className="w-full outline-none rounded-lg px-2 py-1"
                    placeholder="Search for course..."
                  />
                  <button className="bg-[#5751e1] px-2  w-[30px] h-[30px] flex items-center justify-center rounded-full hover:bg-[#ffc224] transition">
                    <CiSearch size={18} color="#fff" />
                  </button>
                </div>
              </div>
              <div className="border rounded-full px-2 py-2 border-gray-400 relative">
                <span className="absolute bg-[#ffc224] w-[20px] h-[20px] text-center rounded-full -top-2 -right-2 leading-5">
                  0
                </span>
                <div>
                  <FaShoppingBasket size={20} />
                </div>
              </div>
              <div>
                <button className="bg-[#ffc224] px-4 py-2 rounded-full hover:bg-[#5751e1] hover:text-white transition">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="bg-[url('https://skillgro-react.netlify.app/assets/img/banner/banner_bg.png')] h-[500px]">
          <div className="container mx-auto relative">
            <div className="flex items-center justify-between w-full absolute top-[50px]">
              <div className="ml-10">
                <h3 className="text-3xl">
                  Never Stop{" "}
                  <span className="font-bold text-3xl bg-yellow-400 px-3 rounded-lg">
                    Learning
                  </span>
                </h3>
              </div>
              <div className="mr-[100px]">
                <img
                  width={410}
                  src="https://skillgro-react.netlify.app/assets/img/banner/banner_img.png"
                  alt="text"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
