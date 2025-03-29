export default function Home() {
  return (
    <div className="container">
      <section style={styles.hero}>
        <img src="/logo.png" alt="Halal Coin Logo" style={styles.heroLogo} />
        <h1 style={styles.headline}>Halal Coin</h1>
        <p style={styles.subtext}>
          The first Sharia-compliant blockchain token for ethical investing.
        </p>
        <div style={styles.buttonRow}>
          <a href="/whitepaper" style={styles.primaryButton}>Read Whitepaper</a>
          <a href="/about" style={styles.secondaryButton}>Learn More</a>
        </div>
      </section>

      <section style={styles.features}>
        <h2 style={styles.sectionTitle}>Why Halal Coin?</h2>
        <ul style={styles.featureList}>
          <li><strong>✓ Transparent:</strong> Every transaction is recorded on-chain.</li>
          <li><strong>✓ Sharia-Compliant:</strong> Built with Islamic finance principles.</li>
          <li><strong>✓ Ethical Investing:</strong> Real-world impact, not speculation.</li>
        </ul>
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
    width: '80px',
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
};
