import React from "react";
import Head from 'next/head'

export default function FourZeroOne(){
    return(
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Protected Page</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" /> 
        <meta content="Webflow" name="generator" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous" />
        <link href="/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/webclip.png" rel="apple-touch-icon" />
      </Head>
      <div className="utility-page-wrap">
        <div className="utility-page-content w-password-page w-form">
            <form
            action="/.wf_auth"
            method="post"
            id="email-form"
            name="email-form"
            data-name="Email Form"
            className="utility-page-form w-password-page"
            >
            <img
                src="https://d3e54v103j8qbb.cloudfront.net/static/utility-lock.ae54711958.svg"
                alt=""
            />
            <h2 className="heading-22">Protected Page</h2>
            <label htmlFor="pass" className="field-label-7 w-password-page">
                Password
            </label>
            <input
                type="password"
                className="w-password-page w-input"
                autofocus="true"
                maxLength={256}
                name="pass"
                data-name="field"
                placeholder="Enter your password"
                id="pass"
            />
            <input
                type="submit"
                defaultValue="Submit"
                data-wait="Please wait..."
                className="submit-button-6 w-password-page w-button"
            />
            <div className="w-password-page w-form-fail">
                <div>Incorrect password. Please try again.</div>
            </div>
            <div
                style={{ display: "none" }}
                className="w-password-page w-embed w-script"
            >
                <input
                type="hidden"
                name="path"
                defaultValue="<%WF_FORM_VALUE_PATH%>"
                />
                <input
                type="hidden"
                name="page"
                defaultValue="<%WF_FORM_VALUE_PAGE%>"
                />
            </div>
            <div
                style={{ display: "none" }}
                className="w-password-page w-embed w-script"
            ></div>
            </form>
        </div>
        </div>

    </>
    )
}