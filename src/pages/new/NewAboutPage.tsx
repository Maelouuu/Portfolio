import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import oniImage from '../../assets/oni.png';
import s from './NewAboutPage.module.css';
import shared from './shared.module.css';
import { projects, techDetails } from './data';

/* ============================
   DATA
   ============================ */
const timeline = [
  { year: '2022', title: 'Baccalauréat', desc: "Obtention du bac avec mention Bien" },
  { year: '2023', title: 'BUT 1 Informatique', desc: "IUT d'Arles — 1ère année : Bases en programmation et algorithmique" },
  { year: '2024', title: 'BUT 2 Informatique', desc: "IUT d'Arles — 2ème année : Développement web, bases de données, programmation orientée objet" },
  { year: '2025', title: 'BUT 3 Informatique', desc: "IUT d'Arles — 3ème année : Spécialisation Imagerie Numérique — Unity, OpenGL, WebGL" },
  { year: '2026', title: 'Recherche de Master', desc: "Obtention du BUT — Candidature en Master" },
];

const skills = [
  'Java', 'JavaFX', 'Python', 'JavaScript', 'TypeScript', 'HTML / CSS',
  'SQL', 'Git', 'React', 'React Native', 'Node.js', 'Flask', 'FastAPI',
  'Three.js', 'Unity', 'WebGL', 'OpenGL', 'Figma', 'Vite',
  'PostgreSQL', 'MongoDB', 'Docker', 'Linux', 'CI/CD', 'Agile',
  'REST APIs', 'AR/VR', 'C#', 'C++', 'bash',
];

/* ============================
   HOOK — fade in on scroll
   ============================ */
const useFadeIn = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.06, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
};

const FadeSection = ({
  children, className = '', id,
}: { children: React.ReactNode; className?: string; id?: string }) => {
  const { ref, visible } = useFadeIn();
  return (
    <div className={className} id={id}>
      <div ref={ref} className={visible ? shared.fadeIn : shared.fadeOut}>
        {children}
      </div>
    </div>
  );
};

/* ============================
   TECH SPHERE — interactive 3D tag cloud (mouse/touch drag)
   ============================ */
