import { useEffect, useRef, useState } from "react";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import ServicesTabs from "../components/ServicesTabs";
import styles from "../styles/Services.module.css";
import s from "../styles/ServicesTeams.module.css";

/* ─── DATA ─────────────────────────────────────────── */

const TEAMS_TABS = [
  {
    id: "collaboration",
    label: "Collaboration",
    heading: "Team Collaboration & Productivity",
    para: "We help organizations unify communication and collaboration across chat, meetings, file sharing, and project management. From Microsoft Teams and Slack to integrated workflows, we design solutions that keep distributed teams aligned and productive.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    id: "integration",
    label: "Integration",
    heading: "Teams Integration & Automation",
    para: "We integrate Microsoft Teams, Slack, and collaboration tools with your existing systems — CRMs, ticketing, DevOps pipelines, and cloud services. Automated workflows, bots, and connectors eliminate silos and streamline cross-team operations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "security",
    label: "Security",
    heading: "Teams Security & Governance",
    para: "We implement security controls, compliance policies, and governance for collaboration platforms. Data loss prevention, retention policies, e-discovery, and secure guest access ensure your teams collaborate safely and meet regulatory requirements.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Assess & Plan", desc: "We evaluate your current collaboration tools, team structure, and workflows to design a unified teams strategy that fits your organization.", color: "#3A92EE" },
  { step: "02", title: "Design & Integrate", desc: "We configure and integrate the right platforms — Microsoft Teams, Slack, or hybrid — and connect them to your existing systems.", color: "#5146CA" },
  { step: "03", title: "Deploy & Train", desc: "We roll out the solution with minimal disruption and provide training so your teams adopt new ways of working quickly.", color: "#6015B2" },
  { step: "04", title: "Optimize & Support", desc: "We continuously monitor usage, gather feedback, and refine workflows — with ongoing support to keep collaboration running smoothly.", color: "#8B5CF6" },
];

const WHY_CARDS = [
  {
    title: "Unified Communication",
    desc: "One hub for chat, meetings, files, and apps — reducing context switching and keeping teams focused on what matters.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
  },
  {
    title: "Seamless Integration",
    desc: "Connect collaboration tools to your CRM, DevOps pipeline, and cloud services — automate repetitive tasks and surface the right information where teams work.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  },
  {
    title: "Enterprise Security",
    desc: "Built-in compliance, retention policies, and governance ensure your collaboration platform meets security and regulatory standards.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>,
  },
  {
    title: "Remote-First Ready",
    desc: "Tools designed for distributed and hybrid teams — video, async communication, and shared workspaces that bridge time zones.", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  },
];

/* ─── THREE.JS HERO ─────────────────────────────────── */
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
    const count = 180;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [new THREE.Color("#3A92EE"), new THREE.Color("#5146CA"), new THREE.Color("#8B5CF6")];
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
    const particles = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.05, vertexColors: true, transparent: true, opacity: 0.7 }));
    scene.add(particles);
    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(1.5, 1), new THREE.MeshBasicMaterial({ color: "#5146CA", wireframe: true, transparent: true, opacity: 0.1 }));
    scene.add(ico);
    const torus = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.012, 8, 80), new THREE.MeshBasicMaterial({ color: "#3A92EE", transparent: true, opacity: 0.15 }));
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

const FadeIn = ({ children, delay = 0, direction = "up", className = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.08 });
  const from = direction === "up" ? { opacity: 0, y: 28 } : direction === "left" ? { opacity: 0, x: -28 } : direction === "right" ? { opacity: 0, x: 28 } : { opacity: 0 };
  return (
    <motion.div ref={ref} className={className} initial={from} animate={inView ? { opacity: 1, x: 0, y: 0 } : {}} transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
};

const SectionHeader = ({ tag, title, highlight, desc }) => (
  <div className={s.sectionHeader}>
    <span className={s.tag}>{tag}</span>
    <h2 className={s.sectionTitle}>{title} {highlight && <span className={s.titleGrad}>{highlight}</span>}</h2>
    {desc && <p className={s.sectionDesc}>{desc}</p>}
  </div>
);

