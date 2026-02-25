import React, { useState } from "react";
import styles from "../styles/CaseStudyFlightAlert.module.css";
import formStyles from "../styles/ChatForm.module.css";

const CaseStudyFlightAlert = () => {
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
          <div className={styles.meta}>Industry · Travel</div>
          <h1 className={styles.title}>
            Flight Alert Automation for a Leading Tourism and Travel Company on Azure Cloud
          </h1>
          <p className={styles.subtitle}>
            Cloudlit helped a travel startup automate real-time flight deal notifications and build
            a scalable booking management system on Azure, with strong security, observability, and
            cost efficiency.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.highlightGrid}>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>✈</div>
            <div>
              <p className={styles.highlightTitle}>Real-time alerts</p>
              <p className={styles.highlightText}>Weekend flight deals delivered instantly to subscribers.</p>
            </div>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>☁</div>
            <div>
              <p className={styles.highlightTitle}>Azure-native design</p>
              <p className={styles.highlightText}>Serverless functions, secure storage, and observability on Azure.</p>
            </div>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>⚙</div>
            <div>
              <p className={styles.highlightTitle}>Fully automated</p>
              <p className={styles.highlightText}>From data fetch to SMS delivery with no manual steps.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Customer</h2>
          <p className={styles.paragraph}>
            Our customer already has a website that helps tourists discover exciting flight
            opportunities and explore new destinations. Their goal is to make travel more accessible
            and enjoyable by offering curated options that surprise and save money for travelers.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Challenge</h2>
          <ul className={styles.list}>
            <li>
              <strong>Data security and encryption:</strong> The client had a system to register
              users and manage subscription-based deals but needed to ensure that user data was
              stored securely with encryption while still supporting user-friendly, timely
              notification alerts and robust error handling.
            </li>
            <li>
              <strong>Scalability and resource management:</strong> During peak traffic the website
              experienced slow performance and occasional downtime. Scaling resources up and down
              was a manual, time‑consuming process that led to inefficiencies and wasted cost.
            </li>
            <li>
              <strong>Centralized flight booking and monitoring:</strong> The client needed a
              centralized booking system with comprehensive monitoring and a dashboard to manage and
              approve flight deals based on availability.
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Solution</h2>
          <p className={styles.paragraph}>
            Cloudlit implemented a solution to transform operations by enabling real-time,
            cost‑effective notifications automation for cheap flight deals via text messages in the
            first phase, followed by designing a complete flight booking management system on Azure
            Cloud.
          </p>
          <p className={styles.paragraph}>
            Multiple Azure Functions were designed to send weekend flight deals to users based on
            their home city. The implementation uses several external libraries and APIs, including
            Amadeus for flight data, Twilio for SMS, and supporting utility libraries for data
            manipulation and formatting.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Features of the Booking Management System</h2>
          <ol className={styles.featuresList}>
            <li>
              <strong>Flight Offers Search:</strong> Users can search for flights between two
              cities, run multi‑city searches for longer itineraries, and access one‑way combinable
              fares to offer the cheapest options possible.
            </li>
            <li>
              <strong>Confirm availability and price with Flight Offers Price:</strong> Because air
              fares fluctuate constantly, the system confirms that a selected flight is still
              available at the originally listed price. If price or availability changes, the
              reservation is rejected with a clear error code.
            </li>
            <li>
              <strong>Create reservations with Flight Create Orders:</strong> The Flight Create
              Orders API performs the final booking and returns a unique booking ID and reservation
              details after search and real‑time price confirmation.
            </li>
            <li>
              <strong>Deployment on Azure:</strong> The complete infrastructure and solution were
              designed and deployed on Microsoft Azure using best‑practice strategies for
              resilience, scalability, and observability.
            </li>
          </ol>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Results / Success</h2>
          <p className={styles.paragraph}>
            The travel agency saw a significant increase in monthly customer subscriptions thanks to
            automated, personalized notifications and an improved booking experience. Extensive
            scalability on Azure with full monitoring now allows the startup to scale up
            subscriptions and features without purchasing hardware or managing complex integrations.
          </p>
          <p className={styles.paragraph}>
            Compared to traditional on‑premises systems with large upfront hardware and licensing
            costs, the cloud‑based solution provides a pay‑for‑what‑you‑use model, enabling the
            client to scale down when demand is low. Cloudlit also implemented a secure database
            architecture with private networks, encryption, audit trails, and multi‑factor
            authentication to protect against threats.
          </p>
          <p className={styles.paragraph}>
            To protect against disruptions—from natural disasters to cyberattacks—Cloudlit designed
            and implemented a comprehensive disaster recovery site and strategy.
            </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Technologies and Tools</h2>
          <p className={styles.paragraph}>Key technologies and services used in this engagement:</p>
          <div className={styles.techChips}>
            <span className={styles.techChip}>FastAPI</span>
            <span className={styles.techChip}>Python</span>
            <span className={styles.techChip}>React.js</span>
            <span className={styles.techChip}>Amadeus</span>
            <span className={styles.techChip}>Twilio</span>
            <span className={styles.techChip}>Azure Functions</span>
            <span className={styles.techChip}>Serverless</span>
            <span className={styles.techChip}>Azure Pipelines</span>
            <span className={styles.techChip}>Terraform</span>
            <span className={styles.techChip}>Microsoft Azure Cloud</span>
          </div>
        </div>

        {/* Contact form - same as Contact page */}
        <div className={styles.formSection}>
          <h2 className={styles.formSectionTitle}>Get in touch</h2>
          <p className={styles.formSectionDesc}>
            Interested in a similar solution? Tell us about your project and we’ll get back to you.
          </p>
          <div className={styles.formPanelWrap}>
          <div className={formStyles.formPanel}>
            <form onSubmit={handleSubmit} className={formStyles.form}>
              <div className={formStyles.formRow}>
                <div className={formStyles.formGroup}>
                  <label htmlFor="flight-firstName">FIRST NAME</label>
                  <input
                    type="text"
                    id="flight-firstName"
                    name="firstName"
                    placeholder="Abdullah"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="flight-lastName">LAST NAME</label>
                  <input
                    type="text"
                    id="flight-lastName"
                    name="lastName"
                    placeholder="Ahmad"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={formStyles.formGroup}>
                <label htmlFor="flight-workEmail">WORK EMAIL</label>
                <input
                  type="email"
                  id="flight-workEmail"
                  name="workEmail"
                  placeholder="abdullah@company.com"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={formStyles.formGroup}>
                <label htmlFor="flight-projectDetails">PROJECT DETAILS</label>
                <textarea
                  id="flight-projectDetails"
                  name="projectDetails"
                  placeholder="Tell us about your project goals, timeline, and budget..."
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

export default CaseStudyFlightAlert;

