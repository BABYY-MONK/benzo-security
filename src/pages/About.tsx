import { motion } from 'framer-motion';
import { Shield, Sun, Video, Target, Eye, Heart, Users, Award, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.12 }
  })
};

const pillars = [
  {
    icon: <Shield size={36} color="var(--primary)" />,
    iconClass: 'icon-box-cyan',
    title: 'Security Excellence',
    desc: 'We design and install robust security systems — from 4K CCTV networks to intelligent automated gates — built to outperform and outlast.'
  },
  {
    icon: <Sun size={36} color="var(--secondary)" />,
    iconClass: 'icon-box-gold',
    title: 'Solar Energy',
    desc: 'Harnessing East Africa\'s abundant sunshine, we deliver clean, cost-cutting solar installations that keep your home and business running day and night.'
  },
  {
    icon: <Heart size={36} color="#7c3aed" />,
    iconClass: '',
    title: 'Customer Trust',
    desc: 'Every project is delivered with transparency, quality hardware, and long-term support. Our clients recommend us because we stay long after the job is done.'
  },
];

const values = [
  { icon: <Target size={22} color="var(--primary)" />, label: 'Precision', desc: 'Every installation is surveyed, planned, and executed to exact specification.' },
  { icon: <Award size={22} color="var(--primary)" />, label: 'Quality', desc: 'We source only certified, warranted hardware from global manufacturers.' },
  { icon: <Users size={22} color="var(--primary)" />, label: 'Community', desc: 'Kenyan-owned, Nairobi-based, committed to building safer neighborhoods.' },
  { icon: <Zap size={22} color="var(--primary)" />, label: 'Innovation', desc: 'From app-controlled gates to smart solar, we bring modern solutions to Kenya.' },
];

const services = [
  {
    icon: <Shield size={28} color="var(--primary)" />,
    title: 'Automatic Gate Systems',
    items: ['Sliding & Swing Gate Motors', 'Access Control Keypads & Cards', 'Intercom & Video Entry Systems', 'Gate Motor Repairs & Service']
  },
  {
    icon: <Video size={28} color="var(--primary)" />,
    title: 'CCTV & Surveillance',
    items: ['4K IP & HD Analog Cameras', 'NVR/DVR Recording Systems', 'Night Vision & ColorVu Cameras', 'Remote Monitoring Setup']
  },
  {
    icon: <Sun size={28} color="var(--secondary)" />,
    title: 'Solar Energy Solutions',
    items: ['Rooftop Solar Panel Installation', 'Lithium Battery Energy Storage', 'Hybrid Inverter Systems', 'Solar Street & Flood Lighting']
  },
];

const About = () => {
  return (
    <div className="animate-fade-in">

      {/* ===== HERO BANNER ===== */}
      <section style={{
        padding: '8rem 0 6rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(0,229,255,0.04) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '800px', height: '400px',
          background: 'rgba(0, 229, 255, 0.05)', filter: 'blur(80px)', borderRadius: '50%'
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="section-badge">Who We Are</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', marginTop: '1rem', marginBottom: '1.5rem' }}>
              About <span className="gradient-text">Benzo Security</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '740px', margin: '0 auto', lineHeight: 1.8 }}>
              A Nairobi-born company on a mission to make every Kenyan home and business safer, smarter, and energy-independent.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>

            {/* Story Text */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="section-badge">Our Story</span>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', margin: '1rem 0 1.5rem' }}>
                Born in Nairobi.<br />Built for Kenya.
              </h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1rem' }}>
                Benzo Security was founded with a clear vision — to bring world-class security technology and renewable energy solutions to Kenyan homes and businesses at an accessible price point.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.25rem', fontSize: '1rem' }}>
                We started by installing automatic gates for residential clients in Nairobi's growing suburbs, and quickly expanded into CCTV surveillance and solar installations as we witnessed the growing need for comprehensive property protection and reliable power.
              </p>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '1rem' }}>
                Today, Benzo Security is a full-spectrum property solutions company — trusted by hundreds of homeowners, schools, apartment complexes, and businesses across Nairobi and beyond.
              </p>
            </motion.div>

            {/* Mission & Vision Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {/* Mission */}
              <motion.div
                className="glass-panel"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={0} variants={fadeUp}
                style={{ borderLeft: '3px solid var(--primary)', padding: '2rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Target size={24} color="var(--primary)" />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--primary)' }}>Our Mission</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  To deliver reliable, cutting-edge security and solar energy systems that genuinely protect Kenyan families and empower communities with clean, affordable power — backed by expert installation and lifelong support.
                </p>
              </motion.div>

              {/* Vision */}
              <motion.div
                className="glass-panel"
                initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={1} variants={fadeUp}
                style={{ borderLeft: '3px solid var(--secondary)', padding: '2rem' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <Eye size={24} color="var(--secondary)" />
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary)' }}>Our Vision</h3>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem' }}>
                  To be Kenya's most trusted name in integrated security and solar solutions — building a future where every Kenyan property is protected, powered, and connected.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ===== 3 PILLARS ===== */}
      <section style={{ padding: '6rem 0', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span className="section-badge">Our Foundations</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.75rem' }}>What Drives Us</h2>
            <div className="section-divider" />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {pillars.map((p, i) => (
              <motion.div
                key={i}
                className="glass-panel"
                custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -8 }}
                style={{ textAlign: 'center', padding: '2.5rem 2rem' }}
              >
                <div className={`icon-box ${p.iconClass}`} style={{
                  margin: '0 auto 1.5rem',
                  background: i === 2 ? 'rgba(124, 58, 237, 0.1)' : undefined,
                  border: i === 2 ? '1px solid rgba(124, 58, 237, 0.2)' : undefined
                }}>
                  {p.icon}
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.95rem' }}>{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHAT WE DO ===== */}
      <section style={{ padding: '7rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span className="section-badge">Our Services</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.75rem' }}>What Benzo Does</h2>
            <div className="section-divider" />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {services.map((svc, i) => (
              <motion.div
                key={i}
                className="glass-panel"
                custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div className="icon-box icon-box-cyan" style={{ width: '48px', height: '48px', borderRadius: '12px', marginBottom: 0 }}>
                    {svc.icon}
                  </div>
                  <h3 style={{ fontSize: '1.15rem' }}>{svc.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {svc.items.map((item, ii) => (
                    <li key={ii} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-secondary)', marginBottom: '0.6rem', fontSize: '0.9rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section style={{ padding: '6rem 0', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span className="section-badge">Our Values</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginTop: '0.75rem' }}>How We Work</h2>
            <div className="section-divider" />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="glass-panel"
                custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{ padding: '1.75rem' }}
              >
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(0, 229, 255, 0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  {v.icon}
                </div>
                <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{v.label}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <span className="section-badge">Work With Us</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', margin: '1rem 0 1.25rem' }}>
              Ready to Secure Your Property?
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 2.5rem', lineHeight: 1.75 }}>
              Talk to our team today for a free consultation and site survey. We serve Nairobi, Kiambu, Machakos, and surrounding counties.
            </p>
            <Link to="/contact">
              <button className="btn-solid" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
                Contact Us Today <ArrowRight size={18} />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default About;
