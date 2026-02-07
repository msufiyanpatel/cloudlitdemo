import React from "react";
import styles from "../styles/Benefits.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import pic1 from "../assets/icons/1.1.png";
import pic2 from "../assets/icons/3.1.png";
import pic3 from "../assets/icons/5.1.png";
import pic4 from "../assets/icons/4.1.png";
import pic5 from "../assets/icons/2.1.png";

const benefitsData = [
  {
    icon: pic1,
    title: "Quicker Feature Delivery",
    desc: "Ship features faster with automated pipelines and streamlined workflows that reduce time-to-market.",
  },
  {
    icon: pic2,
    title: "Reduced Development Time",
    desc: "Eliminate bottlenecks with infrastructure-as-code and pre-built templates that accelerate development.",
  },
  {
    icon: pic3,
    title: "Hassle-Free Deployment",
    desc: "Zero-downtime deployments with blue-green and canary strategies that keep your users happy.",
  },
  {
    icon: pic4,
    title: "Automated Workflows",
    desc: "End-to-end automation from code commit to production with intelligent CI/CD orchestration.",
  },
  {
    icon: pic5,
    title: "Better Infrastructure",
    desc: "Scalable, resilient infrastructure designed for growth with built-in monitoring and auto-healing.",
  },
];

const BenefitCard = ({ data, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      className={styles.benefitCard}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className={styles.cardIconWrap}>
        <div className={styles.cardIconBg} />
        <img src={data.icon} alt={data.title} className={styles.cardIcon} />
      </div>
      <h3 className={styles.cardTitle}>{data.title}</h3>
      <p className={styles.cardDesc}>{data.desc}</p>
      <div className={styles.cardLine} />
    </motion.div>
  );
};

const Benefits = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div id="Benefits" className={styles.benefitsSection}>
      {/* Background decoration */}
      <div className={styles.bgDecor}>
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
      </div>

      <div className={styles.benefitsInner}>
        <motion.div
          ref={headerRef}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionTag}>Why Choose Us</span>
          <h2 className={styles.sectionTitle}>
            Benefits of DevOps{" "}
            <span className={styles.titleGradient}>Consulting Services</span>
          </h2>
          <p className={styles.sectionDesc}>
            Our DevOps consulting team helps you bridge business gaps and develop
            optimum solutions for sustainable growth.
          </p>
        </motion.div>

        <div className={styles.benefitsGrid}>
          {benefitsData.map((data, i) => (
            <BenefitCard key={data.title} data={data} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
