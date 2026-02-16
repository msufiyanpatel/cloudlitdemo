import React, { useRef } from "react";
import styles from "../styles/Roadmap.module.css";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  {
    number: "01",
    phase: "Discovery",
    title: "Requirements Gathering",
    desc: "Our experts collect complete reports of your existing system - services, databases, middleware. We map every component and communication path to build a comprehensive understanding of your current infrastructure landscape.",
    color: "#3A92EE",
  },
  {
    number: "02",
    phase: "Strategy",
    title: "Select Right Cloud Platform",
    desc: "Multiple cloud providers exist in the market, each with unique strengths. We evaluate your workload requirements, compliance needs, and budget constraints to ensure you choose the platform that's the perfect fit for your solution.",
    color: "#5146CA",
  },
  {
    number: "03",
    phase: "Build",
    title: "Integration of Tools & Strategies",
    desc: "From the very start, your solution is built on the latest tools and strategies with best-in-class DevOps practices integrated throughout. We implement CI/CD pipelines, monitoring, and automation frameworks tailored to your workflow.",
    color: "#6015B2",
  },
  {
    number: "04",
    phase: "Launch",
    title: "Train & Build Cloud Culture",
    desc: "Our team works with your IT experts, training them on integrated tools and how to take full advantage of cloud-native techniques. We ensure knowledge transfer is complete so your team can operate independently with confidence.",
    color: "#8B5CF6",
  },
];

const StepCard = ({ data, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const isEven = index % 2 === 0;

  return (
    <div className={styles.stepRow}>
      {/* Left side */}
      <div className={`${styles.stepSide} ${styles.stepSideLeft}`}>
        {isEven && (
          <motion.div
            ref={ref}
            className={styles.stepCard}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.cardAccentLine} style={{ background: `linear-gradient(90deg, ${data.color}, ${data.color}55)` }} />
            <div className={styles.cardInner}>
              <span className={styles.cardPhase} style={{ color: data.color }}>{data.phase}</span>
              <div className={styles.cardNumber} style={{ color: `${data.color}20` }}>{data.number}</div>
              <h3 className={styles.stepTitle}>{data.title}</h3>
              <p className={styles.stepDesc}>{data.desc}</p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Center milestone */}
      <div className={styles.milestone}>
        <motion.div
          className={styles.milestoneDot}
          style={{ background: data.color, boxShadow: `0 0 0 6px ${data.color}20` }}
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 300 }}
        >
          <span className={styles.milestoneNumber}>{data.number}</span>
        </motion.div>
        <motion.div
          className={styles.milestonePulse}
          style={{ borderColor: data.color }}
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: [0, 1.8], opacity: [0.6, 0] } : {}}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* Right side */}
      <div className={`${styles.stepSide} ${styles.stepSideRight}`}>
        {!isEven && (
          <motion.div
            ref={ref}
            className={styles.stepCard}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.cardAccentLine} style={{ background: `linear-gradient(90deg, ${data.color}, ${data.color}55)` }} />
            <div className={styles.cardInner}>
              <span className={styles.cardPhase} style={{ color: data.color }}>{data.phase}</span>
              <div className={styles.cardNumber} style={{ color: `${data.color}20` }}>{data.number}</div>
              <h3 className={styles.stepTitle}>{data.title}</h3>
              <p className={styles.stepDesc}>{data.desc}</p>
            </div>
          </motion.div>
        )}
        {/* For even rows, ref needs to be on the right placeholder to trigger inView */}
        {isEven && <div ref={!isEven ? undefined : undefined} />}
      </div>
    </div>
  );
};

const Roadmap = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end start"],
  });

  const pathProgress = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <div id="Roadmap" className={styles.roadmapSection}>
      {/* Background decorations */}
      <div className={styles.bgDecor}>
        <div className={styles.bgOrb1} />
        <div className={styles.bgOrb2} />
      </div>

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
          {/* Vertical path line */}
          <div className={styles.pathTrack}>
            <div className={styles.pathBg} />
            <motion.div
              className={styles.pathFill}
              style={{ scaleY: pathProgress }}
            />
          </div>

          {/* Step cards */}
          {steps.map((step, i) => (
            <StepCard key={step.number} data={step} index={i} />
          ))}

          {/* Journey end marker */}
          <motion.div
            className={styles.journeyEnd}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <div className={styles.journeyEndIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className={styles.journeyEndText}>Transformation Complete</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
