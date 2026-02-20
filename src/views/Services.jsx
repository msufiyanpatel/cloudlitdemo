import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Services.module.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import awsIcon from "../assets/aws-icon.png";
import azureIcon from "../assets/Azure-Logo-PNG-Black.png";
import gcp from "../assets/google-cloud-platform.png";
import docker from "../assets/docker-logo.png";
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

gsap.registerPlugin(ScrollTrigger);

// All logos for the marquee
const allLogos = [
  { src: awsIcon, alt: "AWS" },
  { src: azureIcon, alt: "Azure" },
  { src: gcp, alt: "GCP" },
  { src: docker, alt: "Docker" },
  { src: kubernetes, alt: "Kubernetes" },
  { src: gitlab, alt: "GitLab" },
  { src: github, alt: "GitHub" },
  { src: teamcity, alt: "TeamCity" },
  { src: ansible, alt: "Ansible" },
  { src: chef, alt: "Chef" },
  { src: puppet, alt: "Puppet" },
  { src: mysql, alt: "MySQL" },
  { src: postgresql, alt: "PostgreSQL" },
  { src: oracle, alt: "Oracle" },
  { src: rabbitMQ, alt: "RabbitMQ" },
  { src: kafka, alt: "Kafka" },
  { src: reddis, alt: "Redis" },
  { src: Promethus, alt: "Prometheus" },
  { src: datadog, alt: "Datadog" },
  { src: pagerduty, alt: "PagerDuty" },
  { src: Terraform, alt: "Terraform" },
  { src: pulumi, alt: "Pulumi" },
  { src: cloudFormation, alt: "CloudFormation" },
];

// Service categories for the bento grid
const categories = [
  {
    id: "cloud",
    title: "Cloud Providers",
    subtitle: "Build on the world's leading platforms",
    desc: "Amazon AWS, Google Cloud, Microsoft Azure and any private cloud - we architect solutions across all major providers.",
    icons: [awsIcon, azureIcon, gcp],
    color: "#3A92EE",
    size: "large",
  },
  {
    id: "containers",
    title: "Containers & Orchestration",
    subtitle: "Ship anywhere, scale everywhere",
    desc: "Docker, Kubernetes, and container orchestration that makes your deployments bulletproof.",
    icons: [docker, kubernetes],
    color: "#5146CA",
    size: "medium",
  },
  {
    id: "cicd",
    title: "CI/CD Pipelines",
    subtitle: "From commit to production in minutes",
    desc: "Jenkins, GitLab, GitHub Actions, TeamCity, ArgoCD - continuous delivery that never sleeps.",
    icons: [gitlab, github, teamcity],
    color: "#6015B2",
    size: "medium",
  },
  {
    id: "config",
    title: "Configuration Management",
    subtitle: "Infrastructure as code, done right",
    desc: "Ansible, Chef, Puppet - automate everything from server provisioning to application configuration.",
    icons: [ansible, chef, puppet],
    color: "#8B5CF6",
    size: "small",
  },
  {
    id: "databases",
    title: "Databases",
    subtitle: "Data that scales with your ambition",
    desc: "MySQL, PostgreSQL, Oracle, MongoDB, Amazon Aurora - relational and NoSQL expertise for every workload.",
    icons: [mysql, postgresql, oracle],
    color: "#3A92EE",
    size: "small",
  },
  {
    id: "services",
    title: "Messaging & Caching",
    subtitle: "Real-time data, zero latency",
    desc: "RabbitMQ, Apache Kafka, Redis, ELK stack - event-driven architectures that handle millions of messages.",
    icons: [rabbitMQ, kafka, reddis],
    color: "#5146CA",
    size: "small",
  },
  {
    id: "monitoring",
    title: "Monitoring & Observability",
    subtitle: "See everything, miss nothing",
    desc: "Prometheus, Datadog, Grafana, PagerDuty - full-stack observability from infrastructure to user experience.",
    icons: [Promethus, datadog, pagerduty],
    color: "#6015B2",
    size: "medium",
  },
  {
    id: "iac",
    title: "Infrastructure Provisioning",
    subtitle: "Spin up entire environments in minutes",
    desc: "Terraform, Pulumi, AWS CloudFormation - declarative infrastructure that's versioned, reviewed, and repeatable.",
    icons: [Terraform, pulumi, cloudFormation],
    color: "#3A92EE",
    size: "medium",
  },
];

