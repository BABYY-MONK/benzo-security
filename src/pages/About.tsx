const About = () => {
  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem', minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>About Benzo Security</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
          Established in Kenya, Benzo Security has set the gold standard in property protection and renewable solar energy. Our team comprises industry veterans committed to delivering precision, quality, and unmatched peace of mind.
        </p>
      </div>
      <div className="glass-panel text-center">
        <h2>More content coming soon...</h2>
      </div>
    </div>
  );
};

export default About;
