import React from "react";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import {
  faTwitter,
  faLinkedin,
  faSquareInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
// import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.container}>
        <div className={styles.pages}>
          <h1>
            <b>Pages</b>
          </h1>
          <a href="/home"><h2>Home</h2></a>
          <a href="/about"><h2>About</h2></a>
          <a href="/services"><h2>Services</h2></a>
          <a href="/benefits"><h2>Benefits</h2></a>
          <a href="/contact"><h2>Contact Us</h2></a>
        </div>
        <div className={styles.social}>
          <h1>
            <b>Get social with us</b>
          </h1>
          <div className={styles.iconContainer}>
            <div className={styles.smallBox}>
              <a
                href="https://facebook.com/cloudlit.official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
              </a>
            </div>
            <div className={styles.smallBox}>
              <a
                href="https://twitter.com/thecloudlit"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
              </a>
            </div>
            <div className={styles.smallBox}>
              <a
                href="https://instagram.com/cloudlit_official"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faSquareInstagram}
                  className={styles.icon}
                />
              </a>
            </div>
            <div className={styles.smallBox}>
              <a
                href="https://www.linkedin.com/mwlite/company/cloudlitofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.underFooter}>
        <p>© 2023 Cloudlit. All rights reserved</p>
      </footer>
    </div>
  );
};

export default Contact;
