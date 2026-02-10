import React from "react";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cloudlitLogo from "../assets/white2.png";
import {
  faTwitter,
  faLinkedin,
  faSquareInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const capabilities = [
  { label: "Cloud", href: "/services#cloud" },
  { label: "DevOps", href: "/services#devops" },
  { label: "Provision", href: "/services#provision" },
  { label: "Monitor", href: "/services#monitor" },
];

const Footer = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const socials = [
    { icon: faFacebook, href: "https://facebook.com/cloudlit.official", label: "Facebook" },
    { icon: faTwitter, href: "https://twitter.com/thecloudlit", label: "Twitter" },
    { icon: faSquareInstagram, href: "https://instagram.com/cloudlit_official", label: "Instagram" },
    { icon: faLinkedin, href: "https://www.linkedin.com/mwlite/company/cloudlitofficial", label: "LinkedIn" },
  ];

  const pageLinks = [

    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Benefits", href: "/benefits" },
    { label: "Portfolio", href: "/casestudies" },

  ];

  return (
    <footer className={styles.footer} ref={ref}>
      {/* Separator */}
      <div className={styles.footerSeparator} />

      <motion.div
        className={styles.footerInner}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.footerGrid}>
          <div className={styles.brandCol}>
            <a href="/" className={styles.brandLogoLink}>
              <img src={cloudlitLogo} alt="Cloudlit" className={styles.brandLogo} />
              <span className={styles.brandName}>Cloudlit</span>
            </a>
            <p className={styles.brandDesc}>
              Think. Build. Scale with Cloud. Your trusted partner for cloud-native
              transformation and DevOps excellence.
            </p>
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
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Capabilities</h3>
            <ul className={styles.linkList}>
              {capabilities.map((cap) => (
                <li key={cap.label}>
                  <a href={cap.href} className={styles.footerLink}>
                    {cap.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
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
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Cloudlit. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
