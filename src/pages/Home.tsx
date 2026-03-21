import { motion } from 'framer-motion';
import { Shield, Sun, Video, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section style={{ 
        minHeight: '90vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Glow Effects */}
        <div style={{
          position: 'absolute', top: '20%', left: '10%', width: '400px', height: '400px',
          background: 'var(--primary-glow)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '10%', width: '300px', height: '300px',
          background: 'var(--secondary-glow)', filter: 'blur(100px)', borderRadius: '50%', zIndex: 0
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeIn}>
            <span style={{ 
              color: 'var(--primary)', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '1rem', display: 'block' 
            }}>Kenya's Premier Security Solutions</span>
            
            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1.1, marginBottom: '1.5rem', fontWeight: 800 }}>
              Protecting Your World.<br />
              <span style={{ background: 'linear-gradient(90deg, #fff, #a1a1aa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Empowering Your Future.
              </span>
            </h1>
            
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
              Specialists in robust Automatic Gate Installations, High-Definition CCTV Surveillance, and Sustainable Solar Energy systems for residential and commercial properties.
            </p>

            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact">
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '1.1rem' }}>
                  Get a Free Quote <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/projects">
                <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', fontSize: '1.1rem', background: 'transparent', border: '1px solid var(--surface-border)', color: '#fff' }}>
                  View Our Projects
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section style={{ padding: '6rem 0', background: 'rgba(5, 5, 5, 0.4)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core Services</h2>
            <div style={{ width: '60px', height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Gate Service */}
            <motion.div 
              className="glass-panel service-card"
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,229,255,0.15)' }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div style={{ width: '64px', height: '64px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Shield size={32} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Automatic Gates</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Heavy-duty sliding and swing gate automation tailored for Kenyan homes and businesses. Secure, fast, and durable.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                {['Centurion Systems', 'Slide & Swing Motors', 'Remote & App Control'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--primary)" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CCTV Service */}
            <motion.div 
              className="glass-panel service-card"
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(0,229,255,0.15)' }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div style={{ width: '64px', height: '64px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Video size={32} color="var(--primary)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>CCTV Surveillance</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                High-definition 4K day/night cameras with remote viewing capabilities. Monitor your property from anywhere on your phone.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                {['IP & Analog HD', 'Night Vision/ColorVu', 'Mobile App Integration'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--primary)" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solar Service */}
            <motion.div 
              className="glass-panel service-card"
              whileHover={{ y: -10, boxShadow: '0 10px 30px rgba(255,183,3,0.15)' }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
              style={{ borderColor: 'rgba(255, 183, 3, 0.2)' }}
            >
              <div style={{ width: '64px', height: '64px', background: 'rgba(255, 183, 3, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <Sun size={32} color="var(--secondary)" />
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Solar Installations</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                Beat the blackouts with premium solar panels and battery backups. Reliable energy to power your security systems and home 24/7.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-secondary)' }}>
                {['Lithium Ion Batteries', 'Inverter Systems', 'Solar Street Lights'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <CheckCircle2 size={16} color="var(--secondary)" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
