import React from "react";
import ContentFaq from "./contentFaq";

const Faq = () => {
  return (
    <div
      className="section-inner panel"
      data-anime="onview: -100; targets: &gt;*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
    >
      <div
        className="panel"
        // style="transform:translateY(0px);opacity:1"
      >
        <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
          Frequenlty asked questions:
        </h2>
        <div className="panel mt-4 sm:mt-6 lg:mt-8 p-3 sm:p-4 xl:p-6 lg:max-w-750px xl:w-auto m-auto rounded-2 bg-secondary dark:bg-gray-800">
          <ul
            className="gap-4 uc-accordion"
            data-uc-accordion="targets: &gt; li;"
          >
            <ContentFaq />
            <ContentFaq />
            <ContentFaq />
            <ContentFaq />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
