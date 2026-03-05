import { useEffect, useRef, useState } from "react";
import SEO from "../components/SEO";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import ServicesTabs from "../components/ServicesTabs";
import styles from "../styles/Services.module.css";
import s from "../styles/ServicesOpenShift.module.css";
import redhatIcon from "../assets/reddid.webp";

/* ─── DATA ─────────────────────────────────────────── */

const OPENSHIFT_TABS = [
  {
    id: "implementation",
    label: "Implementation",
    heading: "Red Hat OpenShift Implementation & Deployment",
    para: "With our assistance, organizations can take advantage across eight dimensions — Architecture, Applications, Scalability, Storage & Backup, CI/CD, Disaster Recovery, Monitoring, and Security — to deploy Red Hat OpenShift and infrastructure components seamlessly.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "modernization",
    label: "Modernization",
    heading: "Application Modernization",
    para: "Red Hat OpenShift provides a smooth transition to modernized applications. From analyzing your present application landscape to integrating modern microservices and containerization architecture, our comprehensive Application Modernization Service covers every step of your journey.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    id: "networking",
    label: "Networking",
    heading: "Red Hat OpenShift Networking",
    para: "We design and implement robust Red Hat OpenShift networking solutions including SDN, service mesh with Istio, ingress/egress controllers, and network policies. Our engineers ensure secure, high-performance connectivity across hybrid and multi-cloud environments.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="19" r="3" />
        <circle cx="19" cy="19" r="3" />
        <line x1="12" y1="8" x2="5.5" y2="16" />
        <line x1="12" y1="8" x2="18.5" y2="16" />
      </svg>
    ),
  },
  {
    id: "devops",
    label: "DevOps",
    heading: "Red Hat OpenShift DevOps & CI/CD",
    para: "Enable Continuous Integration and Deployment with Tekton and Red Hat OpenShift Pipelines. Our team automates the complete transformation of your workflows using Tekton, Helm, and Red Hat OpenShift — enabling teams to produce high-quality software through a self-service view of IT infrastructure.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
];

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Discovery & Assessment",
    desc: "We assess your existing infrastructure, application portfolio, and business requirements to build a comprehensive Red Hat OpenShift readiness report.",
    color: "#CC0000",
  },
  {
    step: "02",
    title: "Architecture Design",
    desc: "Our certified engineers design a tailored Red Hat OpenShift environment architecture, outlining all risks and customizing solutions to your unique requirements.",
    color: "#5146CA",
  },
  {
    step: "03",
    title: "Implementation & Migration",
    desc: "We deploy Red Hat OpenShift across eight key dimensions with zero-downtime precision — containerizing workloads and establishing automated pipelines throughout.",
    color: "#6015B2",
  },
  {
    step: "04",
    title: "Optimize & Support",
    desc: "Post-deployment, our project manager keeps you updated while our testers verify everything is operating correctly. Ongoing support included.",
    color: "#8B5CF6",
  },
];

const BENEFITS = [
  {
    title: "Innovation Acceleration",
    desc: "Red Hat OpenShift allows developers to focus more on innovation and less on infrastructure management, enabling faster feature delivery.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    color: "#CC0000",
  },
  {
    title: "Operational Efficiency",
    desc: "Streamlines operations through automation and consistent management practices across hybrid environments.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
    color: "#5146CA",
  },
  {
    title: "Reduced Time to Market",
    desc: "Speeds up the entire application lifecycle from development to deployment, enabling faster delivery of new features and services.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    color: "#6015B2",
  },
  {
    title: "Cost Savings",
    desc: "Optimizes resource utilization and reduces infrastructure costs through efficient management and scaling capabilities.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    color: "#8B5CF6",
  },
];

