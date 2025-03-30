import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container">
      {/* Hero Section */}
      <section style={styles.hero}>
        <Image
          src="/logo.png"
          alt="Halal Coin Logo"
          width={80}
          height={80}
          style={styles.heroLogo}
        />
        <h1 style={styles.headline}>Halal Coin</h1>
        <p style={styles.subtext}>
          The first Sharia-compliant blockchain token for ethical investing.
        </p>
        <div style={styles.buttonRow}>
          <Link href="/whitepaper">
            <a style={styles.primaryButton}>Read Whitepaper</a>
          </Link>
          <Link href="/about">
            <a style={styles.secondaryButton}>Learn More</a>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>Why Halal Coin?</h2>
        <ul style={styles.featureList}>
          <li><strong>✓ Transparent:</strong> Every transaction is recorded on-chain.</li>
          <li><strong>✓ Sharia-Compliant:</strong> Built with Islamic finance principles.</li>
          <li><strong>✓ Ethical Investing:</strong> Real-world impact, not speculation.</li>
        </ul>
      </section>

      {/* Call to Action Section */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Join the Halal Investment Movement</h2>
        <p style={styles.ctaText}>
          Be among the first to access our ethical, Sharia-compliant investment platform.
        </p>
        <Link href="/whitepaper">
          <a style={styles.ctaButton}>Explore the Whitepaper</a>
        </Link>
      </section>
    </div>
  );
}

const styles = {
  hero: {
    marginTop: '4rem',
    textAlign: 'center',
  },
  heroLogo: {
    marginBottom: '1rem',
  },
  headline: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subtext: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: '#555',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap',
  },
  primaryButton: {
    backgroundColor: '#222',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
  secondaryButton: {
    border: '2px solid #222',
    color: '#222',
    padding: '0.75rem 1.5rem',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
  },
  features: {
    marginTop: '4rem',
    padding: '2rem 1rem',
    backgroundColor: '#f1f1f1',
    borderRadius: '8px',
  },
  sectionTitle: {
    fontSize: '1.75rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  featureList: {
    listStyle: 'none',
    paddingLeft: 0,
    lineHeight: '2',
    fontSize: '1rem',
    textAlign: 'left',
    maxWidth: '600px',
    margin: '0 auto',
  },
  cta: {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center',
    padding: '3rem 1rem',
    marginTop: '4rem',
    borderRadius: '8px',
  },
  ctaTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  ctaText: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
  },
  ctaButton: {
    backgroundColor: '#fff',
    color: '#222',
    padding: '0.75rem 1.5rem',
    textDecoration: 'none',
    fontWeight: 'bold',
    borderRadius: '6px',
  },
};
