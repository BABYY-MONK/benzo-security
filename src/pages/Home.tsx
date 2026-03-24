import { motion } from 'framer-motion';
import { Shield, Sun, Video, ArrowRight, CheckCircle2, Star, Clock, Wrench, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.15 }
  })
};

const stats = [
  { number: '500+', label: 'Installations Done', icon: '🏠' },
  { number: '5yr', label: 'Workmanship Warranty', icon: '🛡️' },
  { number: '24/7', label: 'Support Available', icon: '🕐' },
  { number: '100%', label: 'Client Satisfaction', icon: '⭐' },
];

const services = [
  {
    icon: <Shield size={32} color="var(--primary)" />,
    iconClass: 'icon-box-cyan',
    title: 'Automatic Gates',
    color: 'var(--primary)',
    glow: 'rgba(0, 229, 255, 0.15)',
    desc: 'Heavy-duty sliding and swing gate automation engineered for Kenyan homes and businesses. Secure, fast, and built to outlast the elements.',
    features: ['Centurion & FAAC Systems', 'Slide & Swing Motors', 'Remote & Smartphone Control', 'Battery Backup Included'],
    link: '/products'
  },
  {
    icon: <Video size={32} color="var(--primary)" />,
    iconClass: 'icon-box-cyan',
    title: 'CCTV Surveillance',
    color: 'var(--primary)',
    glow: 'rgba(0, 229, 255, 0.15)',
    desc: 'High-definition 4K day/night cameras with remote viewing capabilities. Monitor your home or business from anywhere in the world via your smartphone.',
    features: ['4K & 8MP Ultra-HD Cameras', 'Night Vision / ColorVu', 'AI Motion Detection', 'Mobile App Live View'],
    link: '/products'
  },
  {
    icon: <Sun size={32} color="var(--secondary)" />,
    iconClass: 'icon-box-gold',
    title: 'Solar Installations',
    color: 'var(--secondary)',
    glow: 'rgba(255, 183, 3, 0.15)',
    desc: 'Beat Kenya Power blackouts with premium solar panels and lithium battery backups. Reliable, clean energy powering your security systems and home 24/7.',
    features: ['Monocrystalline Solar Panels', 'LiFePO4 Battery Banks', 'Hybrid Inverter Systems', 'Solar Street Lighting'],
    link: '/products'
  },
];

const whyUs = [
  { icon: <Star size={20} color="var(--primary)" />, title: 'Premium Hardware Only', desc: 'We use only industry-certified brands — Centurion, Hikvision, and tier-1 solar panels with manufacturer warranties.' },
  { icon: <Wrench size={20} color="var(--primary)" />, title: 'Expert Installation', desc: 'Our certified technicians handle every job from site survey to final commissioning — zero compromise on quality.' },
  { icon: <Clock size={20} color="var(--primary)" />, title: '24/7 After-Sales Support', desc: 'We do not disappear after installation. Our team is reachable anytime for maintenance, remote diagnostics, and repairs.' },
  { icon: <Phone size={20} color="var(--primary)" />, title: 'Local Nairobi Team', desc: 'Based in Nairobi, we respond fast. No waiting weeks for a technician — we are in your neighborhood.' },
];

