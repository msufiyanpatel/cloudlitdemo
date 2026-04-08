import React, { useState, Suspense } from "react";
import SEO from "../components/SEO";
import Link from "next/link";
import styles from "../styles/CaseStudyFlightAlert.module.css";
import formStyles from "../styles/ChatForm.module.css";
import CanvasErrorBoundary from "../components/CanvasErrorBoundary";

const ResultsParticles = React.lazy(() => import("../components/ResultsParticles"));

const CaseStudyUtilityAzure = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", workEmail: "", projectDetails: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);
    fetch(`/api/casestudy`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.workEmail,
        message: formData.projectDetails,
        source: "Case Study: Utility Azure Modernization",
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", workEmail: "", projectDetails: "" });
      })
      .catch(() => setSubmitStatus("error"))
      .finally(() => { setSubmitting(false); setTimeout(() => setSubmitStatus(null), 5000); });
  };

  return (
    <div className={styles.page}>
      <SEO
        title="Enterprise Application Modernization for a Leading Utility Company — Case Study"
        description="Cloudlit designed a secure, scalable Azure cloud architecture for a leading utility company with hybrid connectivity, private data services, and microservices on Azure Container Apps."
        canonical="/casestudies/utility-azure-modernization"
      />

      {/* HERO */}
      <section className={styles.hero}>
        <Link href="/casestudies" className={styles.heroBack}>← Back to Portfolio</Link>
        <div className={styles.heroInner}>
          <div className={styles.meta}>Industry · Energy & Utilities</div>
          <h1 className={styles.title}>
            Enterprise Application Modernization for a Leading Utility Company on Azure Cloud
          </h1>
          <p className={styles.subtitle}>
            Cloudlit designed and implemented a secure, scalable Azure cloud architecture with hybrid
            VPN connectivity, containerised microservices, and fully private data services — enabling
            seamless integration between on-premises ERP systems and Azure with zero public exposure
            of backend services.
          </p>
        </div>
      </section>

      {/* HIGHLIGHT STRIP */}
      <div className={styles.highlightGrid}>
        {[
          { icon: "🔒", title: "Zero public exposure", text: "All backend and data services fully private via Private Endpoints." },
          { icon: "🌐", title: "Secure hybrid VPN", text: "Encrypted IPsec/IKEv2 tunnels between on-premises ERP and Azure." },
          { icon: "⚡", title: "Microservices on ACA", text: "Azure Container Apps handling order processing and integration logic." },
        ].map((h) => (
          <div key={h.title} className={styles.highlightCard}>
            <div className={styles.highlightIcon}>{h.icon}</div>
            <div>
              <p className={styles.highlightTitle}>{h.title}</p>
              <p className={styles.highlightText}>{h.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CONTENT */}
      <div className={styles.content}>

        {/* LEFT: Article */}
        <div className={styles.article}>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Customer</p>
            <p className={styles.paragraph}>
              Our customer is a leading utility organisation responsible for delivering critical services
              to millions of consumers. They operate a mix of legacy systems, on-premises infrastructure,
              and enterprise applications — including ERP systems — that support core business operations
              such as order management, customer services, and operational workflows.
            </p>
            <p className={styles.paragraph}>
              Their goal was to modernise their platform to achieve higher scalability, security, and
              seamless integration between on-premises and cloud environments.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Challenge</p>
            <ul className={styles.list}>
              <li><strong>Secure Hybrid Connectivity:</strong> The customer required a secure and reliable communication channel between their on-premises data centre (including ERP systems) and Azure cloud — encrypted, without exposing internal services to the public internet.</li>
              <li><strong>Scalable Application Architecture:</strong> The existing system lacked the ability to efficiently handle fluctuating workloads. During peak demand, performance degradation and latency issues impacted user experience. A scalable microservices-based architecture was needed.</li>
              <li><strong>Data Security and Isolation:</strong> Sensitive operational and transactional data required strict access controls, with databases and storage not exposed publicly while remaining accessible to application services.</li>
              <li><strong>Complex Service Integration:</strong> The platform required seamless integration between frontend applications, backend microservices, ERP systems, and multiple data sources across environments.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Solution</p>
            <p className={styles.paragraph}>
              Cloudlit designed and implemented a secure, scalable Azure cloud architecture using a
              multi-tier approach with strict network isolation and private communication flows.
            </p>
            <ol className={styles.featuresList}>
              <li><strong>Secure Hybrid Network Architecture:</strong> Implemented Azure Virtual Network (VNET) with segmented subnets (Gateway, Application, Data tiers). Established a site-to-site VPN using Azure VPN Gateway and on-premises customer gateway with all communication flowing through encrypted IPsec tunnels.</li>
              <li><strong>Microservices-Based Application Layer:</strong> Deployed containerised applications using Azure Container Apps (ACA) — a public-facing frontend and backend microservices handling order processing and integration logic, communicating internally over private networking.</li>
              <li><strong>Private Data Layer with Zero Public Exposure:</strong> Implemented Azure Cosmos DB for transactional data, Azure Blob Storage for unstructured data, and Azure Cache for Redis for performance optimisation. All secured using Private Endpoints with no public IP exposure and traffic remaining within the Azure backbone.</li>
              <li><strong>Identity and Access Management:</strong> Integrated Azure Active Directory (AAD) for authentication, authorisation, and Role-Based Access Control (RBAC). Implemented Managed Identities for secure service-to-service access without credentials.</li>
              <li><strong>Optimised Communication Flows:</strong> Designed four secure patterns — External (public users access frontend only), VPN (encrypted on-prem to cloud), Logical (internal microservice communication), and Database (private access to data services).</li>
              <li><strong>Security and Compliance Enhancements:</strong> Enforced network isolation across tiers, enabled encryption in transit and at rest, applied NSG rules with least-privilege access, and recommended Customer Managed Keys (CMK) for sensitive workloads.</li>
            </ol>
          </div>

        </div>

        {/* RIGHT: Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sideCtaCard}>
            <p className={styles.sideCtaTitle}>Modernise your infrastructure</p>
            <p className={styles.sideCtaDesc}>Tell us about your cloud migration and integration goals.</p>
            <a href="#contact-form" className={styles.sideCtaBtn}>Get in Touch →</a>
          </div>

          <div className={styles.sideCard}>
            <p className={styles.sideCardTitle}>Project Details</p>
            {[
              { icon: "⚡", label: "Industry", value: "Energy & Utilities" },
              { icon: "☁", label: "Platform", value: "Microsoft Azure" },
              { icon: "📦", label: "Compute", value: "Azure Container Apps" },
              { icon: "🔐", label: "Security", value: "AAD, RBAC, Private Endpoints" },
            ].map((item) => (
              <div key={item.label} className={styles.sideItem}>
                <div className={styles.sideItemIcon}>{item.icon}</div>
                <div>
                  <p className={styles.sideItemLabel}>{item.label}</p>
                  <p className={styles.sideItemValue}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sideCard}>
            <p className={styles.sideCardTitle}>Key Technologies</p>
            <div className={styles.techChips}>
              {["Azure","Container Apps","VNET","VPN Gateway","Cosmos DB","Redis","AAD","RBAC"].map((t) => (
                <span key={t} className={styles.techChip}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className={styles.resultsCard}>
          <CanvasErrorBoundary>
            <Suspense fallback={null}>
              <div className={styles.resultsCanvasWrap}>
                <ResultsParticles />
              </div>
            </Suspense>
          </CanvasErrorBoundary>
          <p className={styles.sectionTitle}>Results / Success</p>
          <p className={styles.resultsHeading}>Outcomes that moved the needle</p>
          <div className={styles.resultsGrid}>
            {[
              { icon: "🔒", label: "Enhanced Security Posture", text: "All backend and data services fully private with no public internet exposure, significantly reducing attack surface." },
              { icon: "🌐", label: "Seamless Hybrid Integration", text: "Reliable encrypted connectivity between on-premises systems and Azure enabled smooth data exchange with ERP systems." },
              { icon: "⚡", label: "Improved Performance & Scalability", text: "Microservices architecture with caching significantly reduced latency and improved responsiveness during peak loads." },
              { icon: "💰", label: "Cost Optimisation", text: "Pay-as-you-go cloud model allowed efficient scaling of resources based on demand, reducing unnecessary infrastructure costs." },
              { icon: "🚀", label: "Future-Ready Architecture", text: "The platform is now ready to scale, integrate new services, and support additional workloads without major redesign." },
            ].map((r) => (
              <div key={r.label} className={styles.resultItem}>
                <div className={styles.resultBullet}>{r.icon}</div>
                <p className={styles.resultLabel}>{r.label}</p>
                <p className={styles.resultText}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className={styles.sectionFullWidth}>
          <p className={styles.sectionTitle}>Technologies &amp; Tools</p>
          <div className={styles.techChips}>
            {["Microsoft Azure","Azure Container Apps","Azure VNET","VPN Gateway","Private Endpoints","Cosmos DB","Blob Storage","Azure Cache for Redis","Azure Active Directory","RBAC","Managed Identities","HTTPS","IPsec/IKEv2"].map((t) => (
              <span key={t} className={styles.techChip}>{t}</span>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className={styles.formSection} id="contact-form">
          <div className={styles.formSectionLeft}>
            <h2 className={styles.formSectionTitle}>Interested in Azure cloud modernisation?</h2>
            <p className={styles.formSectionDesc}>Tell us about your infrastructure and integration goals — we'll get back to you fast.</p>
            <div className={styles.formSectionPerks}>
              {["Free initial consultation","No commitment required","Response within 24 hours","Azure certified expertise"].map((p) => (
                <div key={p} className={styles.formPerk}>
                  <div className={styles.formPerkDot} />
                  {p}
                </div>
              ))}
            </div>
          </div>
          <div className={styles.formPanelWrap}>
            <div className={formStyles.formPanel}>
              <form onSubmit={handleSubmit} className={formStyles.form}>
                <div className={formStyles.formRow}>
                  <div className={formStyles.formGroup}>
                    <label htmlFor="utility-firstName">FIRST NAME</label>
                    <input type="text" id="utility-firstName" name="firstName" placeholder="James" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label htmlFor="utility-lastName">LAST NAME</label>
                    <input type="text" id="utility-lastName" name="lastName" placeholder="Carter" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="utility-workEmail">WORK EMAIL</label>
                  <input type="email" id="utility-workEmail" name="workEmail" placeholder="james@company.com" value={formData.workEmail} onChange={handleChange} required />
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="utility-projectDetails">PROJECT DETAILS</label>
                  <textarea id="utility-projectDetails" name="projectDetails" placeholder="Tell us about your infrastructure, integration goals, and timelines..." value={formData.projectDetails} onChange={handleChange} rows={5} />
                </div>
                <button type="submit" className={formStyles.submitBtn} disabled={submitting}>
                  {submitting ? "Sending…" : "Send Message"}
                  {!submitting && <span className={formStyles.sendIcon}>✈</span>}
                </button>
                {submitStatus === "success" && <p className={formStyles.successMsg}>Message sent! We'll be in touch shortly.</p>}
                {submitStatus === "error" && <p className={formStyles.errorMsg}>Something went wrong. Please try again.</p>}
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyUtilityAzure;
