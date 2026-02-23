import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServicesTabs from "../components/ServicesTabs";
import styles from "../styles/Services.module.css";
import cloudStyles from "../styles/ServicesCloud.module.css";
import awsIcon from "../assets/aws-icon.png";
import azureIcon from "../assets/Azure-Logo-PNG-Black.png";
import gcp from "../assets/google-cloud-platform.png";

const CLOUD_SERVICES_TABS = [
  {
    id: "consulting",
    label: "Consulting",
    heading: "Cloud Consulting",
    para: "We audit your existing IT infrastructure and business processes, analyze cloud adoption needs, and prepare a comprehensive feasibility study and business case. Our cloud architects will recommend the most suitable cloud provider and deployment options, advise on a pragmatic cloud strategy, and identify the necessary IaaS, PaaS, or SaaS services. Additionally, we develop a risk mitigation plan and a robust security strategy.",
  },
  {
    id: "migration",
    label: "Migration",
    heading: "Cloud Migration",
    para: "OpenShift provides a smooth transition to modernized applications. From analyzing your present application landscape to integrating the modern microservices and containerization architecture, our Extensive Application Modernization Service covers every step. You can count on us to minimize disruption to your business's activities while producing excellent outcomes.",
  },
  {
    id: "development",
    label: "Development",
    heading: "Cloud Development",
    para: "Our team creates, constructs, evaluates, implements, and maintains applications and data storage systems that are perfectly tailored to meet the unique strengths and limitations of the cloud. We are capable of handling back and front-end coding and designing continuous integration/deployment (CI/CD) processes. Additionally, we possess in-house specialists in compliance (HIPAA, FDA, PCI DSS).",
  },
  {
    id: "optimization",
    label: "Optimization",
    heading: "Cloud Optimization",
    para: "We examine your cloud setup and verify that the appropriate cloud services are being utilized to fulfill your requirements with daily/monthly reports. Additionally, we integrate our automation tool to cancel unnecessary cloud services, adjust the size of cloud resources and further actions.",
  },
  {
    id: "integration",
    label: "Integration",
    heading: "Cloud Integration",
    para: "We can build custom integration solutions, use cloud services for integration (like AWS EventBridge, Azure Event Grid), middleware technologies (such as Apache Kafka and RabbitMQ) or ready-made integration solutions (MuleSoft, DataGrid, etc.). Throughout the implementation phase, we prioritize minimal disruption to your daily operations via an iterative process and thorough planning of the deployment schedule.",
  },
  {
    id: "security",
    label: "Security",
    heading: "Cloud Security Consulting",
    para: "The foundation of our offerings lies in a thorough strategy for cloud security that includes evaluating risks, creating security plans, and putting them into action (Single Sign-On, Multi-Factor Authentication, encryption of data both while it's stored and moving, firewalls, Data Loss Prevention, and more). Additionally, we keep a vigilant eye on your cloud setup to identify and tackle threats as they occur.",
  },
];

const CLOUD_PROVIDERS = [
  {
    title: "Amazon Web Services",
    description: "Innovate with agility and build a secure cloud platform by exploiting the full breadth of AWS capabilities.",
    icon: awsIcon,
  },
  {
    title: "Google Cloud",
    description: "Google Cloud provides services that support organizations to go digital with computing, data and AI tools.",
    icon: gcp,
  },
  {
    title: "IBM Cloud",
    description: "IBM Cloud offers 200+ services in virtual servers, networking, storage and Watson AI capabilities.",
    icon: azureIcon,
  },
  {
    title: "Microsoft Azure",
    description: "Azure helps organizations transition to the cloud with capabilities tailored to their specific needs.",
    icon: azureIcon,
  },
];

const WHY_CHOOSE_CARDS = [
  {
    title: "Reduced migration cost",
    para: "To minimize additional redevelopment work and migration expenses, we create customized, practical migration plans for every infrastructure component (applications, databases, data warehouses, desktops, etc.).",
  },
  {
    title: "Reliability",
    para: "To guarantee apps stability and quick recovery, we build fault-tolerant architectures for your cloud apps and set best practices for cloud performance management.",
  },
  {
    title: "Guaranteed quality",
    para: "By entrusting your cloud infrastructure to Cloudlit, you can be assured of the highest quality services. Our mature quality management system is built on value-driven collaboration, transparent processes, and a team of skilled, quality-oriented professionals.",
  },
  {
    title: "Optimized monthly cloud costs",
    para: "We design optimal resource orchestration patterns (including auto-scaling in peak times) and select particular cloud services best suited for your specific case.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What are Cloud services?",
    a: "Cloud services are platforms, software, or infrastructure that are hosted online by third-party providers made accessible to customers. Cloud services depend on hardware and software much like any other IT solution. To use cloud services, customers only need a computer, an operating system, and a network connection in contrast to traditional hardware.",
  },
  {
    q: "What are the main responsibilities of Cloudlit Cloud Engineer/Migration SME?",
    a: "Provides assessment of existing solutions and infrastructure to migrate to the cloud. Plan, deliver, and implement application and data migration with scalable, high-performance solutions using private, hybrid and public cloud technologies driving next-generation business outcomes.",
  },
  {
    q: "Who are the top Cloud service providers?",
    a: "There are many options available for companies searching for a cloud service provider, few of the top service options to consider are Amazon Web Services (AWS), Google Cloud Platform (GCP), Microsoft Azure, IBM Cloud and Oracle Cloud. All organization has their own uses cases with different requirements, Cloudlit team can support them to identify the best cloud service platform.",
  },
  {
    q: "How can Enterprises overcome challenges with Cloud transformation?",
    a: "There are many benefits enterprises can experience when moving to cloud technology. This shift can not only help trim budgets but also positively enhance the way your workforce communicates. For more details read cloudlit's article from Here.",
  },
  {
    q: "How much does it cost to Migrate to Cloud?",
    a: "A cloud migration cost may fluctuate based on the project's complexity and scale. Consideration for both one-time migration costs and ongoing cloud infrastructure charges is advised for businesses.",
  },
];

