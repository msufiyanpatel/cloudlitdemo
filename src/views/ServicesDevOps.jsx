import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServicesTabs from "../components/ServicesTabs";
import styles from "../styles/Services.module.css";
import devOpsStyles from "../styles/ServicesDevOps.module.css";
import kubernetes from "../assets/kubernetes.png";
import docker from "../assets/docker-logo.png";
import gitlab from "../assets/Gitlab.png";

const USE_CASES = [
  {
    title: "Full Stack monitoring integration",
    bullets: [
      "Monitor hosts, containers, and serverless functions at scale and across different environments. Determine application performance using distributed tracing and application analytics for frameworks such as Java, Python and Go.",
      "Efficiently gather, analyze, and store logs using Logging without Limits while identifying potential security risks through Security Monitoring.",
    ],
  },
  {
    title: "Visualize full stack performance",
    bullets: [
      "Generate detailed full stack monitoring metrics and traces by correlating and alerting on traditionally isolated data points through the ingestion of logs.",
      "Create comprehensive monitoring dashboards to easily access, distribute, and collaborate on consolidated perspectives, thereby enhancing efficiency in resolving issues across multiple teams.",
    ],
  },
];

const DEVOPS_SERVICES = [
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

const ServicesDevOps = () => {
  const navigate = useNavigate();
  const [openUseCase, setOpenUseCase] = useState(0);

  return (
    <div className={devOpsStyles.page}>
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <ServicesTabs />
        </div>
      </section>

      {/* Section 1 - Hero */}
      <section className={devOpsStyles.hero}>
        <h1 className={devOpsStyles.heroHeading}>
          Unify your data in a centralized full stack monitoring platform with Cloudlit.
        </h1>
        <p className={devOpsStyles.heroPara}>
          You must be able to quickly and completely examine the state of each environment layer's health as your tech stack expands.
        </p>
        <button className={devOpsStyles.heroBtn} onClick={() => navigate("/contact")}>
          Get started
        </button>
      </section>

      {/* Section 2 */}
      <section className={devOpsStyles.section}>
        <h2 className={devOpsStyles.sectionHeading}>
          Evaluate your infrastructure from a bird's-eye view
        </h2>
        <p className={devOpsStyles.sectionPara}>
          Using different opensource monitoring tools tags and drill down into individual hosts or containers. With the help of graphs, you can analyze each application trace and automatically discover and group service dependencies. Automatically detect and prioritize cloud vulnerabilities based on potential business impact and deep observability context.
        </p>
      </section>

      {/* Section 3 - Use Cases */}
      <section className={devOpsStyles.useCasesSection}>
        <div className={devOpsStyles.useCasesInner}>
          <h2 className={devOpsStyles.useCasesHeading} style={{ margin: 0, padding: 0 }}>
            Use Cases
          </h2>
          <div className={devOpsStyles.useCasesAccordion}>
            {USE_CASES.map((item, i) => (
              <div
                key={i}
                className={`${devOpsStyles.useCaseItem} ${openUseCase === i ? devOpsStyles.useCaseItemOpen : ""}`}
              >
                <button
                  type="button"
                  className={devOpsStyles.useCaseQuestion}
                  onClick={() => setOpenUseCase(openUseCase === i ? -1 : i)}
                  aria-expanded={openUseCase === i}
                >
                  {item.title}
                  <svg
                    className={devOpsStyles.useCaseChevron}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </button>
                {openUseCase === i && (
                  <div className={devOpsStyles.useCaseAnswer}>
                    <ul className={devOpsStyles.useCaseList}>
                      {item.bullets.map((bullet, j) => (
                        <li key={j}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Power your Advantage */}
      <section className={devOpsStyles.powerSection}>
        <div className={devOpsStyles.powerInner}>
          <h2 className={devOpsStyles.powerHeading}>Power your Advantage</h2>
          <p className={devOpsStyles.powerPara}>
            With the expanding array of offerings from various cloud providers, selecting the optimal cloud solution can be a complex and time-consuming process for organizations. Cloudlit, with its vendor-neutral stance, provides comprehensive and unbiased evaluations of all major cloud platforms. This approach ensures that you receive the best solution that aligns with your unique requirements.
          </p>
          <div className={devOpsStyles.serviceCards}>
            {DEVOPS_SERVICES.map((service) => (
              <article key={service.title} className={devOpsStyles.serviceCard}>
                <div className={devOpsStyles.serviceCardLogo}>
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className={devOpsStyles.serviceCardTitle}>{service.title}</h3>
                <p className={devOpsStyles.serviceCardDesc}>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesDevOps;
