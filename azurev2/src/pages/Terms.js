// 1. Importing Components
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logos from "../../src/components/Logos";
import NavBar from "../../src/components/Navbar";
import { Popup } from "../../src/components/Popup";
import { AuthData } from "../auth/AuthWrapper";

// export default function Terms() :) {
export const Terms = () => {
  const { user } = AuthData();
  return (
    
    <div className="Terms">
      {/* If sessions has ended then display popup and overlay */}
      <Popup />
      <main>
        <div className="wrapper">
          <div className="container fullwidth">
            <div className="formContainer">
              <Logos />
              <div className="content align-left">
                <h1>Terms of Use</h1>
                
              
                <p>
                  All content of this Internet site is owned by EastWestRail
                  Company and is protected by worldwide copyright laws. You may
                  download content only for your personal use for non-commercial
                  purposes but no modification or further reproduction of the
                  content is permitted. The content may otherwise not be copied
                  or used in any way.
                </p>
               
                <p>
                  EastWestRail Company will use reasonable efforts to include
                  up-to-date and accurate information on the site, but make no
                  representations, warranties, or assurances as to the accuracy,
                  currency, or completeness of the information provided.
                  EastWestRail Company shall not be liable for any damages or
                  injury resulting from your access to, or inability to access,
                  our website, or from your reliance on any information provided
                  at our website.
                </p>
                <p>
                  This website may provide links or references to other sites
                  but the owners of this site have no responsibility for the
                  content of such other sites and shall not be liable for any
                  damages or injury arising from that content. Any links to
                  other sites are provided as merely a convenience to the users
                  of this website.
                </p>
                <p>
                  The trademarks, service marks, trade names, company name and
                  products in this website are protected in the UK and
                  internationally. No use of any of these may be made without
                  the prior, written authorisation of the owners of this
                  website, except to identify the products or services of the
                  company.
                </p>
                <p>
                  Any personally identifiable information in electronic
                  communications to this website is governed by our site’s
                  Privacy Policy. The owners of this site shall be free to use
                  or copy all other information in any such communications,
                  including any ideas, inventions, concepts, techniques or
                  know-how disclosed therein, for any purposes. Such purposes
                  may include disclosure to third parties and/or developing
                  and/or marketing goods or services.
                </p>
                <p>
                  The sender of any communications to this website and its
                  owners shall be responsible for the content and information
                  contained therein, including its truthfulness and accuracy.
                </p>
                <h2>Privacy policy</h2>

                <p>
                  This site is owned by EastWestRail Company, a company based in
                  the United Kingdom and operating internationally. We have put
                  in place this Privacy Policy to tell you about how we collect,
                  use and disclose information that you actively provide us with
                  through use of our site. This Privacy Policy also concerns the
                  collection, use and disclosure of information that may be
                  collected passively whilst you use our site. Please read this
                  privacy policy carefully before using our site and before
                  submitting any information about yourself.
                </p>
                <h3>Consent</h3>
                <p>
                  By disclosing your personal information to us using this
                  website, you consent to the collection, storage and processing
                  of your personal information by EastWestRail Company in the
                  manner set out in this Privacy Policy.
                </p>
                <h3>Children</h3>
                <p>
                  This site is not intended for use by children under the age of
                  16. EastWestRail Company will not knowingly collect personally
                  identifiable information via this site from children under the
                  age of 16.
                </p>
                <h3>Information about you that you submit to this site</h3>
                <p>
                  As you use our site and services, we may ask you to submit
                  personally identifiable information (name and contact
                  information including email and phone number). We request this
                  information in order to provide you with special features,
                  services and benefits (such as newsletter subscriptions,
                  tips/pointers, requests for a demo, pricing or other further
                  information). Prior to entering information for submission you
                  will be informed what information is required and what
                  information is optional.
                </p>
                <h3>How we will use the information we collect</h3>
                <p>
                  Information that we collect that you have submitted either
                  passively or actively may be used to improve our site, its
                  content, and our services, for marketing, research or for any
                  other purpose specified. We may periodically send promotional
                  emails about our products and services or other information
                  which we think you may find interesting, using the email
                  address which you have provided. You will not be required to
                  opt to receive emails as a condition of using this website,
                  and may remove yourself from our mailing list at any point.
                </p>
                <p>
                  You may choose to restrict the collection or use of your
                  personal information in the following ways: Whenever you are
                  asked to fill in a form on our website, you will not be asked
                  to opt-out of your information to be used by anybody for
                  direct marketing purposes, i.e. we will not use ‘pre-ticked’
                  boxes to assume your consent.
                </p>
                <p>
                  If you have previously agreed to us using your personal
                  information for direct marketing purposes, you may change your
                  mind at any time by writing to or emailing us atand let us
                  know what you want us to do and provide us with enough
                  information to verify that it is you making the request.
                </p>
                <p>
                  We will not sell, distribute, transfer or lease your personal
                  information to third parties unless we have your permission or
                  are required by law to do so. We may use your personal
                  information to send you promotional information about third
                  parties which we think you may find interesting if you tell us
                  that you wish this to happen.
                </p>
                <p>
                  You may request details of the personal information which we
                  hold about you under the Data Protection Act 2018 and the
                  General Data Protection Regulation ‘data protection law’.
                  Accessing, correcting, and deleting information that we hold
                  about you Personally identifiable information that you have
                  submitted to this site may be viewed, corrected or deleted by
                  you by contacting us using the contact details set out in the
                  paragraph below entitled “Contacting us”.
                </p>
                <h3>Cookies policy</h3>
                <p>
                  We use cookies to track site usage and trends, improve the
                  quality of content and give you the best online experience
                  during your visit to our website.
                </p>
                <p>
                  Cookies are small information files that are stored on your
                  computer, tablet, smartphone, or other device that help
                  websites recognise you and record information about your
                  visit. Cookies can help to display the information on a
                  website in a way that matches your interests and is relevant
                  to you. A cookie in no way gives us access to your computer,
                  or any personal information about you, they are simply a
                  record of your visit to our website. By using our website you
                  agree to our use of cookies in accordance with this cookie
                  policy.
                </p>
                <p>
                  The cookies we use on this website are broadly grouped into
                  the following categories:
                </p>
                <p>
                  <strong>Essential:</strong>&nbsp;Some of the cookies on our
                  website are essential for us to be able to provide you with a
                  service you have requested.
                </p>
                <p>
                  <strong>Analytics</strong>: We use analytics cookies to help
                  us understand how users engage with our website. Without this
                  cookie, we would find it difficult to analyse how well our
                  website was performing and improve it without these cookies,
                  we feel that it is vital to monitor these user statistics to
                  enable us to provide the most relevant and useful content to
                  you. These cookies do not let us identify specific users as
                  the information is aggregated.
                </p>
                <p>
                  <strong>Social sharing:</strong>&nbsp;We use cookies to allow
                  you to share content directly to your social networking sites
                  for example LinkedIn and Twitter i.e. clicking Share on
                  Twitter.
                </p>
                <p>
                  <strong>Interest-based advertising:</strong>&nbsp;You may have
                  noticed that when you visit websites, you will be shown
                  adverts for products and services you may be interested in.
                  EastWestRail Company places adverts on a range of external
                  websites which we hope to be relevant to you based on the
                  types of things that interest you. These and the other cookies
                  we use do NOT allow us to see what other sites you have been
                  visiting, they simply act as a record of our web pages and
                  adverts that you may see.
                </p>
                <p>How can I reject or opt out of receiving cookies?</p>
                <p>
                  When you first visited this website you will have been shown a
                  status bar notifying you that this website uses cookies and
                  inviting you to review this cookie policy. Once you have
                  clicked to go further into our website, the cookie prompt will
                  disappear, this confirms that you consent to us using the
                  cookies detailed in this policy. Please note that we can’t
                  always control third party cookies (such as from social
                  networks) stored on your machine from our website and where
                  this is the case you will need to visit the relevant third
                  party’s website directly to understand their cookies stored on
                  your machine by them. Please see our ‘third party cookies’
                  section below.
                </p>
                <p>
                  If you want to reject cookies we use from this website you
                  will need to:
                </p>
                <ul>
                  <li>
                    Delete the cookies from your browser. Most browsers also
                    allow you to prevent all or some cookies being stored on
                    your machine in the future. For more information on how to
                    delete or disable cookies from your browser please use the
                    ‘help’ function within your browser, or alternatively
                    visit&nbsp;
                    <a href="http://www.allaboutcookies.org/">
                      www.allaboutcookies.org
                    </a>
                    . By deleting our cookie preference cookie, the next time
                    you visit our website the cookie status bar will appear
                    again inviting you to again reconsider your preferences.
                  </li>
                  <li>
                    And/or If you only want to reject the Internet Based
                    Advertising cookies we store on your machine, you can
                    opt-out of receiving these cookies at any time by going to
                    the Internet Advertising Bureau website at&nbsp;
                    <a href="http://www.youronlinechoices.com/">
                      http://www.youronlinechoices.com
                    </a>
                    &nbsp;and following the opt-out instructions.
                  </li>
                </ul>
                <p>Third Party Cookies:</p>
                <p>
                  Some of the cookies described above are stored on your machine
                  by third parties when you use our website. We have no control
                  over these cookies of how the third party uses them. They are
                  used to allow that third party to provide a service to us, for
                  example website analytics. For more information on these
                  cookies and how to disable them, please see: Internet
                  Advertising Bureau website at&nbsp;
                  <a href="http://www.youronlinechoices.com/">
                    http://www.youronlinechoices.com/
                  </a>
                  &nbsp;where you will be able to opt-out of receiving Internet
                  Based Advertising cookies from some of the third parties (e.g.
                  Google, Facebook, Twitter, LinkedIn, etc)
                </p>
                <h3>Security</h3>
                <p>
                  We are committed to ensuring that your information is secure.
                  In order to prevent unauthorized access or disclosure, we have
                  put in place suitable physical, electronic and managerial
                  procedures to safeguard and secure the information we collect
                  online.
                </p>
                <h3>Links to other websites</h3>
                <p>
                  It is likely that as you use our site and services, you come
                  across links to other websites to which this Privacy Policy
                  does not apply. We encourage you to read and understand the
                  Privacy Policy of every website you visit.
                </p>
                <h3>Contacting us</h3>
                <p>
                  You may contact us in order to ask questions, submit comments
                  and concerns about this Privacy Policy. You may also request
                  to be removed from our mailing list. Please contact us using
                  the contact information below:
                </p>
                <h3>Changes to this privacy policy</h3>
                <p>
                  Should this Privacy Policy be altered or updated, the latest
                  version will be posted on our site. We encourage you to review
                  our policy from time to time in order to learn about potential
                  changes before submitting any new personally identifiable
                  information. This Privacy Policy was last updated in May 2018.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
