import { useTheme } from '../context/ThemeContext';
import NeonSign from '../components/NeonSign';
import RetroTerminal from '../components/RetroTerminal';
import CleanContactForm from '../components/CleanContactForm';
import GoldFrame from '../components/piltover/GoldFrame';
import zaunStyles from './Contact.module.css';
import piltoverStyles from './piltover/ContactPiltover.module.css';
import onizukaImg from '../assets/onizuka.png';

const Contact = () => {
  const { isZaun } = useTheme();
  const s = isZaun ? zaunStyles : piltoverStyles;

  return (
    <div className={s.page}>
      {/* Piltover background decorations */}
      {!isZaun && (
        <div className={s.bgDecorations}>
          {/* Large ornamental circle top-right */}
          <svg className={s.bgOrnamentTR} viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="98" stroke="var(--accent-tertiary)" strokeWidth="0.5" opacity="0.15" />
            <circle cx="100" cy="100" r="75" stroke="var(--accent-tertiary)" strokeWidth="0.5" opacity="0.1" />
            <circle cx="100" cy="100" r="50" stroke="var(--accent-tertiary)" strokeWidth="0.5" opacity="0.08" />
            {/* Cross-hairs */}
            <line x1="2" y1="100" x2="198" y2="100" stroke="var(--accent-tertiary)" strokeWidth="0.3" opacity="0.08" />
            <line x1="100" y1="2" x2="100" y2="198" stroke="var(--accent-tertiary)" strokeWidth="0.3" opacity="0.08" />
          </svg>
          {/* Botanical leaf bottom-left */}
          <svg className={s.bgLeafBL} viewBox="0 0 80 140" fill="none">
            <path d="M40 140C40 140 0 100 0 55C0 10 40 0 40 0C40 0 80 10 80 55C80 100 40 140 40 140Z" fill="var(--nature-light)" opacity="0.3" />
            <path d="M40 120C40 120 15 85 15 55C15 25 40 10 40 10" stroke="var(--nature-secondary)" strokeWidth="1" fill="none" opacity="0.25" />
          </svg>
          {/* Gold filigree line */}
          <div className={s.bgFiligree} />
        </div>
      )}

      {/* Header */}
      <section className={s.header}>
        {isZaun ? (
          <NeonSign text="CONTACTEZ-MOI" color="#DCD6F7" glowColor="#A6B1E1" fontSize="1.5rem" />
        ) : (
          <div className={s.headerContent}>
            <div className={s.headerBadge}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M2 4L12 13L22 4" stroke="var(--accent-primary)" strokeWidth="2" />
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="var(--accent-primary)" strokeWidth="2" fill="none" />
              </svg>
              Contact
            </div>
            <h1 className={s.headerTitle}>
              Echangeons <span className={s.headerTitleAccent}>ensemble</span>
            </h1>
            <p className={s.headerDesc}>
              Vous avez un projet en tete, une question ou simplement envie de discuter ?
              N'hesitez pas a me contacter, je serais ravi d'echanger avec vous.
            </p>
            <div className={s.headerDivider}>
              <span className={s.headerDividerDiamond} />
            </div>
          </div>
        )}
        {isZaun && (
          <p className={s.subtitle}>
            Vous avez un projet en tete ? Une question ? N'hesitez pas a me contacter !
          </p>
        )}
      </section>

      {/* Main content — 2 column layout for Piltover */}
      {!isZaun ? (
        <section className={s.mainContent}>
          <div className={s.mainGrid}>
            {/* Left: Contact form */}
            <div className={s.formColumn}>
              <GoldFrame variant="card" className={s.formFrame}>
                <h2 className={s.formSectionTitle}>Envoyez-moi un message</h2>
                <CleanContactForm />
              </GoldFrame>
            </div>

            {/* Right: Info sidebar */}
            <div className={s.sidebarColumn}>
              {/* Contact info cards */}
              <div className={s.sidebarCards}>
                <div className={s.sidebarCard}>
                  <div className={s.sidebarCardIcon}>
                    <svg width="22" height="18" viewBox="0 0 40 32" fill="none">
                      <rect x="2" y="4" width="36" height="24" rx="3" stroke="url(#mailGold)" strokeWidth="2.5" fill="none" />
                      <path d="M2 8L20 20L38 8" stroke="url(#mailGold)" strokeWidth="2.5" fill="none" />
                      <defs>
                        <linearGradient id="mailGold" x1="0" y1="0" x2="40" y2="32">
                          <stop offset="0%" stopColor="#F2E5A0" />
                          <stop offset="50%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#B8942E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className={s.sidebarCardContent}>
                    <h4 className={s.sidebarCardLabel}>Email</h4>
                    <p className={s.sidebarCardValue}>johndoe@email.com</p>
                  </div>
                </div>

                <div className={s.sidebarCard}>
                  <div className={s.sidebarCardIcon}>
                    <svg width="18" height="22" viewBox="0 0 32 40" fill="none">
                      <rect x="6" y="2" width="20" height="36" rx="4" stroke="url(#phoneGold)" strokeWidth="2.5" fill="none" />
                      <circle cx="16" cy="33" r="2.5" fill="#D4AF37" />
                      <rect x="11" y="5" width="10" height="2.5" rx="1.25" fill="#E8D48B" />
                      <defs>
                        <linearGradient id="phoneGold" x1="6" y1="2" x2="26" y2="38">
                          <stop offset="0%" stopColor="#F2E5A0" />
                          <stop offset="50%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#B8942E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className={s.sidebarCardContent}>
                    <h4 className={s.sidebarCardLabel}>Telephone</h4>
                    <p className={s.sidebarCardValue}>+33 6 12 34 56 78</p>
                  </div>
                </div>

                <div className={s.sidebarCard}>
                  <div className={s.sidebarCardIcon}>
                    <svg width="20" height="24" viewBox="0 0 32 40" fill="none">
                      <path d="M16 4C10 4 5 9 5 16C5 25 16 36 16 36C16 36 27 25 27 16C27 9 22 4 16 4Z" stroke="url(#locGold)" strokeWidth="2.5" fill="none" />
                      <circle cx="16" cy="16" r="4.5" stroke="#D4AF37" strokeWidth="2" fill="none" />
                      <circle cx="16" cy="16" r="1.5" fill="#D4AF37" />
                      <defs>
                        <linearGradient id="locGold" x1="5" y1="4" x2="27" y2="36">
                          <stop offset="0%" stopColor="#F2E5A0" />
                          <stop offset="50%" stopColor="#D4AF37" />
                          <stop offset="100%" stopColor="#B8942E" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className={s.sidebarCardContent}>
                    <h4 className={s.sidebarCardLabel}>Localisation</h4>
                    <p className={s.sidebarCardValue}>Paris, France</p>
                  </div>
                </div>
              </div>

              {/* Availability badge */}
              <div className={s.availabilityCard}>
                <div className={s.availabilityDot} />
                <div className={s.availabilityText}>
                  <h4 className={s.availabilityTitle}>Disponible</h4>
                  <p className={s.availabilityDesc}>Ouvert aux opportunites de stage et alternance</p>
                </div>
              </div>

              {/* Social links */}
              <div className={s.sidebarSocial}>
                <h4 className={s.sidebarSocialTitle}>Retrouvez-moi</h4>
                <div className={s.sidebarSocialLinks}>
                  {[
                    { name: 'GitHub', icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    )},
                    { name: 'LinkedIn', icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    )},
                    { name: 'Twitter', icon: (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    )},
                  ].map((social) => (
                    <a key={social.name} href="#" className={s.sidebarSocialLink} onClick={(e) => e.preventDefault()}>
                      <span className={s.socialLinkIcon}>{social.icon}</span>
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Zaun: original layout */}
          <section className={s.formSection}>
            <RetroTerminal />
          </section>

          <section className={s.infoSection}>
            <div className={s.infoGrid}>
              <div className={s.infoCard}>
                <div className={s.infoIconWrap}>
                  <svg width="40" height="32" viewBox="0 0 10 8" style={{ imageRendering: 'pixelated' }}>
                    <rect x="0" y="0" width="10" height="8" fill="var(--purple-light)" />
                    <rect x="0" y="0" width="1" height="1" fill="var(--purple-dark)" />
                    <rect x="1" y="1" width="1" height="1" fill="var(--purple-dark)" />
                    <rect x="2" y="2" width="1" height="1" fill="var(--purple-dark)" />
                    <rect x="3" y="3" width="1" height="1" fill="var(--purple-dark)" />
                    <rect x="4" y="4" width="2" height="1" fill="var(--purple-dark)" />
                    <rect x="6" y="3" width="1" height="1" fill="var(--purple-dark)" />
                    <rect x="7" y="2" width="1" height="1" fill="var(--purple-dark)" />
                    <rect x="8" y="1" width="1" height="1" fill="var(--purple-dark)" />
                    <rect x="9" y="0" width="1" height="1" fill="var(--purple-dark)" />
                  </svg>
                </div>
                <h3 className={s.infoTitle}>EMAIL</h3>
                <p className={s.infoText}>johndoe@email.com</p>
              </div>

              <div className={s.infoCard}>
                <div className={s.infoIconWrap}>
                  <svg width="28" height="40" viewBox="0 0 7 10" style={{ imageRendering: 'pixelated' }}>
                    <rect x="1" y="0" width="5" height="10" fill="var(--purple-light)" />
                    <rect x="0" y="1" width="7" height="8" fill="var(--purple-light)" />
                    <rect x="2" y="1" width="3" height="1" fill="var(--purple-dark)" />
                    <rect x="1" y="3" width="5" height="4" fill="var(--purple-dark)" />
                    <rect x="2" y="8" width="3" height="1" fill="var(--purple-dark)" />
                  </svg>
                </div>
                <h3 className={s.infoTitle}>TELEPHONE</h3>
                <p className={s.infoText}>+33 6 12 34 56 78</p>
              </div>

              <div className={s.infoCard}>
                <div className={s.infoIconWrap}>
                  <svg width="32" height="40" viewBox="0 0 8 10" style={{ imageRendering: 'pixelated' }}>
                    <rect x="2" y="0" width="4" height="1" fill="var(--purple-light)" />
                    <rect x="1" y="1" width="6" height="1" fill="var(--purple-light)" />
                    <rect x="0" y="2" width="8" height="3" fill="var(--purple-light)" />
                    <rect x="1" y="5" width="6" height="1" fill="var(--purple-light)" />
                    <rect x="2" y="6" width="4" height="1" fill="var(--purple-light)" />
                    <rect x="3" y="7" width="2" height="2" fill="var(--purple-light)" />
                    <rect x="3" y="2" width="2" height="2" fill="var(--purple-dark)" />
                  </svg>
                </div>
                <h3 className={s.infoTitle}>LOCALISATION</h3>
                <p className={s.infoText}>Paris, France</p>
              </div>
            </div>
          </section>

          <section className={s.socialSection}>
            <h3 className={s.socialTitle}>RETROUVEZ-MOI</h3>
            <div className={s.socialLinks}>
              {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
                <div key={social} className={s.socialLinkWrapper}>
                  {social === 'GitHub' && (
                    <img src={onizukaImg} alt="Onizuka" className={s.onizukaChar} />
                  )}
                  <a href="#" className={s.socialLink} onClick={(e) => e.preventDefault()}>
                    {social}
                  </a>
                </div>
              ))}
            </div>
          </section>
        </>
      )}

      {/* Floating stars */}
      <div className={s.floatingStars}>
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className={s.star}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Contact;
