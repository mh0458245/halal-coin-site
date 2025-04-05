export default function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>

      <section style={styles.section}>
        <p>
          For inquiries, partnerships, or support, reach out to us anytime:
        </p>
        <ul style={styles.contactList}>
          <li><strong>Email:</strong> info@halalcoin.finance </li>
          <li><strong>Telegram:</strong> <a href="https://t.me/YOUR_TELEGRAM" target="_blank" rel="noopener noreferrer">@YOUR_TELEGRAM</a></li>
          <li><strong>Twitter:</strong> <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer">@YOUR_TWITTER</a></li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.subheading}>Business Inquiries</h2>
        <p>
          Interested in collaborating or investing in Halal Coin? Email us or schedule a call to connect with our team.
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
  contactList: {
    listStyle: 'none',
    paddingLeft: 0,
    lineHeight: '2',
    fontSize: '1rem',
  },
};