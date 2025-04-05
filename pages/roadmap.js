export default function Roadmap() {
    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>Project Roadmap & FAQ</h1>
  
        <section style={styles.section}>
          <h2 style={styles.subheading}>📍 Roadmap</h2>
          <ul style={styles.list}>
            <li><strong>Q1 2025:</strong> Website launch, whitepaper published, testnet deployment</li>
            <li><strong>Q2 2025:</strong> Ethereum Mainnet launch, Uniswap pool created</li>
            <li><strong>Q3 2025:</strong> Token listings on CoinGecko and CMC, community growth push</li>
            <li><strong>Q4 2025:</strong> Strategic partnerships, staking + utility integrations</li>
            <li><strong>2026:</strong> Exchange listings, mobile app release, DAO voting launch</li>
          </ul>
        </section>
  
        <section style={styles.section}>
          <h2 style={styles.subheading}>🤔 FAQ</h2>
          <ul style={styles.faqList}>
            <li><strong>What is HCIT?</strong><br />Halal Crowdfunding Investment Token is a Sharia-compliant token for ethical investing.</li>
            <li><strong>How can I buy HCIT?</strong><br />You can buy HCIT on Uniswap. A direct link is provided on the homepage.</li>
            <li><strong>Is there a total supply cap?</strong><br />Yes, the total supply is 1,000,000,000 HCIT tokens.</li>
            <li><strong>Will HCIT be listed on exchanges?</strong><br />Yes, our goal is to list on CoinGecko, CoinMarketCap, and eventually major exchanges like Coinbase and Robinhood.</li>
            <li><strong>Is Halal Coin audited?</strong><br />The smart contract was built using OpenZeppelin standards and is verified on Etherscan. A formal audit is planned for Q3 2025.</li>
          </ul>
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
      marginBottom: '3rem',
    },
    list: {
      listStyle: 'disc',
      paddingLeft: '1.5rem',
      fontSize: '1rem',
      lineHeight: '1.8',
    },
    faqList: {
      listStyle: 'none',
      paddingLeft: 0,
      fontSize: '1rem',
      lineHeight: '1.8',
    },
  };
  