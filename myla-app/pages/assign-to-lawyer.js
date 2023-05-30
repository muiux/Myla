import React from "react";
import Head from 'next/head'

export default function AssignToLawyer(){
    return(
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Assign to Lawyer</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" /> 
        <meta content="Webflow" name="generator" />
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin="anonymous" />
        <link href="/images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
        <link href="/images/webclip.png" rel="apple-touch-icon" />
      </Head>
      <>
  <div
    data-animation="default"
    data-collapse="medium"
    data-duration={400}
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    className="navbar-3 w-nav"
  >
    <div className="container-3 w-container">
      <a
        href="my-intakes-dashboard"
        className="link-block-7 w-inline-block"
      >
        <img
          src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63abf671c73ddf94d00ea298_Image%2027-12-2022%20at%203.23%20pm.jpg"
          loading="lazy"
          alt=""
          className="image-4"
          width={160}
        />
      </a>
      <h2 className="heading-3">my leads area</h2>
      <nav role="navigation" className="nav-menu w-nav-menu">
        <a href="#" className="nav-link-4 w-nav-link">
          Help
        </a>
        <a href="#" className="nav-link-5 w-nav-link">
          Settings
        </a>
        <img
          src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63abf671c73ddf083f0ea295_account.png"
          loading="lazy"
          data-w-id="356f5317-d528-0c9e-cfe5-00e5fb0ceb2e"
          alt=""
          className="image-5"
          width={50}
        />
      </nav>
      <div className="w-nav-button">
        <div className="w-icon-nav-menu" />
      </div>
    </div>
  </div>
  <div className="w-container">
    <div className="form-block w-form">
      <form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        method="get"
      >
        <label htmlFor="First-Name" className="field-label">
          Primary Lawyer*
        </label>
        <div data-hover="false" data-delay={0} className="w-dropdown">
          <div className="w-dropdown-toggle">
            <div className="w-icon-dropdown-toggle" />
            <div>Dropdown</div>
          </div>
          <nav className="w-dropdown-list">
            <a href="#" className="w-dropdown-link">
              Link 1
            </a>
            <a href="#" className="w-dropdown-link">
              Link 2
            </a>
            <a href="#" className="w-dropdown-link">
              Link 3
            </a>
          </nav>
        </div>
        <label htmlFor="First-Name-2" className="field-label">
          Secondary Lawyer/Legal Assistant
        </label>
        <div data-hover="false" data-delay={0} className="w-dropdown">
          <div className="w-dropdown-toggle">
            <div className="w-icon-dropdown-toggle" />
            <div>Dropdown</div>
          </div>
          <nav className="w-dropdown-list">
            <a href="#" className="w-dropdown-link">
              Link 1
            </a>
            <a href="#" className="w-dropdown-link">
              Link 2
            </a>
            <a href="#" className="w-dropdown-link">
              Link 3
            </a>
          </nav>
        </div>
        <a href="#" className="button-8 w-button">
          + Add Lawyer to File
        </a>
        <label htmlFor="Client-ref-no-2" className="field-label">
          Add Client Reference No. (optional)
        </label>
        <input
          type="text"
          className="w-input"
          maxLength={256}
          name="Client-ref-no-2"
          data-name="Client Ref No 2"
          placeholder="Client ref no."
          id="Client-ref-no-2"
          required=""
        />
        <div className="div-block-2" />
        <label htmlFor="First-Name-2" className="field-label">
          <strong>Review Client Information:</strong>
        </label>
        <label htmlFor="First-Name-2" className="field-label">
          Name of Client 1
        </label>
        <input
          type="text"
          className="w-input"
          maxLength={256}
          name="First-Name"
          data-name="First Name"
          placeholder="First name"
          id="First-Name"
          required=""
        />
        <input
          type="text"
          className="w-input"
          maxLength={256}
          name="Last-Name"
          data-name="Last Name"
          placeholder="Last name"
          id="Last-Name"
          required=""
        />
        <label htmlFor="email" className="field-label">
          Client Email
        </label>
        <input
          type="email"
          className="w-input"
          maxLength={256}
          name="email"
          data-name="Email"
          placeholder="Email"
          id="email"
          required=""
        />
        <label htmlFor="Phone" className="field-label">
          Client Phone{" "}
        </label>
        <input
          type="email"
          className="w-input"
          maxLength={256}
          name="Phone"
          data-name="Phone"
          placeholder="Phone"
          id="Phone"
          required=""
        />
        <a href="#" className="button-8 w-button">
          + Add Client to File
        </a>
        <label htmlFor="Client-ref-no" className="field-label">
          Client Reference No. (optional)
        </label>
        <input
          type="text"
          className="w-input"
          maxLength={256}
          name="Client-ref-no"
          data-name="Client ref no"
          placeholder="Client ref no."
          id="Client-ref-no"
          required=""
        />
        <div className="div-block-2" />
        <label htmlFor="email-2" className="field-label">
          Area of Law
        </label>
        <a
          data-w-id="b43546b0-7987-22fc-984b-3c2e8a43fce8"
          style={{
            backgroundColor: "rgba(16,75,145,0.23)",
            color: "rgba(51,51,51,0.78)"
          }}
          href="#"
          className="button-6 w-button"
        >
          Family Law
        </a>
        <a
          data-w-id="b43546b0-7987-22fc-984b-3c2e8a43fcea"
          style={{
            backgroundColor: "rgba(16,75,145,0.23)",
            color: "rgba(51,51,51,0.78)"
          }}
          href="#"
          className="button-5 w-button"
        >
          Commercial Law
        </a>
        <a
          data-w-id="b43546b0-7987-22fc-984b-3c2e8a43fcec"
          style={{
            backgroundColor: "rgba(16,75,145,0.23)",
            color: "rgba(51,51,51,0.78)"
          }}
          href="#"
          className="button-4 w-button"
        >
          Wills and Estates
        </a>
        <a
          data-w-id="b43546b0-7987-22fc-984b-3c2e8a43fcee"
          style={{
            backgroundColor: "rgba(16,75,145,0.23)",
            color: "rgba(51,51,51,0.78)"
          }}
          href="#"
          className="button-7 w-button"
        >
          Real Estate
        </a>
        <div className="div-block-2" />
        <label htmlFor="email-2" className="field-label">
          Intake Form
        </label>
        <div data-delay={0} data-hover="false" className="w-dropdown">
          <div className="dropdown-toggle-6 w-dropdown-toggle">
            <div className="w-icon-dropdown-toggle" />
            <div className="text-block-23">Select intake form</div>
          </div>
          <nav className="w-dropdown-list">
            <a href="#" className="w-dropdown-link">
              Link 1
            </a>
            <a href="#" className="w-dropdown-link">
              Link 2
            </a>
            <a href="#" className="w-dropdown-link">
              Link 3
            </a>
          </nav>
        </div>
        <div className="div-block-2" />
        <label htmlFor="Deadline" className="field-label">
          Deadline
        </label>
        <input
          type="email"
          className="w-input"
          maxLength={256}
          name="Deadline"
          data-name="Deadline"
          placeholder="dd/mm/yyyy or estimate"
          id="Deadline"
          required=""
        />
        <div className="div-block-2" />
        <label htmlFor="field" className="field-label">
          Notes for lawyer
        </label>
        <textarea
          id="field"
          name="field"
          maxLength={5000}
          data-name="field"
          placeholder=""
          className="w-input"
          defaultValue={""}
        />
        <div className="div-block-2" />
        <label htmlFor="field-2" className="field-label">
          <strong>Review First Draft and Notes</strong>
        </label>
        <div className="text-block-29">
          This is where we embed the word doc.
        </div>
        <label htmlFor="field-2" className="field-label">
          Additional Notes for Lawyer
        </label>
        <textarea
          id="field-2"
          name="field-2"
          maxLength={5000}
          data-name="Field 2"
          placeholder=""
          className="w-input"
          defaultValue={""}
        />
        <a href="#" className="submit-button w-button">
          Create Client File and Assign to Lawyer
        </a>
      </form>
      <div className="w-form-done">
        <div>Thank you! Your submission has been received!</div>
      </div>
      <div className="w-form-fail">
        <div>Oops! Something went wrong while submitting the form.</div>
      </div>
    </div>
  </div>
  <div className="div-block-11">
    <div className="section-13 wf-section">
      <div className="text-block-16">Account Name</div>
    </div>
    <div className="section-14 wf-section">
      <a href="#" className="link-11">
        Profile
      </a>
      <a href="#" className="link-8">
        Switch Account
      </a>
      <a href="#" className="link-8">
        Log Out
      </a>
      <a href="#" className="link-8">
        Manage Linked Accounts
      </a>
    </div>
  </div>
</>

    </>
    )
}