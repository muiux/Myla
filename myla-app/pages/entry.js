import React from "react";
import Head from 'next/head'

export default function Entry(){
    return(
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Entry</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" /> 
        <meta content="Webflow" name="generator" />
        <link href="css/normalize.css" rel="stylesheet" type="text/css" />
        <link href="css/webflow.css" rel="stylesheet" type="text/css" />
        <link href="css/myla-d39d21.webflow.css" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous" />
        <link href="/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/webclip.png" rel="apple-touch-icon" />
      </Head>
      <>
  <div className="navbar-logo-left-2 wf-section">
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration={400}
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar-logo-left-container-2 shadow-three w-nav"
    >
      <div className="container-8">
        <div className="navbar-wrapper-2">
          <a href="#" className="navbar-brand-2 w-nav-brand">
            <img
              src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63abf671c73ddf94d00ea298_Image%2027-12-2022%20at%203.23%20pm.jpg"
              loading="lazy"
              alt=""
              className="image-15"
              width={166}
            />
          </a>
          <nav role="navigation" className="nav-menu-wrapper-2 w-nav-menu">
            <ul role="list" className="nav-menu-two-2 w-list-unstyled">
              <li>
                <a href="#" className="nav-link-6">
                  Help
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="nav-link-6">
                  Pricing
                </a>
              </li>
              <li className="list-item">
                <a href="#" className="nav-link-6">
                  Contact
                </a>
              </li>
              <li>
                <div
                  data-hover="false"
                  data-delay={0}
                  className="nav-dropdown-2 w-dropdown"
                >
                  <div className="nav-dropdown-toggle-2 w-dropdown-toggle">
                    <div className="nav-dropdown-icon-2 w-icon-dropdown-toggle" />
                    <div>About</div>
                  </div>
                  <nav className="nav-dropdown-list-2 shadow-three mobile-shadow-hide w-dropdown-list">
                    <a href="#" className="nav-dropdown-link-2 w-dropdown-link">
                      Resource Link 1
                    </a>
                    <a href="#" className="nav-dropdown-link-2 w-dropdown-link">
                      Resource Link 2
                    </a>
                    <a href="#" className="nav-dropdown-link-2 w-dropdown-link">
                      Resource Link 3
                    </a>
                  </nav>
                </div>
              </li>
              <li>
                <a href="#" className="nav-link-accent-2">
                  Login
                </a>
              </li>
              <li className="mobile-margin-top-11">
                <a href="#" className="button-primary-2 w-button">
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
          <div className="menu-button-2 w-nav-button">
            <div className="w-icon-nav-menu" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section-4 wf-section">
    <div className="text-block-20">Myla.</div>
    <div className="text-block-19">A legal assistant you can rely on.</div>
    <img
      src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63ad0a71461adb0681d55f14_Image%2028-12-2022%20at%207.32%20pm.jpg"
      loading="lazy"
      alt=""
      className="image-22"
    />
  </div>
  <section className="hero-heading-left-2 wf-section">
    <div className="container-13">
      <div className="hero-wrapper-2">
        <div className="hero-split-2">
          <h1 className="heading-17">What is Myla?</h1>
          <p className="margin-bottom-24px-3">
            Myla is a software that automates the daily tasks of legal
            administration. Start your free 30-day trial with Myla today to
            deliver your clients high quality solutions quickly.
          </p>
          <a href="#" className="button-primary-5 w-button">
            learn more
          </a>
        </div>
        <div className="hero-split-2">
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acfe20da54a25f6b09fb22_istockphoto-1316044344-612x612.jpeg"
            loading="lazy"
            alt=""
            className="shadow-two-3"
          />
        </div>
      </div>
    </div>
  </section>
  <section className="testimonial-slider-large wf-section">
    <div className="container-13">
      <div
        data-delay={4000}
        data-animation="slide"
        className="testimonial-slider-two w-slider"
        data-autoplay="false"
        data-easing="ease"
        data-hide-arrows="false"
        data-disable-swipe="false"
        data-autoplay-limit={0}
        data-nav-spacing={12}
        data-duration={500}
        data-infinite="true"
      >
        <div className="w-slider-mask">
          <div className="w-slide">
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg"
                  loading="lazy"
                  alt=""
                  className="testimonial-quote-icon"
                />
                <div className="testimonial-quote">
                  Myla has been essential to successfully handling my clients.
                </div>
                <div className="testimonial-info-two">
                  <div>
                    <div className="testimonial-author-name">
                      Some Lawyer Esq.
                    </div>
                    <div>Principal of A Law Firm</div>
                  </div>
                </div>
              </div>
              <img
                src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63ad04c3916d9bb980311c6a_lorne-divorce.jpeg"
                loading="lazy"
                alt=""
                className="testimonial-image-two"
              />
            </div>
          </div>
          <div className="w-slide">
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg"
                  loading="lazy"
                  alt=""
                  className="testimonial-quote-icon"
                />
                <div className="testimonial-quote">
                  Lorem Ipsum is simply dummy of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's.
                </div>
                <div className="testimonial-info-two">
                  <img
                    src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg"
                    loading="lazy"
                    alt=""
                    className="testimonial-author-image-three"
                  />
                  <div>
                    <div className="testimonial-author-name">Author Name</div>
                    <div>VP of Company</div>
                  </div>
                </div>
              </div>
              <img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a55c612aae2_portfolio%202%20-%20wide.svg"
                loading="lazy"
                alt=""
                className="testimonial-image-two"
              />
            </div>
          </div>
          <div className="w-slide">
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg"
                  loading="lazy"
                  alt=""
                  className="testimonial-quote-icon"
                />
                <div className="testimonial-quote">
                  Lorem Ipsum is simply dummy of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's.
                </div>
                <div className="testimonial-info-two">
                  <img
                    src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg"
                    loading="lazy"
                    alt=""
                    className="testimonial-author-image-three"
                  />
                  <div>
                    <div className="testimonial-author-name">Author Name</div>
                    <div>VP of Company</div>
                  </div>
                </div>
              </div>
              <img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a55c612aae2_portfolio%202%20-%20wide.svg"
                loading="lazy"
                alt=""
                className="testimonial-image-two"
              />
            </div>
          </div>
          <div className="w-slide">
            <div className="testimonial-slide">
              <div className="testimonial-content">
                <img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a91e612aae8_quote-mark.svg"
                  loading="lazy"
                  alt=""
                  className="testimonial-quote-icon"
                />
                <div className="testimonial-quote">
                  Lorem Ipsum is simply dummy of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's.
                </div>
                <div className="testimonial-info-two">
                  <img
                    src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a28a812aad9_placeholder%202.svg"
                    loading="lazy"
                    alt=""
                    className="testimonial-author-image-three"
                  />
                  <div>
                    <div className="testimonial-author-name">Author Name</div>
                    <div>VP of Company</div>
                  </div>
                </div>
              </div>
              <img
                src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a55c612aae2_portfolio%202%20-%20wide.svg"
                loading="lazy"
                alt=""
                className="testimonial-image-two"
              />
            </div>
          </div>
        </div>
        <div className="testimonial-slider-arrow w-slider-arrow-left">
          <div className="w-icon-slider-left" />
        </div>
        <div className="testimonial-slider-arrow w-slider-arrow-right">
          <div className="w-icon-slider-right" />
        </div>
        <div className="testimonial-slider-nav w-slider-nav w-slider-nav-invert w-round" />
      </div>
    </div>
  </section>
  <section className="hero-subscribe-right wf-section">
    <div className="container-13">
      <div className="hero-wrapper-2">
        <div className="hero-split-2">
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc7e9d827c572b451f523_Image%2028-12-2022%20at%202.48%20pm.jpg"
            loading="lazy"
            alt=""
            className="shadow-two-2"
            width={196}
          />
        </div>
        <div className="hero-split-2">
          <h1 className="heading-16">Get the latest</h1>
          <p className="margin-bottom-24px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            tincidunt sagittis eros. Quisque quis euismod lorem. Etiam sodales
            ac felis id interdum.
          </p>
          <div className="hero-form w-form">
            <form
              id="wf-form-Hero-Form"
              name="wf-form-Hero-Form"
              data-name="Hero Form"
              method="get"
              className="hero-form-container"
            >
              <input
                type="text"
                className="hero-form-input w-input"
                maxLength={256}
                name="Hero-Email-2"
                data-name="Hero Email 2"
                aria-label="Enter your email"
                placeholder="Enter your email"
                id="Hero-Email-2"
                required=""
              />
              <input
                type="submit"
                defaultValue="Get Started"
                data-wait="Please wait..."
                className="button-primary-5 w-button"
              />
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
          <a href="#" className="text-link-arrow w-inline-block">
            <div className="text-block-8">or Sign-up with Google</div>
            <div className="arrow-embed w-embed">
              <svg
                width={17}
                height={17}
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.13 8.5L6.87296 4.24291L5.87067 5.24379L9.129 8.5L5.87067 11.7555L6.87225 12.7571L11.13 8.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section className="footer-dark wf-section">
    <div className="container-13">
      <div className="footer-wrapper">
        <a href="#" className="footer-brand w-inline-block">
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc6825b640981f1ff35ed_Image%2028-12-2022%20at%202.42%20pm.jpg"
            loading="lazy"
            alt=""
            width={234}
          />
        </a>
        <div className="footer-content">
          <div
            id="w-node-e34f4a86-85c3-50bd-755e-9e7c68243153-5baf3394"
            className="footer-block"
          >
            <div className="title-small">SIGN&nbsp;UP</div>
            <a href="#" className="footer-link">
              How it works
            </a>
            <a href="#" className="footer-link">
              Pricing
            </a>
            <a href="#" className="footer-link">
              Help
            </a>
          </div>
          <div
            id="w-node-e34f4a86-85c3-50bd-755e-9e7c6824315c-5baf3394"
            className="footer-block"
          >
            <div className="title-small">Resources</div>
            <a href="#" className="footer-link">
              Contact us
            </a>
          </div>
          <div
            id="w-node-e34f4a86-85c3-50bd-755e-9e7c68243161-5baf3394"
            className="footer-block"
          >
            <div className="title-small">About</div>
            <a href="#" className="footer-link">
              Terms &amp; Conditions
            </a>
            <a href="#" className="footer-link">
              Privacy policy
            </a>
            <div className="footer-social-block">
              <a href="#" className="footer-social-link w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124ac15112aad5_twitter%20small.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a href="#" className="footer-social-link w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a389912aad8_linkedin%20small.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
              <a href="#" className="footer-social-link w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/62434fa732124a0fb112aab4/62434fa732124a51bf12aae9_facebook%20small.svg"
                  loading="lazy"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-divider" />
    <div className="footer-copyright-center">
      Copyright © 2022 MYLA&nbsp;SOFTWARE&nbsp;INC.
    </div>
  </section>
</>

    </>
    )
}