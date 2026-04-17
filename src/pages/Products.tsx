import { motion } from 'framer-motion';
import { Shield, Sun, Video, CheckCircle2, ArrowRight, Droplets } from 'lucide-react';
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
      description: 'Upgrade your home or business security with the industry-leading Centurion D5 Smart. Designed for both domestic and light-industrial applications, this motor guarantees fast, reliable, and secure access control. Say goodbye to manual gates and vulnerability during power outages—its advanced battery backup system ensures continuous operation. It combines sleek design with brute strength and is backed by professional installation and a comprehensive warranty.',
      features: ['Intelligent smartphone app monitoring', 'Anti-tamper vibration alarm', 'CE & ISO Certified safety standards', 'Free professional site survey & installation', '5-year manufacturer warranty & servicing'],
      image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g2',
      name: 'Vantage Swing Gate Operator',
      tag: 'Heavy Duty',
      tagColor: 'var(--primary)',
      description: 'The Vantage Swing Gate Operator is a robust and sleek automated system built tough for the harsh African climate. No technical knowledge is required for daily use; it provides full structural protection with anti-crush sensors for safety. Enjoy peace of mind knowing your perimeter is secured by a highly tested, internationally accredited motor.',
      features: ['Strong die-cast aluminum housing', 'Smooth acceleration with anti-crush sensors', 'Extensively tested for weather endurance', 'Seamless integration with access controls', '3-year system warranty'],
      image: 'https://images.unsplash.com/photo-1510419263158-b193231eb96d?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g3',
      name: 'FAAC 844 ER Industrial Barrier',
      tag: 'Commercial',
      tagColor: 'var(--secondary)',
      description: 'Designed specifically for high-traffic environments, the FAAC 844 ER is the ultimate industrial boom barrier for parking lots, commercial entries, and toll points. Capable of handling over 2,000 cycles per day with minimal to zero downtime, it guarantees automated, maintenance-free operation for large fleet businesses and residential complexes.',
      features: ['3–6 metre boom length options', 'Up to 2,000 continuous cycles/day capacity', 'Loop detector & ticketing compatibility', 'CE Certified with integrated vehicle detection', 'Comprehensive commercial maintenance plan'],
      image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?q=80&w=800&auto=format&fit=crop'
    }
  ],
  cctv: [
    {
      id: 'c1',
      name: '4K ColorVu Dome Camera',
      tag: '8MP Ultra-HD',
      tagColor: 'var(--primary)',
      description: 'Experience unparalleled clarity with our 8MP Ultra-HD ColorVu IP Dome Camera. Unlike traditional CCTV that goes black and white at night, this camera delivers vivid, true-color video 24/7, even in total darkness. Perfectly suited for homes, retail stores, and commercial perimeters, it provides indisputable evidence and deters intruders instantly with active strobe lighting.',
      features: ['Active AI human & vehicle detection', '24/7 Full-Color imaging in zero light', 'IP67 weatherproof housing for harsh climates', '1-year free maintenance and configuration', 'Remote viewing from anywhere via mobile'],
      image: 'https://images.unsplash.com/photo-1557597774-9d273e51eb6e?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'c2',
      name: '16-Channel NVR Security Hub',
      tag: 'AI Powered',
      tagColor: 'var(--primary)',
      description: 'The brain of your surveillance network, this 16-Channel Network Video Recorder provides AI-driven motion detection and massive storage capacity. With seamless mobile app integration via Hik-Connect, it requires zero technical expertise to replay footage, track alerts, or monitor your property. It provides you ultimate control in one centralized, user-friendly hub.',
      features: ['Supports up to 16 Ultra-HD IP cameras', 'Advanced AI motion and facial recognition', 'Up to 8TB hard drive capacity for long-term storage', 'One-click remote viewing via secure mobile app', 'Professional setup and lifetime support'],
      image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'c3',
      name: 'PTZ Speed Dome Camera',
      tag: 'Long Range',
      tagColor: 'var(--primary)',
      description: 'Our Pan-Tilt-Zoom speed dome camera offers a staggering 25× optical zoom, auto-tracking capabilities, and 300m infrared night vision. Ideal for monitoring large compounds, community gates, and hospital perimeters, it actively tracks suspicious movement across vast distances, ensuring nothing escapes its view. ISO-certified and built to withstand the elements.',
      features: ['25× optical zoom for license plate reading', 'Active AI auto motion-tracking', '300m commercial-grade infrared night vision', 'IP66 outdoor rated with anti-vandal casing', '2-year hardware replacement warranty'],
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=800&auto=format&fit=crop'
    }
  ],
  solar: [
    {
      id: 's1',
      name: '550W Monocrystalline Panel',
      tag: 'High Efficiency',
      tagColor: 'var(--secondary)',
      description: 'Transform abundant Kenyan sunshine into reliable energy with our high-efficiency half-cell monocrystalline panels. Designed to maximise energy capture and reduce power loss even on overcast days, these panels provide the ultimate foundation for off-grid and backup power systems. Ideal for homes and businesses seeking to eliminate massive KPLC bills.',
      features: ['Grade-A efficiency up to 21.3%', 'Anti-reflective, self-cleaning glass surface', 'IEC 61215 & IEC 61730 globally certified', '25-year manufacturer performance warranty', 'Free site survey & precise load calculation'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 's2',
      name: '5kWh LiFePO4 Wall Battery',
      tag: '6000+ Cycles',
      tagColor: 'var(--secondary)',
      description: 'Secure your energy independence with our premium 5kWh Lithium Iron Phosphate (LiFePO4) storage battery. Engineered to outlast traditional lead-acid batteries, it delivers ultra-safe, high-capacity power storage to keep your security systems and appliances running flawlessly during extended grid failures. Its highly scalable design means it grows with your needs.',
      features: ['Intelligent built-in Battery Management System (BMS)', '6000+ deep-charge lifecycles guaranteed', 'Space-saving wall-mounted aesthetic', 'Expandable up to 15 units for commercial use', '10-year performance warranty included'],
      image: 'https://images.unsplash.com/photo-1620286801990-2bd161678dc2?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 's3',
      name: '5kW Hybrid Inverter',
      tag: 'Smart Grid',
      tagColor: 'var(--secondary)',
      description: 'The ultimate power manager for your property. Our 5kW Hybrid Inverter seamlessly switches between solar, battery, and grid power in milliseconds. It ensures your critical security cameras, gates, and home appliances never lose power during sudden blackouts. Simple to use, fully automated, and remotely monitorable directly from your smartphone.',
      features: ['Zero-delay seamless power switching', 'Configurable and automated AC/Solar priority', 'Smart Wi-Fi monitoring via mobile app', 'Compatible with backup diesel generators', '3-year comprehensive warranty'],
      image: 'https://images.unsplash.com/photo-1588697920130-97c7fb333833?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 's4',
      name: 'Solar Street Light — 100W',
      tag: 'Integrated',
      tagColor: 'var(--secondary)',
      description: 'Illuminate your pathways and perimeters effortlessly with our all-in-one 100W solar street light. Featuring a built-in panel, long-lasting battery, high-lumen LEDs, and a smart motion sensor, it requires zero grid power connection or technical wiring. Perfect for driveways and commercial perimeters looking to enhance nighttime security for free.',
      features: ['100% off-grid operation (Zero KPLC bills)', 'Smart motion-sensor auto dimming', 'Provides 14–16 hours of continuous light', 'IP65 waterproof hardened steel housing', 'Durable, maintenance-free installation'],
      image: 'https://images.unsplash.com/photo-1596272856132-3c1bd2ea8882?q=80&w=800&auto=format&fit=crop'
    }
  ],
  water: [
    {
      id: 'w1',
      name: 'Phynetech Water Treatment Machine',
      tag: 'KEBS Accredited',
      tagColor: 'var(--primary)',
      description: 'From KES 230,000. Features innovative filtration solutions including reverse osmosis and UV sterilization to completely eliminate impurities, making water safe for schools, homes, and businesses.',
      features: ['Reverse Osmosis Membrane', 'UV Sterilizer for pathogens', 'Efficient Dosing Pump', 'Multi-stage cartridge filtration', '2-year warranty'],
      image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'w2',
      name: 'Phynetech Water Vending ATM',
      tag: 'Commercial Use',
      tagColor: 'var(--primary)',
      description: 'Starting from KSH 100,000. Provides an easy and efficient way to dispense purified water with advanced features like customizable pricing, self-cleaning, and real-time remote monitoring.',
      features: ['User-Friendly Interface with Multiple Payments', 'Automated Self-Cleaning System', 'Advanced Filtration System', 'Remote Management & Tracking', 'Compact, Durable & Energy Efficient'],
      image: 'https://images.unsplash.com/photo-1523455716164-ca7bfe356401?q=80&w=800&auto=format&fit=crop'
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

        {/* ===== WATER SOLUTIONS ===== */}
        <section style={{ marginBottom: '6rem' }}>
          <SectionHeader
            icon={<div className="icon-box icon-box-cyan" style={{ flexShrink: 0, width: '56px', height: '56px' }}><Droplets size={28} color="var(--primary)" /></div>}
            label="Water Tech"
            title="Water Treatment & Vending"
            desc="We provide advanced water treatment machines and commercial vending ATMs fully accredited by KEBS. These automated machines utilize multi-stage filtration to ensure your properties always have access to safe, pathogen-free drinking water."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {products.water.map((item, i) => (
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
