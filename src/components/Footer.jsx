import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p>&copy; {currentYear} JuegosFlix. All rights reserved.</p>
      <div style={styles.links}>
        <Link to="/PrivacyNotice" style={styles.link}>Privacy Notice</Link><br />
        <Link to="/LegalNotice" style={styles.link}>Legal Notice</Link>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    color: '#fff',
    marginTop: '2rem',
    width: '100%'
  },
  links: {
    marginTop: '0.5rem',
  },
  link: {
    color: '#61dafb',
    textDecoration: 'none',
  }
};

export default Footer;
