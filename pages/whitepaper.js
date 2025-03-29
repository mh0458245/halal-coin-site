export default function Whitepaper() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Halal Coin Whitepaper</h1>
  
        <section style={styles.section}>
          <h2 style={styles.subheading}>Abstract</h2>
          <p>
            Halal Coin is a Sharia-compliant blockchain token designed for ethical crowdfunding.
            This whitepaper outlines our mission, technology, and tokenomics to offer a transparent and
            trustworthy investment platform aligned with Islamic financial principles.
          </p>
        </section>
  
        <section style={styles.section}>
          <h2 style={styles.subheading}>Vision & Mission</h2>
          <p><strong>Vision:</strong> To be the world’s most trusted ethical digital asset.</p>
          <p><strong>Mission:</strong> Empower individuals and businesses with Sharia-compliant blockchain-based investing.</p>
        </section>
  
        <section style={styles.section}>
          <h2 style={styles.subheading}>Tokenomics</h2>
          <ul style={styles.list}>
            <li><strong>Total Supply:</strong> 1,000,000,000 HCIT</li>
            <li>📊 50% — Crowdfunding Pool</li>
            <li>🛠️ 20% — Development Fund</li>
            <li>📣 15% — Marketing & Community</li>
            <li>🤝 10% — Team & Advisors (with vesting)</li>
            <li>🔐 5% — Reserve</li>
          </ul>
        </section>
  
        <section style={styles.section}>
          <h2 style={styles.subheading}>Revenue Model</h2>
          <p>
            Revenue will be generated through project fees, staking mechanisms, and partnerships. Profits are shared
            with token holders in a transparent, smart-contract driven system.
          </p>
        </section>
  
        <section style={styles.section}>
          <h2 style={styles.subheading}>Compliance & Governance</h2>
          <p>
            Guided by a Sharia Advisory Board, Halal Coin undergoes regular audits and provides on-chain
            voting for community-based governance.
          </p>
        </section>
      </div>
    );
  }
  
  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '2rem 1rem',
      lineHeight: '1.7',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '2rem',
      textAlign: 'center',
    },
    subheading: {
      fontSize: '1.5rem',
      marginBottom: '1rem',
      color: '#222',
    },
    section: {
      marginBottom: '2rem',
    },
    list: {
      listStyle: 'none',
      paddingLeft: 0,
      fontSize: '1rem',
      lineHeight: '1.8',
    },
  };
  