const WHY_CARDS = [
  {
    title: "Red Hat OpenShift Engineers",
    desc: "With our extensive multi-platform experience, our certified engineers are experts at designing best-practice solutions customized to your unique requirements.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Red Hat OpenShift Consulting Experience",
    desc: "Our Red Hat OpenShift consultancy helps with adoption, setup, and administration. Join forces with us to take advantage of our experience as a reliable Red Hat partner.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: "Experts in Enterprise Open Source",
    desc: "Our specialty is facilitating the adoption of open-source technology by enterprises, enabling IT operations teams and developers to accelerate development and deployment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Enhanced Security Integration",
    desc: "Our top priority focuses on access control techniques, secrets management, and container security — ensuring critical applications run in a secure and reliable environment.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const WORKLOADS = [
  {
    title: "Application Development & Delivery",
    desc: "Build and ship cloud-native applications faster with integrated developer tooling, source-to-image builds, and automated pipelines.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "Modernize Existing Apps",
    desc: "Lift and shift or fully re-architect legacy applications into containerized microservices with minimal disruption to business continuity.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    title: "AI / ML Workloads",
    desc: "Run demanding AI and machine learning workloads on Red Hat OpenShift with GPU support, model serving, and data pipeline integration.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a7 7 0 0 1-7 7H8a7 7 0 0 1-7-7H0a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
      </svg>
    ),
  },
  {
    title: "Edge & Hybrid Cloud",
    desc: "Deploy consistently from core data centers to edge locations and across public/private clouds with a unified management plane.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
];

const FAQ_ITEMS = [
  {
    q: "What advantages come with utilizing the Red Hat OpenShift Application Modernization Service from Cloudlit?",
    a: "By modernizing your applications with our service, expect increased performance, scalability, and agility. It also speeds up the entire application lifecycle from development to production, enabling faster delivery of new features and services in a cost-effective way and more competitiveness in the quickly changing digital market of today.",
  },
  {
    q: "Is Cloudlit's Red Hat OpenShift deployment suitable for businesses of all sizes?",
    a: "Indeed! We offer our Red Hat OpenShift Deployment Service to companies of all sizes, from small startups to major multinational corporations. Since every company has different needs, we modify our strategy to fit your demands as well as your financial limitations.",
  },
  {
    q: "What kind of services does Cloudlit offer for Red Hat OpenShift?",
    a: "Red Hat OpenShift is a powerful container application platform, and our Red Hat OpenShift Consulting Service provides expert advice on how to utilize it in the best way. Our team of experts assists companies in streamlining workflows, increasing scalability, and optimizing their development processes.",
  },
  {
    q: "What can I expect from Cloudlit team during the Red Hat OpenShift cluster deployment process?",
    a: "Our team will collaborate closely with you to comprehend your needs and design a customized Red Hat OpenShift environment architecture and make sure all the risks are outlined properly before deployment. Throughout the process, our project manager will keep you updated, and after the deployment is finished, our testers thoroughly verify everything is operating as it should.",
  },
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

    // Particles
    const count = 180;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const c1 = new THREE.Color("#CC0000");
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

    // Wireframe octahedron — OpenShift-themed geometry
    const octGeo = new THREE.OctahedronGeometry(1.6, 1);
    const octMat = new THREE.MeshBasicMaterial({ color: "#CC0000", wireframe: true, transparent: true, opacity: 0.1 });
    const oct = new THREE.Mesh(octGeo, octMat);
    scene.add(oct);

    // Torus ring
    const torusGeo = new THREE.TorusGeometry(2.4, 0.012, 8, 80);
    const torusMat = new THREE.MeshBasicMaterial({ color: "#CC0000", transparent: true, opacity: 0.15 });
    const torus = new THREE.Mesh(torusGeo, torusMat);
    torus.rotation.x = Math.PI / 3.5;
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
      particles.rotation.y = t * 0.1;
      particles.rotation.x = t * 0.04;
      oct.rotation.y = t * 0.15;
      oct.rotation.x = t * 0.08;
      torus.rotation.z = t * 0.05;
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
const ServicesOpenShift = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("implementation");
  const [openFaq, setOpenFaq] = useState(null);
  const go = () => navigate("/contact");
  const current = OPENSHIFT_TABS.find((t) => t.id === activeTab);

  return (
    <div className={s.page}>
      <SEO
        title="Red Hat OpenShift — Implementation, Modernization & DevOps"
        description="CloudLit delivers certified Red Hat OpenShift implementation, application modernization, networking, and CI/CD services for enterprises across hybrid and multi-cloud environments."
        canonical="/services/openshift"
      />
      {/* ── Service nav tabs ── */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}><ServicesTabs /></div>
      </section>

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section className={s.hero}>
        <ThreeHero />
        <div className={s.heroOverlay} />
        <div className={s.heroInner}>
          <motion.div
            className={s.heroBadge}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={redhatIcon} alt="Red Hat" className={s.heroBadgeIcon} />
            <span>Official Red Hat Partner</span>
          </motion.div>
          <motion.h1
            className={s.heroHeading}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Red Hat{" "}
            <span className={s.heroGrad}>OpenShift</span>
            <br />Consulting Services
          </motion.h1>
          <motion.p
            className={s.heroPara}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cloudlit engineering team provides a seamless transition to Red Hat OpenShift by assisting you
            in navigating the challenges of installing, scaling, and managing applications on this
            robust platform.
          </motion.p>
          <motion.div
            className={s.heroBtns}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <button className={s.btnPrimary} onClick={go}>
              Get Started
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
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
            {[["Top", "Hybrid Cloud Platform"], ["8", "Deployment Dimensions"], ["24/7", "Support"], ["100%", "Certified Engineers"]].map(([n, l]) => (
              <div key={l} className={s.heroStat}>
                <span className={s.heroStatN}>{n}</span>
                <span className={s.heroStatL}>{l}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ ABOUT OPENSHIFT ═════════════════════════════ */}
      <section className={s.aboutSection}>
        <div className={s.inner}>
          <div className={s.aboutGrid}>
            <FadeIn direction="left">
              <div className={s.aboutText}>
                <span className={s.tag}>About Red Hat OpenShift</span>
                <h2 className={s.aboutTitle}>
                  Red Hat OpenShift:{" "}
                  <span className={s.titleGrad}>Accelerating Operational & Innovation Efficiency</span>
                </h2>
                <p className={s.aboutDesc}>
                  Red Hat OpenShift is the top hybrid cloud application platform, which brings
                  together proven services to minimize the challenges of developing, modernizing,
                  deploying, running, and managing applications.
                </p>
                <p className={s.aboutDesc}>
                  It ensures a uniform experience across public cloud, on-premises, hybrid cloud,
                  and edge architecture — giving your teams the freedom to build anywhere.
                </p>
                <button className={s.btnPrimary} onClick={go}>
                  Talk to an Expert
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className={s.aboutCards}>
                {BENEFITS.map((b, i) => (
                  <div key={b.title} className={s.benefitCard} style={{ "--accent": b.color }}>
                    <div className={s.benefitIcon} style={{ background: `${b.color}15`, color: b.color }}>
                      {b.icon}
                    </div>
                    <div>
                      <h4 className={s.benefitTitle}>{b.title}</h4>
                      <p className={s.benefitDesc}>{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════ */}
      <section id="how-it-works" className={s.howSection}>
        <div className={s.inner}>
          <FadeIn>
            <SectionHeader
              tag="Our Process"
              title="How We Deliver"
              highlight="Red Hat OpenShift Excellence"
              desc="A proven 4-step process from initial assessment to a fully optimized Red Hat OpenShift environment."
            />
          </FadeIn>
          <div className={s.howGrid}>
            {HOW_IT_WORKS.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className={s.howCard}>
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

      {/* ══ CONSULTING SERVICES TABS ════════════════════ */}
      <section className={s.servicesSection}>
        <div className={s.inner}>
          <FadeIn>
            <SectionHeader
              tag="Consulting Services"
              title="Overcome Red Hat OpenShift Challenges with"
              highlight="Our Expert Engineers"
              desc="A wide range of specialised solutions are included in our comprehensive Red Hat OpenShift Consultation Services."
            />
          </FadeIn>
          <div className={s.tabsWrap}>
            <div className={s.tabsRow}>
              {OPENSHIFT_TABS.map((tab) => (
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
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ══ WORKLOADS ════════════════════════════════════ */}
      <section className={s.workloadsSection}>
        <div className={s.inner}>
          <FadeIn>
            <SectionHeader
              tag="Supported Workloads"
              title="Utilize Cloud-Native &"
              highlight="Modern Applications"
              desc="Red Hat OpenShift supports the most demanding workloads. Automate lifecycle management and deployment across any environment."
            />
          </FadeIn>
          <div className={s.workloadsGrid}>
            {WORKLOADS.map((w, i) => (
              <FadeIn key={w.title} delay={i * 0.08}>
                <div className={s.workloadCard}>
                  <div className={s.workloadIcon}>{w.icon}</div>
                  <h3 className={s.workloadTitle}>{w.title}</h3>
                  <p className={s.workloadDesc}>{w.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TEKTON HIGHLIGHT ════════════════════════════ */}
      <section className={s.tektonSection}>
        <div className={s.inner}>
          <div className={s.tektonGrid}>
            <FadeIn direction="left">
              <div className={s.tektonText}>
                <span className={s.tag}>CI/CD with Red Hat OpenShift</span>
                <h2 className={s.tektonTitle}>
                  Enable Continuous Integration & Deployment with{" "}
                  <span className={s.titleGrad}>Tekton and Red Hat OpenShift Pipelines</span>
                </h2>
                <p className={s.tektonDesc}>
                  Tekton is a Kubernetes-native framework for creating CI/CD systems — flexible,
                  extensible, and easy to integrate. Red Hat OpenShift's container-centric approach enables
                  teams to produce high-quality software through a self-service view of IT infrastructure.
                </p>
                <p className={s.tektonDesc}>
                  CloudLit engineering team automates the complete transformation of Nocodb database
                  using Tekton, Helm, and Red Hat OpenShift.
                </p>
                <button className={s.btnPrimary} onClick={go}>
                  Reach Out to Our Technical Team
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </button>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div className={s.tektonVisual}>
                <div className={s.pipelineFlow}>
                  {["Code Commit", "Tekton Trigger", "Build & Test", "Helm Deploy", "Red Hat OpenShift Live"].map((step, i) => (
                    <div key={step} className={s.pipelineStep}>
                      <div className={s.pipelineNode}>
                        <span className={s.pipelineNum}>{String(i + 1).padStart(2, "0")}</span>
                      </div>
                      <span className={s.pipelineLabel}>{step}</span>
                      {i < 4 && <div className={s.pipelineArrow}>→</div>}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══ WHY CLOUDLIT ════════════════════════════════ */}
      <section className={s.whySection}>
        <div className={s.inner}>
          <FadeIn>
            <SectionHeader
              tag="Why Choose Us"
              title="Why Choose Cloudlit as Your"
              highlight="Official Red Hat Partner?"
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
                        <polyline points="6 9 12 15 18 9" />
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
            <h2 className={s.ctaTitle}>Ready to Get Started?</h2>
            <p className={s.ctaDesc}>
              We're on your side, doing what it takes to get the job done right — from the first
              consultation to your daily operations. Contact us for a free quote.
            </p>
            <button className={s.ctaBtn} onClick={go}>
              Contact Us for a Free Quote
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ServicesOpenShift;
