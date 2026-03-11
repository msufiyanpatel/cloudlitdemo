import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/HomeServices.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import awsIcon from "../assets/aws-icon.webp";
import azureIcon from "../assets/Azure-Logo-PNG-Black.webp";
import gcp from "../assets/google-cloud-platform.webp";
import docker from "../assets/docker-logo.webp";
import kubernetes from "../assets/kubernetes.webp";
import gitlab from "../assets/Gitlab.webp";
import github from "../assets/GitHub.webp";
import teamCity from "../assets/TeamCity.webp";
import ansible from "../assets/ansible.webp";
import chef from "../assets/chef.webp";
import puppet from "../assets/puppet.webp";
import Terraform from "../assets/terraform.webp";
import cloudFormation from "../assets/aws-cloudformation.webp";
import pulumi from "../assets/pulumi.svg";
import Prometheus from "../assets/promoetheus.webp";
import datadog from "../assets/datadog.webp";
import pagerduty from "../assets/pagerduty.webp";
import kafka from "../assets/kafka.webp";
import rabbitmq from "../assets/rabbitmq.webp";
import mysql from "../assets/mysql.webp";
import postgresql from "../assets/Postgresql.webp";
import oracle from "../assets/oracle.webp";

const TOOL_ITEMS = [
  { icon: awsIcon, label: "AWS" },
  { icon: gcp, label: "GCP" },
  { icon: azureIcon, label: "Azure" },
  { icon: docker, label: "Docker" },
  { icon: kubernetes, label: "Kubernetes" },
  { icon: gitlab, label: "GitLab" },
  { icon: ansible, label: "Ansible" },
  { icon: chef, label: "Chef" },
  { icon: Terraform, label: "Terraform" },
  { icon: cloudFormation, label: "CloudFormation" },
  { icon: Prometheus, label: "Prometheus" },
  { icon: datadog, label: "Datadog" },
  { icon: pagerduty, label: "PagerDuty" },
];

const SERVICE_CARDS = [
  {
    eyebrow: "BUILD ON THE WORLD’S LEADING PLATFORMS",
    title: "Cloud Providers",
    description:
      "Amazon AWS, Google Cloud, Microsoft Azure and any private cloud – we architect solutions across all major providers.",
    tools: [awsIcon, gcp, azureIcon],
    path: "/services/cloud",
  },
  {
    eyebrow: "SHIP ANYWHERE, SCALE EVERYWHERE",
    title: "Containers & Orchestration",
    description:
      "Docker, Kubernetes, and container orchestration that makes your deployments bulletproof.",
    tools: [docker, kubernetes],
    path: "/services/devops",
  },
  {
    eyebrow: "FROM COMMIT TO PRODUCTION IN MINUTES",
    title: "CI/CD Pipelines",
    description:
      "Jenkins, GitLab, GitHub Actions, ArgoCD – continuous delivery that never sleeps.",
    tools: [gitlab, github, teamCity],
    path: "/services/devops",
  },
  {
    eyebrow: "INFRASTRUCTURE AS CODE, DONE RIGHT",
    title: "Configuration Management",
    description:
      "Ansible, Chef, Puppet – automate everything from server provisioning to application configuration.",
    tools: [ansible, chef, puppet],
    path: "/services/provision",
  },
  {
    eyebrow: "DATA THAT SCALES WITH YOUR AMBITION",
    title: "Databases",
    description:
      "MySQL, PostgreSQL, Oracle, MongoDB, Amazon Aurora – relational and NoSQL expertise for every workload.",
    tools: [mysql, postgresql, oracle],
    path: "/services/cloud",
  },
  {
    eyebrow: "REAL-TIME DATA, ZERO LATENCY",
    title: "Messaging & Caching",
    description:
      "RabbitMQ, Kafka, Redis, ELK stack – event-driven architectures that handle millions of messages.",
    tools: [kafka, rabbitmq],
    path: "/services/monitor",
  },
  {
    eyebrow: "SEE EVERYTHING, MISS NOTHING",
    title: "Monitoring & Observability",
    description:
      "Prometheus, Datadog, Grafana – full-stack observability from infrastructure to user experience.",
    tools: [Prometheus, datadog, pagerduty],
    path: "/services/monitor",
  },
  {
    eyebrow: "SPIN UP ENTIRE ENVIRONMENTS IN MINUTES",
    title: "Infrastructure Management",
    description:
      "Terraform, Pulumi, AWS CloudFormation – declarative infrastructure that’s versioned, reviewed, and repeatable.",
    tools: [Terraform, pulumi, cloudFormation],
    path: "/services/provision",
  },
];

const HomeServices = () => {
  const router = useRouter();
  const [isPaused, setIsPaused] = useState(false);
  const forwardStripRef = useRef(null);
  const backwardStripRef = useRef(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const forward = forwardStripRef.current;
    const backward = backwardStripRef.current;
    if (!forward || !backward) return;

    let animationId;
    let forwardPos = forward.scrollLeft;
    let backwardPos = backward.scrollLeft;
    const speed = 0.5;

    if (backwardPos === 0) backwardPos = backward.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        forwardPos += speed;
        backwardPos -= speed;

        const forwardResetAt = forward.scrollWidth / 2;
        const backwardResetAt = backward.scrollWidth / 2;

        if (forwardPos >= forwardResetAt) forwardPos = 0;
        if (backwardPos <= 0) backwardPos = backwardResetAt;

        forward.scrollLeft = forwardPos;
        backward.scrollLeft = backwardPos;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isPaused]);

  const duplicatedTools = [...TOOL_ITEMS, ...TOOL_ITEMS];

  return (
    <section id="services" className={styles.section} ref={ref}>
      <div className={styles.inner}>
        {/* Tool icons marquee */}
        <div
          className={styles.marqueeWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`${styles.marqueeStrip} ${styles.marqueeStripForward}`}
            ref={forwardStripRef}
          >
            {duplicatedTools.map((item, i) => (
              <div key={`f-${i}`} className={styles.marqueeItem}>
                <img src={item.icon} alt={item.label} />
                <span className={styles.marqueeLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div
          className={styles.marqueeWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`${styles.marqueeStrip} ${styles.marqueeStripBackward}`}
            ref={backwardStripRef}
          >
            {duplicatedTools.map((item, i) => (
              <div key={`b-${i}`} className={styles.marqueeItem}>
                <img src={item.icon} alt={item.label} />
                <span className={styles.marqueeLabel}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          className={styles.cardGrid}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {SERVICE_CARDS.map((service, i) => (
            <motion.article
              key={service.title}
              className={`${styles.card} ${i === 0 ? styles.cardFeatured : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <button
                type="button"
                className={styles.cardArrowButton}
                onClick={() => router.push(service.path)}
                aria-label={`Go to ${service.title} services`}
              >
                ↗
              </button>
              <p className={styles.cardEyebrow}>{service.eyebrow}</p>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              {service.progress && (
                <div className={styles.cardProgressTrack}>
                  <div className={styles.cardProgressBar} />
                </div>
              )}
              {service.tools && service.tools.length > 0 && (
                <div className={styles.cardTools}>
                  {service.tools.map((icon, idx) => (
                    <span key={idx} className={styles.cardToolIcon}>
                      <img src={icon} alt="" />
                    </span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
