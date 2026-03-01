import { useState, useEffect } from 'react';
import styles from './RetroTerminal.module.css';

const RetroTerminal = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [typingText, setTypingText] = useState('');
  const fullText = '> SYSTEME DE MESSAGERIE v2.4 PRET_';

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypingText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.terminal}>
      {/* Terminal title bar */}
      <div className={styles.titleBar}>
        <div className={styles.titleButtons}>
          <span className={styles.btnClose} />
          <span className={styles.btnMin} />
          <span className={styles.btnMax} />
        </div>
        <span className={styles.titleText}>RETRO-MAIL.exe</span>
        <div style={{ width: 60 }} />
      </div>

      {/* Terminal body */}
      <div className={styles.body}>
        <div className={styles.output}>
          <p className={styles.line}>{typingText}<span className={styles.cursor}>_</span></p>
          <p className={styles.line} style={{ color: '#D78FEE' }}>
            {'>'} Remplissez le formulaire pour envoyer un message
          </p>
          <p className={styles.line} style={{ opacity: 0.5 }}>
            ========================================
          </p>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.field}>
              <label className={styles.label}>{'>'} NOM:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={styles.input}
                placeholder="Entrez votre nom..."
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>{'>'} EMAIL:</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={styles.input}
                placeholder="votre@email.com"
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>{'>'} MESSAGE:</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={styles.textarea}
                placeholder="Votre message ici..."
                rows={5}
                required
              />
            </div>

            <button type="submit" className={styles.submitBtn}>
              {'>'} ENVOYER_MESSAGE.exe
            </button>
          </form>
        ) : (
          <div className={styles.successMsg}>
            <p className={styles.line} style={{ color: '#00ff00' }}>
              {'>'} MESSAGE ENVOYE AVEC SUCCES!
            </p>
            <p className={styles.line}>{'>'} Merci pour votre message.</p>
            <p className={styles.line}>{'>'} Reponse estimee : bientot...</p>
            <p className={styles.line} style={{ opacity: 0.5 }}>
              ========================================
            </p>
            <button
              className={styles.submitBtn}
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
              }}
            >
              {'>'} NOUVEAU_MESSAGE.exe
            </button>
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className={styles.statusBar}>
        <span>CONNECTED</span>
        <span>UTF-8</span>
        <span>LN 1, COL 1</span>
      </div>
    </div>
  );
};

export default RetroTerminal;
