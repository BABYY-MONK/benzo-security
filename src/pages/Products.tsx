import { motion } from 'framer-motion';
import { Shield, Sun, Video, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const, delay: i * 0.1 }
  })
};

const products = {
  gates: [
    {
      id: 'g1',
      name: 'Centurion D5 Smart Sliding Motor',
      tag: 'Best Seller',
      tagColor: 'var(--primary)',
      description: 'Industry-leading gate motor for domestic and light-industrial applications. Features intelligent speed control, soft-start/stop, and battery backup as standard.',
      features: ['Top speed of up to 36m/min', 'Built-in vibration tamper detection', '24V deep-cycle battery backup', 'Smartphone app integration', '5-year motor warranty'],
      image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g2',
      name: 'Vantage Swing Gate Operator',
      tag: 'Heavy Duty',
      tagColor: 'var(--primary)',
      description: 'Robust and sleek automated swing gate operator built tough for the harsh African climate. Full structural protection with anti-crush sensors for safety.',
      features: ['Strong die-cast aluminum housing', 'Smooth acceleration and deceleration', 'High push force for heavy gates', 'Anti-crushing safety sensors', 'Full weather protection'],
      image: 'https://images.unsplash.com/photo-1510419263158-b193231eb96d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g3',
      name: 'FAAC 844 ER Industrial Barrier',
      tag: 'Commercial',
      tagColor: 'var(--secondary)',
      description: 'High-cycle industrial boom barrier for parking lots, commercial entries, and toll points. Handles 2,000+ cycles per day with maintenance-free operation.',
      features: ['3–6 metre boom length options', 'Up to 2,000 cycles/day capacity', 'Loop detector compatibility', 'LED boom lighting with reflectors', 'Integrated vehicle detection'],
      image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&auto=format&fit=crop'
    }
  ],
  cctv: [
    {
      id: 'c1',
      name: '4K ColorVu Dome Camera',
      tag: '8MP Ultra-HD',
      tagColor: 'var(--primary)',
      description: 'High-definition 8MP IP camera capturing vivid colour 24/7, even in zero-light environments using Hikvision ColorVu technology. Perfect indoor/outdoor security.',
      features: ['8 Megapixel ultra-HD resolution', 'F1.0 lens for 24/7 full-colour imaging', 'IP67 water and dust resistance', 'Active strobe light & audio alarm', '60m illumination range'],
      image: 'https://images.unsplash.com/photo-1557597774-9d273e51eb6e?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'c2',
      name: '16-Channel NVR Security Hub',
      tag: 'AI Powered',
      tagColor: 'var(--primary)',
      description: 'Network Video Recorder providing AI motion detection, massive storage capacity, and seamless mobile app integration via Hik-Connect.',
      features: ['Supports up to 16 IP camera inputs', 'AI motion detection (human/vehicle)', 'Up to 8TB hard drive capacity', 'Remote live viewing via mobile app', 'H.265+ ultra-efficient compression'],
      image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'c3',
      name: 'PTZ Speed Dome Camera',
      tag: 'Long Range',
      tagColor: 'var(--primary)',
      description: 'Pan-Tilt-Zoom speed dome with 25× optical zoom, auto-tracking, and 300m IR night vision. Ideal for large compounds, gates, and perimeter monitoring.',
      features: ['25× optical zoom', 'Auto motion-tracking', '300m infrared night vision', 'IP66 outdoor rated', 'Preset patrol tours'],
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop'
    }
  ],
  solar: [
    {
      id: 's1',
      name: '550W Monocrystalline Panel',
      tag: 'High Efficiency',
      tagColor: 'var(--secondary)',
      description: 'High-efficiency half-cell monocrystalline panels designed to maximise energy capture and reduce power loss, even on overcast Nairobi days.',
      features: ['Efficiency up to 21.3%', 'Half-cut cell technology', 'Anti-reflective, anti-soiling glass', '25-year performance warranty', 'IEC 61215 & IEC 61730 certified'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 's2',
      name: '5kWh LiFePO4 Wall Battery',
      tag: '6000+ Cycles',
      tagColor: 'var(--secondary)',
      description: 'Deep cycle, ultra-safe lithium iron phosphate storage battery with intelligent BMS. Extremely long lifespan and stackable up to 15 units for large systems.',
      features: ['Over 6,000 cycles at 80% DoD', 'Built-in intelligent BMS', 'Wall-mounted aesthetic design', 'Scalable up to 15 units in parallel', 'Thermal management system'],
      image: 'https://images.unsplash.com/photo-1620286801990-2bd161678dc2?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 's3',
      name: '5kW Hybrid Inverter',
      tag: 'Smart Grid',
      tagColor: 'var(--secondary)',
      description: 'Seamlessly switch between solar, battery, and KPLC grid power. Ensures your security systems and home never lose power during blackouts.',
      features: ['Pure sine wave output', 'Configurable AC/Solar input priority', 'Auto-restart during AC recovery', 'Generator compatible', 'Wi-Fi monitoring via phone app'],
      image: 'https://images.unsplash.com/photo-1588697920130-97c7fb333833?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 's4',
      name: 'Solar Street Light — 100W',
      tag: 'Integrated',
      tagColor: 'var(--secondary)',
      description: 'All-in-one solar street light with built-in panel, battery, LED, and motion sensor. Zero grid power needed — perfect for driveways, compound perimeters, and roads.',
      features: ['Built-in 100W solar panel', 'Motion-sensor auto dim/bright', '14–16 hour run time per night', 'IP65 waterproof steel housing', 'Easy pole-mount installation'],
      image: 'https://images.unsplash.com/photo-1596272856132-3c1bd2ea8882?q=80&w=800&auto=format&fit=crop'
    }
  ]
};

const ProductCard = ({ product }: { product: typeof products.gates[number] }) => (
  <motion.div
    whileHover={{ y: -8, boxShadow: '0 16px 48px rgba(0,229,255,0.1)' }}
    className="glass-panel"
    style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}
  >
    {/* Image */}
    <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      />
      {'tag' in product && (
        <div style={{
          position: 'absolute', top: '0.75rem', left: '0.75rem',
          background: 'rgba(6,10,20,0.85)', backdropFilter: 'blur(8px)',
          border: `1px solid ${'tagColor' in product ? product.tagColor : 'var(--primary)'}55`,
          color: 'tagColor' in product ? product.tagColor : 'var(--primary)',
          fontSize: '0.72rem', fontWeight: 700, padding: '0.25rem 0.75rem',
          borderRadius: '50px', letterSpacing: '0.5px'
        }}>
          {'tag' in product ? product.tag : ''}
        </div>
      )}
    </div>

    {/* Content */}
    <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{product.name}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.65, marginBottom: '1rem', flexGrow: 1 }}>
        {product.description}
      </p>
      <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem' }}>
        {product.features.map((f, i) => (
          <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.82rem', marginBottom: '0.35rem' }}>
            <CheckCircle2 size={13} color="var(--primary)" style={{ flexShrink: 0 }} /> {f}
          </li>
        ))}
      </ul>
      <Link to="/contact">
        <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '0.7rem', fontSize: '0.9rem' }}>
          Enquire Now <ArrowRight size={14} />
        </button>
      </Link>
    </div>
  </motion.div>
);

