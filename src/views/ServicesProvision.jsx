import { useEffect, useRef, useState } from "react";
import SEO from "../components/SEO";
import { useRouter } from "next/router";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import * as THREE from "three";
import ServicesTabs from "../components/ServicesTabs";
import styles from "../styles/Services.module.css";
import s from "../styles/ServicesProvision.module.css";
import Terraform from "../assets/terraform.webp";
import ansible from "../assets/ansible.webp";
import chef from "../assets/chef.webp";
import puppet from "../assets/puppet.webp";
import cloudFormation from "../assets/aws-cloudformation.webp";
import pulumi from "../assets/pulumi.svg";

/* ─── DATA ─────────────────────────────────────────── */

const PROVISION_TABS = [
  {
    id: "consulting",
    label: "Consulting",
    heading: "IT Infrastructure Consulting",
    para: "We assess your current IT infrastructure, develop a detailed improvement plan, and put it into action. Our proficient L1-L3 support covers your entire IT system — from user-facing issues to complex architectural challenges — ensuring continuous performance and reliability.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    id: "management",
    label: "Management",
    heading: "IT Infrastructure Management",
    para: "From the planning and design of your IT infrastructure to its administration, monitoring, troubleshooting, and evolution — we provide a broad range of management services. You can rely on our self-managed staff, or we collaborate alongside your existing IT team.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: "cloud",
    label: "Cloud Infra",
    heading: "Cloud Infrastructure Management",
    para: "We assist you in lowering the expenses associated with cloud migration, development, and app maintenance while ensuring optimal performance, stability, and security. We design, deploy, monitor, support, and optimize your cloud or hybrid IT infrastructure for high availability and scalability.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    id: "security",
    label: "Security",
    heading: "Cloud Infrastructure Security",
    para: "We identify and address vulnerabilities, monitor for security threats to your cloud infrastructure, boost the effectiveness of your security solutions, and maintain compliance. Our security engineers implement zero-trust principles across your entire infrastructure stack.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    id: "strategy",
    label: "Strategy",
    heading: "Well-Architected Frameworks",
    para: "We create reliable, scalable, high-quality IT infrastructure following well-architected frameworks. All frameworks focus on security, efficiency, reliability, cost optimization, and scalability. Cloudlit's team ensures you select the best strategy suited to your business needs.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Assess & Audit", desc: "We evaluate your existing infrastructure, identify configuration drift, security gaps, and cost inefficiencies in a comprehensive report.", color: "#3A92EE" },
  { step: "02", title: "Design as Code", desc: "Our engineers define your entire infrastructure as code — versioned, reviewed, and stored in Git — using Terraform, Ansible, or Pulumi.", color: "#5146CA" },
  { step: "03", title: "Provision & Deploy", desc: "We execute infrastructure provisioning with zero manual steps — repeatable, consistent, and fully auditable across every environment.", color: "#6015B2" },
  { step: "04", title: "Monitor & Maintain", desc: "Continuous drift detection, automated remediation, and scheduled reviews keep your infrastructure healthy and compliant long-term.", color: "#8B5CF6" },
];

const TOOLS = [
  { title: "Terraform", desc: "Declarative infrastructure as code for building, changing, and versioning cloud and on-prem resources.", icon: Terraform, color: "#7B42BC" },
  { title: "Ansible", desc: "Agentless automation for configuration management, application deployment, and IT orchestration.", icon: ansible, color: "#EE0000" },
  { title: "Chef", desc: "Configuration management platform for defining infrastructure as code and automating compliance.", icon: chef, color: "#F09820" },
  { title: "Puppet", desc: "Model-driven configuration management for automating complex infrastructure at enterprise scale.", icon: puppet, color: "#FFAE1A" },
  { title: "AWS CloudFormation", desc: "Native IaC service for modeling and provisioning AWS resources in a repeatable, predictable way.", icon: cloudFormation, color: "#FF9900" },
  { title: "Pulumi", desc: "Modern IaC using real programming languages — TypeScript, Python, Go — for maximum flexibility.", icon: pulumi, color: "#8A3391" },
];

const WHY_CARDS = [
  {
    title: "Heterogeneous IT Environments",
    desc: "Our team handles both modern and legacy tech stacks, architectures, and deployment approaches with equal expertise.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
  },
  {
    title: "Staying on Top of Security",
    desc: "Competent architects, compliance experts, administrators, and security analysts cover all duties of a security operations center.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: "Availability & Backups",
    desc: "We ensure continuous monitoring, make architecture adjustments to prevent failures, and back up your IT components to maximize availability.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>,
  },
  {
    title: "Optimized IT Costs",
    desc: "By optimizing resources, efficiently utilizing servers, and implementing right-sizing strategies, we can reduce your IT costs by 20–40%.",
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>,
  },
];

