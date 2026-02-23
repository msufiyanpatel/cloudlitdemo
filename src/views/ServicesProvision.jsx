import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServicesTabs from "../components/ServicesTabs";
import styles from "../styles/Services.module.css";
import provStyles from "../styles/ServicesProvision.module.css";
import ansible from "../assets/ansible.png";
import chef from "../assets/chef.png";
import Terraform from "../assets/terraform.png";
import cloudFormation from "../assets/aws-cloudformation.png";

const BENEFITS_TABS = [
  {
    id: "consulting",
    label: "Consulting",
    heading: "IT Infrastructure Consulting",
    para: "To keep your current IT Infrastructure fully functional, we assess it, develop a detailed plan, and put it into action. We offer proficient L1-L3 support for your entire IT system, we are capable of successfully addressing difficulties involving both user issues and complex technical terms.",
  },
  {
    id: "management",
    label: "Management",
    heading: "IT infrastructure Management",
    para: "From the planning and design of your IT infrastructure to its administration, monitoring, troubleshooting, and evolution, we provide a broad range of IT infrastructure management services. You can put all your trust in our self-managed staff, or we can collaborate with your own IT department and other parties.",
  },
  {
    id: "cloud",
    label: "Cloud",
    heading: "Cloud Infrastructure Management",
    para: "We assist you in lowering the expenses associated with cloud migration, development, and app maintenance while ensuring optimal performance, stability, and security for your cloud infrastructure. We design, deploy, monitor, support, and optimize your cloud or hybrid IT infrastructure to ensure its high performance, availability and scalability.",
  },
  {
    id: "security",
    label: "Security",
    heading: "Cloud Infrastructure Security",
    para: "We identify and address vulnerabilities, keep an eye out for security threats to your cloud infrastructure, boost the effectiveness of your security solutions, and more.",
  },
  {
    id: "strategy",
    label: "Strategy",
    heading: "Well-Architected Frameworks",
    para: "We create reliable, scalable, high-quality IT infrastructure that follow well-architected frameworks. Each cloud provider has slightly different principles outlined, all frameworks focus on security, efficiency, reliability, cost optimization, and scalability, Cloudlit team make sure you select best strategy for your business.",
  },
];