const SectionHeader = ({ icon, label, title, desc, isGold = false }: { icon: React.ReactNode, label: string, title: string, desc: string, isGold?: boolean }) => (
  <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} style={{ marginBottom: '3rem' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', paddingBottom: '1.25rem', borderBottom: `1px solid ${isGold ? 'rgba(255,183,3,0.2)' : 'rgba(0,229,255,0.15)'}` }}>
      {icon}
      <div>
        <span className="section-badge" style={{ marginBottom: '0.1rem' }}>{label}</span>
        <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)' }}>{title}</h2>
      </div>
    </div>
    <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '750px', lineHeight: 1.8 }}>{desc}</p>
  </motion.div>
);

const Products = () => {
  return (
    <div className="animate-fade-in">

      {/* ===== PAGE HEADER ===== */}
      <section style={{
        padding: '8rem 0 5rem', textAlign: 'center', position: 'relative', overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(0,229,255,0.04) 0%, transparent 100%)',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '700px', height: '300px', background: 'rgba(0,229,255,0.05)', filter: 'blur(80px)', borderRadius: '50%' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="section-badge">Our Hardware</span>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', margin: '1rem 0 1.5rem' }}>
              Our <span className="gradient-text">Products</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '680px', margin: '0 auto', lineHeight: 1.8 }}>
              We install only industry-certified, premium-grade hardware — built for Kenya's climate and backed by manufacturer warranties.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container" style={{ padding: '6rem 1.5rem' }}>

        {/* ===== AUTOMATIC GATES ===== */}
        <section style={{ marginBottom: '6rem' }}>
          <SectionHeader
            icon={<div className="icon-box icon-box-cyan" style={{ flexShrink: 0, width: '56px', height: '56px' }}><Shield size={28} color="var(--primary)" /></div>}
            label="Gate Automation"
            title="Automatic Gate Systems"
            desc="We supply and install leading gate motor brands trusted across Africa. Whether it's a sliding gate for a family home or a boom barrier for a commercial car park, we have the right solution — all with battery backup for load-shedding resilience."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {products.gates.map((item, i) => (
              <motion.div key={item.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <ProductCard product={item as any} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== CCTV ===== */}
        <section style={{ marginBottom: '6rem' }}>
          <SectionHeader
            icon={<div className="icon-box icon-box-cyan" style={{ flexShrink: 0, width: '56px', height: '56px' }}><Video size={28} color="var(--primary)" /></div>}
            label="Surveillance Technology"
            title="CCTV & Surveillance Hardware"
            desc="From compact dome cameras to long-range PTZ units, we use Hikvision and Dahua products — the number one surveillance brands globally — to build reliable, 24/7 surveillance systems with AI-powered detection and remote mobile access."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {products.cctv.map((item, i) => (
              <motion.div key={item.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <ProductCard product={item as any} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* ===== SOLAR ===== */}
        <section>
          <SectionHeader
            icon={<div className="icon-box icon-box-gold" style={{ flexShrink: 0, width: '56px', height: '56px' }}><Sun size={28} color="var(--secondary)" /></div>}
            label="Clean Energy"
            title="Solar Energy Solutions"
            desc="Kenya averages 5–6 peak sun hours per day — some of the highest solar potential in the world. Our premium monocrystalline panels, LiFePO4 batteries, and hybrid inverters work together to give you clean, uninterrupted energy — even through days-long KPLC outages."
            isGold
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {products.solar.map((item, i) => (
              <motion.div key={item.id} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <ProductCard product={item as any} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ marginTop: '5rem', textAlign: 'center', padding: '4rem', borderRadius: 'var(--radius-lg)', background: 'linear-gradient(135deg, rgba(0,229,255,0.06) 0%, rgba(124,58,237,0.06) 100%)', border: '1px solid rgba(0,229,255,0.15)' }}
        >
          <h2 style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.2rem)', marginBottom: '1rem' }}>Not Sure What You Need?</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '520px', margin: '0 auto 2rem', lineHeight: 1.75 }}>
            Our experts offer free consultations and site surveys. We'll assess your property and recommend the perfect system for your budget and requirements.
          </p>
          <Link to="/contact">
            <button className="btn-solid" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              Book a Free Consultation <ArrowRight size={18} />
            </button>
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default Products;
