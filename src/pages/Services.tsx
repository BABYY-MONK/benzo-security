import { motion } from 'framer-motion';
import { Shield, Sun, Video, CheckCircle2, ArrowRight, Zap, Target, Cpu, TrendingUp, Lock, Smartphone, Wrench, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const, delay: i * 0.1 }
  })
};

/* ==================== AUTOMATIC GATES ==================== */
const gateFeatures = [
  { icon: <Lock size={18} color="var(--primary)" />, label: 'Access Control', desc: 'Keypads, RFID cards, fingerprint readers, and intercom systems for full access management.' },
  { icon: <Smartphone size={18} color="var(--primary)" />, label: 'App & Remote Control', desc: 'Open, close, and monitor your gate from anywhere using a smartphone app or standard remote.' },
  { icon: <Zap size={18} color="var(--primary)" />, label: 'Battery Backup', desc: 'Your gate stays operational even during Kenya Power outages with built-in battery systems.' },
  { icon: <Wrench size={18} color="var(--primary)" />, label: 'Professional Service', desc: 'Full installation, programming, and annual maintenance by Centurion/FAAC certified technicians.' },
];
const gateTypes = ['Sliding Gate Motors', 'Swing Gate Automation', 'Barrier Boom Gates', 'Underground Gate Systems', 'Pedestrian Turnstiles', 'Electric Fence Integration'];
const gateBrands = ['Centurion Systems', 'FAAC', 'BFT', 'NICE', 'ET Systems'];

/* ==================== CCTV ==================== */
const cctvFeatures = [
  { icon: <Camera size={18} color="var(--primary)" />, label: '4K Ultra-HD Cameras', desc: 'Crystal-clear 8MP resolution captures faces, vehicles and license plates from long distances.' },
  { icon: <Smartphone size={18} color="var(--primary)" />, label: 'Remote Live Viewing', desc: 'Watch live footage on your phone 24/7 from anywhere in the world via the Hik-Connect app.' },
  { icon: <Shield size={18} color="var(--primary)" />, label: 'AI Smart Detection', desc: 'Intelligent algorithms detect humans and vehicles — fewer false alarms, instant real alerts.' },
  { icon: <Zap size={18} color="var(--primary)" />, label: 'Colour Night Vision', desc: 'ColorVu technology delivers full-colour footage even in zero-light environments, no IR wash-out.' },
];
const cctvTypes = ['IP Network Cameras', 'HD Analog Cameras', 'PTZ Pan-Tilt-Zoom Cameras', 'Dome & Bullet Cameras', 'NVR & DVR Recording Systems', 'ANPR Number Plate Cameras'];
const cctvPackages = [
  { name: 'Starter', cameras: '4 Cameras', storage: '1TB Storage', desc: 'Perfect for small homes, individual units, or a single-gate entry point.', color: 'var(--primary)' },
  { name: 'Standard', cameras: '8 Cameras', storage: '2TB Storage', desc: 'Ideal for larger homes, offices, shops, and small commercial properties.', color: 'var(--primary)', highlight: true },
  { name: 'Enterprise', cameras: '16+ Cameras', storage: '4–8TB Storage', desc: 'Full campus or multi-floor commercial surveillance with central monitoring.', color: 'var(--secondary)' },
];

/* ==================== SOLAR ==================== */
const solarBenefits = [
  { icon: '💡', title: 'Lower Power Bills', desc: 'Generate your own electricity and drastically cut or eliminate Kenya Power bills.' },
  { icon: '🔋', title: 'Backup During Outages', desc: 'Lithium battery banks keep your home and security systems on when the grid goes down.' },
  { icon: '🌍', title: 'Clean Energy', desc: 'Zero carbon emissions. Solar keeps Kenya\'s environment clean for future generations.' },
  { icon: '📈', title: 'Property Value Boost', desc: 'Solar installations increase property resale value and appeal to modern buyers.' },
];
const solarSystems = [
  { name: 'Grid-Tied System', icon: '⚡', desc: 'Connected to KPLC grid — excess power fed back. No battery needed. Lowest cost. Ideal for reliable-grid areas.' },
  { name: 'Off-Grid System', icon: '🏕️', desc: 'Fully independent from KPLC. Panels + batteries provide 24/7 power. Perfect for farms, remote plots, or reliable backup.' },
  { name: 'Hybrid System', icon: '🔄', desc: 'Best of both: solar + battery + grid. Auto-switches to best source available. Most popular for Nairobi homes.' },
];
const solarProcess = ['Free site survey & energy audit', 'Custom system design & proposal', 'Hardware procurement & delivery', 'Professional installation & wiring', 'Testing, commissioning & handover', 'Annual maintenance & support'];

