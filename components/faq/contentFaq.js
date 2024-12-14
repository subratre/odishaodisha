"use client";

import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { IoIosClose } from "react-icons/io";

const ContentFaq = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <li className="uc-open  ">
      <div className="flex justify-between items-start">
        <div>
          <a className=" fs-5 sm:fs-4" role="button" aria-disabled="false">
            Do I need to know about how to code?
          </a>
          <div
            className={`uc-accordion-content ${isShow ? "block" : "!hidden"}`}
          >
            <p>
              Yes, you need to have a fair amount of knowledge in dealing with
              HTML/CSS as well as JavaScript in order to be able to use Lexend.
            </p>
          </div>{" "}
        </div>

        {!isShow ? (
          <GoPlus
            size={30}
            className="cursor-pointer"
            onClick={() => setIsShow(true)}
          />
        ) : (
          <IoIosClose
            size={50}
            onClick={() => setIsShow(false)}
            className="cursor-pointer"
          />
        )}
      </div>
    </li>
  );
};

export default ContentFaq;
