export default function About() {
    return (
      <div className="container">
        <h1 style={styles.heading}>About Halal Coin</h1>
  
        <section style={styles.section}>
          <p>
            Halal Coin is a visionary project built to align modern finance with timeless principles. We’re creating a digital
            asset that empowers investors to grow wealth ethically, transparently, and in full alignment with Sharia.
          </p>
        </section>
  
        <section style={styles.section}>
          <h2 style={styles.subheading}>Our Story</h2>
          <p>
            We started Halal Coin with a simple idea: ethical investing shouldn&apos;t be an afterthought. With the rise of
            decentralized finance, we saw an opportunity to offer a financial solution that prioritizes integrity and impact.
          </p>
        </section>
  
        <section style={styles.section}>
          <h2 style={styles.subheading}>What Makes Us Different?</h2>
          <ul style={styles.list}>
            <li>✅ 100% Sharia-compliant investing</li>
            <li>✅ Transparent governance through community voting</li>
            <li>✅ Real-world use cases in ethical businesses</li>
            <li>✅ Long-term vision over short-term hype</li>
          </ul>
        </section>
  
        <section style={styles.section}>
          <h2 style={styles.subheading}>Meet the Team</h2>
          <p>
            We’re a global team of developers, finance professionals, and advisors — all passionate about combining technology with ethical impact.
          </p>
          <ul style={styles.team}>
            <li><strong>Mustafa H.</strong> – Founder & CEO</li>
            <li><strong>Sarah A.</strong> – Community Manager</li>
            <li><strong>Imran R.</strong> – Blockchain Engineer</li>
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
      marginBottom: '2rem',
    },
    list: {
      listStyle: 'none',
      paddingLeft: 0,
      fontSize: '1rem',
      lineHeight: '1.8',
    },
    team: {
      listStyle: 'none',
      marginTop: '1rem',
      paddingLeft: 0,
      fontSize: '1rem',
      lineHeight: '1.8',
    },
  };
  