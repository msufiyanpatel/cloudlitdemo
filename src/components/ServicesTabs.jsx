import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCode,
  faServer,
  faChartLine,
  faLayerGroup,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Services.module.css";

const TABS = [
  { id: "cloud", label: "Cloud", icon: faCloud },
  { id: "devops", label: "DevOps", icon: faCode },
  { id: "provision", label: "Infrastructure Management", icon: faServer },
  { id: "monitor", label: "Enterprise Monitoring", icon: faChartLine },
  { id: "openshift", label: "Red Hat OpenShift", icon: faLayerGroup },
  { id: "teams", label: "Teams", icon: faUsers },
];

const ServicesTabs = () => {
  const { pathname } = useLocation();
  const navRef = useRef(null);
  const [scrollInfo, setScrollInfo] = useState({ canScroll: false, scrollLeft: 0, scrollWidth: 0, clientWidth: 0 });

  const activeTab = pathname.startsWith("/services/")
    ? pathname.replace("/services/", "")
    : "cloud";

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const updateScrollInfo = () => {
      const canScroll = nav.scrollWidth > nav.clientWidth;
      setScrollInfo({
        canScroll,
        scrollLeft: nav.scrollLeft,
        scrollWidth: nav.scrollWidth,
        clientWidth: nav.clientWidth,
      });
    };

    updateScrollInfo();
    nav.addEventListener("scroll", updateScrollInfo);
    window.addEventListener("resize", updateScrollInfo);

    return () => {
      nav.removeEventListener("scroll", updateScrollInfo);
      window.removeEventListener("resize", updateScrollInfo);
    };
  }, []);

  const { canScroll, scrollLeft, scrollWidth, clientWidth } = scrollInfo;
  const maxScroll = scrollWidth - clientWidth;
  const thumbPercent = maxScroll > 0 ? (clientWidth / scrollWidth) * 100 : 100;
  const thumbLeftPercent = maxScroll > 0 ? (scrollLeft / maxScroll) * (100 - thumbPercent) : 0;

  return (
    <div className={styles.tabsNavWrapper}>
      <nav ref={navRef} className={styles.tabsNav} aria-label="Service categories">
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
      {canScroll && (
        <div className={styles.tabsScrollbar} role="presentation" aria-hidden="true">
          <div className={styles.tabsScrollbarTrack}>
            <div
              className={styles.tabsScrollbarThumb}
              style={{ width: `${thumbPercent}%`, left: `${thumbLeftPercent}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesTabs;
