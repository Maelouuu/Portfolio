import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import GoldFrame from '../components/piltover/GoldFrame';
import zaunStyles from './About.module.css';
import piltoverStyles from './piltover/AboutPiltover.module.css';

import starwarsPano from '../assets/starwarspano.jpg';
import gojoImg from '../assets/gojo.png';
import tojiImg from '../assets/toji.png';

const timeline = [
  { year: '2022', title: 'Baccalaureat', desc: 'Obtention du bac avec mention' },
  { year: '2022', title: 'BUT 1 Informatique', desc: 'IUT d\'Arles - Bases de la programmation et algorithmique' },
  { year: '2023', title: 'BUT 2 Informatique', desc: 'Developpement web, bases de donnees, POO' },
  { year: '2024', title: 'BUT 3 Informatique', desc: 'Specialisation Imagerie Numerique - Unity, OpenGL, WebGL' },
  { year: '2025', title: 'Recherche de Master', desc: 'Candidature en Master Informatique' },
];

const skills = [
  { name: 'Java', level: 85, icon: 'Jv', desc: 'POO avancee, JavaFX, design patterns, architecture MVC' },
  { name: 'Python', level: 80, icon: 'Py', desc: 'Scripts, automatisation, algorithmes, traitement de donnees' },
  { name: 'JavaScript', level: 82, icon: 'JS', desc: 'ES6+, DOM, async/await, fetch API, evenements' },
  { name: 'PHP', level: 75, icon: 'Ph', desc: 'Backend web, sessions, formulaires, PDO, MVC' },
  { name: 'HTML/CSS', level: 88, icon: 'Hc', desc: 'Semantique, Flexbox, Grid, responsive, animations CSS' },
  { name: 'SQL', level: 78, icon: 'Sq', desc: 'MySQL, PostgreSQL, requetes complexes, jointures, triggers' },
  { name: 'C', level: 70, icon: 'C', desc: 'Programmation systeme, pointeurs, allocation memoire' },
  { name: 'Git', level: 80, icon: 'Gt', desc: 'Versioning, branches, merge, GitHub, travail collaboratif' },
  { name: 'React', level: 72, icon: 'Re', desc: 'Composants, hooks, state management, projets perso' },
  { name: 'Unity', level: 55, icon: 'Un', desc: 'C#, gamedev basique, 2D/3D, specialisation 3e annee' },
];

