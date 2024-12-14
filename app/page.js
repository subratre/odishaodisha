import React from "react";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import { MdKeyboardArrowUp } from "react-icons/md";
import connectDB from "@/config/database";
import Faq from "@/components/faq/faq";

export const metadata = {
  title: "Odisha360",
  description: "Odisha360 coaching",
};

const Home = async () => {
  try {
    // const db = await connectDB(); // Connect to the database
    // const [rows] = await db.query("SELECT * FROM user"); // Use the query method
    // console.log(rows);
    return (
      <>
        <div className="uni-body panel bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-200 overflow-x-hidden bp-xs bp-sm bp-md bp-lg bp-xl bp-xxl-max dom-ready">
          <section>
            <div className="container flex items-center justify-between">
              <div className="container flex-1">
                <div
                  className="vstack gap-2 mt-2 sm:mt-4 lg:mt-0 sm:text-center lg:text-start rtl:lg:text-end"
                  data-anime="targets: >*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                >
                  <span
                    className="fs-6 fw-bold text-primary dark:text-secondary"
                    // style="transform: translateX(0px) translateY(0px); opacity: 1;"
                  >
                    CRM Tool Workflow
                  </span>
                  <h1
                    className="h2 sm:h1 lg:display-6 xl:display-5 mb-1 xl:mb-2"
                    // style="transform: translateX(0px) translateY(0px); opacity: 1;"
                  >
                    Lorem ipsum do lor
                  </h1>
                  <p
                    className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70"
                    // style="transform: translateX(0px) translateY(0px); opacity: 1;"
                  >
                    Keep data consistent, with native CRM integrations that
                    streamline your entire Tool workflow.
                  </p>
                  <form
                    className="row child-cols g-1 mt-1 sm:mt-2"
                    // style="transform: translateX(0px) translateY(0px); opacity: 1;"
                  >
                    <div>
                      <input
                        className="form-control h-48px lg:h-56px w-full bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                        placeholder="Your email address"
                        required=""
                        type="text"
                      />
                    </div>
                    <div className="col-12 sm:col-auto">
                      <a
                        className="btn btn-md h-48px lg:h-56px w-100 sm:min-w-150px btn-primary text-white"
                        href="/page-pricing"
                      >
                        Start free trial
                      </a>
                    </div>
                  </form>
                  <p
                    className="fs-7 text-dark dark:text-white text-opacity-70"
                    // style="transform: translateX(0px) translateY(0.00973411px); opacity: 0.999797;"
                  >
                    No credit card required.
                  </p>
                </div>
              </div>
              <div>
                <img
                  className="w-full object-cover h-[550px]"
                  src={
                    "https://lexend-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Ftemplate%2Fhero-two.png&w=1920&q=75"
                  }
                />
              </div>
            </div>
          </section>
          <div id="wrapper" className="wrap">
            <div
              id="main_features"
              className="key-features section panel overflow-hidden"
            ></div>
            <div
              id="key_features"
              className="key-features section panel overflow-hidden bg-secondary dark:bg-gray-800"
            ></div>
            <div
              id="blog_posts"
              className="section panel overflow-hidden gap-3 bg-secondary dark:bg-gray-800 mt-[100px]"
            >
              <div className="section-outer panel py-6 xl:py-9">
                <div className="container max-w-xl">
                  <div className="section-inner panel">
                    <div
                      className="panel vstack items-center gap-4 sm:gap-6 xl:gap-8"
                      data-anime="onview: -100; targets: &gt;*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                      <h2 className="h3 lg:h2 xl:h1 max-w-400px lg:max-w-750px m-auto text-center">
                        Gain valuable insights
                      </h2>
                      <div className="panel">
                        <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 justify-center g-2 xl:g-4">
                          <div>
                            <article className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-white dark:bg-gray-800">
                              <a
                                className="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                                // style="border-radius:8px"
                                href="blog.html"
                              >
                                Strategy
                              </a>
                              <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                                <img
                                  alt="Top 5 reasons to invest in marketing"
                                  loading="lazy"
                                  width="1280"
                                  height="854"
                                  src="https://lexend-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fimg-11.jpg&w=3840&q=75"
                                />
                                <a
                                  className="position-cover"
                                  data-caption="Top 5 reasons to invest in marketing"
                                  href="blog-details/11.html"
                                ></a>
                              </figure>
                              <header className="panel vstack items-center gap-1 lg:gap-2 px-2">
                                <h3 className="h5 xl:h4 m-0 text-center m-0">
                                  <a
                                    className="text-none"
                                    href="blog-details/11.html"
                                  >
                                    Top 5 reasons to invest in marketing
                                  </a>
                                </h3>
                                <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                                  <li>
                                    <div className="hstack gap-narrow ft-tertiary">
                                      <img
                                        alt="David"
                                        loading="lazy"
                                        width="150"
                                        height="150"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-24px h-24px rounded-circle me-narrow"
                                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Favatars%2F02.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Favatars%2F02.png&amp;w=384&amp;q=75 2x"
                                        src="_next/021872.jpg?url=%2Fassets%2Fimages%2Favatars%2F02.png&amp;w=384&amp;q=75"
                                      />
                                      <a
                                        className="text-none fw-bold text-dark dark:text-white"
                                        href="blog-author/Amir%20Khan.html"
                                      >
                                        David
                                      </a>
                                    </div>
                                  </li>
                                  <li className="opacity-50">•</li>
                                  <li>
                                    <div className="post-date hstack gap-narrow">
                                      <span>Apr 3, 2024</span>
                                    </div>
                                  </li>
                                </ul>
                              </header>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-white dark:bg-gray-800">
                              <a
                                className="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                                // style="border-radius:8px"
                                href="blog.html"
                              >
                                Marketing
                              </a>
                              <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                                <img
                                  alt="How can marketing help your business?"
                                  loading="lazy"
                                  width="1280"
                                  height="854"
                                  decoding="async"
                                  data-nimg="1"
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  src="https://lexend-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fimg-12.jpg&w=3840&q=75"
                                />
                                <a
                                  className="position-cover"
                                  data-caption="How can marketing help your business?"
                                  href="blog-details/12.html"
                                ></a>
                              </figure>
                              <header className="panel vstack items-center gap-1 lg:gap-2 px-2">
                                <h3 className="h5 xl:h4 m-0 text-center m-0">
                                  <a
                                    className="text-none"
                                    href="blog-details/12.html"
                                  >
                                    How can marketing help your business?
                                  </a>
                                </h3>
                                <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                                  <li>
                                    <div className="hstack gap-narrow ft-tertiary">
                                      <img
                                        alt="Allen"
                                        loading="lazy"
                                        width="150"
                                        height="150"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-24px h-24px rounded-circle me-narrow"
                                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Favatars%2F06.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Favatars%2F06.png&amp;w=384&amp;q=75 2x"
                                        src="_next/06d4c2.jpg?url=%2Fassets%2Fimages%2Favatars%2F06.png&amp;w=384&amp;q=75"
                                      />
                                      <a
                                        className="text-none fw-bold text-dark dark:text-white"
                                        href="blog-author/Amir%20Khan.html"
                                      >
                                        Allen
                                      </a>
                                    </div>
                                  </li>
                                  <li className="opacity-50">•</li>
                                  <li>
                                    <div className="post-date hstack gap-narrow">
                                      <span>Apr 3, 2024</span>
                                    </div>
                                  </li>
                                </ul>
                              </header>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-3 rounded-3 p-2 pb-3 bg-white dark:bg-gray-800">
                              <a
                                className="position-absolute top-0 ltr:start-0 rtl:end-0 m-3 fs-7 fw-bold text-none z-1 bg-primary text-white py-narrow px-1"
                                // style="border-radius:8px"
                                href="blog.html"
                              >
                                Business
                              </a>
                              <figure className="featured-image m-0 rounded ratio ratio-3x2 rounded-2 uc-transition-toggle overflow-hidden">
                                <img
                                  alt="The ultimate guide to marketing success"
                                  loading="lazy"
                                  width="1280"
                                  height="854"
                                  decoding="async"
                                  data-nimg="1"
                                  className="media-cover image uc-transition-scale-up uc-transition-opaque"
                                  src="https://lexend-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Fblog%2Fimg-13.jpg&w=3840&q=75"
                                />
                                <a
                                  className="position-cover"
                                  data-caption="The ultimate guide to marketing success"
                                  href="blog-details/13.html"
                                ></a>
                              </figure>
                              <header className="panel vstack items-center gap-1 lg:gap-2 px-2">
                                <h3 className="h5 xl:h4 m-0 text-center m-0">
                                  <a
                                    className="text-none"
                                    href="blog-details/13.html"
                                  >
                                    The ultimate guide to marketing success
                                  </a>
                                </h3>
                                <ul className="post-meta nav-x ft-tertiary justify-center gap-1 fs-7 text-gray-400 dark:text-gray-300 d-none lg:d-flex">
                                  <li>
                                    <div className="hstack gap-narrow ft-tertiary">
                                      <img
                                        alt="Kevin"
                                        loading="lazy"
                                        width="150"
                                        height="150"
                                        decoding="async"
                                        data-nimg="1"
                                        className="w-24px h-24px rounded-circle me-narrow"
                                        srcSet="/_next/image?url=%2Fassets%2Fimages%2Favatars%2F01.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Favatars%2F01.png&amp;w=384&amp;q=75 2x"
                                        src="_next/01a08b.jpg?url=%2Fassets%2Fimages%2Favatars%2F01.png&amp;w=384&amp;q=75"
                                      />
                                      <a
                                        className="text-none fw-bold text-dark dark:text-white"
                                        href="blog-author/Amir%20Khan.html"
                                      >
                                        Kevin
                                      </a>
                                    </div>
                                  </li>
                                  <li className="opacity-50">•</li>
                                  <li>
                                    <div className="post-date hstack gap-narrow">
                                      <span>Apr 1, 2024</span>
                                    </div>
                                  </li>
                                </ul>
                              </header>
                            </article>
                          </div>
                        </div>
                      </div>
                      <a
                        className="uc-link fw-bold d-inline-flex items-center gap-narrow"
                        href="blog.html"
                      >
                        <span>View more articles</span>
                        <MdArrowRightAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="faq" className="section panel overflow-hidden mt-10">
              <div className="section-outer panel pb-6 xl:pb-6">
                <div className="container max-w-lg">
                  <Faq />
                </div>
              </div>
            </div>
            <div
              id="pricing_tiers"
              className="pricing-tiers section panel overflow-hidden"
            >
              <div className="section-outer panel py-4 xl:py-4">
                <div className="container sm:max-w-lg xl:max-w-xl">
                  <div className="section-inner panel">
                    <div className="panel vstack gap-4 sm:gap-6 xl:gap-8">
                      <div
                        className="heading panel max-w-550px mx-auto text-center"
                        data-anime="onview: -100; targets: &gt;*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                      >
                        <h2 className="title h3 lg:h2 xl:h1">
                          Simple, scalable pricing.
                        </h2>
                        <p className="fs-6 xl:fs-5 text-dark dark:text-white text-opacity-70">
                          No extra charges. No hidden fees.
                        </p>
                      </div>
                      <div className="content panel">
                        <div
                          className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 col-match justify-center g-2 lg:g-4"
                          data-anime="onview: -100; targets: &gt;*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 400});"
                        >
                          <div className="tier-wrapper">
                            <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800">
                              <div className="panel">
                                <h3 className="title h5 sm:h4 dark:text-white">
                                  Essentials
                                </h3>
                                <p className="desc dark:text-white opacity-70 dark:opacity-80">
                                  For creating impressive tools that generate
                                  results.
                                </p>
                              </div>
                              <div className="panel">
                                <div className="panel vstack gap-narrow">
                                  <h5 className="title h3 sm:h2 m-0 dark:text-white">
                                    $19 USD
                                  </h5>
                                  <span className="fs-7 opacity-70">
                                    Seat per month, 2 seats max
                                  </span>
                                  <div className="vstack gap-1 justify-center text-center mt-3">
                                    <a
                                      className="btn btn-md sm:btn-sm lg:btn-md btn-primary text-white"
                                      href="sign-up.html"
                                    >
                                      Start a free trial
                                    </a>
                                    <span className="fs-7 opacity-70 min-h-24px">
                                      No credit card required
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="panel">
                                <div className="panel vstack gap-2">
                                  <span className="fs-6 fw-bold dark:text-white">
                                    Key features:
                                  </span>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>
                                      Real-time tracking and notifications
                                    </span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>Real-time analytics</span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>Drag and drop templates</span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>Project Management</span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>24/7 email and chat support</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tier-wrapper">
                            <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800">
                              <span className="position-absolute top-0 ltr:end-0 rtl:start-0 m-2 d-inline-flex py-narrow px-1 bg-primary rounded-1 text-white fs-7 fw-medium">
                                Popular
                              </span>
                              <div className="panel">
                                <h3 className="title h5 sm:h4 dark:text-white">
                                  Business
                                </h3>
                                <p className="desc dark:text-white opacity-70 dark:opacity-80">
                                  For seamless integrations and sending tools in
                                  bulk.
                                </p>
                              </div>
                              <div className="panel">
                                <div className="panel vstack gap-narrow">
                                  <h5 className="title h3 sm:h2 m-0 dark:text-white">
                                    $49 USD
                                  </h5>
                                  <span className="fs-7 opacity-70">
                                    Seat cost per month
                                  </span>
                                  <div className="vstack gap-1 justify-center text-center mt-3">
                                    <a
                                      className="btn btn-md sm:btn-sm lg:btn-md btn-primary text-white"
                                      href="sign-up.html"
                                    >
                                      Start a free trial
                                    </a>
                                    <span className="fs-7 opacity-70 min-h-24px">
                                      No credit card required
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="panel">
                                <div className="panel vstack gap-2">
                                  <span className="fs-6 fw-bold dark:text-white">
                                    Everything in Essentials, plus:
                                  </span>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />
                                    <span>CRM and Zapier integrations</span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />
                                    <span>Content reporting</span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>Unlimited team workspaces</span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />
                                    <span>Approval workflows</span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />
                                    <span>Salesforce integration*</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tier-wrapper">
                            <div className="tier panel vstack gap-2 xl:gap-4 px-3 py-4 sm:p-4 lg:p-6 rounded lg:rounded-2 bg-secondary dark:bg-gray-800">
                              <div className="panel">
                                <h3 className="title h5 sm:h4 dark:text-white">
                                  Enterprise
                                </h3>
                                <p className="desc dark:text-white opacity-70 dark:opacity-80">
                                  For large companies with complex Tool
                                  workflows.
                                </p>
                              </div>
                              <div className="panel">
                                <div className="panel vstack gap-narrow">
                                  <h5 className="title h3 sm:h2 m-0 dark:text-white">
                                    Let’s talk
                                  </h5>
                                  <span className="fs-7 opacity-70">
                                    Per‑seat or per‑tool pricing
                                  </span>
                                  <div className="vstack gap-1 justify-center text-center mt-3">
                                    <a
                                      className="btn btn-md sm:btn-sm lg:btn-md btn-dark text-white"
                                      href="sign-up.html"
                                    >
                                      Contact sales
                                    </a>
                                    <span className="fs-7 opacity-70 min-h-24px">
                                      Respond within 24 hrs max
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="panel">
                                <div className="panel vstack gap-2">
                                  <span className="fs-6 fw-bold dark:text-white">
                                    Everything in Business, plus:
                                  </span>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>Unlimited files uploads</span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>
                                      Real-time tracking and notifications
                                    </span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>User performance</span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>
                                      SSO support and custom user roles
                                    </span>
                                  </div>
                                  <div className="hstack gap-1 fs-7">
                                    <TiTick className="bg-[#12715b] text-white rounded-full" />{" "}
                                    <span>Bulk send &amp; Forms*</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p
                        className="text-center text-gray-900 dark:text-white text-opacity-70"
                        data-anime="onview: -100; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 200;"
                      >
                        Prices exclude any applicable taxes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="clients_feedbacks"
              className="clients-feedbacks section panel overflow-hidden"
            >
              <div className="section-outer panel pb-6 xl:pb-9">
                <div className="container max-w-lg">
                  <div className="section-inner panel">
                    <div
                      className="panel vstack justify-center items-center gap-4 sm:gap-6 xl:gap-8"
                      data-anime="onview: -100; targets: &gt;*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                      <h2 className="h4 sm:h3 lg:h2 m-0 text-center">
                        Some clients feedbacks
                      </h2>
                      <div
                        className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 justify-center col-match g-2 lg:g-3"
                        data-uc-grid=""
                      >
                        <div>
                          <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border">
                            <div className="panel vstack items-start gap-2">
                              <div className="panel">
                                <div className="hstack h-48px">
                                  <img
                                    alt="Brand"
                                    data-uc-svg=""
                                    loading="lazy"
                                    width="170"
                                    height="48"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-128px text-gray-900 dark:text-white image-filter"
                                    src="https://lexend-nextjs.vercel.app/assets/images/brands/brand-08.svg"
                                  />
                                </div>
                              </div>
                              <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                                “We’re looking for people who share our vision!
                                most of our time used to be taken up by most of
                                alternate administrative work whereas now we can
                                focus on building out to help our employees.”
                              </p>
                            </div>
                            <div className="panel hstack gap-2 mt-2 lg:mt-4">
                              <img
                                alt="Mark Zellers"
                                loading="lazy"
                                width="150"
                                height="150"
                                decoding="async"
                                data-nimg="1"
                                className="w-40px rounded-circle"
                                src="https://lexend-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Favatars%2F01.png&w=256&q=75"
                              />
                              <div className="panel vstack items-start gap-0">
                                <h6 className="h6 m-0">Mark Zellers</h6>
                                <span className="fs-7 opacity-70">
                                  CEO, Co-Founder.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border">
                            <div className="panel vstack items-start gap-2">
                              <div className="panel">
                                <div className="hstack h-48px">
                                  <img
                                    alt="Brand"
                                    data-uc-svg=""
                                    loading="lazy"
                                    width="170"
                                    height="48"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-128px text-gray-900 dark:text-white image-filter"
                                    src="https://lexend-nextjs.vercel.app/assets/images/brands/brand-06.svg"
                                  />
                                </div>
                              </div>
                              <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                                “This powerful tool eliminates the need to leave
                                Salesforce to get things done as I can create a
                                custom proposal with dynamic pricing tables, and
                                get approval from my boss all within 36
                                minutes.”
                              </p>
                            </div>
                            <div className="panel hstack gap-2 mt-2 lg:mt-4">
                              <img
                                alt="Natalia Larsson"
                                loading="lazy"
                                width="150"
                                height="150"
                                decoding="async"
                                data-nimg="1"
                                className="w-40px rounded-circle"
                                src="https://lexend-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Favatars%2F04.png&w=256&q=75"
                              />
                              <div className="panel vstack items-start gap-0">
                                <h6 className="h6 m-0">Natalia Larsson</h6>
                                <span className="fs-7 opacity-70">
                                  Director of Sales
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="px-3 sm:px-4 py-4 panel vstack justify-between gap-3 rounded-2 border">
                            <div className="panel vstack items-start gap-2">
                              <div className="panel">
                                <div className="hstack h-48px">
                                  <img
                                    alt="Brand"
                                    data-uc-svg=""
                                    loading="lazy"
                                    width="170"
                                    height="48"
                                    decoding="async"
                                    data-nimg="1"
                                    className="w-128px text-gray-900 dark:text-white image-filter"
                                    src="https://lexend-nextjs.vercel.app/assets/images/brands/brand-07.svg"
                                  />
                                </div>
                              </div>
                              <p className="fs-6 lg:fs-5 text-dark dark:text-white text-opacity-70">
                                “We are based in Europe and the latest Data
                                Protection Regulation forces us to look for
                                service suppliers that comply with this
                                regulation and as we look to create our website
                                and this builder just outstanding!”
                              </p>
                            </div>
                            <div className="panel hstack gap-2 mt-2 lg:mt-4">
                              <img
                                alt="Sarah Edrissi"
                                loading="lazy"
                                width="150"
                                height="150"
                                decoding="async"
                                data-nimg="1"
                                className="w-40px rounded-circle"
                                src="https://lexend-nextjs.vercel.app/_next/image?url=%2Fassets%2Fimages%2Favatars%2F03.png&w=256&q=75"
                              />
                              <div className="panel vstack items-start gap-0">
                                <h6 className="h6 m-0">Sarah Edrissi</h6>
                                <span className="fs-7 opacity-70">
                                  Lead Marketing
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="uc-link fw-bold d-inline-flex items-center gap-narrow"
                      >
                        <span>See all feedbacks</span>
                        <MdArrowRightAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="cta"
              className="cta section panel overflow-hidden bg-gray-50"
            >
              <div className="section-outer panel">
                <div
                  className="d-none lg:d-block"
                  data-anime="targets: &gt;*; scale: [0, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 750});"
                ></div>
                <div
                  className="d-none lg:d-block"
                  data-anime="onview: -100; targets: img; scale: [0.8, 1]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: 350;"
                >
                  <div className="position-absolute top-50 start-0 translate-middle-y ms-n6">
                    <img
                      alt="talking"
                      loading="lazy"
                      width="195"
                      height="254"
                      decoding="async"
                      data-nimg="1"
                      className="w-200px xl:w-250px d-block dark:d-none"
                      src="assets/images/template/talking.svg"
                    />
                    <img
                      alt="talking-dark"
                      loading="lazy"
                      width="195"
                      height="254"
                      decoding="async"
                      data-nimg="1"
                      className="w-200px xl:w-250px d-none dark:d-block"
                      src="assets/images/template/talking-dark.svg"
                    />
                  </div>
                  <div className="position-absolute top-50 end-0 translate-middle-y me-n6"></div>
                </div>
                <div className="container max-w-xl">
                  <div className="section-inner panel rounded xl:rounded-2 py-4 sm:py-6 xl:py-9">
                    <div
                      className="vstack items-center gap-2 max-w-400px lg:max-w-600px mx-auto text-center"
                      data-anime="onview:-100; targets: &gt;*; translateY: [48, 0]; opacity: [0, 1]; easing: spring(1, 80, 10, 0); duration: 450; delay: anime.stagger(100, {start: 200});"
                    >
                      <h2 className="h3 sm:h1 xl:display-6 m-0">
                        Get started with <br />
                        Lexend today
                      </h2>
                      <p className="fs-6 sm:fs-5 text-dark dark:text-white text-opacity-70 mt-1 lg:mt-2">
                        With native CRM integrations that streamline your entire
                        Tool workflow.
                      </p>
                      <form className="row child-cols g-1 w-100 lg:w-5/6 mt-1 lg:mt-2">
                        <div>
                          <input
                            className="form-control h-48px lg:h-56px bg-white dark:border-white dark:bg-opacity-10 dark:border-opacity-0 dark:text-white"
                            type="text"
                            placeholder="Your email address"
                            required=""
                          />
                        </div>
                        <div className="col-12 sm:col-auto">
                          <a
                            className="btn btn-md h-48px lg:h-56px w-100 sm:min-w-150px btn-primary text-white"
                            href="page-pricing.html"
                          >
                            Start free trial
                          </a>
                        </div>
                      </form>
                      <p className="fs-7 text-dark dark:text-white text-opacity-70">
                        14-day trial, no credit card required.
                      </p>
                    </div>
                  </div>
                  <hr className="w-100 m-0" />
                </div>
              </div>
            </div>
          </div>
          <footer id="uc-footer" className="uc-footer panel overflow-hidden">
            <div className="footer-outer py-4 lg:py-3 xl:py-3 dark:bg-gray-900 dark:text-white">
              <div className="container max-w-xl">
                <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-8">
                  <div className="uc-footer-widgets panel">
                    <div className="row child-cols-6 md:child-cols col-match g-4">
                      <div className="col-12 lg:col-4">
                        <div className="panel vstack items-start gap-4 ltr:md:pe-8 rtl:md:ps-8">
                          <div className="vstack gap-2">
                            <a href="index.html">
                              <img
                                alt="Lexend"
                                loading="lazy"
                                width="34"
                                height="34"
                                decoding="async"
                                data-nimg="1"
                                className="w-32px text-primary"
                                src="https://lexend-nextjs.vercel.app/assets/images/brands/brand-06.svg"
                              />
                            </a>
                            <p>
                              This powerfull tool eliminates the need to leave
                              Salesforce to get things done as I can create a
                              custom proposal with dynamic pricing tables.
                            </p>
                          </div>
                          <div className="hstack items-start gap-1">
                            <a href="#">
                              <img
                                alt="Google Play Store"
                                data-uc-svg=""
                                loading="lazy"
                                width="135"
                                height="40"
                                decoding="async"
                                data-nimg="1"
                                className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                                src="assets/images/common/playstore.svg"
                              />
                            </a>
                            <a href="#">
                              <img
                                alt="Apple Store"
                                data-uc-svg=""
                                loading="lazy"
                                width="134"
                                height="40"
                                decoding="async"
                                data-nimg="1"
                                className="text-gray-900 dark:text-white hover:text-opacity-70 transition-all duration-150"
                                src="assets/images/common/appstore.svg"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ul className="nav-y gap-1 fw-medium">
                          <li>
                            <a href="page-about.html">About</a>
                          </li>
                          <li>
                            <a href="page-pricing.html">Pricing</a>
                          </li>
                          <li>
                            <a href="page-features.html">Features</a>
                          </li>
                          <li>
                            <a href="page-integrations.html">Integrations</a>
                          </li>
                          <li>
                            <a href="page-career.html">Career</a>
                          </li>
                          <li>
                            <a href="page-contact.html">Contact</a>
                          </li>
                          <li>
                            <a href="page-contact-2.html">Contact v2</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="nav-y gap-1 fw-medium">
                          <li>
                            <a href="shop.html">Shop</a>
                          </li>
                          <li>
                            <a href="shop.html">With sidebar</a>
                          </li>
                          <li>
                            <a href="shop-product-detail/1.html">
                              Product detail
                            </a>
                          </li>
                          <li>
                            <a href="shop-product-detail-2/1.html">
                              Product detail v2
                            </a>
                          </li>
                          <li>
                            <a href="shop-cart.html">Cart</a>
                          </li>
                          <li>
                            <a href="shop-checkout.html">Checkout</a>
                          </li>
                          <li>
                            <a href="shop-order.html">Order confirmation</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="nav-y gap-1 fw-medium">
                          <li>
                            <a href="sign-in.html">Request a demo</a>
                          </li>
                          <li>
                            <a href="sign-in.html">Sign in</a>
                          </li>
                          <li>
                            <a href="sign-in-2.html">Sign in v2</a>
                          </li>
                          <li>
                            <a href="sign-up.html">Sign up</a>
                          </li>
                          <li>
                            <a href="sign-up-2.html">Sign up v2</a>
                          </li>
                          <li>
                            <a href="reset-password.html">Reset password</a>
                          </li>
                          <li>
                            <a href="reset-password-2.html">
                              Reset password v2
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="nav-y gap-1 fw-medium">
                          <li>
                            <a href="blog.html">Blog</a>
                          </li>
                          <li>
                            <a href="blog-details/1.html">Blog detail</a>
                          </li>
                          <li>
                            <a href="page-terms.html">FAQ</a>
                          </li>
                          <li>
                            <a href="page-not-found.html">404</a>
                          </li>
                          <li>
                            <a href="coming-soon.html">Coming Soon</a>
                          </li>
                          <li>
                            <a href="page-terms.html">Terms of service</a>
                          </li>
                          <li>
                            <a href="page-privacy.html">Privacy policy</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-center lg:justify-between pt-4 lg:pt-6 border-top dark:text-white">
                    <div className="vstack sm:hstack justify-center lg:justify-start items-center lg:items-start gap-1 lg:gap-2">
                      <p className="opacity-60">
                        Lexend © 2024, All rights reserved.
                      </p>
                      <ul className="nav-x gap-2 fw-medium">
                        <li>
                          <a href="#">Privacy notice</a>
                        </li>
                        <li>
                          <a href="#">Legal</a>
                        </li>
                        <li>
                          <a href="#">Cookie settings</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
        <div
          id="uc-menu-panel"
          data-uc-offcanvas="overlay: true;"
          className="uc-offcanvas mobile-menu"
          // style="display:block"
          tabIndex="-1"
        >
          <div
            className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide"
            role="dialog"
            aria-modal="true"
            // style="max-width:876px"
          >
            <header className="uc-offcanvas-header hstack justify-between items-center pb-2 bg-white dark:bg-gray-900">
              <div className="uc-logo">
                <a
                  className="h5 text-none text-gray-900 dark:text-white"
                  href="index.html"
                >
                  <img
                    alt="Lexend"
                    loading="lazy"
                    width="34"
                    height="34"
                    decoding="async"
                    data-nimg="1"
                    className="w-32px"
                    src="assets/images/common/logo-mark.svg"
                  />
                </a>
              </div>
              <button
                className="uc-offcanvas-close rtl:end-auto rtl:start-0 m-1 mt-2 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
                type="button"
              >
                <i className="unicon-close"></i>
              </button>
            </header>
            <div className="panel">
              <form
                id="search-panel"
                className="form-icon-group vstack gap-1 mb-2 uc-sticky"
                data-uc-sticky=""
              >
                <input
                  type="email"
                  className="form-control form-control-sm fs-7 rounded-default"
                  placeholder="Search.."
                />
                <span className="form-icon text-gray">
                  <i className="unicon-search icon-1"></i>
                </span>
              </form>
              <div
                className="uc-sticky-placeholder"
                // style="height:40px;width:290px;margin:0px 0px 16px"
              ></div>
              <ul
                className="nav-y gap-narrow fw-medium fs-6 uc-nav"
                data-uc-nav=""
              >
                <li className="uc-parent ">
                  <a className="menuActive">Home</a>
                  <ul className="uc-nav-sub ">
                    <li className="  " role="presentation">
                      <a className="" href="index.html">
                        Home 1
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="menuActive" href="home-2.html">
                        Home 2
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="home-3.html">
                        Home 3
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="home-4.html">
                        Home 4
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="home-5.html">
                        Home 5
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="home-6.html">
                        Home 6
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="rtl.html">
                        Home RTL
                      </a>
                    </li>
                  </ul>
                </li>
                <li className=" ">
                  <a className="" href="page-features.html">
                    Features
                  </a>
                </li>
                <li className=" ">
                  <a className="" href="page-pricing.html">
                    Pricing
                  </a>
                </li>
                <li className=" ">
                  <a className="" href="page-about.html">
                    About
                  </a>
                </li>
                <li className=" ">
                  <a className="" href="page-career.html">
                    Career
                  </a>
                </li>
                <li className=" ">
                  <a className="" href="page-contact.html">
                    Contact
                  </a>
                </li>
                <li className="uc-parent ">
                  <a className="">Inner Pages</a>
                  <ul className="uc-nav-sub ">
                    <li className="uc-parent  " role="presentation">
                      <a className="">Blog</a>
                      <ul className="uc-nav-sub ">
                        <li className="" role="presentation">
                          <a className="" href="blog.html">
                            Full Width
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="blog-2cols/1.html">
                            Grid 2 Cols
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="blog-3cols/1.html">
                            Grid 3 Cols
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="blog-4cols/1.html">
                            Grid 4 Cols
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="uc-parent  " role="presentation">
                      <a className="">Blog - detail</a>
                      <ul className="uc-nav-sub ">
                        <li className="" role="presentation">
                          <a className="" href="blog-details/1.html">
                            Blog detail
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="blog-details-2/1.html">
                            Blog detail - v2
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="uc-parent  " role="presentation">
                      <a className="">Useful pages</a>
                      <ul className="uc-nav-sub ">
                        <li className="" role="presentation">
                          <a className="" href="sign-up.html">
                            Sign up
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="sign-in.html">
                            Sign in
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="reset-password.html">
                            Reset password
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="page-not-found.html">
                            404 page
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="coming-soon.html">
                            Coming soon
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="uc-parent  " role="presentation">
                      <a className="">Other pages</a>
                      <ul className="uc-nav-sub ">
                        <li className="" role="presentation">
                          <a className="" href="page-terms.html">
                            FAQ
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="page-terms.html">
                            Terms of use
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="page-privacy.html">
                            Privacy policy
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="uc-parent ">
                  <a className="">Shop</a>
                  <ul className="uc-nav-sub ">
                    <li className="uc-parent  " role="presentation">
                      <a className="">Shop layouts</a>
                      <ul className="uc-nav-sub ">
                        <li className="" role="presentation">
                          <a className="" href="shop.html">
                            Shop 4 cols
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="shop-3.html">
                            Shop 3 cols
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="shop-2.html">
                            Shop 2 cols
                          </a>
                        </li>
                        <li className="" role="presentation">
                          <a className="" href="shop-sidebar.html">
                            Shop with sidebar
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="shop-category/demo.html">
                        Archive category
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="shop-product-detail/2.html">
                        Product detail
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="shop-product-detail-2/2.html">
                        Product detail - v2
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="shop-cart.html">
                        Cart
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="shop-cart-2.html">
                        Cart - v2
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="shop-checkout.html">
                        Checkout
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="shop-checkout-2.html">
                        Checkout - v2
                      </a>
                    </li>
                    <li className="  " role="presentation">
                      <a className="" href="shop-order.html">
                        Order confirmation
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="hr opacity-10 my-1"></li>
                <li>
                  <a href="sign-up.html">Create an account</a>
                </li>
                <li>
                  <a href="sign-in.html">Log in</a>
                </li>
                <li>
                  <a href="https://themeforest.net/user/ib-themes/portfolio">
                    Buy Template
                  </a>
                </li>
              </ul>
              <ul className="social-icons nav-x mt-4">
                <li>
                  <a href="#">
                    <i className="unicon-logo-medium icon-2"></i>
                  </a>
                  <a href="#">
                    <i className="unicon-logo-x-filled icon-2"></i>
                  </a>
                  <a href="#">
                    <i className="unicon-logo-instagram icon-2"></i>
                  </a>
                  <a href="#">
                    <i className="unicon-logo-pinterest icon-2"></i>
                  </a>
                </li>
              </ul>
              <div
                className="py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900 uc-sticky uc-active uc-sticky-fixed"
                data-uc-sticky="position: bottom"
              >
                <div className="vstack gap-1">
                  <span className="fs-7 opacity-60">Select theme:</span>
                  <div className="darkmode-trigger" data-darkmode-switch="">
                    <label className="switch">
                      <input type="checkbox" />
                      <span className="slider fs-5"></span>
                    </label>
                  </div>
                </div>
              </div>
              <div
                className="uc-sticky-placeholder"
                // style="height:83px;width:290px;margin:32px 0px 0px"
              ></div>
            </div>
          </div>
        </div>
        <div
          id="uc-contact-modal"
          data-uc-modal="overlay: true"
          className="uc-modal"
          // style="display:block"
          tabIndex="-1"
        >
          <div
            className="uc-modal-dialog lg:max-w-650px bg-secondary text-dark dark:bg-gray-800 dark:text-white rounded-1-5"
            role="dialog"
            aria-modal="true"
          >
            <button
              className="uc-modal-close-default top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
              type="button"
            >
              <i className="unicon-close"></i>
            </button>
            <div className="panel vstack gap-2 md:gap-4 text-center">
              <div className="panel cstack px-3 md:px-4 py-4 md:py-8 m-0 lg:mx-auto">
                <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
                  <h4 className="h5 lg:h4 m-0">
                    Schedule your 15-minute demo now
                  </h4>
                  <div className="panel w-100 sm:w-350px md:w-500px mx-auto">
                    <form className="vstack gap-2">
                      <div
                        className="vstack lg:hstack gap-2"
                        // style="flex-direction:row"
                      >
                        <input
                          className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                          type="text"
                          placeholder="Full name*"
                          required=""
                        />
                        <input
                          className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                          type="text"
                          placeholder="Last name*"
                          required=""
                        />
                      </div>
                      <div
                        className="vstack lg:hstack gap-2"
                        // style="flex-direction:row"
                      >
                        <input
                          className="form-control h-48px w-100 md:w-1/2 bg-white dark:border-white dark:text-dark"
                          type="email"
                          placeholder="Your email*"
                          required=""
                        />
                        <input
                          className="form-control h-48px w-100 md:w-1/2 rtl:text-end bg-white dark:border-white dark:text-dark"
                          type="tel"
                          placeholder="Phone number*"
                          required=""
                        />
                      </div>
                      <input
                        className="form-control h-48px w-full bg-white dark:border-white dark:text-dark"
                        type="text"
                        placeholder="Company name*"
                        required=""
                      />
                      <textarea
                        className="form-control min-h-150px w-full bg-white dark:border-white dark:text-dark"
                        placeholder="Your message.."
                      ></textarea>
                      <button
                        className="btn btn-primary btn-md text-white mt-2"
                        type="submit"
                      >
                        Schedule my demo
                      </button>
                      <p className="fs-7 opacity-70 mt-2 text-center">
                        We’ll tailor your demo to your immediate needs and
                        answer all your questions. Get ready to see how it
                        works!
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="uc-newsletter-modal"
          data-uc-modal="overlay: true"
          className="uc-modal"
          // style="display:block"
          tabIndex="-1"
        >
          <div
            className="uc-modal-dialog w-800px bg-white text-dark dark:bg-gray-900 dark:text-white rounded-3 p-1 overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <button
              className="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all"
              type="button"
            >
              <i className="unicon-close"></i>
            </button>
            <div className="row md:child-cols-6 col-match g-0">
              <div className="d-none md:d-flex">
                <div className="position-relative w-100 ratio-1x1 rounded-2 overflow-hidden">
                  <img
                    alt="Newsletter image"
                    loading="lazy"
                    width="544"
                    height="660"
                    decoding="async"
                    data-nimg="1"
                    className="media-cover"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fcommon%2Fnewsletter.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fcommon%2Fnewsletter.jpg&amp;w=1200&amp;q=75 2x"
                    src="_next/newsletter0d26.jpg?url=%2Fassets%2Fimages%2Fcommon%2Fnewsletter.jpg&amp;w=1200&amp;q=75"
                  />
                </div>
              </div>
              <div>
                <div className="panel vstack self-center p-4 md:py-8 text-center">
                  <h3 className="h3 md:h2">Subscribe to our Newsletter</h3>
                  <p className="ft-tertiary">
                    Join 10k+ people to get notified about new posts, news and
                    updates.
                  </p>
                  <div className="panel mt-2 lg:mt-4">
                    <form className="vstack gap-1">
                      <input
                        type="email"
                        className="form-control form-control-sm w-full fs-6 bg-white dark:border-white dark:border-gray-700"
                        placeholder="Your email address.."
                      />
                      <button type="submit" className="btn btn-sm btn-primary">
                        Sign up
                      </button>
                    </form>
                    <p className="fs-7 mt-2">
                      Do not worry we don&#x27;t spam!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="uc-search-modal"
          className="uc-modal-full uc-modal"
          data-uc-modal="overlay: true"
          // style="display:block"
          tabIndex="-1"
        >
          <div
            className="uc-modal-dialog d-flex justify-center bg-white text-dark dark:bg-gray-900 dark:text-white"
            data-uc-height-viewport=""
            role="dialog"
            aria-modal="true"
            // style="min-height:auto"
          >
            <div className="uc-modal-close-full m-1 p-0 vstack gap-narrow text-center">
              <button
                className="icon-3 btn btn-md btn-dark dark:bg-white dark:text-dark w-24px sm:w-32px h-24px sm:h-32px rounded-circle flex-1"
                type="button"
              >
                <i className="unicon-close"></i>
              </button>
            </div>
            <div className="panel w-100 sm:w-500px px-2 py-10">
              <h3 className="h4 sm:h2 text-center">
                What are you looking for?
              </h3>
              <form className="hstack gap-1 mt-4 border-bottom p-narrow dark:border-gray-700">
                <span className="d-inline-flex justify-center items-center w-24px sm:w-40 h-24px sm:h-40px opacity-50">
                  <i className="unicon-search icon-3"></i>
                </span>
                <input
                  type="search"
                  className="form-control-plaintext ms-1 fs-6 sm:fs-5 w-full dark:text-white"
                  placeholder="Type your keyword.."
                  aria-label="Search"
                  name="q"
                />
              </form>
            </div>
          </div>
        </div>
        <div
          id="uc-cart-panel"
          data-uc-offcanvas="overlay: true; flip: true;"
          className="uc-offcanvas "
          tabIndex="-1"
          // style="display:block"
        >
          <div
            className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white uc-offcanvas-bar-animation uc-offcanvas-slide"
            role="dialog"
            aria-modal="true"
            // style="max-width:885px"
          >
            <button
              className="uc-offcanvas-close top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90"
              type="button"
            >
              <i className="unicon-close"></i>
            </button>
            <div className="mini-cart-content vstack justify-between panel h-100">
              <div className="mini-cart-header">
                <h3 className="title h5 m-0 text-dark dark:bg-gray-900">
                  Shopping cart
                </h3>
              </div>
              <div className="mini-cart-listing panel flex-1 my-4 overflow-scroll">
                <p className="alert alert-warning">Your cart empty!</p>
                <div className="panel vstack gap-3"></div>
              </div>
              <div className="mini-cart-footer panel pt-3 border-top">
                <div className="panel vstack gap-3 justify-between">
                  <div className="mini-cart-total hstack justify-between">
                    <h5 className="h5 m-0 text-dark dark:text-white">
                      Subtotal
                    </h5>
                    <b className="fs-5">0.00</b>
                  </div>
                  <div className="mini-cart-actions vstack gap-1">
                    <a
                      className="btn btn-md btn-outline-gray-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700"
                      href="shop-cart.html"
                    >
                      View cart
                    </a>
                    <a
                      className="btn btn-md btn-primary text-white"
                      href="shop-checkout.html"
                    >
                      Checkout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="backtotop-wrap position-fixed bottom-0 end-0 z-99 m-2 vstack  ">
          <div
            className="darkmode-trigger cstack w-40px h-40px rounded-circle text-none bg-gray-100 dark:bg-gray-700 dark:text-white"
            data-darkmode-toggle=""
          >
            <label className="switch">
              <span className="sr-only">Dark mode toggle</span>
              <input type="checkbox" />
              <span className="slider fs-5">
                <MdKeyboardArrowUp />
              </span>
            </label>
          </div>
          <a
            className="btn btn-sm bg-primary text-white w-40px h-40px rounded-circle"
            data-uc-backtotop="true"
          >
            <i className="icon-2 unicon-chevron-up"></i>
          </a>
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Home;
