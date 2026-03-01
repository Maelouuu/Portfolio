import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import ArcadeCard from '../components/ArcadeCard';
import GoldFrame from '../components/piltover/GoldFrame';
import zaunStyles from './Projects.module.css';
import piltoverStyles from './piltover/ProjectsPiltover.module.css';
import chateauImg from '../assets/pixels/chateauCopie.png';
import mononokeImg from '../assets/mononoké.png';
import grenouilleImg from '../assets/grenouille.jpg';

const arcadeProjects = [
  { title: 'E-Commerce App', icon: '🛒' },
  { title: 'Chat Temps Reel', icon: '💬' },
  { title: 'API REST Blog', icon: '📝' },
  { title: 'Portfolio Retro', icon: '🕹️' },
  { title: 'Weather App', icon: '☀️' },
  { title: 'Task Manager', icon: '✅' },
];

const detailedProjects = [
  {
    title: 'E-Commerce Platform',
    subtitle: 'Application web full-stack',
    description: 'Plateforme de vente en ligne complete avec panier, systeme de paiement Stripe, gestion des stocks et tableau de bord administrateur. Interface responsive et performante.',
    techs: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'TailwindCSS'],
    duration: '3 mois',
    year: '2024',
    status: 'Termine' as const,
    icon: '🛒',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    features: ['Authentification JWT', 'Panier persistant', 'Paiement securise', 'Dashboard admin'],
  },
  {
    title: 'Chat Temps Reel',
    subtitle: 'Application de messagerie',
    description: 'Application de chat en temps reel avec WebSockets, support des salons, messages prives, indicateurs de frappe et partage de fichiers.',
    techs: ['React', 'Socket.io', 'Express', 'PostgreSQL', 'TypeScript'],
    duration: '2 mois',
    year: '2024',
    status: 'Termine' as const,
    icon: '💬',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    features: ['WebSocket temps reel', 'Salons publics/prives', 'Partage de fichiers', 'Notifications'],
  },
  {
    title: 'API REST Blog',
    subtitle: 'Backend & Documentation',
    description: 'API RESTful complete pour un blog avec CRUD, authentification, pagination, systeme de commentaires et documentation Swagger auto-generee.',
    techs: ['Node.js', 'Express', 'PostgreSQL', 'Swagger', 'JWT', 'Jest'],
    duration: '6 semaines',
    year: '2023',
    status: 'Termine' as const,
    icon: '📝',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    features: ['CRUD complet', 'Auth JWT', 'Pagination', 'Tests unitaires'],
  },
  {
    title: 'Portfolio Interactif',
    subtitle: 'Ce portfolio que vous visitez',
    description: 'Portfolio a double identite visuelle avec un systeme de themes dynamique. Mode Piltover elegant et mode Zaun retro arcade. Animations CSS avancees et design responsive.',
    techs: ['React', 'TypeScript', 'CSS Modules', 'Vite', 'React Router'],
    duration: '2 mois',
    year: '2025',
    status: 'En cours' as const,
    icon: '🎨',
    gradient: 'linear-gradient(135deg, #C9A84C 0%, #6B8F71 100%)',
    features: ['Double theme', 'Animations CSS', 'Responsive', 'SVG dynamiques'],
  },
  {
    title: 'Weather Dashboard',
    subtitle: 'Application meteo',
    description: 'Dashboard meteo interactif avec visualisation de donnees, previsions sur 7 jours, geolocalisation automatique et graphiques de temperature.',
    techs: ['React', 'Chart.js', 'OpenWeather API', 'CSS Grid', 'Geolocation API'],
    duration: '3 semaines',
    year: '2023',
    status: 'Termine' as const,
    icon: '☀️',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    features: ['Previsions 7 jours', 'Geolocalisation', 'Graphiques temps reel', 'Mode sombre'],
  },
  {
    title: 'Task Manager Pro',
    subtitle: 'Outil de productivite',
    description: 'Gestionnaire de taches avance avec drag & drop, categories, priorites, deadlines, rappels et statistiques de productivite.',
    techs: ['React', 'TypeScript', 'DnD Kit', 'LocalStorage', 'Recharts'],
    duration: '5 semaines',
    year: '2024',
    status: 'Termine' as const,
    icon: '✅',
    gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    features: ['Drag & Drop', 'Filtres avances', 'Statistiques', 'Mode kanban'],
  },
];

