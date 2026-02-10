import { useState, useRef, useEffect } from "react";
import { caseStudies } from "../data/caseStudies";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../styles/CaseStudies.module.css";

const INDUSTRIES = ["Travel", "Real Estate", "Healthcare", "Recruitment", "Automotive"];
const TECHNOLOGIES = ["Azure", "React.js", "AWS", "Javascript", "PHP", "Wordpress", "Cloud"];

const CaseStudiesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [showTechnologyDropdown, setShowTechnologyDropdown] = useState(false);
  const industryDropdownRef = useRef(null);
  const technologyDropdownRef = useRef(null);

  const filteredCaseStudies = caseStudies.filter((cs) => {
    const matchesSearch =
      cs.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cs.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (cs.shortDescription && cs.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesIndustry = !industryFilter || cs.industry === industryFilter;
    const matchesTech = !techFilter || cs.technologies.includes(techFilter);
    return matchesSearch && matchesIndustry && matchesTech;
  });

  const handleFilter = (type, value) => {
    if (type === "industry") {
      setIndustryFilter((prev) => (prev === value ? "" : value));
      setShowIndustryDropdown(false);
    } else {
      setTechFilter((prev) => (prev === value ? "" : value));
      setShowTechnologyDropdown(false);
    }
  };

  const clearFilters = () => {
    setIndustryFilter("");
    setTechFilter("");
    setSearchTerm("");
    setShowIndustryDropdown(false);
    setShowTechnologyDropdown(false);
  };

  const hasActiveFilters = searchTerm || industryFilter || techFilter;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (industryDropdownRef.current && !industryDropdownRef.current.contains(e.target))
        setShowIndustryDropdown(false);
      if (technologyDropdownRef.current && !technologyDropdownRef.current.contains(e.target))
        setShowTechnologyDropdown(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.page}>
      {/* Hero: add portfolio-hero.png to public/ to use your own background image */}
      <section
        className={styles.hero}
        style={{
          backgroundImage: "url(/portfolio-hero.png)",
        }}
      >
        <div className={styles.heroGlow} />
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.heroTag}>Portfolio</span>
          <h1 className={styles.heroTitle}>
            Case <span className={styles.heroGradient}>Studies</span>
          </h1>
          <p className={styles.heroSub}>
            Real-world cloud and DevOps transformations we’ve delivered for our clients.
          </p>
        </motion.div>
      </section>

      {/* Toolbar: search + filters */}
      <motion.div
        className={styles.toolbar}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <form
          className={styles.searchWrap}
          onSubmit={(e) => e.preventDefault()}
          role="search"
        >
          <span className={styles.searchIcon} aria-hidden>⌕</span>
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
          <div ref={industryDropdownRef} className={styles.dropdownWrap}>
            <button
              type="button"
              className={`${styles.filterTrigger} ${industryFilter ? styles.filterTriggerActive : ""}`}
              onClick={() => {
                setShowIndustryDropdown((v) => !v);
                setShowTechnologyDropdown(false);
              }}
              aria-expanded={showIndustryDropdown}
              aria-haspopup="true"
            >
              <span className={styles.filterTriggerLabel}>Industry</span>
              {industryFilter && <span className={styles.filterTriggerChip}>{industryFilter}</span>}
              <span className={styles.chevron}>▾</span>
            </button>
            <div className={`${styles.dropdown} ${showIndustryDropdown ? styles.dropdownOpen : ""}`}>
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind}
                  type="button"
                  className={industryFilter === ind ? styles.dropdownItemActive : styles.dropdownItem}
                  onClick={() => handleFilter("industry", ind)}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          <div ref={technologyDropdownRef} className={styles.dropdownWrap}>
            <button
              type="button"
              className={`${styles.filterTrigger} ${techFilter ? styles.filterTriggerActive : ""}`}
              onClick={() => {
                setShowTechnologyDropdown((v) => !v);
                setShowIndustryDropdown(false);
              }}
              aria-expanded={showTechnologyDropdown}
              aria-haspopup="true"
            >
              <span className={styles.filterTriggerLabel}>Technologies</span>
              {techFilter && <span className={styles.filterTriggerChip}>{techFilter}</span>}
              <span className={styles.chevron}>▾</span>
            </button>
            <div className={`${styles.dropdown} ${showTechnologyDropdown ? styles.dropdownOpen : ""}`}>
              {TECHNOLOGIES.map((tech) => (
                <button
                  key={tech}
                  type="button"
                  className={techFilter === tech ? styles.dropdownItemActive : styles.dropdownItem}
                  onClick={() => handleFilter("tech", tech)}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Grid */}
      <div className={styles.gridSection}>
        <AnimatePresence mode="wait">
          {filteredCaseStudies.length > 0 ? (
            <motion.div
              className={styles.grid}
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
                hidden: {},
              }}
            >
              {filteredCaseStudies.map((cs, index) => (
                <motion.article
                  key={cs.id}
                  className={styles.card}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                >
                  <a href={cs.link} className={styles.cardLink}>
                    <div className={styles.cardHeader}>
                      <span className={styles.cardIndustry}>{cs.industry}</span>
                      <div className={styles.cardGradient} />
                    </div>
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardSolution}>{cs.solution || cs.title}</h3>
                      <p className={styles.cardTitle}>{cs.title}</p>
                      <p className={styles.cardDesc}>
                        {cs.shortDescription || cs.description.substring(0, 120) + "…"}
                      </p>
                      <div className={styles.cardTech}>
                        {cs.technologies.slice(0, 4).map((t) => (
                          <span key={t} className={styles.techTag}>{t}</span>
                        ))}
                      </div>
                      <span className={styles.cardCta}>
                        Read more
                        <span className={styles.cardArrow}>→</span>
                      </span>
                    </div>
                  </a>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className={styles.empty}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <p className={styles.emptyTitle}>No case studies match your filters.</p>
              <button type="button" className={styles.emptyBtn} onClick={clearFilters}>
                Clear filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CaseStudiesPage;