const PROVISION_SERVICES = [
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

const WHY_CHOOSE_CARDS = [
  {
    title: "Heterogeneous IT environments",
    para: "Cloudlit's team of IT professionals has all the needed skills to handle both new and old tech stacks, architectures, and deployment approaches.",
  },
  {
    title: "Staying on top of Security",
    para: "We have extensive experience in cybersecurity. Competent architects, compliance experts, administrators, analysts, and testers cover all the duties of a security operations center (SOC).",
  },
  {
    title: "Availability & Backups",
    para: "We will ensure continuous monitoring, make architecture adjustments to prevent failures and back up your IT components to maximize availability and smooth operation in a cost-efficient manner.",
  },
  {
    title: "Optimized IT costs",
    para: "Cloudlit prioritizes keeping IT expenses at an affordable level. By optimizing resources, efficiently utilizing servers, and implementing other strategies, we can reduce your IT costs by 20-40%.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How Cloudlit's IT Infrastructure consulting services support my company?",
    a: "IT Infrastructure management is a broad collection of strategies to align different processes and streamline operations across the organization. Partnering with Cloudlit guarantees efficient management and continuous Improvement of your IT Infrastructure, paving the way for future growth by applying domain knowledge, technical expertise, and invaluable insights crucial for successful IT infrastructure management implementation.",
  },
  {
    q: "What is IT Infrastructure Management and Infrastructure Provisioning?",
    a: "Infrastructure Management refers to the hardware, software and other systems that are necessary for delivering IT services in accordance with service-level agreements (SLAs) that Includes the management of IT policies and processes, along with the equipment, data, human resources and external contacts. Infrastructure Provisioning tasks can be efficiently managed using automation, specifically with Infrastructure as Code (IaC). By storing infrastructure specifications in configuration files, developers can simply run a script to consistently provision the same environment.",
  },
  {
    q: "Why automated Infrastructure Provisioning tools are important?",
    a: "Lowers IT expenses by taking on the tasks of various separate provisioning tools. Provides a declarative framework that lets you specify the preferred state without needing to give specific commands to accomplish it. Also incorporates self-service and role-based access capabilities for security and management.",
  },
  {
    q: "What are the different strategies for efficient IT infrastructure management?",
    a: "To ensure effective management of their IT Infrastructure, organizations can utilize various strategies. These best practices for IT infrastructure help create a robust and flexible IT environment, encompassing cloud adoption, automation, virtualization, and network optimization.",
  },
];

const ServicesProvision = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("consulting");
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className={provStyles.page}>
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <ServicesTabs />
        </div>
      </section>

      {/* Section 1 - Hero */}
      <section className={provStyles.hero}>
        <h1 className={provStyles.heroHeading}>
          Scale Automation with Control and Insight
        </h1>
        <p className={provStyles.heroPara}>
          Proper infrastructure provisioning is crucial for any organization. The CloudLit team ensures that provisioning includes a defined strategy for maintenance, change control, and documentation to prevent configuration issues and outages.
        </p>
        <button className={provStyles.heroBtn} onClick={() => navigate("/contact")}>
          Get started
        </button>
      </section>

      {/* Section 2 */}
      <section className={provStyles.section}>
        <h2 className={provStyles.sectionHeading}>
          Scale automation with control and insight, foster collaboration across teams
        </h2>
        <p className={provStyles.sectionPara}>
          The proper Infrastructure provisioning is very important in any type of organization, introduction of minor inconsistencies or misconfiguration errors in IT systems can lead to configuration drift and ultimately slower systems, security and compliance exposures, and even outages. CloudLit team make sure provisioning entails developing a defined strategy for maintenance, change control, and documentation in order to stop these problems.
        </p>
      </section>

      {/* Section 3 - Benefits Tabs */}
      <section className={provStyles.benefitsSection}>
        <div className={provStyles.benefitsInner}>
          <h2 className={provStyles.benefitsHeading}>
            What are the benefits of Cloudlit's Infrastructure Services?
          </h2>
          <p className={provStyles.benefitsPara}>
            We are ready to provide our customers with any set of service components to form an ideal service scope for them.
          </p>
          <div className={provStyles.tabsRow}>
            {BENEFITS_TABS.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`${provStyles.tabBtn} ${activeTab === tab.id ? provStyles.tabBtnActive : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className={provStyles.tabContent}>
            {BENEFITS_TABS.filter((t) => t.id === activeTab).map((tab) => (
              <div key={tab.id}>
                <h3 className={provStyles.tabContentHeading}>{tab.heading}</h3>
                <p className={provStyles.tabContentPara}>{tab.para}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 - Technologies */}
      <section className={provStyles.techSection}>
        <div className={provStyles.techInner}>
          <h2 className={provStyles.techHeading}>Technologies & Tool We Work With</h2>
          <p className={provStyles.techPara}>
            Cloudlit's team professionally handles modern enterprise IT Infrastructures – massive, complex, and heterogeneous. We take care of all your IT components within a range of services from daily monitoring and management to long-term optimization and evolution.
          </p>
          <div className={provStyles.serviceCards}>
            {PROVISION_SERVICES.map((service) => (
              <article key={service.title} className={provStyles.serviceCard}>
                <div className={provStyles.serviceCardLogo}>
                  <img src={service.icon} alt={service.title} />
                </div>
                <h3 className={provStyles.serviceCardTitle}>{service.title}</h3>
                <p className={provStyles.serviceCardDesc}>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Why Choose Us */}
      <section className={provStyles.whySection}>
        <div className={provStyles.whyInner}>
          <h2 className={provStyles.whyHeading}>Why Choose Us?</h2>
          <h3 className={provStyles.whySubheading}>
            Why Cloudlit As Your Trusted Partner for IT Infrastructure Management?
          </h3>
          <div className={provStyles.whyGrid}>
            {WHY_CHOOSE_CARDS.map((card) => (
              <article key={card.title} className={provStyles.whyCard}>
                <h4 className={provStyles.whyCardTitle}>{card.title}</h4>
                <p className={provStyles.whyCardPara}>{card.para}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6 - FAQ */}
      <section className={provStyles.faqSection}>
        <div className={provStyles.faqInner}>
          <h2 className={provStyles.faqHeading}>Frequently asked Questions</h2>
          <div className={provStyles.faqList}>
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`${provStyles.faqItem} ${openFaq === i ? provStyles.faqItemOpen : ""}`}
              >
                <button
                  type="button"
                  className={provStyles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <svg
                    className={provStyles.faqChevron}
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
                  <div className={provStyles.faqAnswer}>
                    <p className={provStyles.faqAnswerPara}>
                      <span className={provStyles.faqBullet} aria-hidden>■</span>
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

export default ServicesProvision;
