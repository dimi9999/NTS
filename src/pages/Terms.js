// 1. Importing Components
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import Logos from "../../src/components/Logos";
import NavBar from "../../src/components/Navbar";

// export default function Terms() {
export const Terms = () => {
  return (
    <div>
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
