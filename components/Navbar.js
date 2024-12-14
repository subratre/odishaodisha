import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";
import { FaEarthAfrica } from "react-icons/fa6";

const Navbar = () => {
  return (
    <section>
      <header
        className="bg-[rgb(249, 243, 239)] uc-header header-default uc-navbar-sticky-wrap z-999 uc-sticky "
        data-uc-sticky="start: 100vh; show-on-up: true; animation: uc-animation-slide-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;"
      >
        <nav
          className="uc-navbar-container uc-navbar-float ft-tertiary z-1 uc-navbar-transparent "
          data-anime="translateY: [-40, 0]; opacity: [0, 1]; easing: easeOutExpo; duration: 750; delay: 0;"
          // style="transform:translateY(0px);opacity:1"
        >
          <div className="container max-w-xl">
            <div
              className="uc-navbar min-h-64px lg:min-h-80px text-gray-900 dark:text-white"
              data-uc-navbar="mode: click; animation: uc-animation-slide-top-small; duration: 150;"
            >
              <div className="uc-navbar-left">
                <div className="uc-logo text-dark dark:text-white font-bold">
                  <Link
                    className="panel text-none"
                    // style="width:140px"
                    href="/"
                  >
                    Odisha360
                  </Link>
                </div>
              </div>
              <div className="uc-navbar-right">
                <a
                  className="btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex"
                  href="page-pricing.html"
                >
                  <FaGoogle /> Login With Google
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>{" "}
    </section>
  );
};

export default Navbar;
