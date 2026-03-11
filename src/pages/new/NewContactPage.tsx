import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import s from './NewContactPage.module.css';
import shared from './shared.module.css';
import cvFile from '../../assets/CV Maël 2026.pdf';

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

/* FadeSection — outer wrapper always opaque, inner content fades */
const FadeSection = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const { ref, visible } = useFadeIn();
  return (
    <div className={className}>
      <div ref={ref} className={visible ? shared.fadeIn : shared.fadeOut}>
        {children}
      </div>
    </div>
  );
};

/* ============================
   MAIN COMPONENT
   ============================ */
const NewContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] Message de ${formData.name}`);
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\n${formData.message}`
    );
    window.open(
      `mailto:mael.pierre.girardin@icloud.com?subject=${subject}&body=${body}`,
      '_blank'
    );
    setSubmitted(true);
  };

  return (
    <div className={s.page}>
      {/* ======================== HEADER ======================== */}
      <section className={s.pageHeader}>
        <p className={s.headerIndex}>03 / Echangeons</p>
        <h1 className={s.pageTitle}>Contact</h1>
        <p className={s.pageDesc}>
          Un projet en tete ? Je suis disponible pour discuter de collaborations, de stages ou juste echanger.
        </p>
      </section>

      {/* ======================== CONTACT ======================== */}
      <FadeSection className={shared.section}>
        <div className={s.contactGrid}>

          {/* TERMINAL FORM */}
          <div className={s.terminalForm}>
            <div className={s.terminalHeader}>
              <div className={s.termDots}>
                <span className={`${s.termDot} ${s.termDotRed}`} />
                <span className={`${s.termDot} ${s.termDotYellow}`} />
                <span className={`${s.termDot} ${s.termDotGreen}`} />
              </div>
              <span className={s.termTitle}>nouvelle_connexion.sh</span>
              <span className={s.termStatus}>● live</span>
            </div>

            <div className={s.terminalBody}>
              {submitted ? (
                <div className={s.successState}>
                  <div className={s.successAscii}>
                    <span className={s.successLine}>{'> Message recu ✓'}</span>
                    <span className={s.successLine}>{'> Reponse sous 24h...'}</span>
                    <span className={s.successLine}>{'> Connexion fermee.'}</span>
                  </div>
                  <button
                    className={shared.btnSecondary}
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
                  >
                    Nouveau message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={s.form}>
                  <div className={s.formRow}>
                    <div className={s.formField}>
                      <label className={s.formLabel}>
                        <span className={s.labelComment}>// </span>nom
                      </label>
                      <div className={s.inputWrapper}>
                        <span className={s.inputPrompt}>›</span>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={s.formInput}
                          placeholder="votre_nom"
                          required
                        />
                      </div>
                    </div>
                    <div className={s.formField}>
                      <label className={s.formLabel}>
                        <span className={s.labelComment}>// </span>email
                      </label>
                      <div className={s.inputWrapper}>
                        <span className={s.inputPrompt}>›</span>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={s.formInput}
                          placeholder="vous@example.com"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className={s.formField}>
                    <label className={s.formLabel}>
                      <span className={s.labelComment}>// </span>message
                    </label>
                    <div className={s.inputWrapper}>
                      <span className={`${s.inputPrompt} ${s.inputPromptTextarea}`}>›</span>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={s.formTextarea}
                        placeholder="Votre message..."
                        rows={5}
                        required
                      />
                    </div>
                  </div>

                  <button type="submit" className={s.btnSend}>
                    Envoyer →
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* CONTACT INFO SIDEBAR */}
          <div className={s.contactSidebar}>
            <div className={s.sidebarSection}>
              <p className={s.sidebarLabel}>// contact direct</p>
              <div className={s.infoList}>
                <div className={s.infoItem}>
                  <span className={s.infoKey}>email</span>
                  <span className={s.infoVal}>mael.pierre.girardin@icloud.com</span>
                </div>
                <div className={s.infoItem}>
                  <span className={s.infoKey}>tel</span>
                  <span className={s.infoVal}>+33 6 44 33 80 07</span>
                </div>
                <div className={s.infoItem}>
                  <span className={s.infoKey}>loc</span>
                  <span className={s.infoVal}>France</span>
                </div>
              </div>
            </div>

            <div className={s.sidebarSection}>
              <p className={s.sidebarLabel}>// liens</p>
              <div className={s.socialLinks}>
                <a
                  href="https://github.com/Maelouuu"
                  className={s.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={s.socialArrow}>↗</span>
                  GitHub
                </a>
                <a
                  href={cvFile}
                  className={s.socialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="CV Maël Girardin 2026.pdf"
                >
                  <span className={s.socialArrow}>↗</span>
                  CV
                </a>
              </div>
            </div>

            <div className={`${s.sidebarSection} ${s.availSection}`}>
              <p className={s.sidebarLabel}>// statut</p>
              <div className={s.availItems}>
                <div className={s.availItem}>
                  <span className={s.availDotGreen} />
                  <span className={s.availText}>Freelance — Ouvert</span>
                </div>
                <div className={s.availItem}>
                  <span className={s.availDotOrange} />
                  <span className={s.availText}>Alternance — Aout 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeSection>

      {/* ======================== FOOTER ======================== */}
      <footer className={shared.footer}>
        <div className={shared.footerContent}>
          <Link to="/legacy" className={shared.legacyBtn}>
            Voir l'ancienne version du portfolio
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <p className={shared.copyright}>&copy; 2025 Mael Girardin. Tous droits reserves.</p>
        </div>
      </footer>
    </div>
  );
};

export default NewContactPage;
