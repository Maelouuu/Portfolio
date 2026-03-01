import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import s from './NewHomePage.module.css';

/* ============================
   DATA
   ============================ */
const timeline = [
  { year: '2022', title: 'Baccalaureat', desc: 'Obtention du bac avec mention' },
  { year: '2022', title: 'BUT 1 Informatique', desc: "IUT d'Arles — Bases de la programmation et algorithmique" },
  { year: '2023', title: 'BUT 2 Informatique', desc: 'Developpement web, bases de donnees, POO' },
  { year: '2024', title: 'BUT 3 Informatique', desc: 'Specialisation Imagerie Numerique — Unity, OpenGL, WebGL' },
  { year: '2025', title: 'Recherche de Master', desc: 'Candidature en Master Informatique' },
];

const skills = [
  'Java', 'Python', 'JavaScript', 'TypeScript', 'PHP',
  'HTML/CSS', 'SQL', 'C', 'Git', 'React',
  'Node.js', 'Unity', 'Vite', 'Figma',
];

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'Plateforme de vente en ligne complete avec panier, paiement Stripe, gestion des stocks et dashboard admin.',
    techs: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    duration: '3 mois',
    year: '2024',
    status: 'Termine',
  },
  {
    title: 'Chat Temps Reel',
    description: 'Application de messagerie en temps reel avec WebSockets, salons, messages prives et partage de fichiers.',
    techs: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    duration: '2 mois',
    year: '2024',
    status: 'Termine',
  },
  {
    title: 'API REST Blog',
    description: 'API RESTful complete pour un blog avec CRUD, authentification JWT, pagination et documentation Swagger.',
    techs: ['Node.js', 'Express', 'PostgreSQL', 'Swagger'],
    duration: '6 semaines',
    year: '2023',
    status: 'Termine',
  },
  {
    title: 'Portfolio Interactif',
    description: 'Portfolio a double identite visuelle avec systeme de themes dynamique et animations CSS avancees.',
    techs: ['React', 'TypeScript', 'CSS Modules', 'Vite'],
    duration: '2 mois',
    year: '2025',
    status: 'En cours',
  },
  {
    title: 'Weather Dashboard',
    description: 'Dashboard meteo interactif avec visualisations, previsions 7 jours et geolocalisation automatique.',
    techs: ['React', 'Chart.js', 'OpenWeather API'],
    duration: '3 semaines',
    year: '2023',
    status: 'Termine',
  },
  {
    title: 'Task Manager Pro',
    description: 'Gestionnaire de taches avec drag & drop, categories, priorites, deadlines et stats de productivite.',
    techs: ['React', 'TypeScript', 'DnD Kit', 'Recharts'],
    duration: '5 semaines',
    year: '2024',
    status: 'Termine',
  },
];

const experiences = [
  {
    title: 'Stage Developpeur Web',
    company: 'WebStudio Pro — Marseille',
    period: 'Avril — Juin 2024',
    status: 'completed' as const,
    description: "Developpement d'une interface client pour la gestion de projets internes. Integration API REST et systeme de notifications.",
    techs: ['React', 'TypeScript', 'Figma', 'REST API'],
    steps: [
      { label: 'Onboarding & decouverte', done: true },
      { label: 'Maquettage & prototypage', done: true },
      { label: 'Developpement frontend', done: true },
      { label: 'Integration API & tests', done: true },
      { label: 'Livraison & soutenance', done: true },
    ],
  },
  {
    title: 'Alternance Developpeur Full-Stack',
    company: 'TechNova Solutions — Arles',
    period: 'Sept 2024 — Aout 2025',
    status: 'active' as const,
    description: "Conception et developpement d'une plateforme SaaS de gestion documentaire. Travail en equipe agile avec sprints et code reviews.",
    techs: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Git'],
    steps: [
      { label: 'Integration equipe & setup', done: true },
      { label: "Module d'authentification", done: true },
      { label: 'Dashboard & visualisation', done: true },
      { label: 'Systeme de notifications', done: false },
      { label: 'Optimisation & deploiement', done: false },
    ],
  },
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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, className: visible ? s.fadeIn : s.fadeOut };
};

/* ============================
   SECTION COMPONENTS
   ============================ */
const FadeSection = ({ children, id, className = '' }: { children: React.ReactNode; id?: string; className?: string }) => {
  const fade = useFadeIn();
  return (
    <section id={id} ref={fade.ref} className={`${fade.className} ${className}`}>
      {children}
    </section>
  );
};

/* ============================
   MAIN COMPONENT
   ============================ */
