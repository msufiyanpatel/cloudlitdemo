import React from "react";
import styles from "../styles/LegalPage.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.updated}>Last updated October 18, 2023</p>

        <p className={styles.intro}>
          This privacy notice for CloudLit ('we', 'us', or 'our'), describes how and why we might
          collect, store, use, and/or share ('process') your information when you use our services
          ('Services'), such as when you:
        </p>
        <ul className={styles.introBullets}>
          <li>
            Visit our website at{" "}
            <a href="https://www.cloudlit.co/" target="_blank" rel="noopener noreferrer">
              https://www.cloudlit.co/
            </a>
            , or any website of ours that links to this privacy notice
          </li>
          <li>
            Engage with us in other related ways, including any sales, marketing, or events
          </li>
        </ul>
        <p className={styles.intro}>
          <strong>Questions or concerns?</strong> Reading this privacy notice will help you
          understand your privacy rights and choices. If you do not agree with our policies and
          practices, please do not use our Services. If you still have any questions or concerns,
          please contact us at{" "}
          <a href="mailto:admin@cloudlit.co">admin@cloudlit.co</a>.
        </p>

        {/* Summary */}
        <section className={styles.section}>
          <h2>SUMMARY OF KEY POINTS</h2>
          <p>
            This summary provides key points from our privacy notice, but you can find out more
            details about any of these topics by using our table of contents below.
          </p>
          <p>
            <strong>What personal information do we process?</strong> When you visit, use, or
            navigate our Services, we may process personal information depending on how you interact
            with us and the Services, the choices you make, and the products and features you use.
          </p>
          <p>
            <strong>Do we process any sensitive personal information?</strong> We do not process
            sensitive personal information.
          </p>
          <p>
            <strong>Do we receive any information from third parties?</strong> We do not receive any
            information from third parties.
          </p>
          <p>
            <strong>How do we process your information?</strong> We process your information to
            provide, improve, and administer our Services, communicate with you, for security and
            fraud prevention, and to comply with law. We may also process your information for other
            purposes with your consent. We process your information only when we have a valid legal
            reason to do so.
          </p>
          <p>
            <strong>In what situations and with which parties do we share personal information?</strong>{" "}
            We may share information in specific situations and with specific third parties.
          </p>
          <p>
            <strong>How do we keep your information safe?</strong> We have organisational and
            technical processes and procedures in place to protect your personal information.
            However, no electronic transmission over the internet or information storage technology
            can be guaranteed to be 100% secure.
          </p>
          <p>
            <strong>What are your rights?</strong> Depending on where you are located
            geographically, the applicable privacy law may mean you have certain rights regarding
            your personal information.
          </p>
          <p>
            <strong>How do you exercise your rights?</strong> The easiest way to exercise your
            rights is by contacting us at{" "}
            <a href="mailto:admin@cloudlit.co">admin@cloudlit.co</a>.
          </p>
        </section>

        {/* TOC */}
        <section className={styles.section}>
          <h2>TABLE OF CONTENTS</h2>
          <ol className={styles.toc}>
            <li>WHAT INFORMATION DO WE COLLECT?</li>
            <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
            <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
            <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
            <li>DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</li>
            <li>IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</li>
            <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
            <li>HOW DO WE KEEP YOUR INFORMATION SAFE?</li>
            <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
            <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
            <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
            <li>DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</li>
            <li>DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</li>
            <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
            <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
            <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
          <h3>Personal information you disclose to us</h3>
          <p>
            <em>In Short: We collect personal information that you provide to us.</em>
          </p>
          <p>
            We collect personal information that you voluntarily provide to us when you express an
            interest in obtaining information about us or our products and Services, when you
            participate in activities on the Services, or otherwise when you contact us.
          </p>
          <p>
            <strong>Personal Information Provided by You.</strong> The personal information we
            collect may include the following:
          </p>
          <ul>
            <li>Email addresses</li>
            <li>Names</li>
            <li>Message content</li>
          </ul>
          <p>
            <strong>Sensitive Information.</strong> We do not process sensitive information.
          </p>
          <p>
            All personal information that you provide to us must be true, complete, and accurate,
            and you must notify us of any changes to such personal information.
          </p>
          <h3>Information automatically collected</h3>
          <p>
            <em>
              In Short: Some information — such as your Internet Protocol (IP) address and/or
              browser and device characteristics — is collected automatically when you visit our
              Services.
            </em>
          </p>
          <p>
            We automatically collect certain information when you visit, use, or navigate the
            Services. This information does not reveal your specific identity but may include device
            and usage information, such as your IP address, browser and device characteristics,
            operating system, language preferences, referring URLs, and other technical information.
          </p>
          <p>The information we collect includes:</p>
          <ul>
            <li>
              <strong>Log and Usage Data.</strong> Service-related, diagnostic, usage, and
              performance information our servers automatically collect when you access or use our
              Services.
            </li>
            <li>
              <strong>Device Data.</strong> Information about your computer, phone, tablet, or
              other device you use to access the Services.
            </li>
            <li>
              <strong>Location Data.</strong> Information about your device's location, which can
              be either precise or imprecise.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
          <p>
            <em>
              In Short: We process your information to provide, improve, and administer our
              Services, communicate with you, for security and fraud prevention, and to comply with
              law.
            </em>
          </p>
          <p>We process your personal information for a variety of reasons, including:</p>
          <ul>
            <li>To deliver and facilitate delivery of services to the user.</li>
            <li>To respond to user inquiries/offer support to users.</li>
            <li>To fulfil and manage your orders.</li>
            <li>To request feedback.</li>
            <li>To send you marketing and promotional communications (you may opt out at any time).</li>
            <li>To protect our Services through fraud monitoring and prevention.</li>
            <li>To save or protect an individual's vital interest.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
          <p>
            <em>
              In Short: We only process your personal information when we believe it is necessary
              and we have a valid legal reason to do so under applicable law.
            </em>
          </p>
          <p>
            <strong>If you are located in the EU or UK,</strong> we may rely on the following legal
            bases:
          </p>
          <ul>
            <li>
              <strong>Consent.</strong> We may process your information if you have given us
              permission for a specific purpose. You can withdraw your consent at any time.
            </li>
            <li>
              <strong>Performance of a Contract.</strong> We may process your personal information
              when necessary to fulfil our contractual obligations to you.
            </li>
            <li>
              <strong>Legitimate Interests.</strong> We may process your information when reasonably
              necessary to achieve our legitimate business interests.
            </li>
            <li>
              <strong>Legal Obligations.</strong> We may process your information where necessary
              for compliance with our legal obligations.
            </li>
            <li>
              <strong>Vital Interests.</strong> We may process your information where necessary to
              protect your vital interests or the vital interests of a third party.
            </li>
          </ul>
          <p>
            <strong>If you are located in Canada,</strong> we may process your information if you
            have given us specific permission (express consent) or where permission can be inferred
            (implied consent). You can withdraw your consent at any time.
          </p>
        </section>

        <section className={styles.section}>
          <h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
          <p>
            <em>
              In Short: We may share information in specific situations described in this section
              and/or with the following third parties.
            </em>
          </p>
          <ul>
            <li>
              <strong>Business Transfers.</strong> We may share or transfer your information in
              connection with, or during negotiations of, any merger, sale of company assets,
              financing, or acquisition of all or a portion of our business to another company.
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
          <p>
            <em>
              In Short: We may use cookies and other tracking technologies to collect and store your
              information.
            </em>
          </p>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to
            access or store information. You can instruct your browser to refuse all cookies or to
            indicate when a cookie is being sent.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h2>
          <p>
            <em>
              In Short: We may transfer, store, and process your information in countries other than
              your own.
            </em>
          </p>
          <p>
            If you are accessing our Services from outside Australia, please be aware that your
            information may be transferred to, stored, and processed by us in our facilities and by
            those third parties with whom we may share your personal information. We will take all
            necessary measures to protect your personal information in accordance with this privacy
            notice and applicable law.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p>
            <em>
              In Short: We keep your information for as long as necessary to fulfil the purposes
              outlined in this privacy notice unless otherwise required by law.
            </em>
          </p>
          <p>
            We will only keep your personal information for as long as it is necessary for the
            purposes set out in this privacy notice. When we have no ongoing legitimate business
            need to process your personal information, we will either delete or anonymise such
            information.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
          <p>
            <em>
              In Short: We aim to protect your personal information through a system of
              organisational and technical security measures.
            </em>
          </p>
          <p>
            We have implemented appropriate and reasonable technical and organisational security
            measures designed to protect the security of any personal information we process.
            However, no electronic transmission over the Internet or information storage technology
            can be guaranteed to be 100% secure. Transmission of personal information to and from
            our Services is at your own risk. You should only access the Services within a secure
            environment.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
          <p>
            <em>
              In Short: We do not knowingly collect data from or market to children under 18 years
              of age.
            </em>
          </p>
          <p>
            We do not knowingly solicit data from or market to children under 18 years of age. By
            using the Services, you represent that you are at least 18 or that you are the parent or
            guardian of such a minor and consent to such minor dependent's use of the Services. If
            you become aware of any data we may have collected from children under age 18, please
            contact us at <a href="mailto:admin@cloudlit.co">admin@cloudlit.co</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p>
            <em>
              In Short: In some regions, such as the EEA, UK, Switzerland, and Canada, you have
              rights that allow you greater access to and control over your personal information.
            </em>
          </p>
          <p>
            In some regions you have certain rights under applicable data protection laws, including
            the right to request access and obtain a copy of your personal information, request
            rectification or erasure, restrict the processing of your personal information, data
            portability, and not to be subject to automated decision-making.
          </p>
          <p>
            <strong>Withdrawing your consent:</strong> If we are relying on your consent to process
            your personal information, you have the right to withdraw your consent at any time by
            contacting us at <a href="mailto:admin@cloudlit.co">admin@cloudlit.co</a>.
          </p>
          <p>
            <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You
            can usually choose to set your browser to remove or reject cookies, though this could
            affect certain features or services of our Services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
          <p>
            Most web browsers and some mobile operating systems and mobile applications include a
            Do-Not-Track ('DNT') feature. At this stage no uniform technology standard for
            recognising and implementing DNT signals has been finalised. As such, we do not
            currently respond to DNT browser signals or any other mechanism that automatically
            communicates your choice not to be tracked online.
          </p>
        </section>

        <section className={styles.section}>
          <h2>12. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
          <p>
            <em>
              In Short: If you are a resident of California, you are granted specific rights
              regarding access to your personal information.
            </em>
          </p>
          <p>We have collected the following categories of personal information in the past twelve (12) months:</p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Examples</th>
                  <th>Collected</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A. Identifiers</td>
                  <td>Contact details, such as real name, email address, IP address</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>B. Personal information (CA Customer Records statute)</td>
                  <td>Name, contact information, employment history</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>C. Protected classification characteristics</td>
                  <td>Gender and date of birth</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>D. Commercial information</td>
                  <td>Transaction information, purchase history</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>E. Biometric information</td>
                  <td>Fingerprints and voiceprints</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>F. Internet or network activity</td>
                  <td>Browsing history, search history, online behaviour</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>G. Geolocation data</td>
                  <td>Device location</td>
                  <td>YES</td>
                </tr>
                <tr>
                  <td>H. Audio, electronic, visual information</td>
                  <td>Images and audio/video recordings</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>I. Professional or employment-related information</td>
                  <td>Business contact details, job title</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>J. Education Information</td>
                  <td>Student records and directory information</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>K. Inferences from collected information</td>
                  <td>Inferences drawn to create a profile about an individual</td>
                  <td>NO</td>
                </tr>
                <tr>
                  <td>L. Sensitive personal information</td>
                  <td></td>
                  <td>NO</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            We have not disclosed, sold, or shared any personal information to third parties for a
            business or commercial purpose in the preceding twelve (12) months.
          </p>
          <p>
            <strong>CCPA Privacy Notice:</strong> California residents have the right to request
            deletion of their data, the right to be informed about the personal information we
            collect, and the right to non-discrimination for exercising their privacy rights. To
            exercise these rights, contact us at{" "}
            <a href="mailto:admin@cloudlit.co">admin@cloudlit.co</a>.
          </p>
        </section>

        <section className={styles.section}>
          <h2>13. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
          <p>
            <em>In Short: You may have additional rights based on the country you reside in.</em>
          </p>
          <p>
            <strong>Australia and New Zealand:</strong> We collect and process your personal
            information under the obligations and conditions set by Australia's Privacy Act 1988 and
            New Zealand's Privacy Act 2020. If you believe we are unlawfully processing your
            personal information, you have the right to submit a complaint to the Office of the
            Australian Information Commissioner or the Office of New Zealand Privacy Commissioner.
          </p>
        </section>

        <section className={styles.section}>
          <h2>14. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
          <p>
            <em>In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
          </p>
          <p>
            We may update this privacy notice from time to time. The updated version will be
            indicated by an updated date and will be effective as soon as it is accessible. We
            encourage you to review this privacy notice frequently to be informed of how we are
            protecting your information.
          </p>
        </section>

        <section className={styles.section}>
          <h2>15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
          <p>
            If you have questions or comments about this notice, you may email us at{" "}
            <a href="mailto:admin@cloudlit.co">admin@cloudlit.co</a> or contact us by post at:
          </p>
          <p>
            <strong>CloudLit</strong>
            <br />
            35 Saint Cherbel Way
            <br />
            Punchbowl, New South Wales 2196
            <br />
            Australia
          </p>
        </section>

        <section className={styles.section}>
          <h2>16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
          <p>
            Based on the applicable laws of your country, you may have the right to request access
            to the personal information we collect from you, change that information, or delete it.
            To request to review, update, or delete your personal information, please contact us at{" "}
            <a href="mailto:admin@cloudlit.co">admin@cloudlit.co</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
