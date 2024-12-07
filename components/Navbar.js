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
                <ul className="uc-navbar-nav gap-3 xl:gap-4 d-none lg:d-flex fw-medium ms-2">
                  <li>
                    <Link href="/pricing">Pricing</Link>
                  </li>

                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="uc-navbar-right">
                <a
                  className="btn btn-sm btn-primary text-white text-none d-none lg:d-inline-flex"
                  href="page-pricing.html"
                >
                  <FaGoogle /> Login With Google
                </a>
                <div className="d-inline-block">
                  <a
                    className="hstack gap-1 text-none fw-medium"
                    role="button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <FaEarthAfrica size={20} />
                    <span>En</span>
                    <span
                      data-uc-drop-parent-icon=""
                      className="uc-icon uc-drop-parent-icon"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12">
                        <polyline
                          fill="none"
                          stroke="#000"
                          strokeWidth="1.1"
                          points="1 3.5 6 8.5 11 3.5"
                        ></polyline>
                      </svg>
                    </span>
                  </a>
                  <div
                    className="p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px uc-drop  "
                    // style="top:30px;right:0;max-width:60px"
                  >
                    <ul className="nav-y gap-1 fw-medium items-end">
                      <li>
                        <a>En</a>
                      </li>
                      <li>
                        <a>Ar</a>
                      </li>
                      <li>
                        <a>Ch</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <a className="d-block lg:d-none uc-icon uc-navbar-toggle-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20">
                    <rect className="line-1" y="3" width="20" height="2"></rect>
                    <rect className="line-2" y="9" width="20" height="2"></rect>
                    <rect className="line-3" y="9" width="20" height="2"></rect>
                    <rect
                      className="line-4"
                      y="15"
                      width="20"
                      height="2"
                    ></rect>
                  </svg>
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
