import { Shield, Sun, Video } from 'lucide-react';

const Services = () => {
  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem', minHeight: 'calc(100vh - 80px)' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>Specialized Services</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto' }}>
          Explore our core offerings. From high-grade security to renewable energy, built to withstand the Kenyan climate.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        <div className="glass-panel text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Shield size={64} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Automatic Gates</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Fully automated, heavy-duty gate motors with remote access controllers.</p>
        </div>
        <div className="glass-panel text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Video size={64} color="var(--primary)" style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>CCTV Systems</h2>
          <p style={{ color: 'var(--text-secondary)' }}>4K ultra-responsive cameras with night vision and remote app integration.</p>
        </div>
        <div className="glass-panel text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Sun size={64} color="var(--secondary)" style={{ marginBottom: '1rem' }} />
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Solar Grids</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Full panel and battery setup keeping your systems online even during outages.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