const ServicesTeams = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("collaboration");
  const go = () => router.push("/contact");
  const current = TEAMS_TABS.find((t) => t.id === activeTab);

  return (
    <div className={s.page}>
      <SEO
        title="Teams & Collaboration — Microsoft Teams & Slack Integration"
        description="CloudLit integrates Microsoft Teams, Slack, and collaboration platforms with your business systems. Unified communication, automation, security, and remote-first workflows."
        canonical="/services/teams"
      />
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}><ServicesTabs /></div>
      </section>

      <section className={s.hero}>
        <ThreeHero />
        <div className={s.heroOverlay} />
        <div className={s.heroInner}>
          <motion.span className={s.tag} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Teams & Collaboration</motion.span>
          <motion.h1 className={s.heroHeading} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Collaborate better,<br /><span className={s.heroGrad}>ship faster</span>
          </motion.h1>
          <motion.p className={s.heroPara} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Unified communication, seamless integrations, and enterprise security — Cloudlit helps your teams stay aligned and productive, wherever they work.
          </motion.p>
          <motion.div className={s.heroBtns} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <button className={s.btnPrimary} onClick={go}>Get Started <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
            <button className={s.btnGhost} onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>How it Works</button>
          </motion.div>
          <motion.div className={s.heroStats} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.45 }}>
            {[["Unified", "Platform"], ["24/7", "Collaboration"], ["Secure", "By Default"], ["Integrations", "Ready"]].map(([n, l]) => (
              <div key={l} className={s.heroStat}><span className={s.heroStatN}>{n}</span><span className={s.heroStatL}>{l}</span></div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className={s.howSection}>
        <div className={s.inner}>
          <FadeIn><SectionHeader tag="Our Process" title="How We Enable" highlight="Teams" desc="A 4-step approach that unifies communication, integrates with your stack, and keeps teams productive and secure." /></FadeIn>
          <div className={s.howGrid}>
            {HOW_IT_WORKS.map((item, i) => (
              <FadeIn key={item.step} delay={i * 0.1}>
                <div className={s.howCard}>
                  <div className={s.howStep} style={{ color: item.color, borderColor: `${item.color}30`, background: `${item.color}10` }}>{item.step}</div>
                  <h3 className={s.howTitle}>{item.title}</h3>
                  <p className={s.howDesc}>{item.desc}</p>
                  <div className={s.howNumber} style={{ color: `${item.color}08` }}>{item.step}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className={s.servicesSection}>
        <div className={s.inner}>
          <FadeIn><SectionHeader tag="What We Offer" title="Our Teams &" highlight="Collaboration Services" desc="End-to-end teams enablement — from unified communication to integrations and enterprise security." /></FadeIn>
          <div className={s.tabsWrap}>
            <div className={s.tabsRow}>
              {TEAMS_TABS.map((tab) => (
                <button key={tab.id} className={`${s.tabBtn} ${activeTab === tab.id ? s.tabBtnActive : ""}`} onClick={() => setActiveTab(tab.id)}>
                  <span className={s.tabBtnIcon}>{tab.icon}</span>{tab.label}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} className={s.tabPanel} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }}>
                <div className={s.tabPanelIcon}>{current?.icon}</div>
                <div className={s.tabPanelBody}>
                  <h3 className={s.tabPanelTitle}>{current?.heading}</h3>
                  <p className={s.tabPanelDesc}>{current?.para}</p>
                  <button className={s.tabPanelCta} onClick={go}>Get Started with {current?.label} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className={s.whySection}>
        <div className={s.inner}>
          <FadeIn><SectionHeader tag="Why Cloudlit" title="Your Trusted" highlight="Teams Partner" /></FadeIn>
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

      <section className={s.cta}>
        <div className={s.ctaGlow} />
        <div className={s.ctaInner}>
          <FadeIn>
            <h2 className={s.ctaTitle}>Ready to empower your teams?</h2>
            <p className={s.ctaDesc}>Let our experts design a unified collaboration strategy — from Microsoft Teams and Slack to integrations and security — so your teams can focus on what matters.</p>
            <button className={s.ctaBtn} onClick={go}>Book a Free Consultation <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ServicesTeams;
