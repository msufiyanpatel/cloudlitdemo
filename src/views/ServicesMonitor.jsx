import { useEffect, useRef, useState } from "react";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import ServicesTabs from "../components/ServicesTabs";
import styles from "../styles/Services.module.css";
import s from "../styles/ServicesMonitor.module.css";
/* ─── DATA ─────────────────────────────────────────── */

const MONITOR_TABS = [
  {
    id: "monitoring",
    label: "Monitoring",
    heading: "Full-Stack Infrastructure Monitoring",
    para: "We instrument your entire stack — hosts, containers, serverless functions, and managed services — with Prometheus, Datadog, and Grafana. Our monitoring setups provide real-time visibility into every layer of your infrastructure with automatic anomaly detection and alerting.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    id: "observability",
    label: "Observability",
    heading: "Distributed Tracing & Observability",
    para: "We implement the three pillars of observability — metrics, logs, and traces — using OpenTelemetry, Jaeger, and the ELK Stack. Our engineers correlate data across services to give you a complete picture of application performance and user experience in real time.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    id: "alerting",
    label: "Alerting",
    heading: "Intelligent Alerting & Incident Response",
    para: "We configure smart alerting with PagerDuty, OpsGenie, and Alertmanager — tuned to minimize noise and maximize signal. Our on-call runbooks, escalation policies, and post-mortem frameworks help teams respond faster and prevent repeat incidents.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    id: "messaging",
    label: "Messaging",
    heading: "Event-Driven Messaging & Caching",
    para: "We design and operate Kafka and RabbitMQ event streaming architectures that handle millions of messages per second. Our engineers implement dead-letter queues, consumer groups, partition strategies, and Redis caching layers to ensure zero message loss and sub-millisecond latency.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "logging",
    label: "Logging",
    heading: "Centralized Log Management",
    para: "We build centralized logging pipelines with the ELK Stack (Elasticsearch, Logstash, Kibana), Fluentd, and Loki. Structured log ingestion, retention policies, and indexed search enable your teams to find root causes in seconds rather than hours.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    ),
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Instrument & Integrate", desc: "We instrument your applications and infrastructure with the right agents and exporters, connecting all signals to a unified observability platform.", color: "#3A92EE" },
  { step: "02", title: "Build Dashboards", desc: "Our engineers create purpose-built dashboards for engineering, ops, and business stakeholders — each showing what matters most to them.", color: "#5146CA" },
  { step: "03", title: "Configure Alerting", desc: "We tune alert thresholds, define escalation policies, and write runbooks so on-call teams always know exactly what to do when something fires.", color: "#6015B2" },
  { step: "04", title: "Optimize & Evolve", desc: "We continuously review alert fatigue, coverage gaps, and dashboard relevance — evolving your observability stack alongside your product.", color: "#8B5CF6" },
];

const TOOLS = [
  { title: "Prometheus", desc: "Open-source monitoring and alerting toolkit with dimensional data model and powerful query language.", icon: "/assets/promoetheus.webp", color: "#E6522C" },
  { title: "Datadog", desc: "Unified monitoring platform for infrastructure, APM, logs, and real-time user experience analytics.", icon: "/assets/datadog.webp", color: "#632CA6" },
  { title: "PagerDuty", desc: "Incident management platform for intelligent alerting, on-call scheduling, and rapid response coordination.", icon: "/assets/pagerduty.webp", color: "#25C151" },
  { title: "Apache Kafka", desc: "Distributed event streaming platform capable of handling millions of events per second at low latency.", icon: "/assets/kafka.webp", color: "#000000" },
  { title: "RabbitMQ", desc: "Reliable message broker for decoupling services with support for multiple messaging protocols.", icon: "/assets/rabbitmq.webp", color: "#FF6600" },
];

const WHY_CARDS = [
  {
    title: "Full-Stack Visibility",
    desc: "Every layer from bare metal to user sessions is instrumented and correlated — giving complete end-to-end visibility in a single pane of glass.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>,
  },
  {
    title: "Faster Incident Resolution",
    desc: "Correlated metrics, traces, and logs reduce mean time to detect (MTTD) and mean time to resolve (MTTR) incidents dramatically.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>,
  },
  {
    title: "Proactive Problem Detection",
    desc: "Anomaly detection and predictive alerting surface issues before they impact users — turning reactive ops teams into proactive ones.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
  },
  {
    title: "Scalable Messaging",
    desc: "Event-driven architectures built on Kafka and RabbitMQ ensure your services stay decoupled, resilient, and capable of handling any traffic volume.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>,
  },
];

const FAQ_ITEMS = [
  { q: "What is the difference between monitoring and observability?", a: "Monitoring tells you whether a system is up or down. Observability tells you why — by combining metrics, logs, and distributed traces to let you ask any question about system state without needing to predict it in advance. Cloudlit implements both together for complete operational insight." },
  { q: "Which monitoring tools does Cloudlit work with?", a: "We work with Prometheus, Grafana, Datadog, New Relic, Dynatrace, PagerDuty, OpsGenie, ELK Stack, Loki, Jaeger, and OpenTelemetry. We recommend and implement the right combination based on your existing stack, team size, and budget." },
  { q: "How does Cloudlit help reduce alert fatigue?", a: "We audit your existing alert rules, remove redundant or noisy alerts, implement severity levels, add deduplication, and tune thresholds based on historical incident data. The goal is that every alert that fires is actionable and leads to a defined response." },
  { q: "Can Cloudlit build real-time event streaming with Kafka for our microservices?", a: "Yes. We design and implement complete Kafka architectures — including topic partitioning strategies, consumer group management, schema registries, exactly-once semantics, and monitoring of consumer lag. We also handle Kafka on Kubernetes using Strimzi or Confluent Platform." },
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

const ServicesMonitor = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("monitoring");
  const [openFaq, setOpenFaq] = useState(null);
  const go = () => router.push("/contact");
  const current = MONITOR_TABS.find((t) => t.id === activeTab);

  return (
    <div className={s.page}>
      <SEO
        title="Enterprise Monitoring — Observability, Alerting & Logging"
        description="CloudLit implements full-stack monitoring with Prometheus, Datadog, PagerDuty, and ELK Stack. Distributed tracing, intelligent alerting, and Kafka event streaming."
        canonical="/services/monitor"
      />
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}><ServicesTabs /></div>
      </section>

      <section className={s.hero}>
        <ThreeHero />
        <div className={s.heroOverlay} />
        <div className={s.heroInner}>
          <motion.span className={s.tag} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Enterprise Monitoring & Observability</motion.span>
          <motion.h1 className={s.heroHeading} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            See everything,<br /><span className={s.heroGrad}>miss nothing</span>
          </motion.h1>
          <motion.p className={s.heroPara} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Full-stack monitoring, distributed tracing, intelligent alerting, and event-driven messaging — Cloudlit builds the observability foundation your team needs to operate with confidence.
          </motion.p>
          <motion.div className={s.heroBtns} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <button className={s.btnPrimary} onClick={go}>Get Started <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
            <button className={s.btnGhost} onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>How it Works</button>
          </motion.div>
          <motion.div className={s.heroStats} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.45 }}>
            {[["100%", "Stack Coverage"], ["<1min", "Alert Response"], ["3 Pillars", "of Observability"], ["24/7", "Monitoring"]].map(([n, l]) => (
              <div key={l} className={s.heroStat}><span className={s.heroStatN}>{n}</span><span className={s.heroStatL}>{l}</span></div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className={s.howSection}>
        <div className={s.inner}>
          <FadeIn><SectionHeader tag="Our Process" title="How We Build" highlight="Observability" desc="A 4-step approach that instruments your stack and turns raw telemetry into actionable operational insight." /></FadeIn>
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
          <FadeIn><SectionHeader tag="What We Offer" title="Our Enterprise Monitoring &" highlight="Observability Services" desc="Comprehensive monitoring capabilities covering metrics, traces, logs, alerting, and event streaming." /></FadeIn>
          <div className={s.tabsWrap}>
            <div className={s.tabsRow}>
              {MONITOR_TABS.map((tab) => (
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
          <FadeIn><SectionHeader tag="Tools & Technologies" title="Monitoring Tools We" highlight="Work With" desc="Industry-leading observability and messaging tools that power reliable production systems." /></FadeIn>
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
          <FadeIn><SectionHeader tag="Why Cloudlit" title="Your Trusted" highlight="Observability Partner" /></FadeIn>
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
            <h2 className={s.ctaTitle}>Ready to achieve full-stack observability?</h2>
            <p className={s.ctaDesc}>Let our engineers instrument your entire stack and build the dashboards and alerts your team needs — risk-free consultation included.</p>
            <button className={s.ctaBtn} onClick={go}>Book a Free Consultation <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ServicesMonitor;