const TechSphere = ({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (tech: string) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const ryRef = useRef(0);
  const rxRef = useRef(0.3);
  const rafRef = useRef<number>(0);
  const isDraggingRef = useRef(false);
  const hasMovedRef = useRef(false);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const selectedRef = useRef(selected);
  useEffect(() => { selectedRef.current = selected; }, [selected]);

  const basePos = useRef(
    skills.map((_, i) => {
      const phi = Math.acos(1 - 2 * (i + 0.5) / skills.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.sin(phi) * Math.sin(theta),
        z: Math.cos(phi),
      };
    })
  );

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const tags = Array.from(container.querySelectorAll<HTMLElement>('[data-sphere-tag]'));
    const RADIUS = 130;

    const animate = () => {
      if (!isDraggingRef.current) ryRef.current += 0.004;

      const cosX = Math.cos(rxRef.current);
      const sinX = Math.sin(rxRef.current);
      const cosY = Math.cos(ryRef.current);
      const sinY = Math.sin(ryRef.current);

      tags.forEach((tag, i) => {
        const p = basePos.current[i];
        const x1 = p.x * cosY + p.z * sinY;
        const z1 = -p.x * sinY + p.z * cosY;
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        const fov = 400;
        const proj = fov / (fov + z2 * RADIUS);
        const px = x1 * RADIUS * proj;
        const py = y2 * RADIUS * proj;
        const depth = (z2 + 1) / 2;

        const isActive = skills[i] === selectedRef.current;
        const opacity = isActive ? 1 : 0.15 + 0.85 * depth;
        const scale = isActive ? 1.1 : 0.6 + 0.5 * depth;

        tag.style.transform = `translate(calc(${px}px - 50%), calc(${py}px - 50%)) scale(${scale})`;
        tag.style.opacity = String(Math.round(opacity * 100) / 100);
        tag.style.zIndex = isActive ? '200' : String(Math.round(depth * 100));
      });

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    /* ---- Mouse drag ---- */
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      hasMovedRef.current = false;
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      container.style.cursor = 'grabbing';
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) hasMovedRef.current = true;
      ryRef.current += dx * 0.005;
      rxRef.current -= dy * 0.005;
      lastPosRef.current = { x: e.clientX, y: e.clientY };
    };
    const onMouseUp = () => {
      isDraggingRef.current = false;
      container.style.cursor = 'grab';
    };

    /* ---- Touch drag ---- */
    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0];
      isDraggingRef.current = true;
      hasMovedRef.current = false;
      lastPosRef.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current) return;
      const t = e.touches[0];
      const dx = t.clientX - lastPosRef.current.x;
      const dy = t.clientY - lastPosRef.current.y;
      if (Math.abs(dx) + Math.abs(dy) > 3) hasMovedRef.current = true;
      ryRef.current += dx * 0.005;
      rxRef.current -= dy * 0.005;
      lastPosRef.current = { x: t.clientX, y: t.clientY };
    };
    const onTouchEnd = () => { isDraggingRef.current = false; };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      cancelAnimationFrame(rafRef.current);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  const handleTagClick = (tech: string) => {
    if (!hasMovedRef.current) onSelect(tech);
  };

  return (
    <div ref={containerRef} className={s.sphere}>
      <div className={s.sphereGlobe} aria-hidden />
      {skills.map((tech) => {
        const detail = techDetails[tech];
        return (
          <button
            key={tech}
            data-sphere-tag
            className={`${s.sphereTag} ${selected === tech ? s.sphereTagActive : ''}`}
            onClick={() => handleTagClick(tech)}
          >
            {detail?.deviconClass
              ? <i className={`${detail.deviconClass} ${s.sphereTagIcon}`} />
              : <span className={s.sphereTagFallback}>{tech.slice(0, 2).toUpperCase()}</span>
            }
            <span className={s.sphereTagName}>{tech}</span>
          </button>
        );
      })}
    </div>
  );
};

/* ============================
   TECH MODAL
   ============================ */
