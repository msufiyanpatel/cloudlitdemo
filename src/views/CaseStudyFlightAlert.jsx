import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CaseStudyFlightAlert.module.css";
import formStyles from "../styles/ChatForm.module.css";
import CanvasErrorBoundary from "../components/CanvasErrorBoundary";

const ResultsParticles = React.lazy(() => import("../components/ResultsParticles"));

const FORMSPARK_FORM_ID = "oJBWZbvkD";

const CaseStudyFlightAlert = () => {
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
    fetch(`https://submit-form.com/${FORMSPARK_FORM_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.workEmail,
        message: formData.projectDetails,
        source: "Case Study: Flight Alert",
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
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Link to="/casestudies" className={styles.heroBack}>← Back to Portfolio</Link>
        <div className={styles.heroInner}>
          <div className={styles.meta}>Industry · Travel</div>
          <h1 className={styles.title}>
            Flight Alert Automation for a Leading Tourism and Travel Company on Azure Cloud
          </h1>
          <p className={styles.subtitle}>
            Cloudlit helped a travel startup automate real-time flight deal notifications and build a
            scalable booking management system on Azure, with strong security, observability, and cost efficiency.
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHT STRIP ── */}
      <div className={styles.highlightGrid}>
        {[
          { icon: "✈", title: "Real-time alerts", text: "Weekend flight deals delivered instantly to subscribers." },
          { icon: "☁", title: "Azure-native design", text: "Serverless functions, secure storage, and observability on Azure." },
          { icon: "⚙", title: "Fully automated", text: "From data fetch to SMS delivery with no manual steps." },
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
              Our customer already has a website that helps tourists discover exciting flight opportunities
              and explore new destinations. Their goal is to make travel more accessible and enjoyable by
              offering curated options that surprise and save money for travelers.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Challenge</p>
            <ul className={styles.list}>
              <li><strong>Data security and encryption:</strong> The client needed encrypted user storage with timely notification alerts and robust error handling.</li>
              <li><strong>Scalability and resource management:</strong> During peak traffic the website experienced slow performance and occasional downtime. Scaling was manual and time-consuming.</li>
              <li><strong>Centralized booking and monitoring:</strong> The client needed a centralized booking system with a dashboard to manage and approve flight deals based on availability.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Solution</p>
            <p className={styles.paragraph}>
              Cloudlit implemented a two-phase solution to transform the client's operations. Phase one
              focused on enabling real-time, cost-effective flight deal notifications via SMS. Phase two
              delivered a complete cloud-native booking management system on Microsoft Azure with full
              observability and disaster recovery baked in.
            </p>
            <p className={styles.paragraph}>
              Multiple Azure Functions were deployed to scan for weekend flight deals, filter results by
              subscriber home city, and dispatch personalized SMS alerts via Twilio — all without any
              manual intervention. The Amadeus Travel API was integrated to provide live fare data.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Architecture & Deployment</p>
            <ol className={styles.featuresList}>
              <li><strong>Serverless Azure Functions:</strong> Event-driven functions handle deal scanning, subscriber matching, and SMS dispatch on a scheduled trigger — scaling to zero when idle.</li>
              <li><strong>Amadeus Travel API integration:</strong> Live flight search, pricing confirmation, and booking order APIs provide real-time fare accuracy before every notification.</li>
              <li><strong>Twilio SMS pipeline:</strong> Personalised deal alerts are composed and dispatched per subscriber in under a second, with delivery receipts tracked back to the system.</li>
              <li><strong>Azure Blob & Table Storage:</strong> Subscriber profiles and deal history are encrypted at rest using Azure-managed keys, with RBAC limiting access to authorised services only.</li>
              <li><strong>Infrastructure as Code with Terraform:</strong> All Azure resources — functions, storage accounts, API connections, and monitoring — are versioned and redeployable in minutes.</li>
              <li><strong>Azure Pipelines CI/CD:</strong> Automated test, build, and deploy pipeline ensures every code change is validated and promoted to production without downtime.</li>
            </ol>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Features of the Booking System</p>
            <ol className={styles.featuresList}>
              <li><strong>Flight Offers Search:</strong> Users can search for flights between two cities, run multi-city searches, and access one-way combinable fares for the cheapest options.</li>
              <li><strong>Confirm availability with Flight Offers Price:</strong> Confirms that a selected flight is still available at the originally listed price before reservation, preventing failed bookings.</li>
              <li><strong>Create reservations with Flight Create Orders:</strong> Performs the final booking with the airline and returns a unique booking ID, PNR, and full reservation details.</li>
              <li><strong>Centralised booking dashboard:</strong> Operations team can view, approve, and manage all pending and confirmed deals through a React-based admin interface backed by Azure.</li>
              <li><strong>Enterprise observability:</strong> Azure Monitor, Application Insights, and structured logging provide full end-to-end traceability for every notification and booking transaction.</li>
            </ol>
          </div>

        </div>

        {/* RIGHT: Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sideCtaCard}>
            <p className={styles.sideCtaTitle}>Start a similar project</p>
            <p className={styles.sideCtaDesc}>Want real-time automation on Azure? Let's talk about your goals.</p>
            <a href="#contact-form" className={styles.sideCtaBtn}>Get in Touch →</a>
          </div>

          <div className={styles.sideCard}>
            <p className={styles.sideCardTitle}>Project Details</p>
            {[
              { icon: "🏢", label: "Industry", value: "Travel" },
              { icon: "☁", label: "Platform", value: "Microsoft Azure" },
              { icon: "📡", label: "Integrations", value: "Amadeus, Twilio" },
              { icon: "⚡", label: "Architecture", value: "Serverless" },
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
              {["FastAPI","Azure Functions","Twilio","Terraform","React.js"].map((t) => (
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
              { icon: "📈", label: "Subscriber Growth", text: "Significant increase in monthly customer subscriptions through automated, personalized notifications." },
              { icon: "☁", label: "Azure Scale", text: "Extensive scalability on Azure with full monitoring — no hardware purchases or complex integrations." },
              { icon: "💰", label: "Cost Savings", text: "Pay-for-what-you-use model enabled the client to scale down costs during low-demand periods." },
              { icon: "🔒", label: "Enterprise Security", text: "Private networks, encryption, audit trails, MFA, and a full disaster recovery strategy implemented." },
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
            {["FastAPI","Python","React.js","Amadeus","Twilio","Azure Functions","Serverless","Azure Pipelines","Terraform","Microsoft Azure Cloud"].map((t) => (
              <span key={t} className={styles.techChip}>{t}</span>
            ))}
          </div>
        </div>

        {/* FORM — full width */}
        <div className={styles.formSection} id="contact-form">
          <div className={styles.formSectionLeft}>
            <h2 className={styles.formSectionTitle}>Interested in a similar solution?</h2>
            <p className={styles.formSectionDesc}>Tell us about your project and we'll get back to you within one business day.</p>
            <div className={styles.formSectionPerks}>
              {["Free initial consultation","No commitment required","Response within 24 hours","Matched to your tech stack"].map((p) => (
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
                    <label htmlFor="flight-firstName">FIRST NAME</label>
                    <input type="text" id="flight-firstName" name="firstName" placeholder="Abdullah" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label htmlFor="flight-lastName">LAST NAME</label>
                    <input type="text" id="flight-lastName" name="lastName" placeholder="Ahmad" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="flight-workEmail">WORK EMAIL</label>
                  <input type="email" id="flight-workEmail" name="workEmail" placeholder="abdullah@company.com" value={formData.workEmail} onChange={handleChange} required />
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="flight-projectDetails">PROJECT DETAILS</label>
                  <textarea id="flight-projectDetails" name="projectDetails" placeholder="Tell us about your project goals, timeline, and budget..." value={formData.projectDetails} onChange={handleChange} rows={5} />
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

export default CaseStudyFlightAlert;
