export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p style={styles.text}>© {new Date().getFullYear()} Halal Coin. All rights reserved.</p>
        <div style={styles.icons}>
          <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer">🐦</a>
          <a href="https://t.me/YOUR_TELEGRAM" target="_blank" rel="noopener noreferrer">📢</a>
          <a href="mailto:info@halalinvest.io" target="_blank" rel="noopener noreferrer">✉️</a>
        </div>
      </footer>
    );
  }
  
  const styles = {
    footer: {
      marginTop: '4rem',
      padding: '2rem 1rem',
      textAlign: 'center',
      backgroundColor: '#f9f9f9',
      borderTop: '1px solid #ddd',
    },
    text: {
      marginBottom: '1rem',
      color: '#666',
    },
    icons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      fontSize: '1.5rem',
    },
  };