const Services = () => {
  return (
    <div className="animate-fade-in">

      {/* ===== PAGE HEADER ===== */}
      <section style={{
        padding: '8rem 0 5rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(0,229,255,0.04) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
          width: '700px', height: '300px', background: 'rgba(0,229,255,0.05)',
          filter: 'blur(80px)', borderRadius: '50%'
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="section-badge">What We Install</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '1rem 0 1.5rem' }}>
              Our <span className="gradient-text">Specialized Services</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
              From intelligent gate systems and 4K surveillance to clean solar energy — every service delivered by certified professionals using premium hardware.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ==================== AUTOMATIC GATES ==================== */}
      <section style={{ padding: '7rem 0' }} id="gates">
        <div className="container">
          {/* Section header */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="icon-box icon-box-cyan" style={{ flexShrink: 0 }}>
                <Shield size={32} color="var(--primary)" />
              </div>
              <div>
                <span className="section-badge" style={{ marginBottom: '0.25rem' }}>Service 01</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Automatic Gate Systems</h2>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '820px', lineHeight: 1.8 }}>
              Benzo Security designs and installs heavy-duty automatic gate systems tailored for Kenyan homes, apartment complexes, offices, and industrial facilities. We handle everything from the initial survey to final commissioning — built to withstand the Kenyan climate, load-shedding, and daily high-traffic use.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {gateFeatures.map((f, i) => (
              <motion.div key={i} className="glass-panel" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -6 }} style={{ padding: '1.75rem', display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,229,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{f.label}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <motion.div className="glass-panel" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--primary)' }}>Types We Install</h3>
              {gateTypes.map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" style={{ flexShrink: 0 }} /> {t}
                </div>
              ))}
            </motion.div>
            <motion.div className="glass-panel" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--primary)' }}>Brands We Work With</h3>
              {gateBrands.map((b, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} /> {b}
                </div>
              ))}
              <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginTop: '1rem', lineHeight: 1.6 }}>
                All motors come with manufacturer warranties and our 5-year workmanship guarantee.
              </p>
            </motion.div>
            <motion.div className="glass-panel" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.05) 0%, rgba(0,112,243,0.05) 100%)', border: '1px solid rgba(0,229,255,0.2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>Get a Gate Quote</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                  We offer free site surveys across Nairobi, Kiambu, Machakos, and surrounding counties. No obligation — just expert advice.
                </p>
              </div>
              <Link to="/contact">
                <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Request Free Survey <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />

      {/* ==================== CCTV ==================== */}
      <section style={{ padding: '7rem 0', background: 'rgba(255,255,255,0.01)' }} id="cctv">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="icon-box icon-box-cyan" style={{ flexShrink: 0 }}>
                <Video size={32} color="var(--primary)" />
              </div>
              <div>
                <span className="section-badge" style={{ marginBottom: '0.25rem' }}>Service 02</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>CCTV & Surveillance Systems</h2>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '820px', lineHeight: 1.8 }}>
              Benzo Security installs professional-grade CCTV systems using Hikvision, Dahua, and CP Plus cameras — brands trusted by banks, hotels, and government facilities worldwide. We design coverage zones, run cabling cleanly, set up remote viewing, and train you how to use your system.
            </p>
          </motion.div>

          {/* Key Features */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {cctvFeatures.map((f, i) => (
              <motion.div key={i} className="glass-panel" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -6 }} style={{ padding: '1.75rem', display: 'flex', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,229,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {f.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{f.label}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>{f.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Camera Types + Packages */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <motion.div className="glass-panel" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={0}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--primary)' }}>Camera & System Types</h3>
              {cctvTypes.map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={14} color="var(--primary)" style={{ flexShrink: 0 }} /> {t}
                </div>
              ))}
            </motion.div>
            <motion.div className="glass-panel" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '1.25rem', color: 'var(--primary)' }}>Why CCTV Matters</h3>
              {[
                'Deter theft, break-ins & vandalism', 'Evidence for police & insurance claims', 'Monitor staff & premises remotely', 'Cover gates, parking & perimeters', 'Integrated with gate & alarm systems'
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} /> {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Packages */}
          <motion.div initial="hidden" whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <h3 style={{ fontSize: '1.4rem', textAlign: 'center', marginBottom: '2rem' }}>CCTV System Packages</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {cctvPackages.map((pkg, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -8 }}
                  style={{
                    borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center',
                    background: pkg.highlight ? 'linear-gradient(135deg, rgba(0,229,255,0.1) 0%, rgba(0,112,243,0.08) 100%)' : 'var(--surface-gradient)',
                    border: `1px solid ${pkg.highlight ? 'rgba(0,229,255,0.35)' : 'var(--surface-border)'}`,
                    position: 'relative', overflow: 'hidden'
                  }}
                >
                  {pkg.highlight && (
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--primary)', color: '#000', fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.6rem', borderRadius: '50px' }}>
                      POPULAR
                    </div>
                  )}
                  <h3 style={{ fontSize: '1.3rem', color: pkg.color, marginBottom: '0.5rem' }}>{pkg.name}</h3>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>{pkg.cameras}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{pkg.storage}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{pkg.desc}</p>
                  <Link to="/contact">
                    <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '0.65rem', borderColor: pkg.color, color: pkg.color }}>
                      Get Quote
                    </button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} />

      {/* ==================== SOLAR ==================== */}
      <section style={{ padding: '7rem 0' }} id="solar">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <div className="icon-box icon-box-gold" style={{ flexShrink: 0 }}>
                <Sun size={32} color="var(--secondary)" />
              </div>
              <div>
                <span className="section-badge" style={{ marginBottom: '0.25rem' }}>Service 03</span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>Solar Energy Installations</h2>
              </div>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '820px', lineHeight: 1.8 }}>
              Kenya receives some of the highest solar irradiance in the world — over 4–6 kWh/m²/day. Benzo Security harnesses this to design and install complete solar energy systems that eliminate dependency on KPLC, slash electricity bills, and keep your security systems and home running 24/7.
            </p>
          </motion.div>

          {/* How Solar Works - Process steps */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem', textAlign: 'center' }}>
              <span className="gold-text">How We Do It</span> — Our Solar Process
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              {solarProcess.map((step, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  style={{ padding: '1.25rem', borderRadius: 'var(--radius-sm)', background: 'var(--surface-gradient)', border: '1px solid var(--surface-border)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,183,3,0.15)', border: '1px solid rgba(255,183,3,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--secondary)', fontWeight: 700, fontSize: '0.8rem' }}>
                    {i + 1}
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>{step}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem', textAlign: 'center' }}>Why Go Solar?</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {solarBenefits.map((b, i) => (
                <motion.div key={i} className="glass-panel" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -6 }} style={{ padding: '1.75rem' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{b.icon}</div>
                  <h4 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--secondary)' }}>{b.title}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.7 }}>{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* System Types */}
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '2rem', textAlign: 'center' }}>Types of Solar Systems We Install</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {solarSystems.map((sys, i) => (
                <motion.div key={i} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} whileHover={{ y: -6 }}
                  style={{ padding: '2rem', borderRadius: 'var(--radius-md)', background: 'linear-gradient(135deg, rgba(255,183,3,0.06) 0%, rgba(255,140,0,0.03) 100%)', border: '1px solid rgba(255,183,3,0.15)' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{sys.icon}</div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.75rem', color: 'var(--secondary)' }}>{sys.name}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.75 }}>{sys.desc}</p>
                </motion.div>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/contact">
                <button className="btn-solid" style={{ background: 'var(--gradient-secondary)', padding: '1rem 2.5rem', fontSize: '1rem' }}>
                  Get a Solar Assessment <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