const Projects = () => {
  const { isZaun } = useTheme();
  const s = isZaun ? zaunStyles : piltoverStyles;
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div className={s.page}>
      {/* Intro section */}
      <section className={s.introSection}>
        {isZaun ? (
          <div className={s.bannerBg}>
            <img src={chateauImg} alt="Château dans le ciel" className={s.bannerImg} />
          </div>
        ) : (
          <div className={s.piltoverHeroBg} />
        )}
        <div className={s.introContent}>
          {!isZaun && <div className={s.introBadge}>Realisations</div>}
          <h1 className={s.title}>{isZaun ? 'MES PROJETS' : 'Mes Projets'}</h1>
          <p className={s.introDesc}>
            {isZaun
              ? 'Bienvenue dans ma salle d\'arcade ! Chaque borne represente un projet sur lequel j\'ai travaille. Appuyez sur les boutons pour naviguer entre les slides de chaque projet.'
              : 'Decouvrez les projets sur lesquels j\'ai travaille, des applications web aux experiences interactives. Chaque projet represente un defi unique et une opportunite d\'apprentissage.'
            }
          </p>
          <div className={s.statsRow}>
            <div className={s.statCard}>
              <span className={s.statNumber}>6</span>
              <span className={s.statLabel}>PROJETS</span>
            </div>
            <div className={s.statCard}>
              <span className={s.statNumber}>12+</span>
              <span className={s.statLabel}>TECHNOLOGIES</span>
            </div>
            <div className={s.statCard}>
              <span className={s.statNumber}>2+</span>
              <span className={s.statLabel}>ANNEES</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT SHOWCASE */}
      {isZaun ? (
        /* Zaun: Arcade Grid */
        <section className={s.arcadeFloor}>
          <h2 className={s.arcadeTitle}>
            <svg width="20" height="20" viewBox="0 0 10 10" style={{ imageRendering: 'pixelated' }}>
              <rect x="3" y="0" width="4" height="1" fill="#fff" />
              <rect x="1" y="1" width="8" height="1" fill="#fff" />
              <rect x="0" y="2" width="10" height="6" fill="#fff" />
              <rect x="1" y="8" width="8" height="1" fill="#fff" />
              <rect x="3" y="9" width="4" height="1" fill="#fff" />
              <rect x="3" y="3" width="1" height="3" fill="var(--nature-dark)" />
              <rect x="6" y="3" width="1" height="3" fill="var(--nature-dark)" />
            </svg>
            SALLE D'ARCADE
          </h2>
          <div className={s.arcadeGrid}>
            {arcadeProjects.map((project, i) => (
              <ArcadeCard key={project.title} title={project.title} icon={project.icon} index={i} />
            ))}
          </div>
        </section>
      ) : (
        /* Piltover: Detailed project showcase */
        <section className={s.projectShowcase}>
          <h2 className={s.showcaseTitle}>Portfolio</h2>
          <div className={s.projectsGrid}>
            {detailedProjects.map((project, i) => (
              <GoldFrame key={project.title} variant="card">
                <div
                  className={`${s.projectCard} ${expandedProject === i ? s.projectCardExpanded : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  onClick={() => setExpandedProject(expandedProject === i ? null : i)}
                >
                  {/* Visual header */}
                  <div className={s.projectVisual} style={{ background: project.gradient }}>
                    <span className={s.projectIcon}>{project.icon}</span>
                    <div className={s.projectYear}>{project.year}</div>
                  </div>

                  {/* Content */}
                  <div className={s.projectBody}>
                    <div className={s.projectMeta}>
                      <span className={`${s.projectStatus} ${project.status === 'En cours' ? s.statusActive : s.statusDone}`}>
                        {project.status}
                      </span>
                      <span className={s.projectDuration}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
                          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {project.duration}
                      </span>
                    </div>

                    <h3 className={s.projectTitle}>{project.title}</h3>
                    <p className={s.projectSubtitle}>{project.subtitle}</p>
                    <p className={s.projectDesc}>{project.description}</p>

                    {/* Features */}
                    <div className={s.projectFeatures}>
                      {project.features.map(f => (
                        <div key={f} className={s.featureItem}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13L9 17L19 7" stroke="var(--gold-mid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech stack */}
                    <div className={s.projectTechs}>
                      {project.techs.map(t => (
                        <span key={t} className={s.techBadge}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </GoldFrame>
            ))}
          </div>
        </section>
      )}

      {/* MISSIONS */}
      <section className={s.missionsSection}>
        <h2 className={s.arcadeTitle} style={isZaun ? { color: 'var(--brown-mid)', textShadow: 'none' } : {}}>
          {isZaun && (
            <svg width="20" height="20" viewBox="0 0 10 10" style={{ imageRendering: 'pixelated' }}>
              <rect x="1" y="0" width="8" height="2" fill="var(--brown-mid)" />
              <rect x="0" y="2" width="10" height="6" fill="var(--brown-light)" />
              <rect x="1" y="8" width="8" height="2" fill="var(--brown-soft)" />
              <rect x="2" y="3" width="6" height="1" fill="#1a1a2a" />
              <rect x="2" y="5" width="4" height="1" fill="#1a1a2a" />
            </svg>
          )}
          {isZaun ? 'MISSIONS SUR LE TERRAIN' : 'Experiences Professionnelles'}
        </h2>

        {!isZaun && (
          <div className={s.missionsIntro}>
            <p>Mes experiences en entreprise, ou j'ai pu mettre en pratique mes competences dans des contextes professionnels reels.</p>
          </div>
        )}

        <div className={s.missionsGrid}>
          {/* Mission 1: Stage */}
          <div className={s.missionCardWrapper}>
            {isZaun && <img src={mononokeImg} alt="Mononoké" className={s.mononokeChar} />}
            {!isZaun ? (
              <GoldFrame variant="card">
                <div className={s.missionCard}>
                  <div className={s.missionHeader}>
                    <span className={s.missionBadge} data-status="completed">COMPLETED</span>
                    <span className={s.missionDate}>Avril - Juin 2024</span>
                  </div>
                  <h3 className={s.missionTitle}>Stage Developpeur Web</h3>
                  <p className={s.missionCompany}>WebStudio Pro — Marseille</p>
                  <p className={s.missionDesc}>
                    Developpement d'une interface client pour la gestion de projets internes.
                    Integration API REST et mise en place d'un systeme de notifications.
                  </p>
                  <div className={s.missionTimeline}>
                    {['Onboarding & decouverte', 'Maquettage & prototypage', 'Developpement frontend', 'Integration API & tests', 'Livraison & soutenance'].map((step) => (
                      <div key={step} className={s.timelineStep}>
                        <div className={`${s.checkpoint} ${s.checkpointDone}`} />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className={s.missionTechs}>
                    {['React', 'TypeScript', 'Figma', 'REST API'].map(t => (
                      <span key={t} className={s.missionTechBadge}>{t}</span>
                    ))}
                  </div>
                </div>
              </GoldFrame>
            ) : (
              <div className={s.missionCard}>
                <div className={s.missionHeader}>
                  <span className={s.missionBadge} data-status="completed">COMPLETED</span>
                  <span className={s.missionDate}>Avril - Juin 2024</span>
                </div>
                <h3 className={s.missionTitle}>Stage Developpeur Web</h3>
                <p className={s.missionCompany}>WebStudio Pro — Marseille</p>
                <p className={s.missionDesc}>
                  Developpement d'une interface client pour la gestion de projets internes.
                  Integration API REST et mise en place d'un systeme de notifications.
                </p>
                <div className={s.missionTimeline}>
                  {['Onboarding & decouverte', 'Maquettage & prototypage', 'Developpement frontend', 'Integration API & tests', 'Livraison & soutenance'].map((step) => (
                    <div key={step} className={s.timelineStep}>
                      <div className={`${s.checkpoint} ${s.checkpointDone}`} />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <div className={s.missionTechs}>
                  {['React', 'TypeScript', 'Figma', 'REST API'].map(t => (
                    <span key={t} className={s.missionTechBadge}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mission 2: Alternance */}
          <div className={s.missionCardWrapper}>
            {!isZaun ? (
              <GoldFrame variant="card">
                <div className={s.missionCard}>
                  <div className={s.missionHeader}>
                    <span className={s.missionBadge} data-status="active">EN COURS</span>
                    <span className={s.missionDate}>Sept 2024 - Aout 2025</span>
                  </div>
                  <h3 className={s.missionTitle}>Alternance Developpeur Full-Stack</h3>
                  <p className={s.missionCompany}>TechNova Solutions — Arles</p>
                  <p className={s.missionDesc}>
                    Conception et developpement d'une plateforme SaaS de gestion documentaire.
                    Travail en equipe agile avec sprints et code reviews.
                  </p>
                  <div className={s.missionTimeline}>
                    {[
                      { step: 'Integration equipe & setup', done: true, active: false },
                      { step: "Module d'authentification", done: true, active: false },
                      { step: 'Dashboard & visualisation', done: true, active: false },
                      { step: 'Systeme de notifications', done: false, active: true },
                      { step: 'Optimisation & deploiement', done: false, active: false },
                    ].map(({ step, done, active }) => (
                      <div key={step} className={s.timelineStep}>
                        <div className={`${s.checkpoint} ${done ? s.checkpointDone : ''} ${active ? s.checkpointActive : ''}`} />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                  <div className={s.missionTechs}>
                    {['React', 'Node.js', 'PostgreSQL', 'Docker', 'Git'].map(t => (
                      <span key={t} className={s.missionTechBadge}>{t}</span>
                    ))}
                  </div>
                </div>
              </GoldFrame>
            ) : (
              <div className={s.missionCard}>
                <div className={s.missionHeader}>
                  <span className={s.missionBadge} data-status="active">EN COURS</span>
                  <span className={s.missionDate}>Sept 2024 - Aout 2025</span>
                </div>
                <h3 className={s.missionTitle}>Alternance Developpeur Full-Stack</h3>
                <p className={s.missionCompany}>TechNova Solutions — Arles</p>
                <p className={s.missionDesc}>
                  Conception et developpement d'une plateforme SaaS de gestion documentaire.
                  Travail en equipe agile avec sprints et code reviews.
                </p>
                <div className={s.missionTimeline}>
                  {[
                    { step: 'Integration equipe & setup', done: true, active: false },
                    { step: "Module d'authentification", done: true, active: false },
                    { step: 'Dashboard & visualisation', done: true, active: false },
                    { step: 'Systeme de notifications', done: false, active: true },
                    { step: 'Optimisation & deploiement', done: false, active: false },
                  ].map(({ step, done, active }) => (
                    <div key={step} className={s.timelineStep}>
                      <div className={`${s.checkpoint} ${done ? s.checkpointDone : ''} ${active ? s.checkpointActive : ''}`} />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <div className={s.missionTechs}>
                  {['React', 'Node.js', 'PostgreSQL', 'Docker', 'Git'].map(t => (
                    <span key={t} className={s.missionTechBadge}>{t}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* TERMINAL GITHUB */}
      <section className={s.githubSection}>
        <div className={s.githubContent}>
          <div className={s.terminalWrap}>
            <div className={s.terminal}>
              <div className={s.terminalHeader}>
                <div className={s.terminalDots}>
                  <span className={s.terminalDot} style={{ background: '#ff5f57' }} />
                  <span className={s.terminalDot} style={{ background: '#febc2e' }} />
                  <span className={s.terminalDot} style={{ background: '#28c840' }} />
                </div>
                <span className={s.terminalTitle}>mael@portfolio:~</span>
              </div>
              <div className={s.terminalBody}>
                <div className={s.terminalLine}>
                  <span className={s.terminalPrompt}>$</span>
                  <span className={s.terminalCmd}> whoami</span>
                </div>
                <div className={s.terminalOutput}>mael-girardin</div>
                <div className={s.terminalLine}>
                  <span className={s.terminalPrompt}>$</span>
                  <span className={s.terminalCmd}> git remote -v</span>
                </div>
                <div className={s.terminalOutput}>
                  origin {'  '}
                  <a href="https://github.com/Maelouuu" target="_blank" rel="noopener noreferrer" className={s.terminalLink}>
                    github.com/Maelouuu
                  </a>
                  {'  '} (fetch)
                </div>
                <div className={s.terminalLine}>
                  <span className={s.terminalPrompt}>$</span>
                  <span className={s.terminalCmd}> git log --oneline -3</span>
                </div>
                <div className={s.terminalOutput}>
                  a3f2c1d feat: add arcade cabinet layout<br />
                  8b1e4a7 fix: responsive grid on mobile<br />
                  c9d0f3e init: portfolio project setup
                </div>
                <div className={s.terminalLine}>
                  <span className={s.terminalPrompt}>$</span>
                  <span className={s.terminalCursor} />
                </div>
              </div>
            </div>
          </div>
          {isZaun ? (
            <div className={s.grenouilleWrapper}>
              <img src={grenouilleImg} alt="Grenouille" className={s.grenouilleImg} />
            </div>
          ) : (
            <div className={s.githubCta}>
              <h3 className={s.githubCtaTitle}>Mon GitHub</h3>
              <p className={s.githubCtaDesc}>
                Retrouvez l'ensemble de mes projets et contributions open source sur mon profil GitHub.
              </p>
              <a
                href="https://github.com/Maelouuu"
                target="_blank"
                rel="noopener noreferrer"
                className={s.githubCtaBtn}
              >
                Voir mon profil
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginLeft: '8px' }}>
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
