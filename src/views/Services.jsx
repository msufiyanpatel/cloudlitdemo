import React from "react";
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
  { id: "cloud", label: "Cloud", icon: faCloud },
  { id: "devops", label: "DevOps", icon: faCode },
  { id: "provision", label: "Provision", icon: faServer },
  { id: "monitor", label: "Monitor", icon: faChartLine },
];

const serviceData = [
  /* Cloud (4) */
  {
    title: "Amazon Web Services",
    category: "cloud",
    description: "Innovate with agility and build a secure cloud platform by exploiting the full breadth of AWS capabilities.",
    icons: [{ src: awsIcon, alt: "AWS" }],
    accent: "#3A92EE",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400",
  },
  {
    title: "Google Cloud",
    category: "cloud",
    description: "Google Cloud provides services that support organizations to go digital with computing, data and AI tools.",
    icons: [{ src: gcp, alt: "GCP" }],
    accent: "#5146CA",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400",
  },
  {
    title: "IBM Cloud",
    category: "cloud",
    description: "IBM Cloud offers 200+ services in virtual servers, networking, storage and Watson AI capabilities.",
    icons: [{ src: azureIcon, alt: "IBM" }],
    accent: "#6015B2",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
  },
  {
    title: "Microsoft Azure",
    category: "cloud",
    description: "Azure helps organizations transition to the cloud with capabilities tailored to their specific needs.",
    icons: [{ src: azureIcon, alt: "Azure" }],
    accent: "#3A92EE",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
  },
  /* DevOps (4) */
  {
    title: "Red Hat OpenShift",
    category: "devops",
    description: "Enterprise Kubernetes platform for building, deploying and managing containerized applications at scale.",
    icons: [{ src: kubernetes, alt: "OpenShift" }],
    accent: "#5146CA",
    image: "https://picsum.photos/seed/containers1/400/200",
  },
  {
    title: "Jenkins",
    category: "devops",
    description: "Open source automation server for building, testing and deploying software with extensive plugin ecosystem.",
    icons: [{ src: gitlab, alt: "Jenkins" }],
    accent: "#6015B2",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400",
  },
  {
    title: "Kubernetes",
    category: "devops",
    description: "Container orchestration platform for automating deployment, scaling and management of containerized apps.",
    icons: [{ src: kubernetes, alt: "Kubernetes" }],
    accent: "#3A92EE",
    image: "https://picsum.photos/seed/kubernetes1/400/200",
  },
  {
    title: "Docker",
    category: "devops",
    description: "Container platform for developing, shipping and running applications in isolated, portable environments.",
    icons: [{ src: docker, alt: "Docker" }],
    accent: "#5146CA",
    image: "https://picsum.photos/seed/docker1/400/200",
  },
  /* Provision (4) */
  {
    title: "Ansible",
    category: "provision",
    description: "Agentless automation for configuration management, application deployment and IT orchestration.",
    icons: [{ src: ansible, alt: "Ansible" }],
    accent: "#3A92EE",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
  },
  {
    title: "Chef",
    category: "provision",
    description: "Configuration management platform for defining infrastructure as code and automating compliance.",
    icons: [{ src: chef, alt: "Chef" }],
    accent: "#5146CA",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400",
  },
  {
    title: "AWS CloudFormation",
    category: "provision",
    description: "Infrastructure as code service for modeling and provisioning AWS resources in a repeatable way.",
    icons: [{ src: cloudFormation, alt: "CloudFormation" }],
    accent: "#6015B2",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
  },
  {
    title: "Terraform",
    category: "provision",
    description: "Infrastructure as code tool for building, changing and versioning cloud and on-prem resources.",
    icons: [{ src: Terraform, alt: "Terraform" }],
    accent: "#5146CA",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400",
  },
  /* Monitor (3) */
  {
    title: "Prometheus",
    category: "monitor",
    description: "Open source monitoring and alerting toolkit designed for reliability and dimensional data model.",
    icons: [{ src: Promethus, alt: "Prometheus" }],
    accent: "#3A92EE",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400",
  },
  {
    title: "Datadog",
    category: "monitor",
    description: "Unified monitoring platform for infrastructure, applications, logs and real-time performance analytics.",
    icons: [{ src: datadog, alt: "Datadog" }],
    accent: "#5146CA",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
  },
  {
    title: "Grafana",
    category: "monitor",
    description: "Analytics and monitoring platform for visualizing metrics, logs and traces from any source.",
    icons: [{ src: datadog, alt: "Grafana" }],
    accent: "#6015B2",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400",
  },
];

const ServiceCard = ({ data, index, isWide }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={`${styles.card} ${isWide ? styles.cardWide : ""}`}
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
        <div className={styles.cardImage}>
          <img src={data.image} alt={data.title} />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = React.useState("cloud");
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  const filteredServices = serviceData.filter((s) => s.category === activeTab);

  return (
    <div id="services" className={styles.servicesSection}>
      <div className={styles.servicesInner}>
        <motion.div
          ref={headerRef}
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.sectionTag}>Our Tech Stack</span>
          <h2 className={styles.sectionTitle}>
            Tools and Technologies{" "}
            <span className={styles.titleGradient}>We Use</span>
          </h2>
          <p className={styles.sectionDesc}>
            Let us help you optimize your business success with an arsenal of
            well-proven tools and technologies.
          </p>
        </motion.div>

        <div className={styles.tabsLayout}>
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
          <div className={styles.tabsContent}>
            <div className={styles.cardGrid}>
              {filteredServices.map((data, i) => (
                <ServiceCard key={data.title} data={data} index={i} isWide={i === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
