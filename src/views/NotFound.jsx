import React from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.page}>
      <SEO title="404 — Page Not Found" description="The page you are looking for does not exist." noindex={true} />
      <div className={styles.inner}>
        <span className={styles.code}>404</span>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.desc}>
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className={styles.btn}>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
