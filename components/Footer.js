export default function Footer() {
    return (
      <footer style={styles.footer}>
        <p style={styles.text}>© {new Date().getFullYear()} Halal Coin LLC. All rights reserved.</p>
        
        <div style={styles.icons}>
          <a
            href="https://twitter.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            🐦
          </a>
          <a
            href="https://t.me/YOUR_TELEGRAM"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            📢
          </a>
          <a
            href="mailto:info@halalcoin.finance"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            ✉️ info@halalcoin.finance
          </a>
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
      fontSize: '0.9rem',
    },
    icons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '1.5rem',
      flexWrap: 'wrap',
      fontSize: '1rem',
    },
    icon: {
      color: '#222',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };
  