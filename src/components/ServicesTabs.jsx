import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCode,
  faServer,
  faChartLine,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Services.module.css";

const TABS = [
  { id: "cloud", label: "Cloud", icon: faCloud },
  { id: "devops", label: "DevOps", icon: faCode },
  { id: "provision", label: "Provision", icon: faServer },
  { id: "monitor", label: "Monitor", icon: faChartLine },
  { id: "openshift", label: "OpenShift", icon: faLayerGroup },
];

const ServicesTabs = () => {
  const { pathname } = useLocation();
  const activeTab = pathname.startsWith("/services/")
    ? pathname.replace("/services/", "")
    : "cloud";

  return (
    <nav className={styles.tabsNav} aria-label="Service categories">
      {TABS.map((tab) => (
        <Link
          key={tab.id}
          to={`/services/${tab.id}`}
          className={`${styles.tabItem} ${activeTab === tab.id ? styles.tabItemActive : ""}`}
          aria-current={activeTab === tab.id ? "page" : undefined}
        >
          <span className={styles.tabIcon}>
            <FontAwesomeIcon icon={tab.icon} />
          </span>
          <span className={styles.tabLabel}>{tab.label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default ServicesTabs;