const About = () => {
  const [selectedSkill, setSelectedSkill] = useState<typeof skills[0] | null>(null);
  const { isZaun } = useTheme();

  const s = isZaun ? zaunStyles : piltoverStyles;

  const getStarRating = (level: number) => {
    const stars = Math.round(level / 20);
    return stars;
  };

  return (
    <div className={s.page}>

      {/* 1. HERO */}
      <section className={`${s.section} ${s.darkViolet}`}>
        {/* Piltover decorative elements */}
        {!isZaun && (
          <div className={s.heroDecorations}>
            {/* Botanical leaf left */}
            <svg className={s.leafLeft} viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 200C60 200 0 140 0 80C0 20 60 0 60 0C60 0 120 20 120 80C120 140 60 200 60 200Z" fill="var(--nature-light)" opacity="0.5" />
              <path d="M60 180C60 180 20 130 20 80C20 30 60 10 60 10" stroke="var(--nature-secondary)" strokeWidth="1.5" fill="none" opacity="0.4" />
              <path d="M60 160C60 160 30 120 30 80C30 40 60 25 60 25" stroke="var(--nature-tertiary)" strokeWidth="1" fill="none" opacity="0.3" />
            </svg>
            {/* Botanical leaf right */}
            <svg className={s.leafRight} viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M60 200C60 200 0 140 0 80C0 20 60 0 60 0C60 0 120 20 120 80C120 140 60 200 60 200Z" fill="var(--nature-light)" opacity="0.5" />
              <path d="M60 180C60 180 100 130 100 80C100 30 60 10 60 10" stroke="var(--nature-secondary)" strokeWidth="1.5" fill="none" opacity="0.4" />
            </svg>
            {/* Ornamental circle top */}
            <svg className={s.ornamentTop} viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="48" stroke="var(--accent-tertiary)" strokeWidth="0.5" opacity="0.3" />
              <circle cx="50" cy="50" r="35" stroke="var(--accent-tertiary)" strokeWidth="0.5" opacity="0.2" />
              <circle cx="50" cy="50" r="20" stroke="var(--accent-tertiary)" strokeWidth="0.5" opacity="0.15" />
            </svg>
            {/* Ornamental circle bottom */}
            <svg className={s.ornamentBottom} viewBox="0 0 80 80" fill="none">
              <circle cx="40" cy="40" r="38" stroke="var(--nature-tertiary)" strokeWidth="0.5" opacity="0.25" />
              <circle cx="40" cy="40" r="25" stroke="var(--nature-tertiary)" strokeWidth="0.5" opacity="0.15" />
            </svg>
          </div>
        )}

        <div className={s.heroContent}>
          {!isZaun && <div className={s.heroBadge}>Portfolio 2025</div>}
          <div className={s.heroTag}>{isZaun ? 'A L\'AFFICHE' : 'BIENVENUE'}</div>
          {isZaun ? (
            <h1 className={s.heroName}>MAEL GIRARDIN</h1>
          ) : (
            <h1 className={s.heroName}>
              Mael <span className={s.heroNameAccent}>Girardin</span>
            </h1>
          )}
          <div className={s.heroRole}>ETUDIANT EN BUT INFORMATIQUE</div>
          <p className={s.heroSub}>
            Passione par la creation d'experiences numeriques uniques,
            je transforme les idees en projets concrets avec creativite et rigueur.
          </p>
          {isZaun ? (
            <div className={s.heroStars}>
              <span>★★★★☆</span>
              <span className={s.heroStarsLabel}>4/5 — Recommande par les recruteurs</span>
            </div>
          ) : (
            <div className={s.heroCta}>
              <a href="/projects" className={s.heroCtaBtn}>Voir mes projets</a>
              <a href="/contact" className={s.heroCtaSecondary}>Me contacter</a>
            </div>
          )}
        </div>
      </section>

      {/* 2. PANORAMA (Zaun) / QUOTE BAND (Piltover) */}
      {isZaun ? (
        <section className={s.panoSection}>
          <div className={s.panoOverlayTop} />
          <div className={s.panoImageWrapper}>
            <img src={starwarsPano} alt="Star Wars panorama" className={s.panoImage} />
            <div className={s.panoMessage}>
              <div className={s.panoMessageInner}>
                <span className={s.panoMessageIcon}>✦</span>
                <p className={s.panoMessageText}>
                  Bienvenue sur mon portfolio, il m'a prit du temps, je me suis fais chier alors lis-le en entier et achete un projet pour me faire kiffer merci le jeune.
                </p>
                <span className={s.panoMessageIcon}>✦</span>
              </div>
            </div>
          </div>
          <div className={s.panoOverlayBottom} />
        </section>
      ) : (
        <section className={s.quoteBand}>
          <GoldFrame variant="hero" className={s.quoteFrame}>
            <div className={s.quoteInner}>
              <svg className={s.quoteIcon} viewBox="0 0 24 24" fill="none" width="32" height="32">
                <path d="M3 21C3 21 4 17 4 14C4 11 2 9 2 9L6 5C6 5 10 9 10 14C10 19 6 21 3 21Z" fill="var(--accent-tertiary)" opacity="0.6" />
                <path d="M14 21C14 21 15 17 15 14C15 11 13 9 13 9L17 5C17 5 21 9 21 14C21 19 17 21 14 21Z" fill="var(--accent-tertiary)" opacity="0.6" />
              </svg>
              <p className={s.quoteText}>
                La simplicite est la sophistication supreme. Chaque projet est une opportunite
                de repousser les limites du possible.
              </p>
              <div className={s.quoteDivider} />
              <span className={s.quoteAuthor}>— Philosophie de developpement</span>
            </div>
          </GoldFrame>
        </section>
      )}

      {/* 3. SYNOPSIS / A PROPOS */}
      <section className={`${s.section} ${s.darkBlack}`}>
        <div className={s.inner}>
          <h2 className={s.sectionTitle}>{isZaun ? 'Synopsis' : 'A propos de moi'}</h2>

          {isZaun ? (
            <>
              <div className={s.synopsisCard}>
                <p className={s.synopsisText}>
                  Etudiant en BUT Informatique a l'IUT d'Arles depuis 2022, specialisation
                  Imagerie Numerique. Passionne par le developpement web et le design d'interfaces,
                  j'aime explorer de nouvelles technologies et creer des experiences utilisateur memorables.
                </p>
              </div>
              <div className={s.synopsisStats}>
                <div className={s.statItem}>
                  <span className={s.statNumber}>3</span>
                  <span className={s.statLabel}>Annees de BUT</span>
                </div>
                <div className={s.statDivider} />
                <div className={s.statItem}>
                  <span className={s.statNumber}>10+</span>
                  <span className={s.statLabel}>Projets realises</span>
                </div>
                <div className={s.statDivider} />
                <div className={s.statItem}>
                  <span className={s.statNumber}>∞</span>
                  <span className={s.statLabel}>Motivation</span>
                </div>
              </div>
            </>
          ) : (
            <div className={s.aboutGrid}>
              <div className={s.aboutTextCol}>
                <GoldFrame variant="card" className={s.aboutTextFrame}>
                  <p className={s.aboutText}>
                    Etudiant en BUT Informatique a l'IUT d'Arles depuis 2022, je me specialise
                    en Imagerie Numerique. Passionne par le developpement web et le design d'interfaces,
                    j'aime explorer de nouvelles technologies et creer des experiences utilisateur memorables.
                  </p>
                </GoldFrame>
                <div className={s.aboutHighlights}>
                  <div className={s.highlightItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" fill="var(--accent-primary)" />
                    </svg>
                    <span>Specialisation Imagerie Numerique</span>
                  </div>
                  <div className={s.highlightItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" fill="var(--accent-primary)" />
                    </svg>
                    <span>Passione par le web & le design</span>
                  </div>
                  <div className={s.highlightItem}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" fill="var(--accent-primary)" />
                    </svg>
                    <span>Creativite & rigueur technique</span>
                  </div>
                </div>
              </div>
              <div className={s.aboutStatsCol}>
                <div className={s.aboutStatCard}>
                  <span className={s.statNumber}>3</span>
                  <span className={s.statLabel}>Annees de BUT</span>
                  <span className={s.statSub}>IUT d'Arles</span>
                </div>
                <div className={s.aboutStatCard}>
                  <span className={s.statNumber}>10+</span>
                  <span className={s.statLabel}>Projets realises</span>
                  <span className={s.statSub}>Web, 3D, Mobile</span>
                </div>
                <div className={s.aboutStatCard}>
                  <span className={s.statNumber}>∞</span>
                  <span className={s.statLabel}>Motivation</span>
                  <span className={s.statSub}>Toujours en quete</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 4. PARCOURS */}
      <section className={`${s.section} ${s.parcoursSection}`}>
        <div className={s.inner}>
          <h2 className={s.sectionTitle}>
            {isZaun && (
              <svg width="28" height="22" viewBox="0 0 14 11" style={{ imageRendering: 'pixelated' }}>
                <rect x="0" y="3" width="14" height="8" rx="1" fill="#9b7bcf" />
                <rect x="1" y="4" width="8" height="6" fill="#6b4b9f" />
                <rect x="2" y="5" width="6" height="4" fill="#111" />
                <rect x="10" y="5" width="3" height="3" fill="#c9b8e8" opacity="0.6" />
                <rect x="4" y="0" width="4" height="3" fill="#7b5baf" />
              </svg>
            )}
            {isZaun ? 'Parcours' : 'Mon Parcours'}
          </h2>

          {isZaun ? (
            /* Zaun: horizontal film strip */
            <div className={s.filmTimeline}>
              <div className={s.filmStrip}>
                <div className={s.filmEdge}>
                  {Array.from({ length: 30 }, (_, i) => (
                    <div key={i} className={s.sprocketHole} />
                  ))}
                </div>
                <div className={s.filmFrames}>
                  {timeline.map((item, i) => (
                    <div
                      key={item.year + item.title}
                      className={s.filmFrame}
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className={s.frameNumber}>SCENE {i + 1}</div>
                      <div className={s.frameYear}>{item.year}</div>
                      <div className={s.frameTitle}>{item.title}</div>
                      <div className={s.frameDesc}>{item.desc}</div>
                    </div>
                  ))}
                </div>
                <div className={s.filmEdge}>
                  {Array.from({ length: 30 }, (_, i) => (
                    <div key={i} className={s.sprocketHole} />
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Piltover: vertical timeline with GoldFrame on cards */
            <div className={s.verticalTimeline}>
              {timeline.map((item, i) => (
                <div
                  key={item.year + item.title}
                  className={`${s.timelineItem} ${i % 2 === 0 ? s.timelineLeft : s.timelineRight}`}
                  style={{ animationDelay: `${i * 0.15}s` }}
                >
                  <div className={s.timelineDot} />
                  <div className={s.timelineCard}>
                    <div className={s.timelineYear}>{item.year}</div>
                    <h3 className={s.timelineTitle}>{item.title}</h3>
                    <p className={s.timelineDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Boundary characters (Zaun only) */}
      {isZaun && (
        <div className={s.sectionBoundary}>
          <img src={gojoImg} alt="Gojo" className={s.boundaryCharLeft} />
          <img src={tojiImg} alt="Toji" className={s.boundaryCharRight} />
        </div>
      )}

      {/* 5. COMPETENCES */}
      <section className={`${s.section} ${s.darkViolet}`}>
        <div className={s.inner}>
          <h2 className={s.sectionTitle}>{isZaun ? 'Competences' : 'Mes Competences'}</h2>

          {isZaun ? (
            /* Zaun: arcade skill machines */
            <div className={s.skillsArcade}>
              {skills.map((skill, i) => (
                <div
                  key={skill.name}
                  className={s.skillMachine}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className={s.skillScreen}>
                    <span className={s.skillIcon}>{skill.icon}</span>
                    <div className={s.skillBars}>
                      {Array.from({ length: 10 }, (_, j) => (
                        <div
                          key={j}
                          className={`${s.skillBar} ${j < skill.level / 10 ? s.skillBarActive : ''}`}
                          style={{ animationDelay: `${j * 0.05}s` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className={s.skillLabel}>{skill.name}</div>
                  <div className={s.skillLevel}>{skill.level}%</div>
                </div>
              ))}
            </div>
          ) : (
            /* Piltover: elegant progress bars */
            <GoldFrame variant="section" className={s.skillsFrame}>
              <div className={s.skillsGrid}>
                {skills.map((skill, i) => (
                  <div
                    key={skill.name}
                    className={s.skillRow}
                    style={{ animationDelay: `${i * 0.08}s` }}
                    onClick={() => setSelectedSkill(skill)}
                  >
                    <div className={s.skillRowHeader}>
                      <span className={s.skillRowIcon}>{skill.icon}</span>
                      <span className={s.skillRowName}>{skill.name}</span>
                      <span className={s.skillRowLevel}>{skill.level}%</span>
                    </div>
                    <div className={s.skillProgressWrap}>
                      <div
                        className={s.skillProgressBar}
                        style={{ width: `${skill.level}%`, animationDelay: `${i * 0.1}s` }}
                      />
                    </div>
                    <p className={s.skillRowDesc}>{skill.desc}</p>
                  </div>
                ))}
              </div>
            </GoldFrame>
          )}

          {/* Skill popup */}
          {selectedSkill && (
            <div className={s.skillPopupOverlay} onClick={() => setSelectedSkill(null)}>
              <div className={s.skillPopup} onClick={(e) => e.stopPropagation()}>
                <div className={s.skillPopupIcon}>{selectedSkill.icon}</div>
                <h3 className={s.skillPopupName}>{selectedSkill.name}</h3>
                <p className={s.skillPopupDesc}>{selectedSkill.desc}</p>
                <div className={s.skillPopupStars}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <span
                      key={i}
                      className={`${s.skillStar} ${i < getStarRating(selectedSkill.level) ? s.skillStarActive : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className={s.skillPopupLevel}>NIVEAU: {selectedSkill.level}%</div>
                <button className={s.skillPopupClose} onClick={() => setSelectedSkill(null)}>
                  FERMER
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Floating decorations */}
      <div className={s.floatingPixels}>
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className={s.floatPixel}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              background: isZaun
                ? (i % 2 === 0 ? '#9b7bcf' : '#6b4b9f')
                : (i % 2 === 0 ? '#E8D48B' : '#C9A84C'),
              opacity: 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
