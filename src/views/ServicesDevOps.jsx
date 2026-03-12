import { useEffect, useRef, useState } from "react";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import ServicesTabs from "../components/ServicesTabs";
import styles from "../styles/Services.module.css";
import s from "../styles/ServicesDevOps.module.css";
/* ─── DATA ─────────────────────────────────────────── */

const DEVOPS_TABS = [
  {
    id: "cicd",
    label: "CI/CD",
    heading: "CI/CD Pipeline Automation",
    para: "We design and implement end-to-end CI/CD pipelines using GitLab, GitHub Actions, Jenkins, and TeamCity. Our pipelines automate build, test, and deployment workflows — reducing release cycles from weeks to minutes while maintaining quality gates at every stage.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "containers",
    label: "Containers",
    heading: "Container & Orchestration",
    para: "From Dockerizing your applications to running production-grade Kubernetes clusters, we handle the full container lifecycle. Our engineers architect multi-cluster deployments, configure auto-scaling policies, and implement health-check strategies that keep your services resilient at any scale.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    id: "automation",
    label: "Automation",
    heading: "Infrastructure Automation",
    para: "We automate repetitive infrastructure tasks with Ansible playbooks, shell scripting, and cloud-native automation services. From server provisioning to patch management and compliance checks, our automation frameworks save hundreds of engineering hours every month.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
      </svg>
    ),
  },
  {
    id: "gitops",
    label: "GitOps",
    heading: "GitOps & Source Control",
    para: "We implement GitOps workflows using ArgoCD and Flux, making Git the single source of truth for all infrastructure and application state. Every change is version-controlled, peer-reviewed, and auditable — giving your teams full traceability and instant rollback capabilities.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
  },
  {
    id: "security",
    label: "DevSecOps",
    heading: "DevSecOps & Security Automation",
    para: "Security is built into every stage of our pipelines — not bolted on at the end. We integrate SAST, DAST, container scanning, secret detection, and compliance-as-code tools so vulnerabilities are caught early, automatically, and consistently across all environments.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Assess & Plan", desc: "We audit your current development workflows, tooling, and pain points to build a tailored DevOps transformation roadmap.", color: "#3A92EE" },
  { step: "02", title: "Design Pipelines", desc: "Our engineers design CI/CD pipelines, branching strategies, and container architectures matched to your team size and release cadence.", color: "#5146CA" },
  { step: "03", title: "Implement & Automate", desc: "We build and deploy the full toolchain — containers, orchestration, pipelines, secrets management — with minimal disruption to live systems.", color: "#6015B2" },
  { step: "04", title: "Optimize & Scale", desc: "Post-implementation, we monitor pipeline performance, reduce build times, and continuously refine your DevOps practices as your team grows.", color: "#8B5CF6" },
];

const TOOLS = [
  { title: "Docker", desc: "Containerize applications for consistent, portable deployments across every environment.", icon: "/assets/docker-logo.webp", color: "#2496ED" },
  { title: "Kubernetes", desc: "Orchestrate containers at scale with automated scheduling, healing, and rolling updates.", icon: "/assets/kubernetes.webp", color: "#326CE5" },
  { title: "GitLab", desc: "Complete DevOps platform covering source control, CI/CD, security, and monitoring.", icon: "/assets/Gitlab.webp", color: "#FC6D26" },
  { title: "GitHub Actions", desc: "Native CI/CD workflows triggered directly from your GitHub repositories.", icon: "/assets/GitHub.webp", color: "#24292F" },
  { title: "TeamCity", desc: "Powerful CI/CD server with deep build configuration flexibility and plugin ecosystem.", icon: "/assets/TeamCity.webp", color: "#000000" },
  { title: "Ansible", desc: "Agentless automation for configuration management, deployments, and IT orchestration.", icon: "/assets/ansible.webp", color: "#EE0000" },
];

