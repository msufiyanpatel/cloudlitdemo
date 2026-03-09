import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Locations.module.css";

const locationsData = [
  {
    city: "New South Wales",
    region: "",
    country: "AUSTRALIA",
    hub: "Tech Center",
    coords: "33.8688° S, 151.2093° E",
    image: "/new-south-wales.webp",
  },
  {
    city: "Karachi",
    region: "",
    country: "PAKISTAN",
    hub: "Design Studio",
    coords: "24.8607° N, 67.0011° E",
    image: "/karachi.webp",
  },
  {
    city: "Jeddah",
    region: "",
    country: "SAUDI ARABIA",
    hub: "Technical Sales",
    coords: "21.5433° N, 39.1728° E",
    image: "/jeddah.webp",
  },
  {
    city: "Toronto",
    region: "",
    country: "CANADA",
    hub: "Innovation Lab",
    coords: "43.6532° N, 79.3832° W",
    image: "/canada.webp",
  },
];

const Locations = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [cardsRef, cardsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="locations" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          ref={headerRef}
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2 className={styles.title}>Where Innovation Happens</h2>
          <p className={styles.subtitle}>
            Strategic locations across the globe, delivering excellence in digital transformation.
          </p>
        </motion.div>

        <div className={styles.cardGrid} ref={cardsRef}>
          {locationsData.map((loc, i) => (
            <motion.article
              key={loc.city}
              className={styles.card}
              initial={{ opacity: 0, y: 40 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={styles.cardBg}
                style={{ backgroundImage: `url(${loc.image})` }}
                role="img"
                aria-label={`${loc.city} background`}
              />
              <div className={styles.cardContent}>
                <div className={styles.cardIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faLocationDot} />
                </div>
                <div className={styles.cardCentered}>
                  <span className={styles.hubTag}>{loc.hub}</span>
                  <h3 className={styles.city}>
                    {loc.city}
                    {loc.region && `, ${loc.region}`}
                  </h3>
                  <span className={styles.country}>{loc.country}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
