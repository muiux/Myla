import React from "react";
import Head from 'next/head'

export default function CreateNewClient(){
    return(
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Create New Client</title>
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
  <div className="container-4 w-container">
    <div className="create-client w-form">
      <form
        id="email-form"
        name="email-form"
        data-name="Email Form"
        action="https://hook.eu1.make.com/uf3t481twkq9e1iyqmbv2snd61l3gjpm?_ga=2.208156690.1212758818.1678801560-773753900.1678801560"
        method="post"
        className="form-2"
      >
        <label htmlFor="First-Name" className="field-label">
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
          type="tel"
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
          type="text"
          className="w-input"
          maxLength={256}
          name="Deadline"
          data-name="Deadline"
          placeholder="dd/mm/yyyy or estimate"
          id="Deadline"
          required=""
        />
        <div className="div-block-2" />
        <label htmlFor="Notes-for-Lawyer" className="field-label">
          Notes for lawyer
        </label>
        <input
          type="text"
          className="w-input"
          maxLength={256}
          name="Notes-for-Lawyer"
          data-name="Notes for Lawyer"
          placeholder=""
          id="Notes-for-Lawyer"
        />
        <div className="div-block-2" />
        <label htmlFor="field-2" className="field-label">
          Toggle Actions
        </label>
        <div>
          <ul role="list" className="list w-list-unstyled">
            <li className="list-item-2">
              <a
                data-w-id="8c5f4959-fec8-9df4-32fb-9d6a11f3d3bb"
                style={{
                  backgroundColor: "rgba(16,75,145,0.23)",
                  color: "rgba(51,51,51,0.78)"
                }}
                href="#"
                className="button-5 w-button"
              >
                Send Email
              </a>
            </li>
            <li className="list-item-3">
              <a
                data-w-id="729d70ed-92b5-0b9b-5f94-e6c2b488cf95"
                style={{
                  backgroundColor: "rgba(16,75,145,0.23)",
                  color: "rgba(51,51,51,0.78)"
                }}
                href="#"
                className="button-5 w-button"
              >
                Send Docusign
              </a>
            </li>
            <li>
              <a
                data-w-id="318e3d79-92ff-5125-036a-afafd7ebabb8"
                style={{
                  backgroundColor: "rgba(16,75,145,0.23)",
                  color: "rgba(51,51,51,0.78)"
                }}
                href="#"
                className="button-5 w-button"
              >
                Send Lawyer's Notes
              </a>
            </li>
          </ul>
        </div>
        <div className="div-block-2" />
        <label htmlFor="field-2" className="field-label">
          Email Preview
        </label>
        <div>Insert editable email preview in this div block</div>
        <input
          type="submit"
          defaultValue="+ Create Client and Complete Intake Actions"
          data-wait="Please wait..."
          className="submit-button w-button"
        />
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