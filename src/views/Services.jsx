import React from "react";
import styles from "../styles/Services.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import awsIcon from "../assets/aws-icon.png";
import azureIcon from "../assets/Azure-Logo-PNG-Black.png";
import gcp from "../assets/google-cloud-platform.png";
import docker from "../assets/docker-logo.png";
import dockerCompose from "../assets/docker compose.jpg";
import kubernetes from "../assets/kubernetes.png";
import gitlab from "../assets/Gitlab.png";
import github from "../assets/GitHub.png";
import teamcity from "../assets/TeamCity.png";
import ansible from "../assets/ansible.png";
import chef from "../assets/chef.png";
import puppet from "../assets/puppet.png";
import mysql from "../assets/mysql.png";
import postgresql from "../assets/Postgresql_elephant.svg.png";
import oracle from "../assets/oracle.png";
import rabbitMQ from "../assets/rabbitmq.png";
import kafka from "../assets/kafka.png";
import reddis from "../assets/reddid.png";
import Promethus from "../assets/promoetheus.png";
import datadog from "../assets/datadog.png";
import pagerduty from "../assets/pagerduty.png";
import Terraform from "../assets/terraform.png";
import pulumi from "../assets/pulumi.svg";
import cloudFormation from "../assets/aws-cloudformation.png";

const serviceData = [
  {
    title: "Cloud Providers",
    description: "Amazon AWS, GCP, Microsoft Azure, Any Private Cloud and other...",
    icons: [
      { src: awsIcon, alt: "AWS" },
      { src: azureIcon, alt: "Azure" },
      { src: gcp, alt: "GCP" },
    ],
    accent: "#3A92EE",
  },
  {
    title: "Containers & Orchestration",
    description: "Docker, Compose, Kubernetes and other...",
    icons: [
      { src: docker, alt: "Docker" },
      { src: dockerCompose, alt: "Docker Compose" },
      { src: kubernetes, alt: "Kubernetes" },
    ],
    accent: "#5146CA",
  },
  {
    title: "CI/CD",
    description: "Jenkins, GitLab, GitHub, TeamCity, CircleCI, Travis CI, ArgoCD and other...",
    icons: [
      { src: gitlab, alt: "GitLab" },
      { src: github, alt: "GitHub" },
      { src: teamcity, alt: "TeamCity" },
    ],
    accent: "#6015B2",
  },
  {
    title: "Configuration Management",
    description: "Ansible, Chef, Puppet and other...",
    icons: [
      { src: ansible, alt: "Ansible" },
      { src: chef, alt: "Chef" },
      { src: puppet, alt: "Puppet" },
    ],
    accent: "#3A92EE",
  },
  {
    title: "Databases",
    description: "MySQL, MongoDB, Aurora, PostgreSQL, Percona, Oracle, MS SQL and other...",
    icons: [
      { src: mysql, alt: "MySQL" },
      { src: postgresql, alt: "PostgreSQL" },
      { src: oracle, alt: "Oracle" },
    ],
    accent: "#5146CA",
  },
  {
    title: "Services",
    description: "RabbitMQ, Apache Kafka, Redis, ELK stack, Istio, Memcached and other...",
    icons: [
      { src: rabbitMQ, alt: "RabbitMQ" },
      { src: kafka, alt: "Apache Kafka" },
      { src: reddis, alt: "Redis" },
    ],
    accent: "#6015B2",
  },
  {
    title: "Monitoring",
    description: "Prometheus, Datadog, Grafana, PagerDuty, CloudWatch and other...",
    icons: [
      { src: Promethus, alt: "Prometheus" },
      { src: datadog, alt: "Datadog" },
      { src: pagerduty, alt: "PagerDuty" },
    ],
    accent: "#3A92EE",
  },
  {
    title: "Infrastructure Provisioning",
    description: "Terraform, Pulumi, AWS CloudFormation and other...",
    icons: [
      { src: Terraform, alt: "Terraform" },
      { src: pulumi, alt: "Pulumi" },
      { src: cloudFormation, alt: "CloudFormation" },
    ],
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
      <div className={styles.cardAccent} style={{ background: data.accent }} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{data.title}</h3>
        <p className={styles.cardDesc}>{data.description}</p>
        <div className={styles.iconRow}>
          {data.icons.map((icon) => (
            <div key={icon.alt} className={styles.iconBox}>
              <img src={icon.src} alt={icon.alt} />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [headerRef, headerInView] = useInView({ triggerOnce: true, threshold: 0.2 });

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

        <div className={styles.cardGrid}>
          {serviceData.map((data, i) => (
            <ServiceCard key={data.title} data={data} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
