import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const FloatingOrb = ({ size, color, top, left, delay, duration }) => (
  <div
    className={styles.orb}
    style={{
      width: size,
      height: size,
      background: color,
      top,
      left,
      animationDelay: delay,
      animationDuration: duration,
    }}
  />
);

const GridDot = ({ style }) => <div className={styles.gridDot} style={style} />;

const Home = () => {
  const navigate = useNavigate();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width - 0.5,
          y: (e.clientY - rect.top) / rect.height - 0.5,
        });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const onDiscoverButtonClick = () => {
    navigate("/about");
  };

  const onContactClick = () => {
    navigate("/contact");
  };

  const techWords = [
    "Kubernetes",
    "Docker",
    "AWS",
    "Terraform",
    "CI/CD",
    "Azure",
    "GitOps",
    "Ansible",
    "Monitoring",
    "Microservices",
  ];

  return (
    <div id="Home" className={styles.homeWrapper}>
      {/* Hero Section */}
      <section className={styles.hero} ref={heroRef}>
        {/* Animated gradient background orbs */}
        <div className={styles.orbContainer}>
          <FloatingOrb
            size="600px"
            color="radial-gradient(circle, rgba(58,146,238,0.15) 0%, transparent 70%)"
            top="-10%"
            left="-5%"
            delay="0s"
            duration="20s"
          />
          <FloatingOrb
            size="500px"
            color="radial-gradient(circle, rgba(96,21,178,0.12) 0%, transparent 70%)"
            top="30%"
            left="60%"
            delay="-5s"
            duration="25s"
          />
          <FloatingOrb
            size="400px"
            color="radial-gradient(circle, rgba(81,70,202,0.1) 0%, transparent 70%)"
            top="60%"
            left="20%"
            delay="-10s"
            duration="22s"
          />
        </div>

        {/* Grid pattern overlay */}
        <div className={styles.gridPattern}>
          {Array.from({ length: 80 }).map((_, i) => (
            <GridDot
              key={i}
              style={{
                left: `${(i % 10) * 11 + 5}%`,
                top: `${Math.floor(i / 10) * 13 + 5}%`,
                animationDelay: `${(i * 0.1) % 3}s`,
              }}
            />
          ))}
        </div>

        {/* Floating tech words */}
        <div className={styles.floatingWords}>
          {techWords.map((word, i) => (
            <span
              key={word}
              className={styles.techWord}
              style={{
                left: `${10 + (i * 17) % 80}%`,
                top: `${15 + (i * 23) % 70}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${12 + i * 2}s`,
                transform: `translate(${mousePos.x * (10 + i * 3)}px, ${mousePos.y * (10 + i * 3)}px)`,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Main hero content */}
        <div className={styles.heroContent}>
          <motion.div
            className={styles.heroLeft}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className={styles.badge}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className={styles.badgeDot} />
              Cloud Native Solutions
            </motion.div>

            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Think. Build.
              <br />
              <span className={styles.gradientText}>Scale With Cloud</span>
            </motion.h1>

            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              As you begin your journey to embrace modern cloud native mindset,
              you may need more than just support. Cloudlit helps you scale your
              IT organization, transform environments, streamline operating
              models and operate efficiently.
            </motion.p>

            <motion.div
              className={styles.heroCTA}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <button
                className={styles.primaryBtn}
                onClick={onDiscoverButtonClick}
              >
                Discover More
                <span className={styles.btnArrow}>&#8594;</span>
              </button>
              <button className={styles.secondaryBtn} onClick={onContactClick}>
                Contact Us
              </button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className={styles.statsRow}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Projects Delivered</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>99.9%</span>
                <span className={styles.statLabel}>Uptime Guarantee</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Expert Support</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - animated visual */}
          <motion.div
            className={styles.heroRight}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className={styles.visualContainer}>
              {/* Central rotating ring */}
              <div className={styles.outerRing}>
                <div className={styles.innerRing}>
                  <div className={styles.centerPulse}>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className={styles.cloudIcon}
                    >
                      <path
                        d="M6.5 19.5C3.46243 19.5 1 17.0376 1 14C1 11.2386 3.03201 8.95429 5.68394 8.55476C6.43728 5.44954 9.23696 3.14286 12.5714 3.14286C16.5464 3.14286 19.7857 6.38214 19.7857 10.3571C19.7857 10.5714 19.7768 10.7839 19.7594 10.9939C21.5821 11.5879 23 13.3393 23 15.3571C23 17.8429 20.9857 19.8571 18.5 19.8571L6.5 19.5Z"
                        fill="url(#cloudGrad)"
                        stroke="rgba(58,146,238,0.3)"
                        strokeWidth="0.5"
                      />
                      <defs>
                        <linearGradient
                          id="cloudGrad"
                          x1="1"
                          y1="3"
                          x2="23"
                          y2="20"
                        >
                          <stop offset="0%" stopColor="#3A92EE" />
                          <stop offset="50%" stopColor="#5146CA" />
                          <stop offset="100%" stopColor="#6015B2" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Orbiting nodes */}
              {["Deploy", "Monitor", "Scale", "Secure", "Automate", "Optimize"].map(
                (label, i) => (
                  <div
                    key={label}
                    className={styles.orbitNode}
                    style={{
                      "--orbit-delay": `${i * -3.33}s`,
                      "--orbit-index": i,
                    }}
                  >
                    <div className={styles.nodeInner}>
                      <span>{label}</span>
                    </div>
                  </div>
                )
              )}

              {/* Connecting lines that pulse */}
              <svg className={styles.connectionLines} viewBox="0 0 400 400">
                <circle
                  cx="200"
                  cy="200"
                  r="140"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="1"
                  strokeDasharray="6 4"
                  className={styles.dashedCircle}
                />
                <circle
                  cx="200"
                  cy="200"
                  r="100"
                  fill="none"
                  stroke="url(#lineGrad)"
                  strokeWidth="0.5"
                  strokeDasharray="4 6"
                  className={styles.dashedCircleInner}
                />
                <defs>
                  <linearGradient
                    id="lineGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="rgba(58,146,238,0.3)" />
                    <stop offset="50%" stopColor="rgba(81,70,202,0.3)" />
                    <stop offset="100%" stopColor="rgba(96,21,178,0.3)" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className={styles.scrollMouse}>
            <div className={styles.scrollDot} />
          </div>
          <span>Scroll to explore</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
