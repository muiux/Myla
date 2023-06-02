import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <title>Myla</title>
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
        <div className="section">
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
        <div className="div-block-5">
          <a href="create-new-client" className="button w-button">
            + Create Client
          </a>
          <h4 className="heading-20">name of lead</h4>
        </div>
        <div className="container-14 w-container">
          <div className="columns-3 w-row">
            <div className="column-4 w-col w-col-6">
              <h5 className="heading-21">Intake Questions</h5>
              <a href="#" className="link-block-3 w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63ae13846c21e689a7d62916_Image%2029-12-2022%20at%202.23%20pm.jpg"
                  loading="lazy"
                  alt=""
                  className="image-33"
                  width={28}
                />
              </a>
              <div className="text-block-10">Intake Questions here</div>
              <div className="section-12 wf-section">
                <div
                  data-hover="false"
                  data-delay={0}
                  className="body-accordion w-dropdown"
                >
                  <div className="dropdown-toggle w-dropdown-toggle">
                    <div className="body-accordion-icon w-icon-dropdown-toggle" />
                    <div className="text-block-22">Client Information</div>
                  </div>
                  <nav className="dropdown-list w-dropdown-list">
                    <div className="leads-area-form w-form">
                      <img
                        src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63ae13846c21e689a7d62916_Image%2029-12-2022%20at%202.23%20pm.jpg"
                        loading="lazy"
                        alt=""
                        className="image-40"
                        width={28}
                      />
                      <form
                        id="wf-form-leads-area-copy"
                        name="wf-form-leads-area-copy"
                        data-name="leads area copy"
                        method="get"
                        className="leads-area-form-form"
                      >
                        <label htmlFor="First-Name" className="field-label-8">
                          Name of Client{" "}
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
                        <label htmlFor="email" className="field-label-8">
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
                        <label htmlFor="Phone" className="field-label-8">
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
                        <label
                          htmlFor="Client-ref-no"
                          className="field-label-8"
                        >
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
                        <label htmlFor="email-2" className="field-label-8">
                          Area of Law
                        </label>
                        <a
                          data-w-id="9a6a7881-cc2f-1b8a-d4f5-2d96089befc0"
                          style={{
                            backgroundColor: "rgba(16,75,145,0.23)",
                            color: "rgba(51,51,51,0.78)",
                          }}
                          href="#"
                          className="button-6 w-button"
                        >
                          Family Law
                        </a>
                        <a
                          data-w-id="9a6a7881-cc2f-1b8a-d4f5-2d96089befc2"
                          style={{
                            backgroundColor: "rgba(16,75,145,0.23)",
                            color: "rgba(51,51,51,0.78)",
                          }}
                          href="#"
                          className="button-5 w-button"
                        >
                          Commercial Law
                        </a>
                        <a
                          data-w-id="9a6a7881-cc2f-1b8a-d4f5-2d96089befc4"
                          style={{
                            backgroundColor: "rgba(16,75,145,0.23)",
                            color: "rgba(51,51,51,0.78)",
                          }}
                          href="#"
                          className="button-4 w-button"
                        >
                          Wills and Estates
                        </a>
                        <a
                          data-w-id="9a6a7881-cc2f-1b8a-d4f5-2d96089befc6"
                          style={{
                            backgroundColor: "rgba(16,75,145,0.23)",
                            color: "rgba(51,51,51,0.78)",
                          }}
                          href="#"
                          className="button-7 w-button"
                        >
                          Real Estate
                        </a>
                        <div className="div-block-2" />
                        <label htmlFor="email-2" className="field-label-8">
                          Intake Form
                        </label>
                        <div
                          data-delay={0}
                          data-hover="false"
                          className="dropdown-2 w-dropdown"
                        >
                          <div className="dropdown-toggle-5 w-dropdown-toggle">
                            <div className="w-icon-dropdown-toggle" />
                            <div className="text-block-23">
                              Select intake form
                            </div>
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
                        <label htmlFor="Deadline" className="field-label-8">
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
                        <label htmlFor="field" className="field-label-8">
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
                        <label htmlFor="field-2" className="field-label-8">
                          Toggle Actions
                        </label>
                        <div>
                          <ul role="list" className="list w-list-unstyled">
                            <li className="list-item-2">
                              <a
                                data-w-id="9a6a7881-cc2f-1b8a-d4f5-2d96089befe5"
                                style={{
                                  backgroundColor: "rgba(16,75,145,0.23)",
                                  color: "rgba(51,51,51,0.78)",
                                }}
                                href="#"
                                className="button-5 w-button"
                              >
                                Send Email
                              </a>
                            </li>
                            <li className="list-item-3">
                              <a
                                data-w-id="9a6a7881-cc2f-1b8a-d4f5-2d96089befe8"
                                style={{
                                  backgroundColor: "rgba(16,75,145,0.23)",
                                  color: "rgba(51,51,51,0.78)",
                                }}
                                href="#"
                                className="button-5 w-button"
                              >
                                Send Docusign
                              </a>
                            </li>
                            <li>
                              <a
                                data-w-id="9a6a7881-cc2f-1b8a-d4f5-2d96089befeb"
                                style={{
                                  backgroundColor: "rgba(16,75,145,0.23)",
                                  color: "rgba(51,51,51,0.78)",
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
                        <label htmlFor="field-2" className="field-label-8">
                          Email Preview
                        </label>
                        <div>
                          Insert editable email preview in this div block
                        </div>
                      </form>
                      <div className="w-form-done">
                        <div>Thank you! Your submission has been received!</div>
                      </div>
                      <div className="w-form-fail">
                        <div>
                          Oops! Something went wrong while submitting the form.
                        </div>
                      </div>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="section-11 wf-section">
                <div
                  data-hover="false"
                  data-delay={0}
                  className="body-accordion w-dropdown"
                >
                  <div className="dropdown-toggle w-dropdown-toggle">
                    <div className="body-accordion-icon w-icon-dropdown-toggle" />
                    <div className="text-block-22">Client Attachments</div>
                  </div>
                  <nav className="dropdown-list-2 w-dropdown-list">
                    <a href="#" className="w-dropdown-link">
                      This is where we would put the attachments the lead
                      submits to the intake link.
                    </a>
                  </nav>
                </div>
              </div>
            </div>
            <div className="column-3 w-col w-col-6">
              <h5 className="heading-21">Template</h5>
              <a href="#" className="link-block-3 w-inline-block">
                <img
                  src="https://uploads-ssl.webflow.com/63abf4b38af6f93334f534b0/63ae13846c21e689a7d62916_Image%2029-12-2022%20at%202.23%20pm.jpg"
                  loading="lazy"
                  alt=""
                  className="image-33"
                  width={28}
                />
              </a>
              <div className="div-block-6">
                <div className="text-block-11">+&nbsp;</div>
              </div>
              <div className="section-10 wf-section">
                <a href="assign-to-lawyer-yay" className="button-2 w-button">
                  Assign to Lawyer
                </a>
                <a href="#" className="button-3 w-button">
                  Upload Docx.
                </a>
              </div>
              <div className="section-17 wf-section">
                <div className="text-block-30">Notes </div>
                <div className="w-form">
                  <form
                    id="email-form"
                    name="email-form"
                    data-name="Email Form"
                    method="get"
                  >
                    <input
                      type="email"
                      className="text-field-2 w-input"
                      maxLength={256}
                      name="email-2"
                      data-name="Email 2"
                      placeholder=""
                      id="email-2"
                      required=""
                    />
                  </form>
                  <div className="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="w-form-fail">
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