// Infinite marquee component - pure CSS animation for reliable infinite loop
const LogoMarquee = ({ direction = "left" }) => {
  // Duplicate logos 3x to ensure seamless wrap
  const logos = [...allLogos, ...allLogos, ...allLogos];
  const isReverse = direction === "right";

  return (
    <div className={styles.marqueeTrack}>
      <div
        className={`${styles.marqueeInner} ${isReverse ? styles.marqueeReverse : ""}`}
      >
        {logos.map((logo, i) => (
          <div key={`${logo.alt}-${i}`} className={styles.marqueeItem}>
            <img src={logo.src} alt={logo.alt} />
            <span>{logo.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Individual bento card
const BentoCard = ({ data, index }) => {
  const cardRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    gsap.fromTo(
      el,
      { opacity: 0, y: 60, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        delay: index * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [index]);

  const sizeClass =
    data.size === "large"
      ? styles.cardLarge
      : data.size === "medium"
      ? styles.cardMedium
      : styles.cardSmall;

  return (
    <div
      ref={cardRef}
      className={`${styles.bentoCard} ${sizeClass}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Accent glow on hover */}
      <div
        className={styles.cardGlow}
        style={{
          background: `radial-gradient(circle at 50% 0%, ${data.color}15 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
        }}
      />

      {/* Top color line */}
      <div
        className={styles.cardAccentLine}
        style={{
          background: `linear-gradient(90deg, ${data.color}, ${data.color}88)`,
          transform: hovered ? "scaleX(1)" : "scaleX(0.3)",
        }}
      />

      <div className={styles.cardInner}>
        {/* Hover arrow - inside cardInner, positioned top-right */}
        <div
          className={styles.cardArrow}
          style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translate(0,0)" : "translate(-8px, 8px)" }}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 15L15 5M15 5H8M15 5V12" stroke={data.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Category label */}
        <span
          className={styles.cardCategory}
          style={{ color: data.color }}
        >
          {data.subtitle}
        </span>

        <h3 className={styles.cardTitle}>{data.title}</h3>

        <p className={styles.cardDesc}>{data.desc}</p>

        {/* Tech icons row */}
        <div className={styles.cardIcons}>
          {data.icons.map((icon, i) => (
            <div
              key={i}
              className={styles.iconChip}
              style={{
                transitionDelay: hovered ? `${i * 0.05}s` : "0s",
                transform: hovered ? "translateY(0)" : "translateY(4px)",
                opacity: hovered ? 1 : 0.7,
              }}
            >
              <img src={icon} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const marqueeWrapRef = useRef(null);

  useEffect(() => {
    // Heading animation
    if (headingRef.current) {
      const els = headingRef.current.querySelectorAll("[data-animate]");
      gsap.fromTo(
        els,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // Marquee parallax on scroll
    if (marqueeWrapRef.current) {
      gsap.to(marqueeWrapRef.current, {
        y: -30,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeWrapRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section id="services" className={styles.servicesSection} ref={sectionRef}>
      {/* Background grid */}
      <div className={styles.bgGrid} />

      {/* ===== HEADING ===== */}
      <div className={styles.servicesInner}>
        <div className={styles.sectionHeader} ref={headingRef}>
          <span className={styles.sectionTag} data-animate>
            Our Tech Stack
          </span>
          <h2 className={styles.sectionTitle} data-animate>
            Tools and Technologies
            <br />
            <span className={styles.titleGradient}>We Use</span>
          </h2>
          <p className={styles.sectionDesc} data-animate>
            We architect solutions with an arsenal of battle-tested tools.
            From cloud infrastructure to observability - we've got you covered.
          </p>
        </div>
      </div>

      {/* ===== LOGO MARQUEE ===== */}
      <div className={styles.marqueeSection} ref={marqueeWrapRef}>
        <div className={styles.marqueeFade} />
        <LogoMarquee direction="left" />
        <LogoMarquee direction="right" />
        <div className={styles.marqueeFadeRight} />
      </div>

      {/* ===== BENTO GRID ===== */}
      <div className={styles.servicesInner}>
        <div className={styles.bentoGrid}>
          {categories.map((cat, i) => (
            <BentoCard key={cat.id} data={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