const FAQ_ITEMS = [
  { q: "How do Cloudlit's IT Infrastructure consulting services support my company?", a: "IT Infrastructure management is a broad collection of strategies to align different processes and streamline operations. Partnering with Cloudlit guarantees efficient management and continuous improvement of your IT Infrastructure, paving the way for future growth by applying domain knowledge, technical expertise, and invaluable insights." },
  { q: "What is IT Infrastructure Management and Infrastructure Provisioning?", a: "Infrastructure Management refers to the hardware, software, and other systems necessary for delivering IT services in accordance with SLAs. Infrastructure Provisioning tasks can be efficiently managed using automation — specifically Infrastructure as Code (IaC). By storing infrastructure specifications in config files, developers can run a script to consistently provision identical environments." },
  { q: "Why are automated Infrastructure Provisioning tools important?", a: "Automation lowers IT expenses by replacing numerous separate provisioning tools. It provides a declarative framework that lets you specify the preferred state without specific commands. It also incorporates self-service and role-based access for security, management, and compliance." },
  { q: "What are the different strategies for efficient IT infrastructure management?", a: "Organizations can utilize cloud adoption, automation, virtualization, and network optimization to create a robust and flexible IT environment. Cloudlit's team helps you select the right combination of strategies based on your workload types, compliance requirements, and budget constraints." },
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

const ServicesProvision = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("consulting");
  const [openFaq, setOpenFaq] = useState(null);
  const go = () => router.push("/contact");
  const current = PROVISION_TABS.find((t) => t.id === activeTab);

  return (
    <div className={s.page}>
      <SEO
        title="Infrastructure Management — IaC, Provisioning & Security"
        description="CloudLit provides IT infrastructure management, provisioning with Terraform & Ansible, cloud infrastructure security, and well-architected framework consulting."
        canonical="/services/provision"
      />
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}><ServicesTabs /></div>
      </section>

      <section className={s.hero}>
        <ThreeHero />
        <div className={s.heroOverlay} />
        <div className={s.heroInner}>
          <motion.span className={s.tag} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Infrastructure Management Services</motion.span>
          <motion.h1 className={s.heroHeading} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Scale automation with <span className={s.heroGrad}>Control & Insight</span>
          </motion.h1>
          <motion.p className={s.heroPara} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            Cloudlit ensures every environment is provisioned with a defined strategy for maintenance, change control, and documentation — eliminating configuration drift before it becomes an outage.
          </motion.p>
          <motion.div className={s.heroBtns} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <button className={s.btnPrimary} onClick={go}>Get Started <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
            <button className={s.btnGhost} onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}>How it Works</button>
          </motion.div>
          <motion.div className={s.heroStats} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.45 }}>
            {[["100%", "IaC Driven"], ["20–40%", "Cost Reduction"], ["Zero", "Config Drift"], ["24/7", "Monitoring"]].map(([n, l]) => (
              <div key={l} className={s.heroStat}><span className={s.heroStatN}>{n}</span><span className={s.heroStatL}>{l}</span></div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="how-it-works" className={s.howSection}>
        <div className={s.inner}>
          <FadeIn><SectionHeader tag="Our Process" title="How We Deliver" highlight="Infrastructure as Code" desc="A structured 4-step approach that takes your infrastructure from ad-hoc to fully automated and versioned." /></FadeIn>
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
          <FadeIn><SectionHeader tag="What We Offer" title="Our Infrastructure Management" highlight="Services" desc="We are ready to provide our customers with any set of service components to form an ideal service scope." /></FadeIn>
          <div className={s.tabsWrap}>
            <div className={s.tabsRow}>
              {PROVISION_TABS.map((tab) => (
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
          <FadeIn><SectionHeader tag="Technologies" title="Tools & Technologies" highlight="We Work With" desc="Cloudlit's team professionally handles modern enterprise IT infrastructures — massive, complex, and heterogeneous." /></FadeIn>
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
          <FadeIn><SectionHeader tag="Why Cloudlit" title="Your Trusted Partner for" highlight="IT Infrastructure Management" /></FadeIn>
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
            <h2 className={s.ctaTitle}>Ready to automate your infrastructure?</h2>
            <p className={s.ctaDesc}>Let our engineers design a fully automated, IaC-driven infrastructure that scales with your business — risk-free consultation included.</p>
            <button className={s.ctaBtn} onClick={go}>Book a Free Consultation <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg></button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};

export default ServicesProvision;