const NewHomePage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={s.page}>

      {/* ======================== HERO ======================== */}
      <section id="about" className={s.hero}>
        <div className={s.heroContent}>
          <div className={s.heroBadge}>Portfolio 2025</div>
          <h1 className={s.heroTitle}>
            Mael <span className={s.heroAccent}>Girardin</span>
          </h1>
          <p className={s.heroRole}>Etudiant en BUT Informatique</p>
          <p className={s.heroDesc}>
            Passionne par la creation d'experiences numeriques uniques,
            je transforme les idees en projets concrets avec creativite et rigueur.
          </p>

          <div className={s.heroStats}>
            <div className={s.heroStat}>
              <span className={s.heroStatNumber}>3</span>
              <span className={s.heroStatLabel}>Annees de BUT</span>
            </div>
            <div className={s.heroStatDivider} />
            <div className={s.heroStat}>
              <span className={s.heroStatNumber}>10+</span>
              <span className={s.heroStatLabel}>Projets realises</span>
            </div>
            <div className={s.heroStatDivider} />
            <div className={s.heroStat}>
              <span className={s.heroStatNumber}>6+</span>
              <span className={s.heroStatLabel}>Technologies</span>
            </div>
          </div>

          <div className={s.skillTags}>
            {skills.map((skill) => (
              <span key={skill} className={s.skillTag}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ======================== PARCOURS ======================== */}
      <FadeSection id="parcours" className={s.section}>
        <h2 className={s.sectionTitle}>
          <span className={s.sectionTitleDot} />
          Parcours
        </h2>
        <div className={s.timeline}>
          {timeline.map((item, i) => (
            <div key={item.title} className={s.timelineItem} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={s.timelineLine}>
                <div className={s.timelineDot} />
                {i < timeline.length - 1 && <div className={s.timelineConnector} />}
              </div>
              <div className={s.timelineContent}>
                <span className={s.timelineYear}>{item.year}</span>
                <h3 className={s.timelineTitle}>{item.title}</h3>
                <p className={s.timelineDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ======================== PROJETS ======================== */}
      <FadeSection id="projects" className={s.section}>
        <h2 className={s.sectionTitle}>
          <span className={s.sectionTitleDot} />
          Projets
        </h2>
        <p className={s.sectionSubtitle}>
          Decouvrez les projets sur lesquels j'ai travaille, des applications web aux experiences interactives.
        </p>
        <div className={s.projectsGrid}>
          {projects.map((project) => (
            <div key={project.title} className={s.projectCard}>
              <div className={s.projectHeader}>
                <h3 className={s.projectTitle}>{project.title}</h3>
                <div className={s.projectMeta}>
                  <span className={`${s.projectStatus} ${project.status === 'En cours' ? s.statusActive : ''}`}>
                    {project.status}
                  </span>
                  <span className={s.projectDuration}>{project.duration}</span>
                  <span className={s.projectYear}>{project.year}</span>
                </div>
              </div>
              <p className={s.projectDesc}>{project.description}</p>
              <div className={s.projectTechs}>
                {project.techs.map((t) => (
                  <span key={t} className={s.techBadge}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ======================== EXPERIENCE ======================== */}
      <FadeSection id="experience" className={s.section}>
        <h2 className={s.sectionTitle}>
          <span className={s.sectionTitleDot} />
          Experience
        </h2>
        <div className={s.experienceGrid}>
          {experiences.map((exp) => (
            <div key={exp.title} className={s.expCard}>
              <div className={s.expHeader}>
                <span className={`${s.expBadge} ${exp.status === 'active' ? s.expBadgeActive : s.expBadgeDone}`}>
                  {exp.status === 'active' ? 'EN COURS' : 'TERMINE'}
                </span>
                <span className={s.expPeriod}>{exp.period}</span>
              </div>
              <h3 className={s.expTitle}>{exp.title}</h3>
              <p className={s.expCompany}>{exp.company}</p>
              <p className={s.expDesc}>{exp.description}</p>
              <div className={s.expSteps}>
                {exp.steps.map((step, i) => (
                  <div key={i} className={`${s.expStep} ${step.done ? s.expStepDone : ''}`}>
                    <div className={s.expStepDot} />
                    <span>{step.label}</span>
                  </div>
                ))}
              </div>
              <div className={s.expTechs}>
                {exp.techs.map((t) => (
                  <span key={t} className={s.techBadge}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeSection>

      {/* ======================== CONTACT ======================== */}
      <FadeSection id="contact" className={s.section}>
        <h2 className={s.sectionTitle}>
          <span className={s.sectionTitleDot} />
          Contact
        </h2>
        <p className={s.sectionSubtitle}>
          Un projet en tete ? N'hesitez pas a me contacter, je serais ravi d'echanger avec vous.
        </p>

        <div className={s.contactGrid}>
          {/* Form */}
          <div className={s.contactForm}>
            {submitted ? (
              <div className={s.successCard}>
                <div className={s.successIcon}>✓</div>
                <h3 className={s.successTitle}>Message envoye !</h3>
                <p className={s.successText}>Merci pour votre message. Je vous repondrai dans les plus brefs delais.</p>
                <button
                  className={s.btnSecondary}
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={s.formRow}>
                  <div className={s.formField}>
                    <label className={s.formLabel}>Nom</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={s.formInput}
                      placeholder="Votre nom"
                      required
                    />
                  </div>
                  <div className={s.formField}>
                    <label className={s.formLabel}>Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={s.formInput}
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>
                <div className={s.formField}>
                  <label className={s.formLabel}>Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={s.formTextarea}
                    placeholder="Votre message..."
                    rows={6}
                    required
                  />
                </div>
                <button type="submit" className={s.btnPrimary}>Envoyer</button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className={s.contactInfo}>
            <div className={s.contactInfoCard}>
              <span className={s.contactInfoLabel}>Email</span>
              <span className={s.contactInfoValue}>johndoe@email.com</span>
            </div>
            <div className={s.contactInfoCard}>
              <span className={s.contactInfoLabel}>Telephone</span>
              <span className={s.contactInfoValue}>+33 6 12 34 56 78</span>
            </div>
            <div className={s.contactInfoCard}>
              <span className={s.contactInfoLabel}>Localisation</span>
              <span className={s.contactInfoValue}>Paris, France</span>
            </div>

            <div className={s.socialLinks}>
              {['GitHub', 'LinkedIn', 'Twitter'].map((name) => (
                <a key={name} href="#" className={s.socialLink} onClick={(e) => e.preventDefault()}>
                  {name}
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path d="M4 12L12 4M12 4H6M12 4V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ======================== FOOTER ======================== */}
      <footer className={s.footer}>
        <div className={s.footerContent}>
          <Link to="/legacy" className={s.legacyBtn}>
            Voir l'ancienne version du portfolio
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className={s.copyright}>© 2025 Mael Girardin. Tous droits reserves.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewHomePage;
