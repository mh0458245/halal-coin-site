import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  return (
    <div style={styles.wrapper}>
      <Navbar />
      <main style={styles.mainContent}>
        <Component {...pageProps} />
        <div style={styles.roadmapLinkContainer}>
          <Link href="/roadmap" legacyBehavior>
            <a style={styles.roadmapLink}>📍 Roadmap & FAQ</a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  mainContent: {
    flex: 1,
    position: 'relative',
  },
  roadmapLinkContainer: {
    marginTop: '2rem',
    textAlign: 'center',
  },
  roadmapLink: {
    textDecoration: 'none',
    color: '#00b894',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};
