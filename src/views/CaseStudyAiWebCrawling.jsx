import React, { useState } from "react";
import styles from "../styles/CaseStudyFlightAlert.module.css";
import formStyles from "../styles/ChatForm.module.css";

const CaseStudyAiWebCrawling = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    projectDetails: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
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

      <section className={styles.content}>
        <div className={styles.highlightGrid}>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>🤖</div>
            <div>
              <p className={styles.highlightTitle}>Autonomous agents</p>
              <p className={styles.highlightText}>High-quality conversational data fueling AI assistants.</p>
            </div>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>📊</div>
            <div>
              <p className={styles.highlightTitle}>Crawl analytics</p>
              <p className={styles.highlightText}>LLM-enriched datasets ready for analytics and modeling.</p>
            </div>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>☁</div>
            <div>
              <p className={styles.highlightTitle}>AWS native</p>
              <p className={styles.highlightText}>Dockerized Crawl4AI deployment on scalable AWS infrastructure.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Customer</h2>
          <p className={styles.paragraph}>
            A UAE-based startup pioneering a new category of autonomous AI agents that augment companies&apos;
            workforce needs diverse conversational data from forums, reviews, and social media. They required
            automated web scraping to collect, structure, and preprocess this data, ensuring a steady stream of
            high‑quality inputs for model training.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Challenge</h2>
          <ul className={styles.list}>
            <li>
              <strong>Manual data collection:</strong> Gathering data manually from multiple websites was
              time‑consuming, resource‑intensive, and error‑prone, making it difficult to maintain consistent,
              high‑quality datasets for AI model training.
            </li>
            <li>
              <strong>Scalability limitations:</strong> Traditional web scraping scripts and legacy tools were
              not designed to handle large‑scale crawling efficiently or reliably as data volume and source
              variety grew.
            </li>
            <li>
              <strong>Complex API integration:</strong> Integrating crawled data into AI models, analytics
              pipelines, or BI platforms required manual formatting, cleaning, and transformation, increasing
              development time and complexity.
            </li>
            <li>
              <strong>Security and compliance:</strong> Ensuring secure API access, authentication handling, and
              adherence to organizational security policies for data collection and storage was critical.
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Solution</h2>
          <p className={styles.paragraph}>
            To address these challenges, Crawl4AI was deployed using a Dockerized architecture and integrated
            with Large Language Models (LLMs) for AI‑driven content analysis. The key components of the solution
            included:
          </p>
          <ol className={styles.featuresList}>
            <li>
              <strong>AWS and cloud deployment:</strong> Crawl4AI was deployed on Amazon EC2 instances to ensure
              scalability, reliability, and performance. The official Docker image was used to run the crawler,
              enabling seamless portability and environment consistency.
            </li>
            <li>
              <strong>REST API implementation:</strong> RESTful API endpoints were exposed to allow users to
              initiate crawl tasks, monitor their status, and retrieve structured data in a controlled and repeatable
              way.
            </li>
            <li>
              <strong>LLM integration:</strong> Advanced AI models, including OpenAI&apos;s GPT‑4 and other LLMs,
              were integrated to classify content, extract entities, summarize pages, and enrich the raw crawl data
              with higher‑level insights.
            </li>
            <li>
              <strong>Enhanced security:</strong> API key authentication, encrypted communication, and environment‑
              based access controls were implemented. Within AWS, VPCs, security groups, and IAM roles enforced access
              control and protected data in transit and at rest.
            </li>
            <li>
              <strong>Storage and data management:</strong> Crawled data was stored in Amazon S3, while structured
              metadata was managed in Amazon RDS or DynamoDB for efficient querying, retrieval, and downstream
              consumption by AI and analytics workloads.
            </li>
          </ol>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Results / Success</h2>
          <p className={styles.paragraph}>
            <strong>Operational efficiency:</strong> Automating the web crawling process eliminated manual data
            collection, reduced operational overhead, and significantly increased processing speed.
          </p>
          <p className={styles.paragraph}>
            <strong>AI‑driven insights:</strong> LLM integration enabled real‑time content analysis, sentiment
            detection, and intelligent summarization, providing richer signals for model training and decision‑making.
          </p>
          <p className={styles.paragraph}>
            <strong>Scalability and deployment flexibility:</strong> The Dockerized architecture ensured seamless
            scalability and allowed deployment across on‑premise, cloud, and hybrid environments with minimal
            configuration changes.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Technologies and Tools</h2>
          <p className={styles.paragraph}>Key technologies and services used in this engagement:</p>
          <div className={styles.techChips}>
            <span className={styles.techChip}>AWS Cloud</span>
            <span className={styles.techChip}>Docker</span>
            <span className={styles.techChip}>Python</span>
            <span className={styles.techChip}>FastAPI</span>
            <span className={styles.techChip}>OpenAI API</span>
            <span className={styles.techChip}>Claude API</span>
            <span className={styles.techChip}>Bash Scripts</span>
          </div>
        </div>

        {/* Contact form - same as Contact page */}
        <div className={styles.formSection}>
          <h2 className={styles.formSectionTitle}>Get in touch</h2>
          <p className={styles.formSectionDesc}>
            Planning an AI-powered crawling or data platform? Share your use case and we’ll follow up.
          </p>
          <div className={styles.formPanelWrap}>
            <div className={formStyles.formPanel}>
              <form onSubmit={handleSubmit} className={formStyles.form}>
                <div className={formStyles.formRow}>
                  <div className={formStyles.formGroup}>
                    <label htmlFor="ai-firstName">FIRST NAME</label>
                    <input
                      type="text"
                      id="ai-firstName"
                      name="firstName"
                      placeholder="Abdullah"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label htmlFor="ai-lastName">LAST NAME</label>
                    <input
                      type="text"
                      id="ai-lastName"
                      name="lastName"
                      placeholder="Ahmad"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="ai-workEmail">WORK EMAIL</label>
                  <input
                    type="email"
                    id="ai-workEmail"
                    name="workEmail"
                    placeholder="abdullah@company.com"
                    value={formData.workEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="ai-projectDetails">PROJECT DETAILS</label>
                  <textarea
                    id="ai-projectDetails"
                    name="projectDetails"
                    placeholder="Tell us about your data sources, scale, and AI goals..."
                    value={formData.projectDetails}
                    onChange={handleChange}
                    rows={5}
                  />
                </div>
                <button type="submit" className={formStyles.submitBtn}>
                  Send Message
                  <span className={formStyles.sendIcon}>✈</span>
                </button>
              </form>
              <p className={formStyles.recaptcha}>
                Protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyAiWebCrawling;

