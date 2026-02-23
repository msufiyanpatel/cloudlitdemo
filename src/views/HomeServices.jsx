import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomeServices.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import awsIcon from "../assets/aws-icon.png";
import azureIcon from "../assets/Azure-Logo-PNG-Black.png";
import gcp from "../assets/google-cloud-platform.png";
import docker from "../assets/docker-logo.png";
import kubernetes from "../assets/kubernetes.png";
import gitlab from "../assets/Gitlab.png";
import ansible from "../assets/ansible.png";
import chef from "../assets/chef.png";
import Terraform from "../assets/terraform.png";
import cloudFormation from "../assets/aws-cloudformation.png";
import Promethus from "../assets/promoetheus.png";
import datadog from "../assets/datadog.png";

const TABS = [
  { id: "cloud", label: "Cloud" },
  { id: "devops", label: "DevOps" },
  { id: "provision", label: "Provision" },
  { id: "monitor", label: "Monitor" },
];

const cloudServices = [
  {
    title: "Amazon Web Services",
    description: "Innovate with agility and build a secure cloud platform by exploiting the full breadth of AWS's leading-edge cloud capabilities.",
    icon: awsIcon,
  },
  {
    title: "Google Cloud",
    description: "Google Cloud provides services that support organizations to go digital. It offers a suite of computing services to do everything from data management to delivering web and AI/machine learning tools.",
    icon: gcp,
  },
  {
    title: "IBM Cloud",
    description: "IBM Cloud is a suite of cloud computing services that offers 200+ services in virtual servers, networking and storage. IBM Watson has amazing AI capabilities.",
    icon: azureIcon,
  },
  {
    title: "Microsoft Cloud",
    description: "Microsoft Azure has been leveraging its legacy footholds to help reluctant organizations transition to the cloud in a way that plays to its particular capabilities over the past few years.",
    icon: azureIcon,
  },
];

const devopsServices = [
  {
    title: "Kubernetes",
    description: "Container orchestration platform for automating deployment, scaling and management of containerized apps.",
    icon: kubernetes,
  },
  {
    title: "Docker",
    description: "Container platform for developing, shipping and running applications in isolated, portable environments.",
    icon: docker,
  },
  {
    title: "GitLab",
    description: "Complete DevOps platform for source code management, CI/CD, and collaboration across the software lifecycle.",
    icon: gitlab,
  },
];

const provisionServices = [
  {
    title: "Terraform",
    description: "Infrastructure as code tool for building, changing and versioning cloud and on-prem resources.",
    icon: Terraform,
  },
  {
    title: "Ansible",
    description: "Agentless automation for configuration management, application deployment and IT orchestration.",
    icon: ansible,
  },
  {
    title: "Chef",
    description: "Configuration management platform for defining infrastructure as code and automating compliance.",
    icon: chef,
  },
  {
    title: "AWS CloudFormation",
    description: "Infrastructure as code service for modeling and provisioning AWS resources in a repeatable way.",
    icon: cloudFormation,
  },
];

const monitorServices = [
  {
    title: "Prometheus",
    description: "Open source monitoring and alerting toolkit designed for reliability and dimensional data model.",
    icon: Promethus,
  },
  {
    title: "Datadog",
    description: "Unified monitoring platform for infrastructure, applications, logs and real-time performance analytics.",
    icon: datadog,
  },
];

const SERVICES_BY_TAB = {
  cloud: cloudServices,
  devops: devopsServices,
  provision: provisionServices,
  monitor: monitorServices,
};

const HomeServices = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("cloud");
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className={styles.section} ref={ref}>
      <div className={styles.inner}>
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
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Service cards grid - all tabs have inner services */}
        <motion.div
          className={styles.cardGrid}
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {(SERVICES_BY_TAB[activeTab] || []).map((service, i) => (
            <motion.article
              key={service.title}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className={styles.cardLogo}>
                <img src={service.icon} alt={service.title} />
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <a
                href={`/services/${activeTab}`}
                className={styles.learnMore}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/services/${activeTab}`);
                }}
              >
                Learn More →
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
