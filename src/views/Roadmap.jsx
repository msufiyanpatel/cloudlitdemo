import React, { useRef } from "react";
import styles from "../styles/Roadmap.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Requirements Gathering",
    desc: "Our experts collect complete reports of your existing system — services, databases, middleware. We map every component and communication path.",
    color: "#3A92EE",
  },
  {
    number: "02",
    title: "Select Right Cloud Platform",
    desc: "Multiple cloud providers exist in the market. We ensure you choose the platform that's the perfect fit for your solution and budget.",
    color: "#5146CA",
  },
  {
    number: "03",
    title: "Integration of Tools & Strategies",
    desc: "From the very start, your solution is built on the latest tools and strategies with best-in-class DevOps practices integrated throughout.",
    color: "#6015B2",
  },
  {
    number: "04",
    title: "Train & Build Cloud Culture",
    desc: "Our team works with your IT experts, training them on integrated tools and how to take full advantage of cloud-native techniques.",
    color: "#8B5CF6",
  },
];

const StepCard = ({ data, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`${styles.step} ${isEven ? styles.stepLeft : styles.stepRight}`}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      <div className={styles.stepCard}>
        <div className={styles.stepNumber} style={{ color: data.color }}>
          {data.number}
        </div>
        <h3 className={styles.stepTitle}>{data.title}</h3>
        <p className={styles.stepDesc}>{data.desc}</p>
      </div>
      <div className={styles.stepConnector}>
        <div
          className={styles.stepDot}
          style={{ background: data.color, boxShadow: `0 0 20px ${data.color}40` }}
        />
      </div>
    </motion.div>
  );
};

const Roadmap = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const lineFillHeight = useTransform(scrollYProgress, (v) => {
    const p = Math.min(1, Math.max(0, v));
    return `${p * 100}%`;
  });

  return (
    <div id="Roadmap" className={styles.roadmapSection}>
      <div className={styles.roadmapInner}>
        <motion.div
          ref={headerRef}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionTag}>Our Process</span>
          <h2 className={styles.sectionTitle}>
            Roadmap To Your{" "}
            <span className={styles.titleGradient}>
              Successful DevOps Transformation
            </span>
          </h2>
          <p className={styles.sectionDesc}>
            As your business evolves, so must technology models. Cloudlit's roadmap
            gives you on-demand access to highly skilled cloud experts who work
            alongside your team.
          </p>
        </motion.div>

        <div ref={timelineRef} className={styles.timeline}>
          <div className={styles.timelineLine}>
            <motion.div
              className={styles.timelineLineFill}
              style={{ height: lineFillHeight }}
            />
          </div>
          {steps.map((step, i) => (
            <StepCard key={step.number} data={step} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
