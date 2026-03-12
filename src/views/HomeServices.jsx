import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/HomeServices.module.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
const TOOL_ITEMS = [
  { icon: "/assets/aws-icon.webp", label: "AWS" },
  { icon: "/assets/google-cloud-platform.webp", label: "GCP" },
  { icon: "/assets/Azure-Logo-PNG-Black.webp", label: "Azure" },
  { icon: "/assets/docker-logo.webp", label: "Docker" },
  { icon: "/assets/kubernetes.webp", label: "Kubernetes" },
  { icon: "/assets/Gitlab.webp", label: "GitLab" },
  { icon: "/assets/ansible.webp", label: "Ansible" },
  { icon: "/assets/chef.webp", label: "Chef" },
  { icon: "/assets/terraform.webp", label: "Terraform" },
  { icon: "/assets/aws-cloudformation.webp", label: "CloudFormation" },
  { icon: "/assets/promoetheus.webp", label: "Prometheus" },
  { icon: "/assets/datadog.webp", label: "Datadog" },
  { icon: "/assets/pagerduty.webp", label: "PagerDuty" },
];

const SERVICE_CARDS = [
  {
    eyebrow: "BUILD ON THE WORLD’S LEADING PLATFORMS",
    title: "Cloud Providers",
    description:
      "Amazon AWS, Google Cloud, Microsoft Azure and any private cloud – we architect solutions across all major providers.",
    tools: ["/assets/aws-icon.webp", "/assets/google-cloud-platform.webp", "/assets/Azure-Logo-PNG-Black.webp"],
    path: "/services/cloud",
  },
  {
    eyebrow: "SHIP ANYWHERE, SCALE EVERYWHERE",
    title: "Containers & Orchestration",
    description:
      "Docker, Kubernetes, and container orchestration that makes your deployments bulletproof.",
    tools: ["/assets/docker-logo.webp", "/assets/kubernetes.webp"],
    path: "/services/devops",
  },
  {
    eyebrow: "FROM COMMIT TO PRODUCTION IN MINUTES",
    title: "CI/CD Pipelines",
    description:
      "Jenkins, GitLab, GitHub Actions, ArgoCD – continuous delivery that never sleeps.",
    tools: ["/assets/Gitlab.webp", "/assets/GitHub.webp", "/assets/TeamCity.webp"],
    path: "/services/devops",
  },
  {
    eyebrow: "INFRASTRUCTURE AS CODE, DONE RIGHT",
    title: "Configuration Management",
    description:
      "Ansible, Chef, Puppet – automate everything from server provisioning to application configuration.",
    tools: ["/assets/ansible.webp", "/assets/chef.webp", "/assets/puppet.webp"],
    path: "/services/provision",
  },
  {
    eyebrow: "DATA THAT SCALES WITH YOUR AMBITION",
    title: "Databases",
    description:
      "MySQL, PostgreSQL, Oracle, MongoDB, Amazon Aurora – relational and NoSQL expertise for every workload.",
    tools: ["/assets/mysql.webp", "/assets/Postgresql.webp", "/assets/oracle.webp"],
    path: "/services/cloud",
  },
  {
    eyebrow: "REAL-TIME DATA, ZERO LATENCY",
    title: "Messaging & Caching",
    description:
      "RabbitMQ, Kafka, Redis, ELK stack – event-driven architectures that handle millions of messages.",
    tools: ["/assets/kafka.webp", "/assets/rabbitmq.webp"],
    path: "/services/monitor",
  },
  {
    eyebrow: "SEE EVERYTHING, MISS NOTHING",
    title: "Monitoring & Observability",
    description:
      "Prometheus, Datadog, Grafana – full-stack observability from infrastructure to user experience.",
    tools: ["/assets/promoetheus.webp", "/assets/datadog.webp", "/assets/pagerduty.webp"],
    path: "/services/monitor",
  },
  {
    eyebrow: "SPIN UP ENTIRE ENVIRONMENTS IN MINUTES",
    title: "Infrastructure Management",
    description:
      "Terraform, Pulumi, AWS CloudFormation – declarative infrastructure that’s versioned, reviewed, and repeatable.",
    tools: ["/assets/terraform.webp", "/assets/pulumi.svg", "/assets/aws-cloudformation.webp"],
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
