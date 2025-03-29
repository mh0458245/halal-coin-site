import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Left side: Logo */}
        <Link href="/" legacyBehavior>
          <a style={styles.logo}>
            <img src="/logo.png" alt="Halal Coin Logo" style={styles.logoImg} />
            <span style={styles.logoText}>Halal Coin</span>
          </a>
        </Link>

        {/* Hamburger (mobile) */}
        <button onClick={() => setIsOpen(!isOpen)} style={styles.hamburger}>
          ☰
        </button>

        {/* Links */}
        <div style={{ ...styles.menu, display: isOpen ? 'flex' : 'none' }}>
          <Link href="/" legacyBehavior><a style={styles.link}>Home</a></Link>
          <Link href="/whitepaper" legacyBehavior><a style={styles.link}>Whitepaper</a></Link>
          <Link href="/about" legacyBehavior><a style={styles.link}>About</a></Link>
          <Link href="/contact" legacyBehavior><a style={styles.link}>Contact</a></Link>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '0.75rem 1rem',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
  },
  logoImg: {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  },
  logoText: {
    fontSize: '1.25rem',
    fontWeight: 'bold',
  },
  hamburger: {
    fontSize: '1.5rem',
    background: 'none',
    border: 'none',
    color: 'white',
    cursor: 'pointer',
    display: 'block',
  },
  menu: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '10px',
    width: '100%',
    marginTop: '1rem',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 0',
    display: 'block',
  },
};