const Home = () => {
  return (
    <div>
      {/* ===== HERO SECTION ===== */}
      <section style={{
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Dual Background Images — blended */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          display: 'grid', gridTemplateColumns: '1fr 1fr'
        }}>
          <div style={{
            backgroundImage: 'url(/hero-solar.png)',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }} />
          <div style={{
            backgroundImage: 'url(/hero-gate.png)',
            backgroundSize: 'cover', backgroundPosition: 'center',
          }} />
        </div>

        {/* Dark gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(180deg, rgba(6,10,20,0.55) 0%, rgba(6,10,20,0.75) 60%, rgba(6,10,20,1) 100%)'
        }} />

        {/* Subtle glow orbs */}
        <div style={{
          position: 'absolute', top: '15%', left: '5%', width: '500px', height: '500px',
          background: 'var(--primary-glow)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 1, opacity: 0.5
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', right: '5%', width: '400px', height: '400px',
          background: 'var(--secondary-glow)', filter: 'blur(120px)', borderRadius: '50%', zIndex: 1, opacity: 0.5
        }} />

        {/* Hero Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="section-badge">Kenya's Premier Security & Solar Specialists</span>

            <h1 style={{
              fontSize: 'clamp(2.8rem, 8vw, 5.5rem)',
              lineHeight: 1.08,
              marginBottom: '1.5rem',
              fontWeight: 900,
              marginTop: '1rem'
            }}>
              Protecting Your World.<br />
              <span className="gradient-text">Powering Your Future.</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
              color: 'var(--text-secondary)',
              maxWidth: '680px',
              margin: '0 auto 2.5rem',
              lineHeight: 1.75
            }}>
              Specialists in Automatic Gate Systems, 4K CCTV Surveillance, and Sustainable Solar Energy solutions for homes and commercial properties across Kenya.
            </p>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact">
                <button className="btn-solid" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
                  Get a Free Quote <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/projects">
                <button className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
                  View Our Projects
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{ padding: '0', background: 'rgba(0, 229, 255, 0.03)', borderTop: '1px solid rgba(0,229,255,0.1)', borderBottom: '1px solid rgba(0,229,255,0.1)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 0 }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ borderRadius: 0, border: 'none', borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', padding: '2rem 1rem' }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>{stat.icon}</div>
              <div className="stat-number" style={{ fontSize: '2rem' }}>{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span className="section-badge">What We Offer</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>Our Core Services</h2>
            <div className="section-divider" />
            <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem', maxWidth: '600px', margin: '1.5rem auto 0', lineHeight: 1.7 }}>
              Every service is delivered by certified professionals using only premium, industry-tested hardware.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {services.map((svc, i) => (
              <motion.div
                key={i}
                className="glass-panel"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -10, boxShadow: `0 16px 48px ${svc.glow}`, borderColor: `${svc.color}33` }}
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div className={`icon-box ${svc.iconClass}`}>{svc.icon}</div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>{svc.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', flexGrow: 1 }}>{svc.desc}</p>
                <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                  {svc.features.map((f, fi) => (
                    <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                      <CheckCircle2 size={15} color={svc.color} style={{ flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={svc.link}>
                  <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.75rem', borderColor: svc.color, color: svc.color }}>
                    View Products <ArrowRight size={16} />
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section style={{ padding: '6rem 0', background: 'rgba(0, 229, 255, 0.02)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span className="section-badge">Why Benzo?</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginTop: '0.75rem' }}>The Benzo Difference</h2>
            <div className="section-divider" />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                className="glass-panel"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                style={{ padding: '1.75rem' }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(0, 229, 255, 0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {item.icon}
                </div>
                <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{item.title}</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.9rem' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: 'linear-gradient(135deg, rgba(0,229,255,0.08) 0%, rgba(124,58,237,0.08) 100%)',
              border: '1px solid rgba(0, 229, 255, 0.2)',
              borderRadius: 'var(--radius-lg)',
              padding: 'clamp(2.5rem, 5vw, 5rem)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background glow */}
            <div style={{
              position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
              width: '600px', height: '300px',
              background: 'rgba(0, 229, 255, 0.06)',
              filter: 'blur(60px)', borderRadius: '50%'
            }} />

            <span className="section-badge" style={{ position: 'relative', zIndex: 1 }}>Ready to Get Started?</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', margin: '1rem 0', position: 'relative', zIndex: 1 }}>
              Secure Your Property Today
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '560px', margin: '0 auto 2.5rem', lineHeight: 1.7, position: 'relative', zIndex: 1 }}>
              Get a free site survey and no-obligation quote from our experts. We service Nairobi and surrounding counties.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
              <Link to="/contact">
                <button className="btn-solid" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
                  Request a Free Quote <ArrowRight size={18} />
                </button>
              </Link>
              <Link to="/about">
                <button className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}>
                  Learn About Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
