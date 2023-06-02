import React from "react";
import Head from "next/head";

export default function FourZeroOne() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Log In</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="Webflow" name="generator" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossorigin="anonymous"
        />
        <link
          href="/images/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
        <link href="/images/webclip.png" rel="apple-touch-icon" />
      </Head>
      <>
        <div className="wf-section">
          <div className="container-6 w-container">
            <a href="#" className="link-block-2 w-inline-block">
              <img
                src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc6825b640981f1ff35ed_Image%2028-12-2022%20at%202.42%20pm.jpg"
                loading="lazy"
                alt=""
                className="image-6"
                width={177}
              />
            </a>
          </div>
        </div>
        <a href="#" className="link-block w-inline-block" />
        <div className="w-users-userformpagewrap page-wrapper-2">
          <div className="w-users-userloginformwrapper log-in-form-block">
            <form
              data-wf-user-form-type="login"
              data-wf-user-form-redirect="/"
              method="post"
            >
              <div className="w-users-userformheader">
                <h2 className="heading-5">Log in</h2>
              </div>
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                maxLength={256}
                placeholder=""
                name="Email"
                id="wf-log-in-email"
                className="w-input"
                autoComplete="username"
                required=""
                data-wf-user-form-input-type="email"
              />
              <label htmlFor="Password" className="field-label-2">
                Password
              </label>
              <input
                type="password"
                maxLength={256}
                placeholder=""
                name="Password"
                id="wf-log-in-password"
                className="w-input"
                required=""
                data-wf-user-form-input-type="password"
              />
              <input
                type="submit"
                defaultValue="Log In"
                data-wait="Please wait..."
                className="w-users-userformbutton submit-button-2 w-button"
              />
              <div className="w-users-userformfooter">
                <span className="text-span-2">Don't have an account?</span>
                <a href="sign-up" className="link-2">
                  Sign Up
                </a>
              </div>
            </form>
            <div
              style={{ display: "none" }}
              data-wf-user-form-error="true"
              className="w-users-userformerrorstate w-form-fail"
            >
              <div
                className="user-form-error-msg"
                wf-login-form-general-error-error="We're having trouble logging you in. Please try again, or contact us if you continue to have problems."
                wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again."
              >
                We're having trouble logging you in. Please try again, or
                contact us if you continue to have problems.
              </div>
            </div>
          </div>
        </div>
        <div className="section-9 wf-section">
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc7e9d827c572b451f523_Image%2028-12-2022%20at%202.48%20pm.jpg"
            loading="lazy"
            alt=""
            className="image-32"
            width={256}
          />
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc909916d9be3862cf2c6_Image%2028-12-2022%20at%202.53%20pm.jpg"
            loading="lazy"
            alt=""
            className="image-31"
            width={582}
          />
        </div>
      </>
    </>
  );
}
