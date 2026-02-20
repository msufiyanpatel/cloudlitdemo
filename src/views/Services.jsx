import React, { useState } from "react";
import styles from "../styles/Services.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faCode,
  faServer,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";
import awsIcon from "../assets/aws-icon.png";
import azureIcon from "../assets/Azure-Logo-PNG-Black.png";
import gcp from "../assets/google-cloud-platform.png";
import docker from "../assets/docker-logo.png";
import kubernetes from "../assets/kubernetes.png";
import gitlab from "../assets/Gitlab.png";
import ansible from "../assets/ansible.png";
import chef from "../assets/chef.png";
import Promethus from "../assets/promoetheus.png";
import datadog from "../assets/datadog.png";
import Terraform from "../assets/terraform.png";
import cloudFormation from "../assets/aws-cloudformation.png";

const TABS = [
  {
    id: "cloud",
    label: "Cloud",
    icon: faCloud,
    heading: "Cloud",
    headingAlt: "Providers.",
    tagline: "Build on the world's leading platforms. We architect solutions across AWS, GCP, Azure and private clouds.",
  },
  {
    id: "devops",
    label: "DevOps",
    icon: faCode,
    heading: "DevOps &",
    headingAlt: "Containers.",
    tagline: "Docker, Kubernetes, CI/CD pipelines — ship anywhere, scale everywhere with bulletproof deployments.",
  },
  {
    id: "provision",
    label: "Provision",
    icon: faServer,
    heading: "Infrastructure",
    headingAlt: "as Code.",
    tagline: "Terraform, Ansible, Chef — declarative infrastructure that's versioned, reviewed, and repeatable.",
  },
  {
    id: "monitor",
    label: "Monitor",
    icon: faChartLine,
    heading: "Monitoring &",
    headingAlt: "Observability.",
    tagline: "Prometheus, Datadog, Grafana — full-stack observability from infrastructure to user experience.",
  },
];

const serviceData = [
  {
    title: "Amazon Web Services",
    category: "cloud",
    description: "Innovate with agility and build a secure cloud platform by exploiting the full breadth of AWS capabilities.",
    icons: [{ src: awsIcon, alt: "AWS" }],
    accent: "#3A92EE",
  },
  {
    title: "Google Cloud",
    category: "cloud",
    description: "Google Cloud provides services that support organizations to go digital with computing, data and AI tools.",
    icons: [{ src: gcp, alt: "GCP" }],
    accent: "#5146CA",
  },
  {
    title: "IBM Cloud",
    category: "cloud",
    description: "IBM Cloud offers 200+ services in virtual servers, networking, storage and Watson AI capabilities.",
    icons: [{ src: azureIcon, alt: "IBM" }],
    accent: "#6015B2",
  },
  {
    title: "Microsoft Azure",
    category: "cloud",
    description: "Azure helps organizations transition to the cloud with capabilities tailored to their specific needs.",
    icons: [{ src: azureIcon, alt: "Azure" }],
    accent: "#3A92EE",
  },
  {
    title: "Kubernetes",
    category: "devops",
    description: "Container orchestration platform for automating deployment, scaling and management of containerized apps.",
    icons: [{ src: kubernetes, alt: "Kubernetes" }],
    accent: "#3A92EE",
  },
  {
    title: "Docker",
    category: "devops",
    description: "Container platform for developing, shipping and running applications in isolated, portable environments.",
    icons: [{ src: docker, alt: "Docker" }],
    accent: "#5146CA",
  },
  {
    title: "GitLab",
    category: "devops",
    description: "Complete DevOps platform for source code management, CI/CD, and collaboration across the software lifecycle.",
    icons: [{ src: gitlab, alt: "GitLab" }],
    accent: "#6015B2",
  },
  {
    title: "Ansible",
    category: "provision",
    description: "Agentless automation for configuration management, application deployment and IT orchestration.",
    icons: [{ src: ansible, alt: "Ansible" }],
    accent: "#3A92EE",
  },
  {
    title: "Chef",
    category: "provision",
    description: "Configuration management platform for defining infrastructure as code and automating compliance.",
    icons: [{ src: chef, alt: "Chef" }],
    accent: "#5146CA",
  },
  {
    title: "Terraform",
    category: "provision",
    description: "Infrastructure as code tool for building, changing and versioning cloud and on-prem resources.",
    icons: [{ src: Terraform, alt: "Terraform" }],
    accent: "#6015B2",
  },
  {
    title: "AWS CloudFormation",
    category: "provision",
    description: "Infrastructure as code service for modeling and provisioning AWS resources in a repeatable way.",
    icons: [{ src: cloudFormation, alt: "CloudFormation" }],
    accent: "#5146CA",
  },
  {
    title: "Prometheus",
    category: "monitor",
    description: "Open source monitoring and alerting toolkit designed for reliability and dimensional data model.",
    icons: [{ src: Promethus, alt: "Prometheus" }],
    accent: "#3A92EE",
  },
  {
    title: "Datadog",
    category: "monitor",
    description: "Unified monitoring platform for infrastructure, applications, logs and real-time performance analytics.",
    icons: [{ src: datadog, alt: "Datadog" }],
    accent: "#5146CA",
  },
];

const ServiceCard = ({ data, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <div className={styles.cardBody}>
        <div className={styles.cardHeader}>
          <div className={styles.cardIcon} style={{ background: `${data.accent}20`, borderColor: `${data.accent}40` }}>
            <img src={data.icons[0].src} alt={data.icons[0].alt} />
          </div>
          <h3 className={styles.cardTitle}>{data.title}</h3>
        </div>
        <p className={styles.cardDesc}>{data.description}</p>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("cloud");
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const activeTabData = TABS.find((t) => t.id === activeTab);
  const filteredServices = serviceData.filter((s) => s.category === activeTab);

  return (
    <section id="services" className={styles.servicesSection}>
      <div className={styles.servicesInner}>
        {/* Tab navigation */}
        <nav className={styles.tabsNav} aria-label="Service categories">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`${styles.tabItem} ${activeTab === tab.id ? styles.tabItemActive : ""}`}
              onClick={() => setActiveTab(tab.id)}
              aria-pressed={activeTab === tab.id}
            >
              <span className={styles.tabIcon}>
                <FontAwesomeIcon icon={tab.icon} />
              </span>
              <span className={styles.tabLabel}>{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Breadcrumbs */}
        <p className={styles.breadcrumbs}>
          Services &gt; <span className={styles.breadcrumbActive}>{activeTabData?.label}.</span>
        </p>

        {/* Hero heading */}
        <motion.div
          ref={headerRef}
          className={styles.heroSection}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          key={activeTab}
        >
          <h1 className={styles.heroTitle}>
            {activeTabData?.heading}{" "}
            <span className={styles.heroTitleAlt}>{activeTabData?.headingAlt}</span>
          </h1>
          <p className={styles.heroTagline}>{activeTabData?.tagline}</p>
        </motion.div>

        {/* Service cards grid */}
        <div className={styles.cardGrid}>
          {filteredServices.map((data, i) => (
            <ServiceCard key={data.title} data={data} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