const ServicesCloud = () => {
  const navigate = useNavigate();
  const [activeServiceTab, setActiveServiceTab] = useState("consulting");
  const [openFaq, setOpenFaq] = useState(null);

  const handleGetStarted = () => {
    navigate("/contact");
  };

  return (
    <div className={cloudStyles.page}>
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <ServicesTabs />
        </div>
      </section>

      {/* Section 1 - Hero */}
      <section className={cloudStyles.hero}>
        <h1 className={cloudStyles.heroHeading}>
          Take the next step on your Cloud adoption journey
        </h1>
        <p className={cloudStyles.heroPara}>
          Cloudlit handles everything around the cloud: From designing comprehensive cloud adoption strategies and defining cost optimization tactics to developing efficient cloud-native applications, cloud data warehouses, and migrating legacy infrastructures to the cloud.
        </p>
        <button className={cloudStyles.heroBtn} onClick={handleGetStarted}>
          Get started
        </button>
      </section>

      {/* Section 2 - Migration intro */}
      <section className={cloudStyles.section}>
        <h2 className={cloudStyles.sectionHeading}>
          Take the next step towards cloud migration
        </h2>
        <p className={cloudStyles.sectionPara}>
          There are numerous options available to you when beginning your cloud adoption journey. However, before you begin, you should assess each workload separately and choose the migration path that would work best for your company. At Cloudlit, we can assist you in developing an engaging migration strategy that expedites the return on your cloud investment. We have identified the best migration plans for every workload.
        </p>
      </section>

      {/* Section 3 - Cloud Services Tabs */}
      <section className={cloudStyles.servicesSection}>
        <div className={cloudStyles.servicesInner}>
          <h2 className={cloudStyles.servicesHeading}>
            What are Cloudlit's Cloud Services?
          </h2>
          <p className={cloudStyles.servicesPara}>
            To meet the demands of businesses of various sizes, we provide a range of cloud-based solutions. We offer a solution that will work for you, whether you need basic file storage or a comprehensive, enterprise-level solution.
          </p>
          <div className={cloudStyles.tabsRow}>
            {CLOUD_SERVICES_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${cloudStyles.tabBtn} ${activeServiceTab === tab.id ? cloudStyles.tabBtnActive : ""}`}
                onClick={() => setActiveServiceTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className={cloudStyles.tabContent}>
            {CLOUD_SERVICES_TABS.filter((t) => t.id === activeServiceTab).map((tab) => (
              <div key={tab.id}>
                <h3 className={cloudStyles.tabContentHeading}>{tab.heading}</h3>
                <p className={cloudStyles.tabContentPara}>{tab.para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Clouds We Work With */}
      <section className={cloudStyles.cloudsSection}>
        <div className={cloudStyles.cloudsInner}>
          <h2 className={cloudStyles.cloudsHeading}>Clouds We Work With</h2>
          <p className={cloudStyles.cloudsPara}>
            With the expanding array of offerings from various cloud providers, selecting the optimal cloud solution can be a complex and time-consuming process for organizations. Cloudlit, with its vendor-neutral stance, provides comprehensive and unbiased evaluations of all major cloud platforms. This approach ensures that you receive the best solution that aligns with your unique requirements.
          </p>
          <div className={cloudStyles.cloudCards}>
            {CLOUD_PROVIDERS.map((provider) => (
              <article key={provider.title} className={cloudStyles.cloudCard}>
                <div className={cloudStyles.cloudCardLogo}>
                  <img src={provider.icon} alt={provider.title} />
                </div>
                <h3 className={cloudStyles.cloudCardTitle}>{provider.title}</h3>
                <p className={cloudStyles.cloudCardDesc}>{provider.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Why Choose Cloudlit */}
      <section className={cloudStyles.whySection}>
        <div className={cloudStyles.whyInner}>
          <h2 className={cloudStyles.whyHeading}>
            Why choose Cloudlit as Your Trusted Partner for Cloud Migration?
          </h2>
          <div className={cloudStyles.whyGrid}>
            {WHY_CHOOSE_CARDS.map((card) => (
              <article key={card.title} className={cloudStyles.whyCard}>
                <h3 className={cloudStyles.whyCardTitle}>{card.title}</h3>
                <p className={cloudStyles.whyCardPara}>{card.para}</p>
                <a
                href="/contact"
                className={cloudStyles.learnMore}
                onClick={(e) => {
                  e.preventDefault();
                  handleGetStarted();
                }}
              >
                Learn More →
              </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - FAQ */}
      <section className={cloudStyles.faqSection}>
        <div className={cloudStyles.faqInner}>
          <h2 className={cloudStyles.faqHeading}>Frequently asked questions</h2>
          <div className={cloudStyles.faqList}>
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`${cloudStyles.faqItem} ${openFaq === i ? cloudStyles.faqItemOpen : ""}`}
              >
                <button
                  type="button"
                  className={cloudStyles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <svg
                    className={cloudStyles.faqChevron}
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
                {openFaq === i && (
                  <div className={cloudStyles.faqAnswer}>
                    <p className={cloudStyles.faqAnswerPara}>
                      <span className={cloudStyles.faqBullet} aria-hidden>■</span>
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesCloud;
