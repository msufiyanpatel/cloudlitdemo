import React, { useState, useCallback, useEffect } from "react";
import styles from "../styles/Benefits.module.css";
import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const benefitsData = [
  {
    tag: "Speed",
    title: "Quicker Feature Delivery",
    desc: "Ship features faster with automated pipelines and streamlined workflows that reduce time-to-market.",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800",
  },
  {
    tag: "Efficiency",
    title: "Reduced Development Time",
    desc: "Eliminate bottlenecks with infrastructure-as-code and pre-built templates that accelerate development.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    tag: "Deployment",
    title: "Hassle-Free Deployment",
    desc: "Zero-downtime deployments with blue-green and canary strategies that keep your users happy.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800",
  },
  {
    tag: "Automation",
    title: "Automated Workflows",
    desc: "End-to-end automation from code commit to production with intelligent CI/CD orchestration.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
  },
  {
    tag: "Scalability",
    title: "Better Infrastructure",
    desc: "Scalable, resilient infrastructure designed for growth with built-in monitoring and auto-healing.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
  },
];

const Benefits = ({ variant = "dark" }) => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const toggleExpand = useCallback((index) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
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
    <div id="Benefits" className={`${styles.benefitsSection} ${variant === "light" ? styles.benefitsLight : ""}`}>
      <div className={styles.benefitsInner}>
        <motion.div
          ref={headerRef}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
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

        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            {benefitsData.map((data, i) => {
              const isActive = activeIndex === i;
              const noneExpanded = activeIndex === -1;
              const flexVal = isActive ? 1.8 : noneExpanded ? 1 : 0.5;
              return (
                <motion.div
                  key={data.title}
                  className={`${styles.carouselCard} ${isActive ? styles.carouselCardActive : ""}`}
                  layout
                  initial={false}
                  animate={{
                    flex: flexVal,
                    opacity: isActive ? 1 : 0.75,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.32, 0.72, 0, 1],
                    layout: { duration: 0.25, ease: [0.32, 0.72, 0, 1] },
                  }}
                  onClick={() => !isActive && toggleExpand(i)}
                >
                  <div
                    className={styles.cardImageWrap}
                    onClick={(e) => openLightbox(e, data.image)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === "Enter" && openLightbox(e, data.image)}
                    aria-label="Enlarge image"
                  >
                    <img src={data.image} alt={data.title} className={styles.cardImage} />
                    {!isActive && <div className={styles.cardOverlay} />}
                  </div>

                  <div className={styles.cardContent}>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.05 }}
                        className={styles.cardTag}
                      >
                        {data.tag}
                      </motion.div>
                    )}
                    <h3 className={styles.cardTitle}>{data.title}</h3>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.08 }}
                        className={styles.cardDesc}
                      >
                        {data.desc}
                      </motion.p>
                    )}
                  </div>

                  <button
                    type="button"
                    className={styles.cardToggle}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleExpand(i);
                    }}
                    aria-label={isActive ? "Collapse" : "Expand"}
                  >
                    {isActive ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M4 4l8 8M12 4l-8 8" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M8 4v8M4 8h8" />
                      </svg>
                    )}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={closeLightbox}
          >
            <motion.div
              className={styles.lightboxContent}
              initial={{ scale: 0.9, opacity: 0 }}
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
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Benefits;
