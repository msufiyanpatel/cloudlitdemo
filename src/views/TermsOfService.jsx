import React from "react";
import styles from "../styles/LegalPage.module.css";

const TermsOfService = () => {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Terms of Service</h1>
        <p className={styles.updated}>Last updated: March 2025</p>

        <section className={styles.section}>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the Cloudlit website and services, you agree to be bound by these
            Terms of Service. If you do not agree to these terms, please do not use our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>2. Description of Services</h2>
          <p>
            Cloudlit provides cloud infrastructure, DevOps, and digital transformation consulting
            services. The specific scope of services for each engagement is defined in a separate
            Statement of Work or service agreement.
          </p>
        </section>

        <section className={styles.section}>
          <h2>3. Use of the Website</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the website for any unlawful purpose</li>
            <li>Attempt to gain unauthorised access to any part of the website</li>
            <li>Transmit any harmful, offensive, or disruptive content</li>
            <li>Interfere with the proper operation of the website</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the
            property of Cloudlit and is protected by applicable copyright and intellectual property
            laws. You may not reproduce or distribute any content without written permission.
          </p>
        </section>

        <section className={styles.section}>
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            The website and its content are provided "as is" without any warranties, express or
            implied. Cloudlit does not warrant that the website will be uninterrupted, error-free,
            or free of viruses or other harmful components.
          </p>
        </section>

        <section className={styles.section}>
          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Cloudlit shall not be liable for any indirect,
            incidental, special, or consequential damages arising from your use of the website or
            our services.
          </p>
        </section>

        <section className={styles.section}>
          <h2>7. Governing Law</h2>
          <p>
            These Terms of Service are governed by the laws of New South Wales, Australia. Any
            disputes shall be subject to the exclusive jurisdiction of the courts of New South
            Wales.
          </p>
        </section>

        <section className={styles.section}>
          <h2>8. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time. Continued use of
            the website after any changes constitutes acceptance of the new terms.
          </p>
        </section>

        <section className={styles.section}>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:admin@cloudlit.co">admin@cloudlit.co</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