const WHY_CARDS = [
  {
    title: "Faster Release Cycles",
    desc: "Automated pipelines eliminate manual handoffs, cutting average deployment times from days to minutes.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>,
  },
  {
    title: "Higher Reliability",
    desc: "Automated testing, rollback mechanisms, and health checks ensure every deployment is safe and recoverable.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  },
  {
    title: "Full Visibility",
    desc: "Every build, test, and deployment is logged and traceable — giving developers and managers complete audit trails.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  },
  {
    title: "Scalable Architecture",
    desc: "Kubernetes-native deployments auto-scale to handle traffic spikes without manual intervention or over-provisioning.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  },
];

const FAQ_ITEMS = [
  { q: "What is DevOps and why does my organization need it?", a: "DevOps is a set of practices that combines software development and IT operations to shorten the development lifecycle and deliver high-quality software continuously. Organizations adopting DevOps see faster releases, fewer incidents, and stronger team collaboration." },
  { q: "How long does a typical DevOps transformation take?", a: "Initial pipeline automation can be delivered in 2-4 weeks. A full DevOps transformation — covering culture, tooling, processes, and team training — typically takes 3-6 months depending on your current state and organizational complexity." },
  { q: "Do you work with our existing tools, or do we need to switch?", a: "We start with your existing toolchain and integrate improvements incrementally. We only recommend replacing tools when there is a clear, measurable benefit — and we manage the migration with zero disruption to ongoing development." },
  { q: "Can Cloudlit help with Kubernetes cluster management on-premise?", a: "Yes. We manage Kubernetes clusters on AWS EKS, Azure AKS, GCP GKE, and bare-metal or on-premise environments using distributions like RKE2 and OpenShift. Our certified engineers handle cluster provisioning, upgrades, networking, and security hardening." },
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
      positions[i * 3] = (Math.random() - 0.5) * 14; positions[i * 3 + 1] = (Math.random() - 0.5) * 8; positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
      const col = palette[Math.floor(Math.random() * 3)];
      colors[i * 3] = col.r; colors[i * 3 + 1] = col.g; colors[i * 3 + 2] = col.b;
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
    const onMouse = (e) => { mouse.x = (e.clientX / window.innerWidth - 0.5) * 2; mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2; };
    window.addEventListener("mousemove", onMouse);
    let frame;
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = Date.now() * 0.0005;
      particles.rotation.y = t * 0.12; particles.rotation.x = t * 0.05;
      ico.rotation.y = t * 0.18; ico.rotation.x = t * 0.09;
      torus.rotation.z = t * 0.06;
      camera.position.x += (mouse.x * 0.4 - camera.position.x) * 0.03;
      camera.position.y += (mouse.y * 0.3 - camera.position.y) * 0.03;
      renderer.render(scene, camera);
    };
    animate();
    const onResize = () => { const w = canvas.offsetWidth; const h = canvas.offsetHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("mousemove", onMouse); window.removeEventListener("resize", onResize); renderer.dispose(); };
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

const ServicesDevOps = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("cicd");
  const [openFaq, setOpenFaq] = useState(null);
  const go = () => router.push("/contact");
  const current = DEVOPS_TABS.find((t) => t.id === activeTab);

  return (
    <div className={s.page}>
      <SEO
        title="DevOps Services — CI/CD, Containers & Automation"
        description="CloudLit delivers expert DevOps services including CI/CD pipeline automation, Docker & Kubernetes container orchestration, GitOps, infrastructure automation, and DevSecOps."
        canonical="/services/devops"
      />
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}><ServicesTabs /></div>
      </section>

      <section className={s.hero}>
        <ThreeHero />
        <div className={s.heroOverlay} />
        <div className={s.heroInner}>
          <motion.span className={s.tag} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>DevOps Services</motion.span>
          <motion.h1 className={s.heroHeading} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Ship faster with <span className={s.heroGrad}>Modern DevOps</span><br />pipelines
          </motion.h1>
          <motion.p className={s.heroPara} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            From container orchestration to GitOps and DevSecOps — Cloudlit engineers build the automation backbone that lets your team ship with confidence.
          </motion.p>
          <motion.div className={s.heroBtns} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <button className={s.btnPrimary} onClick={go}>Get Started <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
            <button className={s.btnGhost} onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>How it Works</button>
          </motion.div>
          <motion.div className={s.heroStats} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.45 }}>
            {[["10x", "Faster Deploys"], ["99.9%", "Uptime SLA"], ["Zero", "Manual Releases"], ["24/7", "Support"]].map(([n, l]) => (
              <div key={l} className={s.heroStat}><span className={s.heroStatN}>{n}</span><span className={s.heroStatL}>{l}</span></div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className={s.howSection}>
        <div className={s.inner}>
          <FadeIn><SectionHeader tag="Our Process" title="How We Deliver" highlight="DevOps Excellence" desc="A structured 4-step engagement that takes you from assessment to a fully automated delivery pipeline." /></FadeIn>
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
          <FadeIn><SectionHeader tag="What We Offer" title="Our DevOps" highlight="Services" desc="End-to-end DevOps capabilities covering every stage of the modern software delivery lifecycle." /></FadeIn>
          <div className={s.tabsWrap}>
            <div className={s.tabsRow}>
              {DEVOPS_TABS.map((tab) => (
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

      <section className={s.toolsSection}>
        <div className={s.inner}>
          <FadeIn><SectionHeader tag="Tools & Technologies" title="DevOps Tools We" highlight="Work With" desc="Battle-tested tools and platforms that power our DevOps implementations." /></FadeIn>
          <div className={s.toolsGrid}>
            {TOOLS.map((t, i) => (
              <FadeIn key={t.title} delay={i * 0.08}>
                <div className={s.toolCard} style={{ "--accent": t.color }}>
                  <div className={s.toolLogo}><img src={t.icon} alt={t.title} /></div>
                  <h3 className={s.toolTitle}>{t.title}</h3>
                  <p className={s.toolDesc}>{t.desc}</p>
                  <button className={s.toolLink} onClick={go}>Learn More →</button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className={s.whySection}>
        <div className={s.inner}>
          <FadeIn><SectionHeader tag="Why Cloudlit" title="Your Trusted" highlight="DevOps Partner" /></FadeIn>
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

      <section className={s.faqSection}>
        <div className={s.faqInner}>
          <FadeIn><SectionHeader tag="FAQ" title="Frequently Asked" highlight="Questions" /></FadeIn>
          <div className={s.faqList}>
            {FAQ_ITEMS.map((item, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <div className={`${s.faqItem} ${openFaq === i ? s.faqOpen : ""}`}>
                  <button className={s.faqQ} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{item.q}</span>
                    <motion.span animate={{ rotate: openFaq === i ? 180 : 0 }} transition={{ duration: 0.28 }} style={{ display: "flex" }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9" /></svg>
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div className={s.faqA} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
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

      <section className={s.cta}>
        <div className={s.ctaGlow} />
        <div className={s.ctaInner}>
          <FadeIn>
            <h2 className={s.ctaTitle}>Ready to transform your delivery pipeline?</h2>
            <p className={s.ctaDesc}>Let our DevOps engineers build the automation infrastructure your team deserves — risk-free consultation included.</p>
            <button className={s.ctaBtn} onClick={go}>Book a Free Consultation <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ServicesDevOps;
