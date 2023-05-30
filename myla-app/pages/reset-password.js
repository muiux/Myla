import React from "react";
import Head from 'next/head'

export default function ResetPassword(){
    return(
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Reset Password</title>
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
  <div className="w-users-userformpagewrap page-wrapper-3">
    <div className="w-users-userresetpasswordformwrapper reset-password-form-block">
      <div
        tabIndex={-1}
        className="w-users-userformsuccessstate w-form-success"
      >
        <div className="w-users-userformheader">
          <img
            src="https://d3e54v103j8qbb.cloudfront.net/img/email-72.67fa6be437.svg"
            alt=""
          />
          <h2>Password Reset Email Sent</h2>
        </div>
        <p>
          If we found an account associated with that email address, we've sent
          a link to reset your password.
        </p>
      </div>
      <form method="post" data-wf-user-form-type="resetPassword">
        <div className="w-users-userformheader">
          <h2 className="heading-6">Reset Password</h2>
        </div>
        <label htmlFor="wf-reset-password-email" className="field-label-3">
          Email
        </label>
        <input
          type="email"
          maxLength={256}
          placeholder=""
          name="Email"
          id="wf-reset-password-email"
          aria-describedby="wf-reset-password-paragraph"
          className="w-input"
          autoComplete="username"
          required=""
          data-wf-user-form-input-type="email"
        />
        <input
          type="submit"
          defaultValue="Reset Password"
          data-wait="Please wait..."
          className="w-users-userformbutton submit-button-3 w-button"
        />
      </form>
      <div
        style={{ display: "none" }}
        data-wf-user-form-error="true"
        className="w-users-userformerrorstate w-form-fail"
      >
        <div
          className="user-form-error-msg"
          wf-reset-pw-form-general-error-error="There was an error resetting your password. Please try again, or contact us if you continue to have problems."
        >
          There was an error resetting your password. Please try again, or
          contact us if you continue to have problems.
        </div>
      </div>
    </div>
  </div>
  <div className="section-7 wf-section">
    <img
      src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc7e9d827c572b451f523_Image%2028-12-2022%20at%202.48%20pm.jpg"
      loading="lazy"
      alt=""
      className="image-28"
      width={196}
    />
    <img
      src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc909916d9be3862cf2c6_Image%2028-12-2022%20at%202.53%20pm.jpg"
      loading="lazy"
      alt=""
      className="image-27"
      width={521}
    />
  </div>
</>

    </>
    )
}