import React from "react";
import Head from 'next/head'

export default function MyClients(){
    return(
    <>
      <Head>
        <meta charset="utf-8" />
        <title>My Clients</title>
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
      <h2 className="heading-3">my clients</h2>
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
  <div className="div-block-13">
    <a href="create-new-client" className="button w-button">
      + Create Client
    </a>
    <h4 className="heading-24">my clients</h4>
  </div>
  <div className="section-15 wf-section">
    <div className="text-block-25">
      This Div block will contain a table which contains the list of clients who
      have been retained (ie they've paid us and the lawyer is working on <br />
      their case). They will be moved here once you click on assign lawyer in
      the leads area. <br />
      <br />
      The data table will go like so:
      <br />
      <br /> Name of Lead |&nbsp;Client Ref number | Category | Deadline |
      Assigned Lawyer(s) | Notes <br />
      <br />
      <br />
      <br />
      the name of the client in the table will be a hyperlink to the "my client
      area" for that client. <a href="client-area">See this page</a>
      <br />
      <br />
      <br />‍
    </div>
  </div>
  <div className="navbar">
    <div className="nav__header">
      <div className="navbar__top">
        <div className="hide-text">
          <h5 className="heading-19">Dashboard</h5>
        </div>
        <a
          data-w-id="50bf193c-53f6-346b-75db-fc0a6395c2fd"
          href="#"
          className="square is--hamburger w-inline-block"
        >
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63abf4b38af6f9fb7df534e9_hamburger.svg"
            loading="lazy"
            alt=""
            className="navbar__icon is--1"
          />
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63abf4b38af6f967b6f534e8_x.svg"
            loading="lazy"
            alt=""
            className="navbar__icon is--2"
          />
        </a>
      </div>
      <a href="#" className="search w-inline-block">
        <div className="square is--search">
          <img
            src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63abf4b38af6f91195f534ea_search.svg"
            loading="lazy"
            alt=""
            className="navbar__icon is--search"
          />
        </div>
        <div className="hide-text">
          <p className="paragraph-4">Search</p>
        </div>
      </a>
      <div className="square is--line" />
    </div>
    <div className="nav__links-2">
      <div className="div-block-17">
        <div
          data-hover="false"
          data-delay={0}
          className="nav-bar-element w-dropdown"
        >
          <div className="dropdown-toggle-11 w-dropdown-toggle">
            <a href="#" className="link-block-6 w-inline-block">
              <div className="square is--link">
                <img
                  src="images/Image-21-01-2023-at-4.44-am.jpg"
                  loading="lazy"
                  alt=""
                  className="image-36"
                />
              </div>
              <div className="text-block-21">My Intake Forms</div>
            </a>
            <div className="icon-3 w-icon-dropdown-toggle" />
            <img
              src="images/Image-30-03-2023-at-7.31-pm.jpg"
              loading="lazy"
              alt=""
              className="image-43"
            />
          </div>
          <nav className="dropdown-list-4 w-dropdown-list">
            <div>
              <div className="div-block">
                <div className="text-block-33">Search</div>
                <img
                  src="images/Image-30-03-2023-at-8.15-pm.jpg"
                  loading="lazy"
                  alt=""
                  className="image-41"
                />
              </div>
              <div className="div-block-16">
                <a href="#" className="link-block-5 w-inline-block">
                  <img
                    src="images/Image-30-03-2023-at-8.29-pm.jpg"
                    loading="lazy"
                    alt=""
                    className="image-42"
                  />
                </a>
                <div className="text-block-32">Add Intake</div>
              </div>
            </div>
            <a href="#" className="dropdown-link-7 w-dropdown-link">
              Intake 1
            </a>
            <a href="#" className="dropdown-link-7 w-dropdown-link">
              Intake 2
            </a>
            <a href="#" className="dropdown-link-7 w-dropdown-link">
              Intake 3
            </a>
          </nav>
        </div>
        <div
          data-hover="false"
          data-delay={0}
          className="nav-bar-element w-dropdown"
        >
          <div className="dropdown-toggle-11 w-dropdown-toggle">
            <a href="#" className="link-block-6 w-inline-block">
              <div className="square is--link">
                <img
                  src="images/Image-21-01-2023-at-4.53-am.jpg"
                  loading="lazy"
                  alt=""
                  className="image-37"
                />
              </div>
              <div className="text-block-21">My Leads</div>
            </a>
            <div className="icon-3 w-icon-dropdown-toggle" />
            <img
              src="images/Image-30-03-2023-at-7.31-pm.jpg"
              loading="lazy"
              alt=""
              className="image-43"
            />
          </div>
          <nav className="dropdown-list-4 w-dropdown-list">
            <a
              href="my-leads-pending"
              className="dropdown-link-7 w-dropdown-link"
            >
              Pending Leads
            </a>
            <a
              href="my-leads-action-required"
              className="dropdown-link-7 w-dropdown-link"
            >
              Action Required
            </a>
            <a
              href="my-leads-historic"
              className="dropdown-link-7 w-dropdown-link"
            >
              Historic Leads
            </a>
          </nav>
        </div>
        <div
          data-hover="false"
          data-delay={0}
          className="nav-bar-element w-dropdown"
        >
          <div className="dropdown-toggle-11 w-dropdown-toggle">
            <a href="#" className="link-block-6 w-inline-block">
              <div className="square is--link">
                <img
                  src="images/Image-29-12-2022-at-9.54-pm.jpg"
                  loading="lazy"
                  alt=""
                  className="image-36"
                />
              </div>
              <div className="text-block-21">My Clients</div>
            </a>
            <div className="icon-3 w-icon-dropdown-toggle" />
            <img
              src="images/Image-30-03-2023-at-7.31-pm.jpg"
              loading="lazy"
              alt=""
              className="image-43"
            />
          </div>
          <nav className="dropdown-list-4 w-dropdown-list">
            <div className="div-block">
              <div className="text-block-33">Search</div>
              <img
                src="images/Image-30-03-2023-at-8.15-pm.jpg"
                loading="lazy"
                alt=""
                className="image-41"
              />
            </div>
            <div className="div-block-3">
              <div className="text-block-31">By Team Member</div>
              <a href="#" className="dropdown-link-8 w-dropdown-link">
                Team Member 2
              </a>
              <a href="#" className="dropdown-link-7 w-dropdown-link">
                Team Member 3
              </a>
              <a href="#" className="dropdown-link-7 w-dropdown-link">
                Team Member 1
              </a>
            </div>
            <div className="div-block-4">
              <div className="text-block-31">By Client</div>
              <a
                href="client-area"
                className="dropdown-link-7 w-dropdown-link"
              >
                CLIENT&nbsp;NAME - ID&nbsp;NO
              </a>
              <a href="#" className="dropdown-link-7 w-dropdown-link">
                CLIENT&nbsp;NAME&nbsp;- ID NO
              </a>
              <a href="#" className="dropdown-link-7 w-dropdown-link">
                CLIENT&nbsp;NAME&nbsp;- ID NO
              </a>
              <a href="#" className="dropdown-link-7 w-dropdown-link">
                CLIENT&nbsp;NAME&nbsp;- ID NO
              </a>
              <a href="#" className="dropdown-link-7 w-dropdown-link">
                CLIENT&nbsp;NAME&nbsp;- ID NO
              </a>
              <a href="#" className="dropdown-link-7 w-dropdown-link">
                CLIENT&nbsp;NAME&nbsp;- ID NO
              </a>
              <a href="#" className="dropdown-link-7 w-dropdown-link">
                CLIENT&nbsp;NAME&nbsp;- ID NO
              </a>
              <a href="#" className="dropdown-link-7 w-dropdown-link">
                CLIENT&nbsp;NAME&nbsp;- ID NO
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
</>

    </>
    )
}