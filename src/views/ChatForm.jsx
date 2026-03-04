import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/ChatForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faGear } from "@fortawesome/free-solid-svg-icons";
import avatar1 from "../assets/icons/1.webp";
import avatar2 from "../assets/icons/2.webp";
import avatar3 from "../assets/icons/3.webp";
import avatar4 from "../assets/icons/4.webp";
import avatar5 from "../assets/icons/5.webp";

const API_BASE = process.env.NODE_ENV === "production" ? "" : "http://localhost:5001";

const teamMembers = [
  { image: avatar1, title: "Technical UI Designer" },
  { image: avatar2, title: "UI Designer" },
  { image: avatar3, title: "DevOps & Cloud Lead" },
  { image: avatar4, title: "Product Designer" },
  { image: avatar5, title: "Frontend Developer" },
  { image: avatar1, title: "Backend Developer" },
];

const TABS = [
  { id: "sales", label: "Sales" },
  { id: "support", label: "Support" },
  { id: "careers", label: "Careers" },
];

const SERVICES_OPTIONS = [
  { value: "", label: "Select a service..." },
  { value: "cloud", label: "Cloud" },
  { value: "devops", label: "DevOps" },
  { value: "infrastructure-management", label: "Infrastructure Management" },
  { value: "enterprise-monitoring", label: "Enterprise Monitoring" },
  { value: "red-hat-openshift", label: "Red Hat OpenShift" },
  { value: "other", label: "Other / General Inquiry" },
];

const ChatForm = () => {
  const [activeTab, setActiveTab] = useState("sales");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    service: "",
    projectDetails: "",
  });

  const forwardStripRef = useRef(null);
  const backwardStripRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const forward = forwardStripRef.current;
    const backward = backwardStripRef.current;
    if (!forward || !backward) return;

    let animationId;
    let forwardPos = forward.scrollLeft;
    let backwardPos = backward.scrollLeft;
    const speed = 0.5;

    // start backward strip from middle for seamless reverse motion
    if (backwardPos === 0) backwardPos = backward.scrollWidth / 2;

    const animate = () => {
      if (!isPaused) {
        forwardPos += speed;
        backwardPos -= speed;

        const forwardResetAt = forward.scrollWidth / 2;
        const backwardResetAt = backward.scrollWidth / 2;

        if (forwardPos >= forwardResetAt) forwardPos = 0;
        if (backwardPos <= 0) backwardPos = backwardResetAt;

        forward.scrollLeft = forwardPos;
        backward.scrollLeft = backwardPos;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // "success" | "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitStatus(null);

    fetch(`${API_BASE}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.workEmail,
        service: formData.service,
        message: formData.projectDetails,
        department: activeTab,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error();
        setSubmitStatus("success");
        setFormData({ firstName: "", lastName: "", workEmail: "", service: "", projectDetails: "" });
      })
      .catch(() => setSubmitStatus("error"))
      .finally(() => {
        setSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      });
  };

  // Duplicate team members for seamless infinite scroll
  const duplicatedTeamMembers = [...teamMembers, ...teamMembers];

  return (
    <div className={styles.page}>
      <div className={styles.wrapper}>
        {/* Left: Heading, intro, team, contact */}
        <div className={styles.left}>
          <h1 className={styles.heading}>
            <span className={styles.headingLine1}>Let's start</span>
            <span className={styles.headingLine2}>a conversation.</span>
          </h1>
          <p className={styles.intro}>
            Ready to transform your digital presence? We're here to help you build
            the future with our expert team.
          </p>

          <h2 className={styles.teamHeading}>SOME OF OUR SERVICES</h2>
         
            
            
          <div
            className={styles.teamStripWrapper}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`${styles.teamStrip} ${styles.teamStripForward}`} ref={forwardStripRef}>
              {duplicatedTeamMembers.map((member, i) => (
                <div key={i} className={styles.teamCard}>
                  <div className={styles.teamAvatar}>
                    <img src={member.image} alt={member.title} />
                  </div>
                  <p className={styles.teamTitle}>{member.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className={styles.teamStripWrapper}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`${styles.teamStrip} ${styles.teamStripBackward}`} ref={backwardStripRef}>
              {duplicatedTeamMembers.map((member, i) => (
                <div key={i} className={styles.teamCard}>
                  <div className={styles.teamAvatar}>
                    <img src={member.image} alt={member.title} />
                  </div>
                  <p className={styles.teamTitle}>{member.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Info Section */}
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
                <span className={styles.contactIcon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <div>
                <p className={styles.contactLabel}>Queries</p>
                <a href="mailto:admin@cloudlit.co" className={styles.contactValue}>
                  admin@cloudlit.co
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
                <span className={styles.contactIcon}><FontAwesomeIcon icon={faLocationDot} /></span>
              </div>
              <div>
                <p className={styles.contactLabel}>Our Headquarter</p>
                <p className={styles.contactValue}>
                  35 Saint Cherbel Way,
                  <br />
                  Punchbowl New South Wales 2196 Australia
                </p>
              </div>
            </div>
            <div className={`${styles.contactItem} ${styles.contactItemFull}`}>
              <div className={styles.contactIconWrap}>
                <span className={styles.contactIcon}><FontAwesomeIcon icon={faGear} /></span>
              </div>
              <div>
                <p className={styles.contactLabel}>Technical Support</p>
                <a href="mailto:engineering@cloudlit.co" className={styles.contactValue}>
                  engineering@cloudlit.co
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Tabs + Content */}
        <div className={styles.right}>
          <div className={styles.tabsWrapper}>
            <div className={styles.tabsRow}>
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  className={`${styles.tabBtn} ${activeTab === tab.id ? styles.tabBtnActive : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "sales" && (
          <div className={styles.formPanel}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="firstName">FIRST NAME</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Abdullah"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label htmlFor="lastName">LAST NAME</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Ahmad"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="workEmail">WORK EMAIL</label>
                <input
                  type="email"
                  id="workEmail"
                  name="workEmail"
                  placeholder="abdullah@company.com"
                  value={formData.workEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="service">SERVICES</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={styles.formSelect}
                >
                  {SERVICES_OPTIONS.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="projectDetails">PROJECT DETAILS</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  placeholder="Tell us about your project goals, timeline, and budget..."
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={5}
                />
              </div>
              <button type="submit" className={styles.submitBtn} disabled={submitting}>
                {submitting ? "Sending…" : "Send Message"}
                {!submitting && <span className={styles.sendIcon}>✈</span>}
              </button>
              {submitStatus === "success" && (
                <p className={styles.successMsg}>✓ Message sent! We'll be in touch soon.</p>
              )}
              {submitStatus === "error" && (
                <p className={styles.errorMsg}>Something went wrong. Please email us directly at admin@cloudlit.co</p>
              )}
            </form>
            <p className={styles.recaptcha}>
              No spam, ever. We respect your privacy.
            </p>
          </div>
          )}

          {activeTab === "support" && (
            <div className={styles.contentPanel}>
              <div className={styles.contentHeader}>Our Headquarter</div>
              <div className={styles.contentBody}>
                <p>35 Saint Cherbel Way</p>
                <p>Punchbowl</p>
                <p>New South Wales</p>
                <p>2196</p>
                <p>Australia</p>
              </div>
            </div>
          )}

          {activeTab === "careers" && (
            <div className={styles.contentPanel}>
              <div className={styles.contentHeader}>CloudLit's Careers</div>
              <div className={styles.contentBody}>
                <p>Join our CloudLit team in solving all our Customer's Digital needs.</p>
                <a href="mailto:admin@cloudlit.co" className={styles.careersEmail}>admin@cloudlit.co</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatForm;