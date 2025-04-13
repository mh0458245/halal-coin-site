import Link from 'next/link';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Halal Coin</h1>
      <p style={styles.subtitle}>
        Invest in real-world halal assets with purpose, transparency, and community trust.
      </p>

      <a
        href="https://app.uniswap.org/#/swap?outputCurrency=0x251CB85b58821Ec2EF905e36Ff30dd0EB4564Ea5&chain=mainnet"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.buyButton}
      >
        💧 Buy HCIT on Uniswap
      </a>

      <p style={styles.disclaimer}>
        💡 To ensure stable pricing, we currently recommend limiting contributions to{' '}
        <strong>$15 per transaction</strong> while the liquidity pool grows.
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: '0 auto',
    padding: '3rem 1.5rem',
    textAlign: 'center',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.1rem',
    marginBottom: '2rem',
    color: '#444',
  },
  buyButton: {
    backgroundColor: '#00b894',
    color: 'white',
    fontSize: '1rem',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    textDecoration: 'none',
    display: 'inline-block',
  },
  disclaimer: {
    marginTop: '1.5rem',
    fontSize: '0.9rem',
    color: '#555',
  },
};
