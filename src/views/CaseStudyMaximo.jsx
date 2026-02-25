import React, { useState } from "react";
import styles from "../styles/CaseStudyFlightAlert.module.css";
import formStyles from "../styles/ChatForm.module.css";

const CaseStudyMaximo = () => {
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
          <div className={styles.meta}>Industry · All Industries</div>
          <h1 className={styles.title}>
            Automation of IBM Maximo Application Suite on Azure using RedHat OpenShift
          </h1>
          <p className={styles.subtitle}>
            Cloudlit automated IBM Maximo Application Suite on Azure Red Hat OpenShift for a
            Netherlands-based consulting firm, delivering standardized, secure, and scalable
            infrastructure for asset management workloads.
          </p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.highlightGrid}>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>☁</div>
            <div>
              <p className={styles.highlightTitle}>Azure OpenShift</p>
              <p className={styles.highlightText}>Enterprise-grade Maximo running on Azure Red Hat OpenShift.</p>
            </div>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>⚙</div>
            <div>
              <p className={styles.highlightTitle}>Ansible automation</p>
              <p className={styles.highlightText}>Cluster and Maximo deployment fully automated with Ansible.</p>
            </div>
          </div>
          <div className={styles.highlightCard}>
            <div className={styles.highlightIcon}>🔒</div>
            <div>
              <p className={styles.highlightTitle}>Hardened security</p>
              <p className={styles.highlightText}>Firewalls, VPN, SSL, and role-based access built in.</p>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Customer</h2>
          <p className={styles.paragraph}>
            Cloudlit has partnered with a leading Netherlands-based IT consulting firm specializing
            in providing comprehensive data management and automation solutions across Europe. This
            collaboration focuses on leveraging the capabilities of the IBM Maximo suite to deliver
            innovative, efficient, and scalable solutions tailored to meet the diverse needs of
            their clients. With deep expertise in the Maximo platform, the consulting firm supports
            organizations in optimizing their asset management processes, enhancing operational
            efficiency, and driving digital transformation through advanced data management and
            automation strategies.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Challenge</h2>
          <ul className={styles.list}>
            <li>
              <strong>Infrastructure scalability and cost management:</strong> The client needed to
              provision control and worker nodes with the required CPU, RAM, and storage on Azure
              while ensuring the platform remained cost‑effective and capable of supporting future
              growth.
            </li>
            <li>
              <strong>Red Hat OpenShift cluster provisioning:</strong> Standing up the OpenShift
              cluster required configuring pull secrets, resource quotas, and cluster settings that
              meet IBM Maximo&apos;s specific requirements.
            </li>
            <li>
              <strong>Persistent storage configuration and data integrity:</strong> Correct
              persistent storage setup was critical to avoid data loss, performance issues, or
              misalignment with IBM Maximo Application Suite 9.0 system requirements.
            </li>
            <li>
              <strong>Security for sensitive operational data:</strong> The Maximo suite handles
              sensitive operational data, so the client needed strong security across both the
              OpenShift cluster and the application itself, including hardened access controls and
              network protections.
            </li>
          </ul>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Solution</h2>
          <p className={styles.paragraph}>
            To address these challenges, the Cloudlit team implemented a set of automation‑driven
            strategies that standardized provisioning and configuration while enforcing best
            practices.
          </p>
          <ol className={styles.featuresList}>
            <li>
              <strong>Infrastructure automation:</strong> Infrastructure automation via Ansible was
              used to provision the Azure Red Hat OpenShift cluster, enabling fast, consistent
              deployments with minimal manual intervention.
            </li>
            <li>
              <strong>Automated Azure OpenShift cluster setup:</strong> The automation provisioned a
              cluster with 3 control nodes and 3 worker nodes, aligning with the required
              specifications (12 vCPUs, 48 GB RAM, and 360 GB storage for control nodes; 228 vCPUs
              and 1298 GB RAM for worker nodes).
            </li>
            <li>
              <strong>Integration of IBM licensing:</strong> The deployment workflows included
              steps to retrieve and apply a valid IBM license file and IBM Container Registry key
              (IBM Entitlement Key), ensuring seamless authentication and license verification for
              Maximo.
            </li>
            <li>
              <strong>Persistent storage configuration:</strong> Persistent storage was configured
              in line with IBM Maximo Application Suite 9.0 system requirements so that capacity,
              performance, and availability matched application needs.
            </li>
            <li>
              <strong>Security measures:</strong> A full security protocol was implemented for the
              OpenShift cluster, including internal load balancers, firewalls, VPNs, SSL
              certificates, and best practices in encryption and user access management for the
              Maximo platform.
            </li>
          </ol>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Results / Success</h2>
          <p className={styles.paragraph}>
            <strong>Efficient resource utilization:</strong> Automated infrastructure provisioning
            and standardized configuration streamlined deployment, ensuring that compute and storage
            resources were efficiently used.
          </p>
          <p className={styles.paragraph}>
            <strong>Improved time‑to‑market:</strong> The automated setup and clear configuration
            guidelines reduced deployment time significantly compared to manual processes, enabling
            faster onboarding of new environments and clients.
          </p>
          <p className={styles.paragraph}>
            <strong>Cost optimization:</strong> Precise sizing and the use of Azure and OpenShift
            elastic scaling capabilities minimized waste and optimized operational costs while
            still meeting performance requirements.
          </p>
          <p className={styles.paragraph}>
            <strong>Security assurance:</strong> With strong security controls in place—including
            internal load balancers, firewalls, and SSL certificates—the OpenShift cluster and
            Maximo Application Suite were protected against external threats and unauthorized
            access.
          </p>
          <p className={styles.paragraph}>
            <strong>Future scalability:</strong> The automated, standards‑based foundation enables
            the business to scale the IBM Maximo Application Suite as needed, adding additional
            nodes, integrations, or capabilities such as IoT and analytics.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Technologies and Tools</h2>
          <p className={styles.paragraph}>Key technologies and services used in this engagement:</p>
          <div className={styles.techChips}>
            <span className={styles.techChip}>Azure Cloud</span>
            <span className={styles.techChip}>Ansible</span>
            <span className={styles.techChip}>Red Hat</span>
            <span className={styles.techChip}>OpenShift</span>
            <span className={styles.techChip}>IBM Maximo Suite</span>
            <span className={styles.techChip}>Cloud Storage</span>
            <span className={styles.techChip}>SQL</span>
            <span className={styles.techChip}>Container Registry</span>
          </div>
        </div>

        {/* Contact form - same as Contact page */}
        <div className={styles.formSection}>
          <h2 className={styles.formSectionTitle}>Get in touch</h2>
          <p className={styles.formSectionDesc}>
            Interested in a similar Maximo automation project? Tell us about your environment and
            we’ll get back to you.
          </p>
          <div className={styles.formPanelWrap}>
            <div className={formStyles.formPanel}>
              <form onSubmit={handleSubmit} className={formStyles.form}>
                <div className={formStyles.formRow}>
                  <div className={formStyles.formGroup}>
                    <label htmlFor="maximo-firstName">FIRST NAME</label>
                    <input
                      type="text"
                     id="maximo-firstName"
                      name="firstName"
                      placeholder="Abdullah"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={formStyles.formGroup}>
                    <label htmlFor="maximo-lastName">LAST NAME</label>
                    <input
                      type="text"
                      id="maximo-lastName"
                      name="lastName"
                      placeholder="Ahmad"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="maximo-workEmail">WORK EMAIL</label>
                  <input
                    type="email"
                    id="maximo-workEmail"
                    name="workEmail"
                    placeholder="abdullah@company.com"
                    value={formData.workEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={formStyles.formGroup}>
                  <label htmlFor="maximo-projectDetails">PROJECT DETAILS</label>
                  <textarea
                    id="maximo-projectDetails"
                    name="projectDetails"
                    placeholder="Tell us about your Maximo environment, automation goals, and timelines..."
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

export default CaseStudyMaximo;

