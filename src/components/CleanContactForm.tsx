import { useState } from 'react';
import styles from './CleanContactForm.module.css';

const CleanContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className={styles.successCard}>
        <div className={styles.successIcon}>✓</div>
        <h3 className={styles.successTitle}>Message envoye !</h3>
        <p className={styles.successText}>Merci pour votre message. Je vous repondrai dans les plus brefs delais.</p>
        <button
          className={styles.resetBtn}
          onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', message: '' }); }}
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.row}>
        <div className={styles.field}>
          <label className={styles.label}>Nom</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={styles.input}
            placeholder="Votre nom"
            required
          />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={styles.input}
            placeholder="votre@email.com"
            required
          />
        </div>
      </div>
      <div className={styles.field}>
        <label className={styles.label}>Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={styles.textarea}
          placeholder="Votre message..."
          rows={6}
          required
        />
      </div>
      <button type="submit" className={styles.submitBtn}>
        Envoyer
      </button>
    </form>
  );
};

export default CleanContactForm;
