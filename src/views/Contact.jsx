import React from "react";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faSquareInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const socials = [
    { icon: faFacebook, href: "https://facebook.com/cloudlit.official", label: "Facebook" },
    { icon: faTwitter, href: "https://twitter.com/thecloudlit", label: "Twitter" },
    { icon: faSquareInstagram, href: "https://instagram.com/cloudlit_official", label: "Instagram" },
    { icon: faLinkedin, href: "https://www.linkedin.com/mwlite/company/cloudlitofficial", label: "LinkedIn" },
  ];

  const pageLinks = [
    { label: "Home", href: "/home" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Benefits", href: "/benefits" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className={styles.footer} ref={ref}>
      <div className={styles.footerGlow} />
      <motion.div
        className={styles.footerInner}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.footerGrid}>
          {/* Brand column */}
          <div className={styles.brandCol}>
            <h2 className={styles.brandName}>
              Cloud<span className={styles.brandAccent}>lit</span>
            </h2>
            <p className={styles.brandDesc}>
              Think. Build. Scale with Cloud. Your trusted partner for cloud-native
              transformation and DevOps excellence.
            </p>
          </div>

          {/* Pages column */}
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Pages</h3>
            <ul className={styles.linkList}>
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={styles.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social column */}
          <div className={styles.socialCol}>
            <h3 className={styles.colTitle}>Get Social</h3>
            <div className={styles.socialIcons}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Cloudlit. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Contact;
