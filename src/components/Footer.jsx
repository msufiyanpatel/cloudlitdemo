import React, { useState } from "react";
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
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

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
    { label: "Roadmap", href: "/roadmap" },
  ];

  return (
    <footer className={styles.footer} ref={ref}>
      {/* Lead Capture CTA Section */}
      <motion.div
        ref={ctaRef}
        className={styles.ctaSection}
        initial={{ opacity: 0, y: 40 }}
        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.ctaInner}>
          <div className={styles.ctaGlow} />
          <div className={styles.ctaContent}>
            <span className={styles.ctaTag}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your{" "}
              <span className={styles.ctaGradient}>Cloud Infrastructure?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Join hundreds of companies that trust Cloudlit for their DevOps
              transformation. Get a free consultation today.
            </p>
            <form className={styles.ctaForm} onSubmit={handleSubmit}>
              <div className={styles.inputWrap}>
                <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 4L12 13L2 4" />
                </svg>
                <input
                  type="email"
                  className={styles.ctaInput}
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className={styles.ctaButton}>
                {submitted ? (
                  <span className={styles.ctaButtonSuccess}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Sent!
                  </span>
                ) : (
                  <>
                    Get Free Consultation
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </>
                )}
              </button>
            </form>
            <p className={styles.ctaPrivacy}>
              No spam, ever. We respect your privacy.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Footer Separator */}
      <div className={styles.footerSeparator} />

      {/* Footer Content */}
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
          <div className={styles.linksCol}>
            <h3 className={styles.colTitle}>Contact</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="mailto:hello@cloudlit.dev" className={styles.footerLink}>
                  hello@cloudlit.dev
                </a>
              </li>
              <li>
                <a href="/contact" className={styles.footerLink}>
                  Contact Form
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} Cloudlit. All rights reserved.</p>
          <div className={styles.footerBottomLinks}>
            <a href="/privacy" className={styles.footerBottomLink}>Privacy Policy</a>
            <a href="/terms" className={styles.footerBottomLink}>Terms of Service</a>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
