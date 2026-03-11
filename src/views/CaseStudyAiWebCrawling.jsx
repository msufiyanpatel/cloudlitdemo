import React, { useState, Suspense } from "react";
import SEO from "../components/SEO";
import Link from "next/link";
import styles from "../styles/CaseStudyFlightAlert.module.css";
import formStyles from "../styles/ChatForm.module.css";
import CanvasErrorBoundary from "../components/CanvasErrorBoundary";

const ResultsParticles = React.lazy(() => import("../components/ResultsParticles"));



const CaseStudyAiWebCrawling = () => {
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
        source: "Case Study: AI Web Crawling",
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
        title="AI Web Crawling with Crawl4AI & Docker — Case Study"
        description="How CloudLit built a Dockerized, LLM-integrated web crawling platform with Crawl4AI for a UAE startup — automating large-scale data collection and AI-powered analysis."
        canonical="/casestudies/ai-web-crawling"
      />
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <Link href="/casestudies" className={styles.heroBack}>← Back to Portfolio</Link>
        <div className={styles.heroInner}>
          <div className={styles.meta}>Industry · AI &amp; ML</div>
          <h1 className={styles.title}>
            Enhancing Web Data Extraction with Crawl4AI: A Dockerized Web Crawling and LLM-Integrated Solution
          </h1>
          <p className={styles.subtitle}>
            Cloudlit helped a UAE-based startup build an AI-powered, Dockerized web crawling platform with
            Crawl4AI, integrated with LLMs to automate large-scale data collection and analysis.
          </p>
        </div>
      </section>

      {/* ── HIGHLIGHT STRIP ── */}
      <div className={styles.highlightGrid}>
        {[
          { icon: "🤖", title: "Autonomous agents", text: "High-quality conversational data fueling AI assistants." },
          { icon: "📊", title: "Crawl analytics", text: "LLM-enriched datasets ready for analytics and modeling." },
          { icon: "☁", title: "AWS native", text: "Dockerized Crawl4AI deployment on scalable AWS infrastructure." },
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
              A UAE-based startup pioneering a new category of autonomous AI agents that augment companies'
              workforce. Their product relies on a continuous flow of diverse, high-quality conversational
              data sourced from forums, reviews, and social media to train and ground their agent models.
            </p>
            <p className={styles.paragraph}>
              They needed a fully automated, scalable web crawling platform that could collect, preprocess,
              and pipe domain-specific data into their AI training workflows — without manual intervention
              or fragile one-off scripts that break under production load.
            </p>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Challenge</p>
            <ul className={styles.list}>
              <li><strong>Manual data collection:</strong> Gathering data manually from multiple websites was time-consuming, resource-intensive, and produced inconsistent output quality.</li>
              <li><strong>Scalability limitations:</strong> Traditional scraping scripts were not designed to handle concurrent large-scale crawling reliably or without constant maintenance.</li>
              <li><strong>Unstructured output:</strong> Raw HTML had to be manually cleaned and formatted before feeding AI pipelines — adding significant lag between crawl and training.</li>
              <li><strong>Complex API integration:</strong> Connecting crawled content to LLM APIs required custom data transformation, deduplication, and schema normalisation work.</li>
              <li><strong>Security and compliance:</strong> Secure API key management, encrypted transit, and IAM-controlled access to cloud resources were non-negotiable requirements.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Solution</p>
            <p className={styles.paragraph}>
              Cloudlit deployed Crawl4AI inside a Docker container on Amazon EC2 and built a REST API
              layer around it, enabling the startup's engineering team to trigger crawl jobs, monitor
              progress, and receive structured, LLM-enriched output through a single consistent interface.
            </p>
            <ol className={styles.featuresList}>
              <li><strong>AWS cloud deployment:</strong> Crawl4AI deployed on Amazon EC2 using the official Docker image for seamless portability, version pinning, and environment consistency.</li>
              <li><strong>REST API implementation:</strong> FastAPI endpoints allow engineers to submit crawl targets, track real-time job status, and retrieve structured JSON results on demand.</li>
              <li><strong>LLM integration:</strong> GPT-4 and Claude API were integrated to classify page intent, extract named entities, summarise content, and tag sentiment automatically post-crawl.</li>
              <li><strong>Enhanced security:</strong> API key authentication, HTTPS-only endpoints, VPC isolation, security group rules, and IAM roles enforce least-privilege access end to end.</li>
              <li><strong>Storage and data management:</strong> Crawled outputs are stored in Amazon S3 with lifecycle policies; structured metadata is indexed in DynamoDB for fast retrieval.</li>
            </ol>
          </div>

          <div className={styles.section}>
            <p className={styles.sectionTitle}>Architecture Overview</p>
            <ol className={styles.featuresList}>
              <li><strong>Containerised crawler on EC2:</strong> Crawl4AI runs in an isolated Docker container, decoupling it from the host environment and enabling fast rollbacks or horizontal scaling.</li>
              <li><strong>Job queue with status tracking:</strong> Each crawl request is assigned a unique job ID; an async queue ensures ordered execution and prevents resource exhaustion.</li>
              <li><strong>Post-crawl LLM enrichment pipeline:</strong> After each page is fetched, content is automatically passed to the LLM API for entity extraction and summarisation before being written to S3.</li>
              <li><strong>Scheduled batch crawls:</strong> Cron-triggered Lambda functions kick off nightly bulk crawls across configured seed URLs to keep training datasets continuously refreshed.</li>
              <li><strong>Monitoring and alerting:</strong> CloudWatch metrics and alarms track crawl success rate, error counts, and LLM API latency — with instant alerts on anomalies.</li>
            </ol>
          </div>

        </div>

        {/* RIGHT: Sidebar */}
        <div className={styles.sidebar}>
          <div className={styles.sideCtaCard}>
            <p className={styles.sideCtaTitle}>Build an AI data platform</p>
            <p className={styles.sideCtaDesc}>Planning a crawling or data pipeline? Let's map it out together.</p>
            <a href="#contact-form" className={styles.sideCtaBtn}>Get in Touch →</a>
          </div>

          <div className={styles.sideCard}>
            <p className={styles.sideCardTitle}>Project Details</p>
            {[
              { icon: "🏢", label: "Industry", value: "AI & ML" },
              { icon: "☁", label: "Platform", value: "Amazon AWS" },
              { icon: "🐳", label: "Deployment", value: "Docker / EC2" },
              { icon: "🧠", label: "AI Models", value: "GPT-4, Claude" },
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
              {["Crawl4AI","Docker","FastAPI","AWS S3","OpenAI"].map((t) => (
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
              { icon: "⚡", label: "Operational Efficiency", text: "Automating web crawling eliminated manual data collection, reduced overhead, and significantly increased processing speed." },
              { icon: "🧠", label: "AI-Driven Insights", text: "LLM integration enabled real-time content analysis, sentiment detection, and intelligent summarization." },
              { icon: "📦", label: "Deployment Flexibility", text: "The Dockerized architecture ensured seamless scalability across on-premise, cloud, and hybrid environments." },
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
            {["AWS Cloud","Docker","Python","FastAPI","OpenAI API","Claude API","Bash Scripts"].map((t) => (
              <span key={t} className={styles.techChip}>{t}</span>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className={styles.formSection} id="contact-form">
          <div className={styles.formSectionLeft}>
            <h2 className={styles.formSectionTitle}>Planning an AI data platform?</h2>
            <p className={styles.formSectionDesc}>Share your use case and data goals — we'll follow up with a tailored approach.</p>
            <div className={styles.formSectionPerks}>
              {["Free initial consultation","No commitment required","Response within 24 hours","AI & cloud expertise"].map((p) => (
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
                    <label htmlFor="ai-firstName">FIRST NAME</label>
                    <input type="text" id="ai-firstName" name="firstName" placeholder="Abdullah" value={formData.firstName} onChange={handleChange} />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label htmlFor="ai-lastName">LAST NAME</label>
                    <input type="text" id="ai-lastName" name="lastName" placeholder="Ahmad" value={formData.lastName} onChange={handleChange} />
                  </div>
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="ai-workEmail">WORK EMAIL</label>
                  <input type="email" id="ai-workEmail" name="workEmail" placeholder="abdullah@company.com" value={formData.workEmail} onChange={handleChange} required />
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="ai-projectDetails">PROJECT DETAILS</label>
                  <textarea id="ai-projectDetails" name="projectDetails" placeholder="Tell us about your data sources, scale, and AI goals..." value={formData.projectDetails} onChange={handleChange} rows={5} />
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

export default CaseStudyAiWebCrawling;
