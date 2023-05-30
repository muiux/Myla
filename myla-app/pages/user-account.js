import React from "react";
import Head from 'next/head'

export default function UserAccount(){
    return(
    <>
      <Head>
        <meta charset="utf-8" />
        <title>User Account</title>
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
  <div
    className="w-users-useraccountwrapper user-account-wrapper"
    data-wf-user-account="true"
    data-wf-collection="site.siteUser"
  >
    <div className="w-users-blockheader">
      <h2 className="heading-9">My Account</h2>
    </div>
    <div className="w-users-blockcontent">
      <div>
        <form method="post" data-wf-user-form-type="userAccount">
          <label htmlFor="Email" className="field-label-2">
            Email
          </label>
          <input
            type="email"
            disabled=""
            name="Email"
            id="wf-user-account-email"
            placeholder=""
            className="w-input w-input-disabled"
            autoComplete="username"
            required=""
            data-wf-user-form-input-type="email"
          />
          <label htmlFor="Name" className="field-label-2">
            Name
          </label>
          <input
            type="text"
            className="w-input"
            maxLength={256}
            name=""
            data-name="field"
            data-wf-user-field="wf-user-field-name"
            placeholder=""
            id="wf-user-account-name"
            required=""
          />
          <h3 className="heading-10">Password Settings</h3>
          <a href="reset-password" className="link-2">
            Reset password
          </a>
          <label className="w-checkbox checkbox-field">
            <input
              type="checkbox"
              id="wf-user-account-accept-communications"
              name="Checkbox"
              data-name="Checkbox"
              data-wf-user-field="wf-user-field-accept-communications"
              className="w-checkbox-input"
            />
            <span className="checkbox-label-3 w-form-label" htmlFor="Checkbox">
              I consent to receive marketing emails.
            </span>
          </label>
          <input
            type="submit"
            defaultValue="Save Changes"
            data-wait="Saving..."
            className="w-users-useraccountformsavebutton submit-button-5 w-button"
          />
          <input
            type="reset"
            defaultValue="Cancel"
            className="w-users-useraccountformcancelbutton cancel-button w-button"
          />
        </form>
        <div
          tabIndex={-1}
          className="w-users-userformsuccessstate w-form-success"
        >
          <p>Your account was updated successfully.</p>
        </div>
        <div
          style={{ display: "none" }}
          data-wf-user-form-error="true"
          className="w-form-fail"
        >
          <div
            className="user-form-error-msg"
            wf-account-update-form-general-error-error="There was an error updating your account. Please try again, or contact us if you continue to have problems."
          >
            There was an error updating your account. Please try again, or
            contact us if you continue to have problems.
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="login-graphics wf-section">
    <img
      src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc7e9d827c572b451f523_Image%2028-12-2022%20at%202.48%20pm.jpg"
      loading="lazy"
      alt=""
      className="image-11"
      width={244}
    />
    <img
      src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc909916d9be3862cf2c6_Image%2028-12-2022%20at%202.53%20pm.jpg"
      loading="lazy"
      alt=""
      className="image-9"
    />
  </div>
</>

    </>
    )
}