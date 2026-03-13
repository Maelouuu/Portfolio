import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import s from './NewProjectsPage.module.css';
import shared from './shared.module.css';
import { projects, experiences } from './data';
import type { Project } from './data';
import banniereImg from '../../assets/violont.gif';

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

/* Mouse spotlight on card */
const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  card.style.setProperty('--spot-x', `${x}%`);
  card.style.setProperty('--spot-y', `${y}%`);
};

const clearSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.setProperty('--spot-x', '50%');
  e.currentTarget.style.setProperty('--spot-y', '50%');
};

/* ============================
   PROJECT MODAL — with carousel
   ============================ */
const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setSlide((s) => (s === 0 ? project.images.length - 1 : s - 1));
      if (e.key === 'ArrowRight') setSlide((s) => (s === project.images.length - 1 ? 0 : s + 1));
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, project.images.length]);

  const prev = () => setSlide((s) => (s === 0 ? project.images.length - 1 : s - 1));
  const next = () => setSlide((s) => (s === project.images.length - 1 ? 0 : s + 1));

  const carouselNode = (
    <div className={`${s.carousel} ${project.vertical ? s.carouselPhone : ''}`}>
      <img
        key={slide}
        src={project.images[slide]}
        alt={`${project.title} — capture ${slide + 1}`}
        className={s.carouselImg}
      />
      <button className={`${s.carouselArrow} ${s.carouselArrowLeft}`} onClick={prev} aria-label="Precedent">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className={`${s.carouselArrow} ${s.carouselArrowRight}`} onClick={next} aria-label="Suivant">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <div className={s.carouselControls}>
        <span className={s.carouselCounter}>{slide + 1} / {project.images.length}</span>
        <div className={s.carouselDots}>
          {project.images.map((_, i) => (
            <button
              key={i}
              className={`${s.carouselDot} ${i === slide ? s.carouselDotActive : ''}`}
              onClick={() => setSlide(i)}
              aria-label={`Image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const detailsNode = (
    <div className={`${s.modalDetails} ${project.vertical ? s.modalDetailsSide : ''}`}>
      <div className={s.projectMeta}>
        <span className={`${s.projectStatus} ${project.status === 'En cours' ? s.statusActive : ''}`}>
          {project.status}
        </span>
        <span className={s.projectYear}>{project.year}</span>
      </div>
      <h2 className={s.modalProjectTitle}>{project.title}</h2>
      <p className={s.modalProjectDesc}>{project.longDesc}</p>
      <div className={s.projectTechs}>
        {project.techs.map((t) => (
          <span key={t} className={shared.techBadge}>{t}</span>
        ))}
      </div>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className={s.projectLink}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden>
            <path d="M5 2H2.5A1.5 1.5 0 001 3.5v7A1.5 1.5 0 002.5 12h7A1.5 1.5 0 0011 10.5V8M8 1h4m0 0v4m0-4L6 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Voir le site
        </a>
      )}
    </div>
  );

  return createPortal(
    <div className={s.modalOverlay} onClick={onClose}>
      <div
        className={`${s.projectModal} ${project.vertical ? s.projectModalWide : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button className={s.modalClose} onClick={onClose} aria-label="Fermer">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>

        {project.vertical ? (
          /* Side-by-side layout for portrait / mobile apps */
          <div className={s.modalSideLayout}>
            <div className={s.modalPhonePanel}>
              {carouselNode}
            </div>
            {detailsNode}
          </div>
        ) : (
          /* Standard stacked layout */
          <>
            {carouselNode}
            {detailsNode}
          </>
        )}
      </div>
    </div>,
    document.body
  );
};

/* ============================
   MAIN COMPONENT
   ============================ */
const NewProjectsPage = () => {
  const location = useLocation();
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const experienceSectionRef = useRef<HTMLDivElement>(null);

  // Handle navigation state from TechModal / About stats
  useEffect(() => {
    const state = location.state as { openProject?: string; scrollTo?: string } | null;
    if (!state) return;

    if (state.openProject) {
      const found = projects.find((p) => p.title === state.openProject);
      if (found) setOpenProject(found);
    }
    if (state.scrollTo === 'experience') {
      const timer = setTimeout(() => {
        experienceSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return () => clearTimeout(timer);
    }
    // Clear navigation state after consuming
    window.history.replaceState({}, '');
  }, [location.state]);

  return (
    <div className={s.page}>
      {/* ======================== HEADER ======================== */}
      <section className={s.pageHeader}>
        <p className={s.headerIndex}>01 / Réalisations</p>
        <h1 className={s.pageTitle}>Projets</h1>
        <p className={s.pageDesc}>
          Applications, outils et expériences numériques — du prototype à la production.
        </p>
      </section>

      {/* ======================== PROJECTS BENTO GRID ======================== */}
      <FadeSection className={shared.section}>
        <div className={s.projectsGrid}>
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`${s.projectCard} ${project.featured ? s.projectCardFeatured : ''}`}
              onMouseMove={handleSpotlight}
              onMouseLeave={clearSpotlight}
              onClick={() => setOpenProject(project)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') setOpenProject(project); }}
            >
              <div className={s.cardAccentBar} />
              <span className={s.cardNumber}>{String(i + 1).padStart(2, '0')}</span>
              <span className={s.cardHint}>Voir le projet →</span>

              <div className={project.featured ? s.featuredLayout : ''}>
                <div className={s.projectHeader}>
                  <div className={s.projectMeta}>
                    <span className={`${s.projectStatus} ${project.status === 'En cours' ? s.statusActive : ''}`}>
                      {project.status}
                    </span>
                    <span className={s.projectYear}>{project.year}</span>
                  </div>
                  <h3 className={`${s.projectTitle} ${project.featured ? s.projectTitleFeatured : ''}`}>
                    {project.title}
                  </h3>
                </div>

                <div>
                  <p className={s.projectDesc}>{project.description}</p>
                  <div className={s.projectTechs}>
                    {project.techs.map((t) => (
                      <span key={t} className={shared.techBadge}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Thumbnail preview — bottom of card */}
              <div className={`${s.cardThumb} ${project.vertical && !project.featured ? s.cardThumbPortrait : ''} ${project.vertical && project.featured ? s.cardThumbPortraitFeatured : ''}`}>
                {project.vertical && project.featured ? (
                  project.images.slice(0, 3).map((img, idx) => (
                    <img key={idx} src={img} alt="" className={s.cardThumbPhoneImg} />
                  ))
                ) : (
                  <img src={project.images[0]} alt="" className={s.cardThumbImg} />
                )}
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ======================== BANNER ======================== */}
      <div className={s.banner}>
        <img src={banniereImg} alt="" className={s.bannerImg} />
      </div>

      {/* ======================== EXPERIENCE ======================== */}
      <div ref={experienceSectionRef}>
        <FadeSection className={shared.section}>
          <h2 className={shared.sectionTitle}>
            <span className={shared.sectionTitleDot} />
            Expériences
          </h2>
          <div className={s.expList}>
            {experiences.map((exp, i) => (
              <div key={exp.title} className={s.expItem}>
                {/* Left: index + period + badge */}
                <div className={s.expItemLeft}>
                  <span className={s.expItemNum}>{String(i + 1).padStart(2, '0')}</span>
                  <span className={s.expItemPeriod}>{exp.period}</span>
                  <span className={`${s.expBadge} ${exp.status === 'active' ? s.expBadgeActive : s.expBadgeDone}`}>
                    {exp.status === 'active' ? '● EN COURS' : '✓ TERMINÉ'}
                  </span>
                </div>

                {/* Center: title + company + desc + techs */}
                <div className={s.expItemContent}>
                  <div className={s.expItemHeader}>
                    <h3 className={s.expItemTitle}>{exp.title}</h3>
                    <span className={s.expItemCompany}>{exp.company}</span>
                  </div>
                  <p className={s.expItemDesc}>{exp.description}</p>

                  {/* Jalons clés — extrait des missions */}
                  <div className={s.expItemSteps}>
                    <span className={s.expItemStepsLabel}>Jalons</span>
                    <ul className={s.expStepList}>
                      {exp.steps.map((step) => (
                        <li
                          key={step.label}
                          className={`${s.expStep} ${step.done ? s.expStepDone : s.expStepPending}`}
                        >
                          <span className={s.expStepIcon}>{step.done ? '✓' : '○'}</span>
                          {step.label}
                        </li>
                      ))}
                      <li className={s.expStepMore}>· · · entre autres</li>
                    </ul>
                  </div>

                  <div className={s.expItemTechs}>
                    {exp.techs.map((t) => (
                      <span key={t} className={shared.techBadge}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: progress bar */}
                <div className={s.expItemProgress}>
                  <div className={s.expItemProgressBar}>
                    <div className={s.expItemProgressFill} style={{ width: `${exp.progress}%` }} />
                  </div>
                  <span className={s.expItemProgressPct}>{exp.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </FadeSection>
      </div>

      {/* ======================== FOOTER ======================== */}
      <footer className={shared.footer}>
        <div className={shared.footerContent}>
          <p className={shared.copyright}>&copy; 2025 Maël Girardin. Tous droits réservés.</p>
        </div>
      </footer>

      {/* Project modal */}
      {openProject && (
        <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </div>
  );
};

export default NewProjectsPage;
