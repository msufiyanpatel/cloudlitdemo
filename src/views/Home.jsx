import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import logo1 from "../assets/logos/1.png";
import logo2 from "../assets/logos/2.png";
import logo3 from "../assets/logos/3.png";
import logo4 from "../assets/logos/4.png";
import logo5 from "../assets/logos/5.png";
import logo6 from "../assets/logos/6.png";
import logo7 from "../assets/logos/7.png";
import logo8 from "../assets/logos/8.png";
import logo9 from "../assets/logos/9.png";
import logo10 from "../assets/logos/10.png";

const trustedLogos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10,
];

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

  const { scrollY } = useScroll();
  
  // Gradient moves down and fades out on scroll
  const gradientY = useTransform(scrollY, [0, 500], [0, 350]);
  const gradientOpacity = useTransform(scrollY, [0, 400], [1, 0]);

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
        {/* D-shaped gradient - moves down and fades on scroll */}
        <motion.div
          className={styles.heroGradientD}
          style={{
            y: gradientY,
            opacity: gradientOpacity,
          }}
          aria-hidden="true"
        />
        
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
              transition={{ delay: 0.5, duration: 0.7 }}
            >
              As you begin your journey to embrace modern cloud native mindset.
            </motion.p>
            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
            >    
              Cloudlit Engineering is our core to support our clients in complete cloud transformation.
              </motion.p>
            <motion.p
              className={styles.heroPoints}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              Kubernetes • Cloud Migration • DevOps Automation • Microservices
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
        </div>
      </section>

      {/* Trusted By Industry Leaders */}
      <section className={styles.trustedSection}>
        <h2 className={styles.trustedHeading}>TRUSTED BY INDUSTRY LEADERS IN MEA</h2>
        <div className={styles.trustedLogos}>
          {trustedLogos.map((logo, i) => (
            <div key={i} className={styles.trustedLogoItem}>
              <img src={logo} alt={`Trusted partner ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;