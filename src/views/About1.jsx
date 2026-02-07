import React from "react";
import styles from "../styles/About1.module.css";
import excellence from "../assets/Execellence.png";
import innovation from "../assets/Innovation.png";
import teamwork from "../assets/TeamWork.png";
import integrity from "../assets/Integrity.png";
import ethics from "../assets/Ethics.png";
import compassion from "../assets/Compassion.png";
import picture from "../assets/3rd picture.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const principles = [
  { icon: excellence, label: "Excellence" },
  { icon: innovation, label: "Innovation" },
  { icon: teamwork, label: "Teamwork" },
  { icon: integrity, label: "Integrity" },
  { icon: ethics, label: "Ethics" },
  { icon: compassion, label: "Compassion" },
];

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [s2Ref, s2InView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [s3Ref, s3InView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="About" className={styles.aboutPage}>
      {/* Hero */}
      <motion.div
        ref={heroRef}
        className={styles.heroSection}
        initial={{ opacity: 0, y: 30 }}
        animate={heroInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.heroContent}>
          <span className={styles.tag}>About Us</span>
          <h1 className={styles.heroTitle}>
            Solving <span className={styles.gradient}>Together</span>
          </h1>
          <p className={styles.heroPara}>
            Businesses are under pressure today to employ cloud technologies to
            address strategic issues, build new revenue and cut expenses. You can
            achieve these advantages more quickly by switching to a cloud native
            strategy. Adoption of cloud native technology is challenging and
            requires a new way of thinking — completely new architectural
            methodology, new techniques for environment deployment, monitoring,
            and operation.
            <br /><br />
            Cloudlit Engineering is our core to support our clients in complete
            cloud transformation journey from start to end!
          </p>
        </div>
        <div className={styles.heroImage}>
          <img src={picture} alt="Cloud infrastructure" />
        </div>
      </motion.div>

      {/* Who We Are + Mission */}
      <motion.div
        ref={s2Ref}
        className={styles.twoCol}
        initial={{ opacity: 0, y: 30 }}
        animate={s2InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.colPurple}>
          <h2 className={styles.colHeading}>Who We Are</h2>
          <p className={styles.colText}>
            Cloudlit is a premier DevOps and IT Consulting Company that offers a
            wide range of services to meet your IT needs. Our experts will support
            you develop and deploy robust and reliable software solutions for your
            business.
            <br /><br />
            From infrastructure automation to cloud-based solutions, we can help
            you get the most out of your technology investments. We are dedicated
            to providing our customers with world-class services, support, and
            solutions.
          </p>
        </div>
        <div className={styles.colLight}>
          <h2 className={styles.colHeadingDark}>Our Mission</h2>
          <p className={styles.colTextDark}>
            Our goal is to make sure that your applications and infrastructure is
            secure, reliable, and resilient. We enable private and public cloud
            solutions for your business through our expertise with the world's
            leading technologies with a right strategy. Cloudlit has a team of
            talented and experienced engineers who are passionate about helping
            you succeed in the ever-evolving world of technology.
          </p>
        </div>
      </motion.div>

      {/* Principles */}
      <motion.div
        ref={s3Ref}
        className={styles.principlesSection}
        initial={{ opacity: 0, y: 30 }}
        animate={s3InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <h2 className={styles.principlesTitle}>
          Our Core <span className={styles.gradient}>Principles</span>
        </h2>
        <div className={styles.principlesGrid}>
          {principles.map((p, i) => (
            <motion.div
              key={p.label}
              className={styles.principleCard}
              initial={{ opacity: 0, y: 20 }}
              animate={s3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className={styles.principleIcon}>
                <img src={p.icon} alt={p.label} />
              </div>
              <h3 className={styles.principleLabel}>{p.label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