const TechModal = ({
  onClose,
  onNavigateToProject,
}: {
  onClose: () => void;
  onNavigateToProject: (title: string) => void;
}) => {
  const [selected, setSelected] = useState<string | null>(null);
  const selectedDetail = selected ? techDetails[selected] : null;
  const linkedProjects = selected
    ? projects.filter((p) => p.techs.some((t) => t === selected))
    : [];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return createPortal(
    <div className={s.modalOverlay} onClick={onClose}>
      <div className={s.modalCard} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className={s.modalHeader}>
          <span className={s.modalIndex}>TECHNOLOGIES</span>
          <h2 className={s.modalTitle}>Boite a outils</h2>
          <button className={s.modalClose} onClick={onClose} aria-label="Fermer">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* 3D rotating sphere */}
        <TechSphere
          selected={selected}
          onSelect={(tech) => setSelected(selected === tech ? null : tech)}
        />

        {/* Bottom slide-up detail strip */}
        <div className={`${s.detailPanel} ${selected ? s.detailPanelOpen : ''}`}>
          {selected && selectedDetail && (
            <div className={s.detailInner}>
              {/* Icon + name */}
              <div className={s.detailIconBlock}>
                {selectedDetail.deviconClass ? (
                  <i className={`${selectedDetail.deviconClass} ${s.detailIconEl}`} />
                ) : (
                  <span className={s.detailIconFallback}>{selected.slice(0, 2).toUpperCase()}</span>
                )}
                <span className={s.detailName}>{selected}</span>
              </div>

              <div className={s.detailDivider} />

              {/* Mastery */}
              <div className={s.detailMastery}>
                <div className={s.detailMasteryHeader}>
                  <span className={s.detailMasteryLabel}>Maitrise</span>
                  <span className={s.detailMasteryValue}>{selectedDetail.mastery}%</span>
                </div>
                <div className={s.masteryBar}>
                  <div className={s.masteryFill} style={{ width: `${selectedDetail.mastery}%` }} />
                </div>
              </div>

              <div className={s.detailDivider} />

              {/* Project count */}
              <div className={s.detailStat}>
                <span className={s.detailStatNum}>{selectedDetail.projectCount}</span>
                <span className={s.detailStatLabel}>projets</span>
              </div>

              {/* Linked project pills */}
              {linkedProjects.length > 0 && (
                <>
                  <div className={s.detailDivider} />
                  <div className={s.detailProjects}>
                    <span className={s.detailProjectsLabel}>Retrouver dans</span>
                    <div className={s.detailPills}>
                      {linkedProjects.map((p) => (
                        <button
                          key={p.title}
                          className={s.projectPill}
                          onClick={() => onNavigateToProject(p.title)}
                        >
                          {p.title}
                          <span className={s.pillYear}>{p.year}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

/* ============================
   MAIN COMPONENT
   ============================ */
const NewAboutPage = () => {
  const navigate = useNavigate();
  const [techModalOpen, setTechModalOpen] = useState(false);
  const parcoursSectionRef = useRef<HTMLDivElement>(null);

  const scrollToParcours = () => {
    parcoursSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavigateToProject = (title: string) => {
    setTechModalOpen(false);
    navigate('/projects', { state: { openProject: title } });
  };

  return (
    <div className={s.page}>
      {/* ======================== HERO — sticky ======================== */}
      <section className={s.heroSticky}>
        <div className={s.scanlines} aria-hidden />

        <div className={s.heroLayout}>
          {/* Left — text */}
          <div className={s.heroContent}>
            <h1 className={s.heroTitle}>
              Mael{' '}
              <span className={s.heroAccent}>Girardin</span>
            </h1>

            <p className={s.heroRole}>
              Etudiant en BUT Informatique
              <span className={s.cursor} aria-hidden />
            </p>

            <p className={s.heroDesc}>
              En 3ᵉ année de BUT Informatique à l'IUT d'Arles. Je navigue entre
              développement web, data et architecture logicielle, avec l'envie de
              construire des projets utiles et bien pensés.
            </p>

            <div className={s.heroStats}>
              {/* technologies count → tech modal */}
              <button className={s.heroStatBtn} onClick={() => setTechModalOpen(true)}>
                <span className={s.heroStatNumber}>{skills.length}</span>
                <span className={s.heroStatLabel}>Technologies</span>
              </button>

              <div className={s.heroStatDivider} />

              {/* 2 expériences → projects page experience section */}
              <button
                className={s.heroStatBtn}
                onClick={() => navigate('/projects', { state: { scrollTo: 'experience' } })}
              >
                <span className={s.heroStatNumber}>2</span>
                <span className={s.heroStatLabel}>Experiences</span>
              </button>

              <div className={s.heroStatDivider} />

              {/* 3 années → scroll to parcours on same page */}
              <button className={s.heroStatBtn} onClick={scrollToParcours}>
                <span className={s.heroStatNumber}>3</span>
                <span className={s.heroStatLabel}>Années BUT</span>
              </button>
            </div>
          </div>

          {/* Right — oni image, flush to right edge */}
          <div className={s.heroImageWrapper}>
            <img src={oniImage} alt="" className={s.heroImg} />
          </div>
        </div>

        {/* Skills marquee */}
        <div className={s.marqueeWrapper}>
          <div className={s.marqueeTrack}>
            {[...skills, ...skills].map((skill, i) => (
              <span key={i} className={s.marqueeTag}>
                <span className={s.marqueeTagDot} />
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== SCROLLABLE CONTENT ======================== */}
      <div className={s.scrollContent}>
        {/* Transition divider */}
        <div className={s.sectionDivider}>
          <div className={s.dividerBlur} />
          <div className={s.dividerDots} />
          <div className={s.dividerLine} />
        </div>

        {/* PARCOURS — horizontal scrollable film strip */}
        <div ref={parcoursSectionRef} id="section-parcours">
          <FadeSection className={shared.section}>
            <h2 className={`${shared.sectionTitle} ${s.aboutSectionTitle}`}>
              <span className={shared.sectionTitleDot} />
              Parcours
            </h2>

            <div className={s.filmStripH}>
              {/* Top sprocket row */}
              <div className={s.filmSprocketsRow} aria-hidden />

              {/* Scrollable frames */}
              <div className={s.filmFramesRow}>
                {timeline.map((item, i) => (
                  <div key={item.title} className={s.filmFrameH}>
                    <div className={s.filmFrameTop}>
                      <span className={s.filmNum}>{String(i + 1).padStart(2, '0')}</span>
                      <span className={s.filmYear}>{item.year}</span>
                    </div>
                    <h3 className={s.filmTitle}>{item.title}</h3>
                    <p className={s.filmDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* Bottom sprocket row */}
              <div className={`${s.filmSprocketsRow} ${s.filmSprocketsRowBottom}`} aria-hidden />
            </div>
          </FadeSection>
        </div>

        {/* A PROPOS — editorial magazine style */}
        <FadeSection className={shared.section}>
          <h2 className={`${shared.sectionTitle} ${s.aboutSectionTitle}`}>
            <span className={shared.sectionTitleDot} />
            A propos
          </h2>

          {/* Pull quote */}
          <blockquote className={s.editQuote}>
            <span className={s.editQuoteTitle}>Pr&#233;sentation</span>
            <span className={s.editQuoteSub}>
              Maël — 22 ans, sincère, libre comme l'air.
            </span>
          </blockquote>

          {/* Ornamental divider — SVG bullseye */}
          <div className={s.editDivider}>
            <div className={s.editDivLine} />
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={s.editDivOrn} aria-hidden>
              <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1"/>
              <circle cx="8" cy="8" r="2.5" fill="currentColor"/>
            </svg>
            <div className={s.editDivLine} />
          </div>

          {/* Two-column layout */}
          <div className={s.editGrid}>
            <div className={s.editText}>
              <p>
                Salut ✌, moi c'est Maël. Je suis en <em>3ᵉ année de BUT Informatique</em> à
                l'IUT d'Arles. Au quotidien, je navigue entre développement web, data,
                architecture logicielle et un peu de DevOps, avec l'envie de construire
                des projets utiles, bien pensés et agréables à utiliser.
              </p>
              <p>
                Quand je ne suis pas derrière un clavier, tu me trouveras souvent sur
                un <em>mur d'escalade</em>, devant un bon film ou le nez dans un livre.
                Ce portfolio rassemble quelques projets marquants qui racontent ma façon
                de travailler : comprendre un besoin, expérimenter, itérer et soigner les détails.
              </p>
            </div>

            <div className={s.editStats}>
              {/* technologies count → modal */}
              <button className={s.editStat} onClick={() => setTechModalOpen(true)}>
                <span className={s.editStatNum}>{skills.length}</span>
                <span className={s.editStatLabel}>{'technologies\nmaîtrisees'}</span>
              </button>

              {/* 2 expériences → navigate */}
              <button
                className={s.editStat}
                onClick={() => navigate('/projects', { state: { scrollTo: 'experience' } })}
              >
                <span className={s.editStatNum}>2</span>
                <span className={s.editStatLabel}>{'experiences\nprofessionnelles'}</span>
              </button>

              {/* 3 années → scroll to parcours */}
              <button className={s.editStat} onClick={scrollToParcours}>
                <span className={s.editStatNum}>3</span>
                <span className={s.editStatLabel}>{'annees de\nformation'}</span>
              </button>
            </div>
          </div>
        </FadeSection>
      </div>

      {/* Tech modal */}
      {techModalOpen && (
        <TechModal
          onClose={() => setTechModalOpen(false)}
          onNavigateToProject={handleNavigateToProject}
        />
      )}
    </div>
  );
};

export default NewAboutPage;
