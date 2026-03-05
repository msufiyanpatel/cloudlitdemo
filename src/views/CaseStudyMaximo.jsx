import React, { useState, Suspense } from "react";
import SEO from "../components/SEO";
import { Link } from "react-router-dom";
import styles from "../styles/CaseStudyFlightAlert.module.css";
import formStyles from "../styles/ChatForm.module.css";
import CanvasErrorBoundary from "../components/CanvasErrorBoundary";

const ResultsParticles = React.lazy(() => import("../components/ResultsParticles"));

const API_BASE = process.env.NODE_ENV === "production" ? "" : "http://localhost:5001";

const CaseStudyMaximo = () => {
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
    fetch(`${API_BASE}/api/casestudy`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.workEmail,
        message: formData.projectDetails,
        source: "Case Study: Maximo Azure OpenShift",
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
        title="IBM Maximo on Azure OpenShift — Case Study"
        description="CloudLit automated IBM Maximo Application Suite on Azure Red Hat OpenShift for a Netherlands-based firm, delivering secure, scalable asset management infrastructure."
        canonical="/casestudies/maximo-azure-openshift"
      />
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Link to="/casestudies" className={styles.heroBack}>← Back to Portfolio</Link>
        <div className={styles.heroInner}>
          <div className={styles.meta}>Industry · All Industries</div>
          <h1 className={styles.title}>
            Automation of IBM Maximo Application Suite on Azure using Red Hat OpenShift
          </h1>
          <p className={styles.subtitle}>
            Cloudlit automated IBM Maximo Application Suite on Azure Red Hat OpenShift for a
            Netherlands-based consulting firm, delivering standardized, secure, and scalable
            infrastructure for asset management workloads.
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHT STRIP ── */}
      <div className={styles.highlightGrid}>
        {[
          { icon: "☁", title: "Azure OpenShift", text: "Enterprise-grade Maximo running on Azure Red Hat OpenShift." },
          { icon: "⚙", title: "Ansible automation", text: "Cluster and Maximo deployment fully automated with Ansible." },
          { icon: "🔒", title: "Hardened security", text: "Firewalls, VPN, SSL, and role-based access built in." },
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

      {/* ── CONTENT ── */}
      <div className={styles.content}>

        {/* LEFT: Article */}
        <div className={styles.article}>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Customer</p>
            <p className={styles.paragraph}>
              Cloudlit partnered with a leading Netherlands-based IT consulting firm specializing in
              comprehensive data management and automation solutions across Europe. The firm serves
              enterprise clients who rely on IBM Maximo Application Suite for asset lifecycle management,
              maintenance planning, and operational compliance.
            </p>
            <p className={styles.paragraph}>
              Their mandate was to deliver a repeatable, automated deployment framework so new client
              environments could be provisioned rapidly, consistently, and securely — without months
              of manual infrastructure setup for each engagement.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Challenge</p>
            <ul className={styles.list}>
              <li><strong>Infrastructure scalability and cost management:</strong> Provisioning control and worker nodes with the exact CPU, RAM, and storage Maximo demands on Azure — while keeping costs predictable and elastic.</li>
              <li><strong>Red Hat OpenShift cluster provisioning:</strong> Configuring pull secrets, resource quotas, operator subscriptions, and cluster-wide settings to precisely meet IBM Maximo's deployment requirements.</li>
              <li><strong>Persistent storage and data integrity:</strong> Correct storage class selection and PVC sizing were critical to avoid data loss, I/O bottlenecks, or misalignment with MAS 9.0 prerequisites.</li>
              <li><strong>IBM licensing and registry access:</strong> Automating the retrieval and application of IBM entitlement keys and Container Registry credentials without exposing secrets in plaintext.</li>
              <li><strong>Security for sensitive operational data:</strong> Hardened access controls, encrypted traffic, VPN tunnels, and network segmentation required across both the OpenShift cluster and Maximo application tiers.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Solution</p>
            <p className={styles.paragraph}>
              The Cloudlit team built a fully automated, Ansible-driven deployment pipeline that provisions
              the complete Azure Red Hat OpenShift cluster and installs IBM Maximo Application Suite from
              scratch — repeatable in hours, not weeks.
            </p>
            <ol className={styles.featuresList}>
              <li><strong>Infrastructure automation with Ansible:</strong> End-to-end Ansible playbooks provision the ARO cluster on Azure, configure networking, apply security policies, and deploy MAS — all idempotently.</li>
              <li><strong>Right-sized cluster provisioning:</strong> 3 control nodes (12 vCPUs, 48 GB RAM, 360 GB storage each) and 3 worker nodes (228 vCPUs and 1,298 GB RAM total) sized precisely to MAS 9.0 requirements.</li>
              <li><strong>IBM licensing integration:</strong> Automated workflows retrieve and inject the IBM entitlement license file and IBM Container Registry pull secret as Kubernetes secrets — never in plaintext.</li>
              <li><strong>Persistent storage configuration:</strong> Storage classes, persistent volume claims, and reclaim policies aligned with MAS 9.0 data integrity and performance specifications.</li>
              <li><strong>Security hardening:</strong> Internal load balancers, Azure Firewall rules, site-to-site VPN, SSL/TLS certificates, pod-level RBAC, and cluster network policies form a layered defence posture.</li>
            </ol>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Architecture Overview</p>
            <ol className={styles.featuresList}>
              <li><strong>Azure Red Hat OpenShift (ARO):</strong> Managed OpenShift on Azure provides the container orchestration layer with built-in SLA, automated patching, and Azure AD integration for identity.</li>
              <li><strong>Ansible control plane:</strong> A dedicated Ansible controller node runs all provisioning playbooks, with vault-encrypted secrets and role-based task separation for auditability.</li>
              <li><strong>IBM Maximo Application Suite operators:</strong> MAS and its dependencies (MongoDB, Db2, Kafka, AppConnect) are deployed as OpenShift Operators managed through the Operator Lifecycle Manager.</li>
              <li><strong>Network topology:</strong> All cluster traffic is routed through an internal load balancer; external access is restricted to VPN-authenticated clients only, with no public API endpoints exposed.</li>
              <li><strong>Monitoring and observability:</strong> Azure Monitor, OpenShift built-in Prometheus/Grafana stack, and custom dashboards provide real-time visibility into cluster health, MAS performance, and capacity.</li>
            </ol>
          </div>

        </div>

        {/* RIGHT: Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sideCtaCard}>
            <p className={styles.sideCtaTitle}>Automate your Maximo</p>
            <p className={styles.sideCtaDesc}>Tell us about your IBM environment and automation goals.</p>
            <a href="#contact-form" className={styles.sideCtaBtn}>Get in Touch →</a>
          </div>

          <div className={styles.sideCard}>
            <p className={styles.sideCardTitle}>Project Details</p>
            {[
              { icon: "🌍", label: "Client Location", value: "Netherlands" },
              { icon: "☁", label: "Platform", value: "Azure + OpenShift" },
              { icon: "🤖", label: "Automation", value: "Ansible" },
              { icon: "🏭", label: "Application", value: "IBM Maximo 9.0" },
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
              {["Ansible","OpenShift","Azure","IBM Maximo","Terraform"].map((t) => (
                <span key={t} className={styles.techChip}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Results — full width */}
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
              { icon: "⚡", label: "Resource Utilization", text: "Automated provisioning and standardized configuration ensured compute and storage were efficiently used." },
              { icon: "🚀", label: "Time-to-Market", text: "Automated setup reduced deployment time significantly, enabling faster onboarding of new environments." },
              { icon: "💰", label: "Cost Optimization", text: "Precise sizing and Azure elastic scaling minimized waste while meeting all performance requirements." },
              { icon: "🔒", label: "Security Assurance", text: "Load balancers, firewalls, and SSL certificates protected the cluster and Maximo suite against threats." },
              { icon: "📈", label: "Future Scalability", text: "Automated, standards-based foundation enables scaling IBM Maximo with additional nodes, IoT, and analytics." },
            ].map((r) => (
              <div key={r.label} className={styles.resultItem}>
                <div className={styles.resultBullet}>{r.icon}</div>
                <p className={styles.resultLabel}>{r.label}</p>
                <p className={styles.resultText}>{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies — full width */}
        <div className={styles.sectionFullWidth}>
          <p className={styles.sectionTitle}>Technologies &amp; Tools</p>
          <div className={styles.techChips}>
            {["Azure Cloud","Ansible","Red Hat","OpenShift","IBM Maximo Suite","Cloud Storage","SQL","Container Registry"].map((t) => (
              <span key={t} className={styles.techChip}>{t}</span>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className={styles.formSection} id="contact-form">
          <div className={styles.formSectionLeft}>
            <h2 className={styles.formSectionTitle}>Interested in Maximo automation?</h2>
            <p className={styles.formSectionDesc}>Tell us about your environment and timelines — we'll get back to you fast.</p>
            <div className={styles.formSectionPerks}>
              {["Free initial consultation","No commitment required","Response within 24 hours","IBM & Azure expertise"].map((p) => (
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
                    <label htmlFor="maximo-firstName">FIRST NAME</label>
                    <input type="text" id="maximo-firstName" name="firstName" placeholder="Abdullah" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label htmlFor="maximo-lastName">LAST NAME</label>
                    <input type="text" id="maximo-lastName" name="lastName" placeholder="Ahmad" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="maximo-workEmail">WORK EMAIL</label>
                  <input type="email" id="maximo-workEmail" name="workEmail" placeholder="abdullah@company.com" value={formData.workEmail} onChange={handleChange} required />
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="maximo-projectDetails">PROJECT DETAILS</label>
                  <textarea id="maximo-projectDetails" name="projectDetails" placeholder="Tell us about your Maximo environment, automation goals, and timelines..." value={formData.projectDetails} onChange={handleChange} rows={5} />
                </div>
                <button type="submit" className={formStyles.submitBtn} disabled={submitting}>
                  {submitting ? "Sending…" : "Send Message"}
                  {!submitting && <span className={formStyles.sendIcon}>✈</span>}
                </button>
                {submitStatus === "success" && <p className={formStyles.successMsg}>✓ Message sent! We'll be in touch soon.</p>}
                {submitStatus === "error" && <p className={formStyles.errorMsg}>Something went wrong. Email us at admin@cloudlit.co</p>}
              </form>
              <p className={formStyles.recaptcha}>No spam, ever. We respect your privacy.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyMaximo;
