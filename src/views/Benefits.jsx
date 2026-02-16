import React, { useState, useCallback, useEffect } from "react";
import styles from "../styles/Benefits.module.css";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const benefitsData = [
  {
    number: "01",
    tag: "Speed",
    title: "Quicker Feature Delivery",
    desc: "Ship features faster with automated pipelines and streamlined workflows that dramatically reduce your time-to-market. Our optimized CI/CD processes ensure that every code change moves through testing, staging, and production seamlessly, letting your team focus on building great products instead of managing deployments.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800",
    color: "#3A92EE",
  },
  {
    number: "02",
    tag: "Efficiency",
    title: "Reduced Development Time",
    desc: "Eliminate bottlenecks with infrastructure-as-code and pre-built templates that accelerate every stage of development. By automating repetitive tasks and standardizing environments, your engineering team can reclaim hundreds of hours previously lost to manual configuration, environment drift, and debugging deployment issues.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    color: "#5146CA",
  },
  {
    number: "03",
    tag: "Deployment",
    title: "Hassle-Free Deployment",
    desc: "Zero-downtime deployments with blue-green and canary strategies that keep your users happy and your services running. Our deployment pipelines include automated rollback mechanisms, health checks, and progressive traffic shifting so you can ship with confidence knowing that any issues will be caught and resolved instantly.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
    color: "#6015B2",
  },
  {
    number: "04",
    tag: "Automation",
    title: "Automated Workflows",
    desc: "End-to-end automation from code commit to production with intelligent CI/CD orchestration that eliminates human error. From automated testing suites and security scanning to infrastructure provisioning and monitoring setup, every step of your software delivery lifecycle is handled by battle-tested automation pipelines.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
    color: "#8B5CF6",
  },
  {
    number: "05",
    tag: "Scalability",
    title: "Better Infrastructure",
    desc: "Scalable, resilient infrastructure designed for growth with built-in monitoring, auto-healing, and intelligent resource management. Whether you are handling thousands or millions of requests, our cloud-native architectures automatically adapt to your workload, ensuring optimal performance while keeping costs under control.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
    color: "#3A92EE",
  },
];

const Benefits = ({ variant = "dark" }) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [carouselRef, carouselInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const selectCard = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  const openLightbox = useCallback((e, image) => {
    e.stopPropagation();
    setLightboxImage(image);
  }, []);

  const closeLightbox = useCallback(() => setLightboxImage(null), []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    if (lightboxImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [lightboxImage, closeLightbox]);

  return (
    <section
      id="Benefits"
      className={`${styles.benefitsSection} ${variant === "light" ? styles.benefitsLight : ""}`}
    >
      <div className={styles.bgGrid} />

      <div className={styles.benefitsInner}>
        {/* Section Header */}
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

        {/* Carousel */}
        <motion.div
          ref={carouselRef}
          className={styles.carouselWrapper}
          initial={{ opacity: 0, y: 40 }}
          animate={carouselInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className={styles.carousel}>
            {benefitsData.map((data, i) => {
              const isActive = activeIndex === i;

              return (
                <motion.div
                  key={data.number}
                  className={`${styles.carouselCard} ${isActive ? styles.carouselCardActive : styles.carouselCardCollapsed}`}
                  animate={{
                    flex: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.32, 0.72, 0, 1],
                  }}
                  onClick={() => !isActive && selectCard(i)}
                >
                  {/* Side accent bar for collapsed (book spine) */}
                  <div
                    className={styles.spineAccent}
                    style={{
                      background: data.color,
                      opacity: isActive ? 0 : 1,
                    }}
                  />

                  {/* Top accent line for active card */}
                  <div
                    className={styles.cardAccentLine}
                    style={{
                      background: `linear-gradient(90deg, ${data.color}, ${data.color}55)`,
                      transform: isActive ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />

                  {/* Collapsed spine content (vertical text) */}
                  <div
                    className={styles.spineContent}
                    style={{ opacity: isActive ? 0 : 1, pointerEvents: isActive ? "none" : "auto" }}
                  >
                    <span className={styles.spineNumber} style={{ color: data.color }}>
                      {data.number}
                    </span>
                    <span className={styles.spineTitle}>{data.title}</span>
                    <span className={styles.spineTag} style={{ background: `${data.color}25`, color: data.color }}>
                      {data.tag}
                    </span>
                  </div>

                  {/* Expanded card content */}
                  <div
                    className={styles.expandedContent}
                    style={{ opacity: isActive ? 1 : 0, pointerEvents: isActive ? "auto" : "none" }}
                  >
                    {/* Image area */}
                    <div
                      className={styles.cardImageWrap}
                      onClick={(e) => isActive && openLightbox(e, data.image)}
                      role={isActive ? "button" : undefined}
                      tabIndex={isActive ? 0 : undefined}
                      onKeyDown={(e) => isActive && e.key === "Enter" && openLightbox(e, data.image)}
                      aria-label={isActive ? "Enlarge image" : undefined}
                    >
                      <img src={data.image} alt={data.title} className={styles.cardImage} />
                      <div
                        className={styles.cardImageOverlay}
                        style={{
                          background: `linear-gradient(to top, ${data.color}22 0%, transparent 50%)`,
                        }}
                      />
                    </div>

                    {/* Content */}
                    <div className={styles.cardContent}>
                      <span
                        className={styles.cardNumber}
                        style={{ color: data.color }}
                      >
                        {data.number}
                      </span>

                      <span
                        className={styles.cardTag}
                        style={{ background: `${data.color}20`, color: data.color }}
                      >
                        {data.tag}
                      </span>

                      <h3 className={styles.cardTitle}>{data.title}</h3>

                      <p className={styles.cardDesc}>{data.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightboxImage} alt="Enlarged" />
              <button
                type="button"
                className={styles.lightboxClose}
                onClick={closeLightbox}
                aria-label="Close"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M15 5L5 15M5 5l10 10" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Benefits;
