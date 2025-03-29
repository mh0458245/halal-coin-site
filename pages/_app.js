import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }) {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      {showScroll && (
        <button onClick={scrollToTop} style={styles.backToTop}>
          ⬆️ Top
        </button>
      )}
    </>
  );
}

const styles = {
  backToTop: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
    padding: '10px 16px',
    fontSize: '16px',
    borderRadius: '6px',
    backgroundColor: '#222',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
    zIndex: 999,
    transition: 'opacity 0.3s ease',
  },
};
