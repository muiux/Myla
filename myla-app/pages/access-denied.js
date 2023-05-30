import React from "react";
import Head from 'next/head'

export default function AccessDenied(){
    return(
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Myla</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" /> 
        <meta content="Webflow" name="generator" />
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
        <div className="w-users-userformpagewrap page-wrapper-5">
            <div className="container-7 w-container">
            <div className="w-users-userformheader form-header">
                <img
                src="https://d3e54v103j8qbb.cloudfront.net/static/utility-lock.ae54711958.svg"
                alt=""
                className="image-12"
                />
                <h2 className="heading-8">Access Denied</h2>
            </div>
            <p className="paragraph-2">
                A site membership is required to view this page. Please{" "}
                <a href="sign-up">Sign up</a> or <a href="log-in">Log in</a>.
            </p>
            </div>
        </div>
        <div className="section-6 wf-section">
            <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63acc7e9d827c572b451f523_Image%2028-12-2022%20at%202.48%20pm.jpg"
            loading="lazy"
            alt=""
            className="image-26"
            width={203}
            />
            <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63ad0a71461adb0681d55f14_Image%2028-12-2022%20at%207.32%20pm.jpg"
            loading="lazy"
            alt=""
            className="image-25"
            width={450}
            />
        </div>
        </>

    </>
    )
}