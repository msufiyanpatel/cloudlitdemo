import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/ChatForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import avatar1 from "../assets/icons/1.png";
import avatar2 from "../assets/icons/2.png";
import avatar3 from "../assets/icons/3.png";
import avatar4 from "../assets/icons/4.png";
import avatar5 from "../assets/icons/5.png";

const teamMembers = [
  { image: avatar1, title: "Technical UI Designer" },
  { image: avatar2, title: "UI Designer" },
  { image: avatar3, title: "DevOps & Cloud Lead" },
  { image: avatar4, title: "Product Designer" },
  { image: avatar5, title: "Frontend Developer" },
  { image: avatar1, title: "Backend Developer" },
];

const ChatForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
                <p className={styles.contactLabel}>Email Us</p>
                <a href="mailto:work@example.com" className={styles.contactValue}>
                  work@example.com
                </a>
              </div>
            </div>
            <div className={styles.contactItem}>
              <div className={styles.contactIconWrap}>
              <span className={styles.contactIcon}><FontAwesomeIcon icon={faLocationDot} /></span>
              </div>
              <div>
                <p className={styles.contactLabel}>Visit Us</p>
                <p className={styles.contactValue}>
                  123 Business Street,
                  <br />
                  City, Country
                </p>
                <p className={styles.contactPhone}>Phone: +1 234 567 8900</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className={styles.right}>
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
              <button type="submit" className={styles.submitBtn}>
                Send Message
                <span className={styles.sendIcon}>✈</span>
              </button>
            </form>
            <p className={styles.recaptcha}>
              Protected by reCAPTCHA and the Google Privacy Policy and Terms of
              Service apply.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatForm;