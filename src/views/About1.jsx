import React from "react";
import styles from "../styles/About1.module.css";
import excellence from "../assets/Execellence.png";
import innovation from "../assets/Innovation.png";
import teamwork from "../assets/TeamWork.png";
import integrity from "../assets/Integrity.png";
import ethics from "../assets/Ethics.png";
import compassion from "../assets/Compassion.png";
import picture from "../assets/3rd picture.png";
import picture2 from "../assets/2nd picture.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const principles = [
  { icon: excellence, label: "Excellence", desc: "We strive for the highest standards in every solution we deliver." },
  { icon: innovation, label: "Innovation", desc: "Pushing boundaries with cutting-edge cloud and DevOps practices." },
  { icon: teamwork, label: "Teamwork", desc: "Collaborating seamlessly with your team for shared success." },
  { icon: integrity, label: "Integrity", desc: "Transparent communication and honest partnerships always." },
  { icon: ethics, label: "Ethics", desc: "Responsible technology practices that respect data and privacy." },
  { icon: compassion, label: "Compassion", desc: "Understanding your challenges and delivering with empathy." },
];

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "99.9%", label: "Uptime Achieved" },
  { value: "24/7", label: "Support Available" },
];

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [s2Ref, s2InView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [s3Ref, s3InView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div id="About" className={styles.aboutPage}>
      {/* ===== HERO ===== */}
      <div className={styles.heroSection}>
        <div className={styles.heroBg}>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>
        <motion.div
          ref={heroRef}
          className={styles.heroInner}
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.heroContent}>
            <span className={styles.tag}>About Us</span>
            <h1 className={styles.heroTitle}>
              We Help You{" "}
              <span className={styles.gradient}>Build, Scale & Transform</span>{" "}
              with Cloud
            </h1>
            <p className={styles.heroPara}>
              Businesses are under pressure today to employ cloud technologies to
              address strategic issues, build new revenue and cut expenses. Adoption
              of cloud native technology requires a completely new architectural
              methodology, new techniques for deployment, monitoring, and operation.
              Cloudlit Engineering is our core to support our clients in the complete
              cloud transformation journey from start to end.
            </p>
          </div>
          <div className={styles.heroImageWrap}>
            <div className={styles.heroImageGlow} />
            <img src={picture} alt="Cloud infrastructure" className={styles.heroImage} />
          </div>
        </motion.div>
      </div>

      {/* ===== STATS BAR ===== */}
      <motion.div
        ref={statsRef}
        className={styles.statsSection}
        initial={{ opacity: 0, y: 20 }}
        animate={statsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <div className={styles.statsGrid}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={styles.statItem}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ===== WHO WE ARE ===== */}
      <motion.div
        ref={s2Ref}
        className={styles.whoSection}
        initial={{ opacity: 0, y: 30 }}
        animate={s2InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.whoInner}>
          <div className={styles.whoImageWrap}>
            <img src={picture2} alt="Our team" className={styles.whoImage} />
          </div>
          <div className={styles.whoContent}>
            <span className={styles.tag}>Who We Are</span>
            <h2 className={styles.sectionTitle}>
              A Premier DevOps &{" "}
              <span className={styles.gradient}>Cloud Consulting</span> Company
            </h2>
            <p className={styles.sectionPara}>
              Cloudlit is a premier DevOps and IT Consulting Company that offers a
              wide range of services to meet your IT needs. Our experts will support
              you develop and deploy robust and reliable software solutions for your
              business.
            </p>
            <p className={styles.sectionPara}>
              From infrastructure automation to cloud-based solutions, we can help
              you get the most out of your technology investments. We are dedicated
              to providing our customers with world-class services, support, and
              solutions that drive real business outcomes.
            </p>
            <div className={styles.whoFeatures}>
              <div className={styles.whoFeature}>
                <div className={styles.whoFeatureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5146CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Cloud-Native Architecture</span>
              </div>
              <div className={styles.whoFeature}>
                <div className={styles.whoFeatureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5146CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>CI/CD Pipeline Experts</span>
              </div>
              <div className={styles.whoFeature}>
                <div className={styles.whoFeatureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5146CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>Infrastructure as Code</span>
              </div>
              <div className={styles.whoFeature}>
                <div className={styles.whoFeatureIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5146CA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <span>24/7 Monitoring & Support</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== MISSION + VISION ===== */}
      <motion.div
        ref={missionRef}
        className={styles.missionSection}
        initial={{ opacity: 0, y: 30 }}
        animate={missionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.missionInner}>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </div>
            <h3 className={styles.missionTitle}>Our Mission</h3>
            <p className={styles.missionDesc}>
              Our goal is to make sure that your applications and infrastructure
              are secure, reliable, and resilient. We enable private and public
              cloud solutions for your business through our expertise with the
              world's leading technologies and a right strategy tailored to your
              unique needs.
            </p>
          </div>
          <div className={styles.missionCard}>
            <div className={styles.missionIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            <h3 className={styles.missionTitle}>Our Vision</h3>
            <p className={styles.missionDesc}>
              To be the most trusted cloud transformation partner for businesses
              worldwide. We envision a future where every organization can
              harness the full power of cloud-native technologies to innovate
              faster, scale effortlessly, and deliver exceptional digital
              experiences.
            </p>
          </div>
        </div>
      </motion.div>

      {/* ===== PRINCIPLES ===== */}
      <motion.div
        ref={s3Ref}
        className={styles.principlesSection}
        initial={{ opacity: 0, y: 30 }}
        animate={s3InView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        <div className={styles.principlesHeader}>
          <span className={styles.tag}>What Drives Us</span>
          <h2 className={styles.principlesTitle}>
            Our Core <span className={styles.gradient}>Principles</span>
          </h2>
          <p className={styles.principlesDesc}>
            These values guide every decision we make and every solution we build.
          </p>
        </div>
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
              <p className={styles.principleDesc}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
