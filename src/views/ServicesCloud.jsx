import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import ServicesTabs from "../components/ServicesTabs";
import styles from "../styles/Services.module.css";
import s from "../styles/ServicesCloud.module.css";
import awsIcon from "../assets/aws-icon.webp";
import azureIcon from "../assets/Azure-Logo-PNG-Black.webp";
import gcp from "../assets/google-cloud-platform.webp";

/* ─── DATA ─────────────────────────────────────────── */

const CLOUD_SERVICES_TABS = [
  {
    id: "consulting",
    label: "Consulting",
    heading: "Cloud Consulting",
    para: "We audit your existing IT infrastructure and business processes, analyze cloud adoption needs, and prepare a comprehensive feasibility study and business case. Our cloud architects will recommend the most suitable cloud provider and deployment options, advise on a pragmatic cloud strategy, and identify the necessary IaaS, PaaS, or SaaS services.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
  },
  {
    id: "migration",
    label: "Migration",
    heading: "Cloud Migration",
    para: "Red Hat OpenShift provides a smooth transition to modernized applications. From analyzing your present application landscape to integrating the modern microservices and containerization architecture, our Extensive Application Modernization Service covers every step.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>,
  },
  {
    id: "development",
    label: "Development",
    heading: "Cloud Development",
    para: "Our team creates, constructs, evaluates, implements, and maintains applications and data storage systems perfectly tailored to the unique strengths of the cloud. We handle back and front-end coding and CI/CD processes, with in-house specialists in compliance (HIPAA, FDA, PCI DSS).",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  },
  {
    id: "optimization",
    label: "Optimization",
    heading: "Cloud Optimization",
    para: "We examine your cloud setup and verify that appropriate cloud services are being utilized to fulfill your requirements with daily/monthly reports. We integrate automation tools to cancel unnecessary services, adjust resource sizes, and cut monthly cloud costs.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
  },
  {
    id: "integration",
    label: "Integration",
    heading: "Cloud Integration",
    para: "We build custom integration solutions using cloud services (AWS EventBridge, Azure Event Grid), middleware (Apache Kafka, RabbitMQ) or ready-made platforms (MuleSoft, DataGrid). We prioritize minimal disruption via iterative process and thorough deployment scheduling.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  },
  {
    id: "security",
    label: "Security",
    heading: "Cloud Security Consulting",
    para: "Our cloud security strategy includes risk evaluation, SSO, MFA, encryption of data at rest and in transit, firewalls, and DLP. We keep a vigilant eye on your cloud setup to identify and tackle threats as they occur, keeping your business fully protected.",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We begin with a deep-dive audit of your existing infrastructure, workloads, and business requirements to build a comprehensive cloud readiness report.",
    color: "#3A92EE",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    desc: "Our architects design a tailored cloud roadmap — selecting the right provider, tools, and migration path — with clear timelines and cost projections.",
    color: "#5146CA",
  },
  {
    step: "03",
    title: "Build & Migrate",
    desc: "We execute the migration with zero-downtime precision, containerizing workloads, setting up CI/CD pipelines, and integrating DevOps best practices throughout.",
    color: "#6015B2",
  },
  {
    step: "04",
    title: "Optimize & Support",
    desc: "Post-migration, we continuously monitor performance, right-size resources, reduce costs, and provide 24/7 expert support so your team can focus on growth.",
    color: "#8B5CF6",
  },
];

const CLOUD_PROVIDERS = [
  { title: "Amazon Web Services", description: "Innovate with agility and build a secure cloud platform by exploiting the full breadth of AWS capabilities.", icon: awsIcon, color: "#FF9900" },
  { title: "Google Cloud", description: "Google Cloud provides services that support organizations to go digital with computing, data and AI tools.", icon: gcp, color: "#4285F4" },
  { title: "IBM Cloud", description: "IBM Cloud offers 200+ services in virtual servers, networking, storage and Watson AI capabilities.", icon: azureIcon, color: "#054ADA" },
  { title: "Microsoft Azure", description: "Azure helps organizations transition to the cloud with capabilities tailored to their specific needs.", icon: azureIcon, color: "#0078D4" },
];

const WHY_CARDS = [
  {
    title: "Reduced Migration Cost",
    desc: "Customized migration plans for every infrastructure component minimize redevelopment work and migration expenses.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  },
  {
    title: "Reliability First",
    desc: "Fault-tolerant architectures and cloud performance best practices guarantee your apps stay stable with rapid recovery.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
  },
  {
    title: "Guaranteed Quality",
    desc: "Mature quality management with value-driven collaboration, transparent processes, and skilled professionals you can trust.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  },
  {
    title: "Optimized Cloud Costs",
    desc: "Optimal resource orchestration patterns including auto-scaling, and the right cloud services selected for your specific case.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>,
  },
];

const FAQ_ITEMS = [
  { q: "What are Cloud services?", a: "Cloud services are platforms, software, or infrastructure hosted online by third-party providers. Customers only need a computer, OS, and internet connection — unlike traditional hardware-dependent IT solutions." },
  { q: "What does a Cloudlit Cloud Engineer do?", a: "They assess existing solutions, plan and implement application and data migrations using scalable, high-performance solutions across private, hybrid and public cloud technologies." },
  { q: "Who are the top Cloud service providers?", a: "The leading options include AWS, Google Cloud Platform, Microsoft Azure, IBM Cloud and Oracle Cloud. Cloudlit provides vendor-neutral evaluations to help identify the best fit for your requirements." },
  { q: "How can enterprises overcome cloud transformation challenges?", a: "Moving to cloud trims budgets and enhances workforce communication. Cloudlit's structured roadmap minimizes risk while maximizing the ROI of your cloud investment." },
  { q: "How much does cloud migration cost?", a: "Costs vary based on project complexity and scale. We account for both one-time migration costs and ongoing infrastructure charges, providing transparent projections upfront." },
];

/* ─── THREE.JS HERO CANVAS ─────────────────────────── */
const ThreeHero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 100);
    camera.position.z = 5;

    // Floating particles
    const count = 180;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const c1 = new THREE.Color("#3A92EE");
    const c2 = new THREE.Color("#5146CA");
    const c3 = new THREE.Color("#8B5CF6");
    const palette = [c1, c2, c3];

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      const col = palette[Math.floor(Math.random() * 3)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const mat = new THREE.PointsMaterial({ size: 0.05, vertexColors: true, transparent: true, opacity: 0.7 });
    const particles = new THREE.Points(geo, mat);
    scene.add(particles);

    // Wireframe icosahedron
    const icoGeo = new THREE.IcosahedronGeometry(1.5, 1);
    const icoMat = new THREE.MeshBasicMaterial({ color: "#5146CA", wireframe: true, transparent: true, opacity: 0.12 });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    scene.add(ico);

    // Torus ring
    const torusGeo = new THREE.TorusGeometry(2.2, 0.012, 8, 80);
    const torusMat = new THREE.MeshBasicMaterial({ color: "#3A92EE", transparent: true, opacity: 0.18 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3;
    scene.add(torus);

    let mouse = { x: 0, y: 0 };
    const onMouse = (e) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = Date.now() * 0.0005;
      particles.rotation.y = t * 0.12;
      particles.rotation.x = t * 0.05;
      ico.rotation.y = t * 0.18;
      ico.rotation.x = t * 0.09;
      torus.rotation.z = t * 0.06;
      // Parallax on camera
      camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.03;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.03;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className={s.threeCanvas} />;
};

/* ─── FADE-IN WRAPPER ───────────────────────────────── */
const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const from =
    direction === "up" ? { opacity: 0, y: 28 } :
    direction === "left" ? { opacity: 0, x: -28 } :
    direction === "right" ? { opacity: 0, x: 28 } :
    { opacity: 0 };
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={from}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

/* ─── SECTION HEADER ────────────────────────────────── */
const SectionHeader = ({ tag, title, highlight, desc }) => (
  <div className={s.sectionHeader}>
    <span className={s.tag}>{tag}</span>
    <h2 className={s.sectionTitle}>
      {title}{" "}
      {highlight && <span className={s.titleGrad}>{highlight}</span>}
    </h2>
    {desc && <p className={s.sectionDesc}>{desc}</p>}
  </div>
);

/* ─── MAIN COMPONENT ────────────────────────────────── */
const ServicesCloud = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("consulting");
  const [openFaq, setOpenFaq] = useState(null);
  const go = () => navigate("/contact");
  const current = CLOUD_SERVICES_TABS.find((t) => t.id === activeTab);

  return (
    <div className={s.page}>
      {/* ── Service nav tabs ── */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}><ServicesTabs /></div>
      </section>

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className={s.hero}>
        <ThreeHero />
        <div className={s.heroOverlay} />
        <div className={s.heroInner}>
          <motion.span
            className={s.tag}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Cloud Services
          </motion.span>
          <motion.h1
            className={s.heroHeading}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Next-level{" "}
            <span className={s.heroGrad}>Cloud Adoption</span>
            <br />starts here
          </motion.h1>
          <motion.p
            className={s.heroPara}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            From strategy to migration, development to 24/7 optimization — Cloudlit
            handles your entire cloud journey with precision.
          </motion.p>
          <motion.div
            className={s.heroBtns}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className={s.btnPrimary} onClick={go}>
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button
              className={s.btnGhost}
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              How it Works
            </button>
          </motion.div>
          <motion.div
            className={s.heroStats}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {[["150+", "Projects"], ["50+", "Clients"], ["99.9%", "Uptime"], ["24/7", "Support"]].map(([n, l]) => (
              <div key={l} className={s.heroStat}>
                <span className={s.heroStatN}>{n}</span>
                <span className={s.heroStatL}>{l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════ */}
      <section id="how-it-works" className={s.howSection}>
        <div className={s.inner}>
          <FadeIn>
            <SectionHeader
              tag="Our Process"
              title="How We Deliver"
              highlight="Cloud Excellence"
              desc="A proven 4-step process that takes you from audit to a fully optimized cloud environment."
            />
          </FadeIn>
          <div className={s.howGrid}>
            {HOW_IT_WORKS.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className={s.howCard}>
                  <div className={s.howConnector} style={{ background: item.color }} />
                  <div className={s.howStep} style={{ color: item.color, borderColor: `${item.color}30`, background: `${item.color}10` }}>
                    {item.step}
                  </div>
                  <h3 className={s.howTitle}>{item.title}</h3>
                  <p className={s.howDesc}>{item.desc}</p>
                  <div className={s.howNumber} style={{ color: `${item.color}08` }}>{item.step}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CLOUD SERVICES TABS ═════════════════════════ */}
      <section className={s.servicesSection}>
        <div className={s.inner}>
          <FadeIn>
            <SectionHeader
              tag="What We Offer"
              title="Our Cloud"
              highlight="Services"
              desc="End-to-end cloud services designed for businesses of every size."
            />
          </FadeIn>
          <div className={s.tabsWrap}>
            <div className={s.tabsRow}>
              {CLOUD_SERVICES_TABS.map((tab) => (
                <button
                  key={tab.id}
                  className={`${s.tabBtn} ${activeTab === tab.id ? s.tabBtnActive : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className={s.tabBtnIcon}>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className={s.tabPanel}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                <div className={s.tabPanelIcon}>{current?.icon}</div>
                <div className={s.tabPanelBody}>
                  <h3 className={s.tabPanelTitle}>{current?.heading}</h3>
                  <p className={s.tabPanelDesc}>{current?.para}</p>
                  <button className={s.tabPanelCta} onClick={go}>
                    Get Started with {current?.label}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══ CLOUDS WE WORK WITH ══════════════════════════ */}
      <section className={s.platformsSection}>
        <div className={s.inner}>
          <FadeIn>
            <SectionHeader
              tag="Platforms"
              title="Clouds We"
              highlight="Work With"
              desc="Vendor-neutral evaluations to match you with the right cloud platform."
            />
          </FadeIn>
          <div className={s.platformGrid}>
            {CLOUD_PROVIDERS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className={s.platformCard} style={{ "--accent": p.color }}>
                  <div className={s.platformLogo}>
                    <img src={p.icon} alt={p.title} />
                  </div>
                  <h3 className={s.platformTitle}>{p.title}</h3>
                  <p className={s.platformDesc}>{p.description}</p>
                  <button className={s.platformLink} onClick={go}>Learn More →</button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ WHY CLOUDLIT ════════════════════════════════ */}
      <section className={s.whySection}>
        <div className={s.inner}>
          <FadeIn>
            <SectionHeader
              tag="Why Cloudlit"
              title="Your Trusted"
              highlight="Cloud Partner"
            />
          </FadeIn>
          <div className={s.whyGrid}>
            {WHY_CARDS.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.08}>
                <div className={s.whyCard}>
                  <div className={s.whyIcon}>{c.icon}</div>
                  <h3 className={s.whyTitle}>{c.title}</h3>
                  <p className={s.whyDesc}>{c.desc}</p>
                  <button className={s.whyLink} onClick={go}>Learn More <span>→</span></button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FAQ ══════════════════════════════════════════ */}
      <section className={s.faqSection}>
        <div className={s.faqInner}>
          <FadeIn>
            <SectionHeader
              tag="FAQ"
              title="Frequently Asked"
              highlight="Questions"
            />
          </FadeIn>
          <div className={s.faqList}>
            {FAQ_ITEMS.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className={`${s.faqItem} ${openFaq === i ? s.faqOpen : ""}`}>
                  <button
                    className={s.faqQ}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{item.q}</span>
                    <motion.span
                      animate={{ rotate: openFaq === i ? 180 : 0 }}
                      transition={{ duration: 0.28 }}
                      style={{ display: "flex" }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"/>
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        className={s.faqA}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BANNER ══════════════════════════════════ */}
      <section className={s.cta}>
        <div className={s.ctaGlow} />
        <div className={s.ctaInner}>
          <FadeIn>
            <h2 className={s.ctaTitle}>Ready to move to the cloud?</h2>
            <p className={s.ctaDesc}>
              Let our experts design the perfect cloud strategy for your business — risk-free consultation included.
            </p>
            <button className={s.ctaBtn} onClick={go}>
              Book a Free Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ServicesCloud;
