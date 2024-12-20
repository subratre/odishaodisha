import React from "react";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { TiTick } from "react-icons/ti";

import { MdKeyboardArrowUp } from "react-icons/md";
import connectDB from "@/config/database";
import Faq from "@/components/faq/faq";
import Footer from "@/components/footer/Footer";

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
        </div>
      </>
    );
  } catch (error) {
    console.log(error);
  }
};

export default Home;
