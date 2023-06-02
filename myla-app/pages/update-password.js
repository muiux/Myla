import React from "react";
import Head from "next/head";

export default function UpdatePassword() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Update Password</title>
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
        <div className="w-users-userformpagewrap page-wrapper-4">
          <div className="w-users-userupdatepasswordformwrapper update-password-block">
            <div
              tabIndex={-1}
              className="w-users-userformsuccessstate w-form-success"
            >
              <div className="w-users-userformheader">
                <img
                  src="https://d3e54v103j8qbb.cloudfront.net/img/thumbs-up-72.cbcaec93bc.svg"
                  alt=""
                />
                <h2>Password updated</h2>
              </div>
              <p>
                Your password was updated successfully. You were automatically
                logged in and can continue your session.
              </p>
              <a href="index" className="w-button">
                Go to Homepage
              </a>
            </div>
            <form method="post" data-wf-user-form-type="updatePassword">
              <div className="w-users-userformheader">
                <h2 className="heading-7">Update Password</h2>
              </div>
              <p id="wf-update-password-paragraph" className="paragraph">
                Please enter your new password in the field below. Make sure you
                are not using your current password.
              </p>
              <label htmlFor="wf-update-password" className="field-label-6">
                New Password
              </label>
              <input
                type="password"
                maxLength={256}
                placeholder=""
                name="Password"
                id="wf-update-password"
                aria-describedby="wf-update-password-paragraph"
                className="w-input"
                required=""
                data-wf-user-form-input-type="password"
              />
              <input
                type="submit"
                defaultValue="Update Password"
                data-wait="Please wait..."
                className="w-users-userformbutton submit-button-4 w-button"
              />
            </form>
            <div
              style={{ display: "none" }}
              data-wf-user-form-error="true"
              className="w-users-userformerrorstate w-form-fail"
            >
              <div
                className="user-form-error-msg"
                wf-update-pw-form-general-error-error="There was an error updating your password. Please try again, or contact us if you continue to have problems."
                wf-update-pw-form-weak-password-error="Your password must be at least 8 characters."
              >
                There was an error updating your password. Please try again, or
                contact us if you continue to have problems.
              </div>
            </div>
          </div>
        </div>
        <div className="section-5 wf-section">
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc7e9d827c572b451f523_Image%2028-12-2022%20at%202.48%20pm.jpg"
            loading="lazy"
            alt=""
            className="image-24"
            width={226}
          />
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63ad0a71461adb0681d55f14_Image%2028-12-2022%20at%207.32%20pm.jpg"
            loading="lazy"
            alt=""
            className="image-23"
            width={464}
          />
        </div>
      </>
    </>
  );
}
