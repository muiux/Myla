import React from "react";
import Head from "next/head";

export default function SignUp() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Sign Up</title>
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
        <div className="w-users-userformpagewrap page-wrapper">
          <div className="w-users-usersignupformwrapper sign-up-form-block">
            <div
              tabIndex={-1}
              className="w-users-userformsuccessstate w-form-success"
            >
              <div className="w-users-userformheader">
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/img/thumbs-up-72.cbcaec93bc.svg"
                  alt=""
                />
                <h2>Account activated</h2>
              </div>
              <p>
                Your account was created successfully. You will be redirected
                shortly.
              </p>
              <div data-wf-user-form-redirect="">
                <a href="index">If nothing happens, click here.</a>
              </div>
            </div>
            <form method="post" data-wf-user-form-type="signup">
              <div className="w-users-userformheader">
                <h2 className="heading-4">Sign Up</h2>
              </div>
              <label htmlFor="Email" className="field-label-2">
                Email
              </label>
              <input
                type="email"
                maxLength={256}
                placeholder=""
                name="Email"
                id="wf-sign-up-email"
                className="user-email-field w-input"
                autoComplete="username"
                required=""
                data-wf-user-form-input-type="email"
              />
              <label htmlFor="Name" className="field-label-2">
                Name
              </label>
              <input
                type="text"
                className="text-field w-input"
                maxLength={256}
                name=""
                data-name="field"
                data-wf-user-field="wf-user-field-name"
                placeholder=""
                id="wf-sign-up-name"
                required=""
              />
              <label htmlFor="Password" className="field-label-2">
                Password
              </label>
              <input
                type="password"
                maxLength={256}
                placeholder=""
                name="Password"
                id="wf-sign-up-password"
                className="w-input"
                required=""
                data-wf-user-form-input-type="password"
              />
              <label className="w-checkbox">
                <input
                  type="checkbox"
                  id="wf-sign-up-accept-privacy"
                  required=""
                  name="Checkbox"
                  data-name="Checkbox"
                  data-wf-user-field="wf-user-field-accept-privacy"
                  className="w-checkbox-input"
                />
                <span
                  className="checkbox-label w-form-label"
                  htmlFor="Checkbox"
                >
                  By creating an account, I agree to this website's{" "}
                  <a href="#">privacy policy</a> and{" "}
                  <a href="#">terms of service</a>
                </span>
              </label>
              <label className="w-checkbox">
                <input
                  type="checkbox"
                  id="wf-sign-up-accept-communications"
                  required=""
                  name="Checkbox"
                  data-name="Checkbox"
                  data-wf-user-field="wf-user-field-accept-communications"
                  className="w-checkbox-input"
                />
                <span
                  className="checkbox-label w-form-label"
                  htmlFor="Checkbox"
                >
                  I consent to receive marketing emails.
                </span>
              </label>
              <input
                type="submit"
                defaultValue="Sign Up"
                data-wait="Please wait..."
                className="w-users-userformbutton submit-button-2 w-button"
              />
              <div className="w-users-userformfooter">
                <span className="text-span">Already have an account?</span>
                <a href="log-in" className="link-2">
                  Log In
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
                wf-signup-form-general-error-error="There was an error signing you up. Please try again, or contact us if you continue to have problems."
                wf-signup-form-not-allowed-error="You're not allowed to access this site, please contact the admin for support."
                wf-signup-form-invalid-email-error="Make sure your email exists and is properly formatted (e.g., user@domain.com)."
                wf-signup-form-email-already_exist-error="An account with this email address already exists. Log in or reset your password."
                wf-signup-form-use-invite_email-error="Use the same email address your invitation was sent to."
                wf-signup-form-invalid-password-error="Your password must be at least 8 characters."
                wf-signup-form-not-verified-error="We couldn't verify your account. Please try again, or contact us if you continue to have problems."
                wf-signup-form-expired-token-error="This verification link has expired. A new verification link has been sent to your email. Please try again, or contact us if you continue to have problems."
              >
                There was an error signing you up. Please try again, or contact
                us if you continue to have problems.
              </div>
            </div>
            <div
              tabIndex={-1}
              className="w-users-usersignupverificationmessage w-form-verification"
              data-wf-user-form-verification="true"
            >
              <div className="w-users-userformheader">
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/img/email-72.67fa6be437.svg"
                  alt=""
                />
                <h2>Verification Required</h2>
              </div>
              <p>
                Account verification required. Please check your email to find
                your unique verification link.
              </p>
            </div>
          </div>
        </div>
        <div className="section-8 wf-section">
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc7e9d827c572b451f523_Image%2028-12-2022%20at%202.48%20pm.jpg"
            loading="lazy"
            alt=""
            className="image-30"
            width={231}
          />
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63ad0a71461adb0681d55f14_Image%2028-12-2022%20at%207.32%20pm.jpg"
            loading="lazy"
            alt=""
            className="image-29"
          />
        </div>
      </>
    </>
  );
}
