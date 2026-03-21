import { motion } from 'framer-motion';
import { PlayCircle, Image as ImageIcon } from 'lucide-react';

const Projects = () => {
  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem', minHeight: 'calc(100vh - 80px)' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>Our Recent Projects</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          See Benzo Security in action. From robust automatic gates engineered for safety, to state-of-the-art CCTV and reliable solar grids.
        </p>
      </div>

      {/* Videos Section (Automatic Gates) */}
      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <PlayCircle color="var(--primary)" /> 
          Automatic Gate Installations
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Video Placeholder 1 */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="glass-panel" 
            style={{ padding: '1rem' }}
          >
            <div style={{ width: '100%', height: '220px', background: '#111', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              {/* Replace src with the client's actual video path e.g., /assets/gate1.mp4 */}
              <video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                controls 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                poster="https://images.unsplash.com/photo-1510419263158-b193231eb96d?q=80&w=600&auto=format&fit=crop"
              />
            </div>
            <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>Heavy Duty Sliding Gate</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Nairobi / Residential</p>
          </motion.div>

          {/* Video Placeholder 2 */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="glass-panel" 
            style={{ padding: '1rem' }}
          >
            <div style={{ width: '100%', height: '220px', background: '#111', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                controls 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                poster="https://images.unsplash.com/photo-1558002038-12821360cc97?q=80&w=600&auto=format&fit=crop"
              />
            </div>
            <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>Double Swing Gate Motor</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Karen / Commercial Complex</p>
          </motion.div>

          {/* Video Placeholder 3 */}
          <motion.div 
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="glass-panel" 
            style={{ padding: '1rem' }}
          >
            <div style={{ width: '100%', height: '220px', background: '#111', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
              <video 
                src="https://www.w3schools.com/html/mov_bbb.mp4" 
                controls 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                poster="https://images.unsplash.com/photo-1541819779313-f4b648ea0ca6?q=80&w=600&auto=format&fit=crop"
              />
            </div>
            <h3 style={{ marginTop: '1rem', color: 'var(--text-primary)' }}>High-Speed Centurion Gate</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Kiambu / Industrial</p>
          </motion.div>
        </div>
      </section>

      {/* Solar & CCTV Photos Section */}
      <section>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ImageIcon color="var(--secondary)" /> 
          Solar & CCTV Integrations
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
          
          {/* Photo Placeholder 1 - Solar */}
          <motion.div whileHover={{ scale: 1.05 }} className="glass-panel" style={{ padding: '0.5rem', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop" 
              alt="Solar Panels Installation" 
              style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px' }} 
            />
            <h4 style={{ padding: '1rem 0.5rem 0.5rem', color: 'var(--secondary)' }}>Off-grid Solar System</h4>
          </motion.div>

          {/* Photo Placeholder 2 - CCTV */}
          <motion.div whileHover={{ scale: 1.05 }} className="glass-panel" style={{ padding: '0.5rem', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1557597774-9d273e51eb6e?q=80&w=800&auto=format&fit=crop" 
              alt="CCTV Camera" 
              style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px' }} 
            />
            <h4 style={{ padding: '1rem 0.5rem 0.5rem', color: 'var(--primary)' }}>4K Dome Camera Setup</h4>
          </motion.div>

          {/* Photo Placeholder 3 - Solar */}
          <motion.div whileHover={{ scale: 1.05 }} className="glass-panel" style={{ padding: '0.5rem', overflow: 'hidden' }}>
            <img 
              src="https://images.unsplash.com/photo-1588697920130-97c7fb333833?q=80&w=800&auto=format&fit=crop" 
              alt="Battery Inverter Setup" 
              style={{ width: '100%', height: '240px', objectFit: 'cover', borderRadius: '12px' }} 
            />
            <h4 style={{ padding: '1rem 0.5rem 0.5rem', color: 'var(--text-primary)' }}>Inverter & Battery Bank</h4>
          </motion.div>

        </div>
      </section>

    </div>
  );
};

export default Projects;
