import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { caseStudies } from "../data/caseStudies";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/CaseStudies.module.css";

const INDUSTRIES = ["Travel", "Real Estate", "Healthcare", "Recruitment", "Automotive", "AI & ML", "All Industries"];
const TECHNOLOGIES = ["Azure", "React.js", "AWS", "Javascript", "PHP", "Wordpress", "Cloud", "Docker", "Python"];

/* Per-card accent colours cycling through brand palette */
const CARD_COLORS = [
  { from: "#3A92EE", to: "#5146CA" },
  { from: "#5146CA", to: "#6015B2" },
  { from: "#6015B2", to: "#8B5CF6" },
  { from: "#8B5CF6", to: "#3A92EE" },
  { from: "#3A92EE", to: "#6015B2" },
  { from: "#5146CA", to: "#3A92EE" },
  { from: "#6015B2", to: "#5146CA" },
];

/* Stat ticker shown in hero */
const STATS = [
  { value: "7+", label: "Case Studies" },
  { value: "5", label: "Industries" },
  { value: "100%", label: "Cloud-Native" },
  { value: "24/7", label: "Support" },
];


const CaseStudiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState({ industry: "", tech: "" });
  const [openDropdown, setOpenDropdown] = useState(null); // "industry" | "tech" | null
  const industryRef = useRef(null);
  const techRef = useRef(null);

  const filtered = caseStudies.filter((cs) => {
    const q = searchTerm.toLowerCase();
    const matchSearch =
      !q ||
      cs.title.toLowerCase().includes(q) ||
      cs.description.toLowerCase().includes(q) ||
      (cs.shortDescription && cs.shortDescription.toLowerCase().includes(q));
    const matchIndustry = !activeFilters.industry || cs.industry === activeFilters.industry;
    const matchTech = !activeFilters.tech || cs.technologies.includes(activeFilters.tech);
    return matchSearch && matchIndustry && matchTech;
  });

  const setFilter = (type, value) => {
    setActiveFilters((prev) => ({ ...prev, [type]: prev[type] === value ? "" : value }));
    setOpenDropdown(null);
  };

  const clearAll = () => {
    setActiveFilters({ industry: "", tech: "" });
    setSearchTerm("");
    setOpenDropdown(null);
  };

  const hasFilters = activeFilters.industry || activeFilters.tech || searchTerm;

  useEffect(() => {
    const handler = (e) => {
      if (industryRef.current && !industryRef.current.contains(e.target)) {
        setOpenDropdown((d) => (d === "industry" ? null : d));
      }
      if (techRef.current && !techRef.current.contains(e.target)) {
        setOpenDropdown((d) => (d === "tech" ? null : d));
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler, { passive: true });
    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroMesh} aria-hidden />
        <div className={styles.heroOrb1} aria-hidden />
        <div className={styles.heroOrb2} aria-hidden />

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={styles.heroTag}>Portfolio</span>
          <h1 className={styles.heroTitle}>
            Real Results,<br />
            <span className={styles.heroGradient}>Real Impact.</span>
          </h1>
          <p className={styles.heroSub}>
            Cloud and DevOps transformations that moved the needle for our clients — from startups to enterprise.
          </p>

          {/* Stats row */}
          <div className={styles.statsRow}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statItem}>
                <span className={styles.statValue}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tech pill strip */}
        <motion.div
          className={styles.pillStrip}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {["AWS", "Azure", "React", "Docker", "OpenShift", "Cloud"].map((t) => (
            <span key={t} className={styles.floatingPill}>{t}</span>
          ))}
        </motion.div>
      </section>

      {/* ── TOOLBAR ── */}
      <motion.div
        className={styles.toolbar}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {/* Search */}
        <form className={styles.searchWrap} onSubmit={(e) => e.preventDefault()} role="search">
          <svg className={styles.searchIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
          </svg>
          <input
            type="search"
            placeholder="Search case studies..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={styles.searchInput}
            aria-label="Search case studies"
          />
        </form>

        <div className={styles.filters}>
          {/* Industry dropdown */}
          <div ref={industryRef} className={styles.dropdownWrap}>
            <button
              type="button"
              className={`${styles.filterTrigger} ${activeFilters.industry ? styles.filterActive : ""}`}
              onClick={() => setOpenDropdown((d) => (d === "industry" ? null : "industry"))}
              aria-expanded={openDropdown === "industry"}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 7h18M6 12h12M10 17h4" />
              </svg>
              {activeFilters.industry || "Industry"}
              <span className={`${styles.chevron} ${openDropdown === "industry" ? styles.chevronOpen : ""}`}>▾</span>
            </button>
            <AnimatePresence>
              {openDropdown === "industry" && (
                <motion.div
                  className={styles.dropdown}
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                >
                  {INDUSTRIES.map((ind) => (
                    <button
                      key={ind}
                      type="button"
                      className={`${styles.dropdownItem} ${activeFilters.industry === ind ? styles.dropdownItemActive : ""}`}
                      onClick={() => setFilter("industry", ind)}
                    >
                      {activeFilters.industry === ind && <span className={styles.checkmark}>✓</span>}
                      {ind}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Technologies dropdown */}
          <div ref={techRef} className={styles.dropdownWrap}>
            <button
              type="button"
              className={`${styles.filterTrigger} ${activeFilters.tech ? styles.filterActive : ""}`}
              onClick={() => setOpenDropdown((d) => (d === "tech" ? null : "tech"))}
              aria-expanded={openDropdown === "tech"}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
              {activeFilters.tech || "Technologies"}
              <span className={`${styles.chevron} ${openDropdown === "tech" ? styles.chevronOpen : ""}`}>▾</span>
            </button>
            <AnimatePresence>
              {openDropdown === "tech" && (
                <motion.div
                  className={styles.dropdown}
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.18 }}
                >
                  {TECHNOLOGIES.map((tech) => (
                    <button
                      key={tech}
                      type="button"
                      className={`${styles.dropdownItem} ${activeFilters.tech === tech ? styles.dropdownItemActive : ""}`}
                      onClick={() => setFilter("tech", tech)}
                    >
                      {activeFilters.tech === tech && <span className={styles.checkmark}>✓</span>}
                      {tech}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Clear */}
          <AnimatePresence>
            {hasFilters && (
              <motion.button
                type="button"
                className={styles.clearBtn}
                onClick={clearAll}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.15 }}
              >
                ✕ Clear
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Results count */}
        <span className={styles.resultCount}>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</span>
      </motion.div>

      {/* ── GRID ── */}
      <div className={styles.gridSection}>
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              className={styles.grid}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              variants={{
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
                hidden: {},
              }}
            >
              {filtered.map((cs, index) => {
                const color = CARD_COLORS[index % CARD_COLORS.length];
                const isFeatured = index === 0 && filtered.length > 1;
                const CardTag = cs.link.startsWith("http") ? "a" : Link;
                const cardProps = cs.link.startsWith("http")
                  ? { href: cs.link, target: "_blank", rel: "noopener noreferrer" }
                  : { to: cs.link };

                return (
                  <motion.article
                    key={cs.id}
                    className={`${styles.card} ${isFeatured ? styles.cardFeatured : ""}`}
                    style={{ "--from": color.from, "--to": color.to }}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                    }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  >
                    {/* Accent line at top */}
                    <div className={styles.cardAccent} />

                    {/* Card header band */}
                    <div className={styles.cardHeader}>
                      {/* Number watermark */}
                      <span className={styles.cardNumber}>
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className={styles.cardHeaderLeft}>
                        <span className={styles.cardIndustry}>{cs.industry}</span>
                        <h3 className={styles.cardHeaderTitle}>{cs.title}</h3>
                      </div>

                      {isFeatured && (
                        <span className={styles.featuredBadge}>Featured</span>
                      )}
                    </div>

                    {/* Card body */}
                    <div className={styles.cardBody}>
                      <p className={styles.cardSolution}>{cs.solution}</p>
                      <p className={styles.cardDesc}>
                        {cs.shortDescription || cs.description.substring(0, 120) + "…"}
                      </p>

                      <div className={styles.cardTech}>
                        {cs.technologies.slice(0, 4).map((t) => (
                          <span key={t} className={styles.techTag}>{t}</span>
                        ))}
                      </div>

                      <CardTag {...cardProps} className={styles.cardCta}>
                        <span>View Case Study</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </CardTag>
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className={styles.empty}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className={styles.emptyIcon}>🔍</div>
              <p className={styles.emptyTitle}>No case studies match your filters.</p>
              <p className={styles.emptyDesc}>Try adjusting your search or clearing the filters.</p>
              <button type="button" className={styles.emptyBtn} onClick={clearAll}>
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
