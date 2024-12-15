import React from "react";

const Footer = () => {
  return (
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
                        Salesforce to get things done as I can create a custom
                        proposal with dynamic pricing tables.
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
                      <a href="shop-product-detail/1.html">Product detail</a>
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
                      <a href="reset-password-2.html">Reset password v2</a>
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
  );
};

export default Footer;
