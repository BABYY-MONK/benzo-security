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

export const products = {
  gates: [
    {
      id: 'g1',
      name: 'Centurion D10 Smart Sliding Motor',
      tag: 'Heavy Industrial',
      tagColor: 'var(--primary)',
      description: 'The Centurion D10 Smart is built for heavy-duty industrial applications — large estates, factories, and high-traffic residential complexes. With intelligent self-diagnostics, collision detection, and app-based remote monitoring, this motor delivers uncompromising security and reliable performance even through extended KPLC outages thanks to its advanced battery backup system.',
      features: ['Handles gates up to 1,000kg', 'Smart app monitoring & alerts', 'Anti-tamper vibration alarm', 'Built-in battery backup for load-shedding', '5-year manufacturer warranty | KSh 130,000'],
      image: 'https://www.alltechkenya.co.ke/wp-content/uploads/2024/12/D10-SMART.jpeg'
    },
    {
      id: 'g2',
      name: 'Centurion D5 Smart Sliding Motor',
      tag: 'Best Seller',
      tagColor: 'var(--primary)',
      description: 'The industry-best Centurion D5 Smart is trusted across Kenya for domestic and light-commercial applications. Ultra-smooth, quiet, and packed with smart safety sensors, this motor integrates seamlessly with keypads, RFID readers, and intercoms. Its intelligent battery backup keeps your gate running during power outages — a must-have in Nairobi.',
      features: ['Domestic & light-industrial rated', 'Smartphone app integration', 'Anti-crush safety sensors', 'RFID & intercom compatible', '5-year warranty | KSh 70,000'],
      image: 'https://www.alltechkenya.co.ke/wp-content/uploads/2024/12/D5-SMART.jpeg'
    },
    {
      id: 'g3',
      name: 'Centurion Vantage Swing Gate Motor',
      tag: 'Heavy Duty Swing',
      tagColor: 'var(--secondary)',
      description: 'The Centurion Vantage is a robust and powerful swing gate operator engineered for African conditions. With a die-cast aluminium housing, smooth acceleration profiles, and anti-crush sensors, it provides dependable automated access for double-leaf swing gates on residential and commercial properties. Fully tested to international safety standards.',
      features: ['Handles heavy dual-leaf gates', 'Anti-crush & anti-tamper sensors', 'Die-cast aluminium weatherproof body', 'Adjustable speed & torque settings', '3-year warranty | KSh 125,000'],
      image: 'https://www.alltechkenya.co.ke/wp-content/uploads/2024/12/vantage.jpeg'
    }
  ],
  cctv: [
    {
      id: 'c1',
      name: '2MP ColorVu Dome Fixed Camera',
      tag: '24/7 Color',
      tagColor: 'var(--primary)',
      description: 'Unlike standard cameras that go greyscale at night, the Hikvision 2MP ColorVu Dome Camera delivers vivid full-colour video even in complete darkness. Its built-in white-light LED illuminates up to 20m ensuring every face, vehicle, and detail is captured in colour — perfect for home entrances, corridors, and retail environments.',
      features: ['Full-colour 24/7 imaging (no IR wash-out)', '20m white-light night illumination', 'IP67 weatherproof outdoor housing', 'H.265+ compression for storage savings', 'Remote viewing via Hik-Connect app | KSh 3,500'],
      image: 'https://www.alltechkenya.co.ke/wp-content/uploads/2024/12/colorvu.png'
    },
    {
      id: 'c2',
      name: 'Hikvision 2MP Network Bullet Camera',
      tag: 'IR Long Range',
      tagColor: 'var(--primary)',
      description: 'The Hikvision 2MP Network Bullet Camera is the go-to outdoor surveillance solution for driveways, perimeter walls, and parking lots. With a 30m infrared range, Digital Wide Dynamic Range, and IP67 rating, it captures crisp footage in back-lit and challenging lighting conditions — completely unaffected by rain, dust, or heat.',
      features: ['30m IR night vision range', 'Digital Wide Dynamic Range (WDR)', 'IP67 fully weatherproof body', 'H.265 video compression standard', 'Plug-and-play PoE installation | KSh 4,400'],
      image: 'https://www.alltechkenya.co.ke/wp-content/uploads/2024/12/2mp-Bullet-Camera.jpeg'
    },
    {
      id: 'c3',
      name: 'Hikvision 4-Camera CCTV Kit',
      tag: 'Complete Kit',
      tagColor: 'var(--secondary)',
      description: 'Everything you need out of the box. This Hikvision 4-Camera CCTV Kit includes four 2MP cameras, a professional DVR, 1TB hard drive for continuous recording, and all the installation cables. Ideal for small homes, flats, and retail shops wanting a complete, plug-and-play security upgrade with mobile remote access included.',
      features: ['4× Hikvision cameras included', '1TB pre-installed HDD for recording', 'DVR with HDMI output for TV display', 'Remote live view via Hik-Connect', 'Complete kit ready to install | KSh 18,500'],
      image: 'https://www.alltechkenya.co.ke/wp-content/uploads/2024/12/4-cameras.png'
    },
    {
      id: 'c4',
      name: 'Wireless Solar Powered Security Camera',
      tag: 'Off-Grid Ready',
      tagColor: 'var(--secondary)',
      description: 'The ultimate 100% wire-free surveillance solution. Our Solar CCTV Camera integrates a high-efficiency solar panel and a built-in battery to provide 24/7 continuous monitoring without requiring a power outlet. Runs on 4G SIM for remote locations, farms, and off-grid residential properties.',
      features: ['100% wire-free with integrated solar panel', 'Built-in 4G LTE and Wi-Fi capabilities', 'PIR Motion Sensor with real-time app alerts', 'Full-color night vision & two-way audio', 'Weatherproof design for Kenyan outdoors'],
      image: 'https://images.unsplash.com/photo-1557800636-8ab27a87e025?q=80&w=800&auto=format&fit=crop'
    }
  ],
  solar: [
    {
      id: 's1',
      name: 'Jinko 580W N-Type TOPCon Panel',
      tag: 'Tier 1 Rated',
      tagColor: 'var(--secondary)',
      description: 'Maximize your solar yield with the highly advanced Jinko 580W N-Type TOPCon panel. With an impressive 22.5% efficiency rating, this panel guarantees more power per square meter, making it perfect for residential roofs or commercial properties fighting high KPLC bills.',
      features: ['N-Type TOPCon technology for superior low-light yield', 'Anti-PID and zero Light Induced Degradation', '30-year linear performance warranty', 'Price Range: Ksh 12,450', 'Suitable for both On-grid and Off-grid systems'],
      image: 'https://thegreencamelltd.com/img/service/jinko-solar-560w-tiger-neo.jpg'
    },
    {
      id: 's2',
      name: 'Canadian Solar 440W HiHero',
      tag: 'Highly Reliable',
      tagColor: 'var(--secondary)',
      description: 'The Canadian Solar HiHero series offers exceptional reliability and a sleek aesthetic. Renowned across Kenya for their durability, these panels operate optimally even during hot dry seasons. Guaranteed 25+ year lifespan.',
      features: ['Mono-PERC technology for consistent power output', 'Withstands extreme wind and snow load', 'Lower temperature coefficient for hot climates', 'Price Range: Ksh 8,750', '25-year performance warranty'],
      image: 'https://thegreencamelltd.com/img/service/canadian-solar-440w.jpg'
    },
    {
      id: 's3',
      name: 'BYD Lithium Battery 5kWh',
      tag: 'Premium Storage',
      tagColor: 'var(--primary)',
      description: 'The pinnacle of energy storage. BYD’s Lithium Iron Phosphate (LiFePO4) solar wall batteries eliminate power anxiety. Perfectly paired with hybrid inverters, this modular battery system keeps your security cameras, fridges, and lighting powered seamlessly during complete grid failures.',
      features: ['Scalable from 5kWh up to 150kWh', '6000+ deep charge cycles', 'Advanced Battery Management System (BMS)', 'Price Range: Ksh 148,000', 'Space-saving premium design'],
      image: 'https://thegreencamelltd.com/img/service/byd-5kwh-lithium-battery.jpg'
    },
    {
      id: 's4',
      name: 'Huawei Sun2000 Inverter (100kW+)',
      tag: 'Commercial Scale',
      tagColor: 'var(--primary)',
      description: 'Designed for heavy-duty commercial installations, factories, and massive residential campuses. The Huawei SUN2000 smart string inverter maximizes power generation from every panel to rapidly ROI large-scale PV plants.',
      features: ['3-phase commercial capabilities', 'AI-Powered Active Arcing Protection', 'App-based remote plant management', 'Price Estimate: Ksh 1,195,000', 'Tier 1 worldwide inverter leader'],
      image: 'https://thegreencamelltd.com/img/service/SUN2000-100KTL-M1.jpg'
    },
    {
      id: 's5',
      name: 'GroWatt 3000W Inverter',
      tag: 'Budget Hybrid',
      tagColor: 'var(--secondary)',
      description: 'The perfect entry point into solar independence. The GroWatt 3kW inverter provides robust hybrid functionality for small to medium households. Effortlessly juggles solar generation, KPLC grid backup, and battery charging to keep your critical appliances running.',
      features: ['Integrated MPPT solar charge controller', 'Compatible with both Lead-Acid and Lithium batteries', 'Wi-Fi monitoring available', 'Price Range: Ksh 64,000', 'Seamless switchover during power outages'],
      image: 'https://thegreencamelltd.com/img/service/growatt.jpg'
    },
    {
      id: 's6',
      name: 'Eastman Gel Base Battery 200AH',
      tag: 'Cost-Effective',
      tagColor: 'var(--secondary)',
      description: 'For setups on a strict budget, Eastman Gel batteries offer incredible endurance for standard off-grid systems. These deep-cycle batteries require zero maintenance and handle deep discharges better than basic lead-acid alternatives.',
      features: ['200AH 12V Capacity', 'Zero-maintenance sealed gel technology', 'Perfect for small solar security systems', 'Price Range: Ksh 48,000', 'Highly resistant to temperature variations'],
      image: 'https://thegreencamelltd.com/img/service/eastman-batteries.jpg'
    },
    {
      id: 's7',
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
      name: 'Reverse Osmosis Machine RO500L',
      tag: 'KEBS Accredited',
      tagColor: 'var(--primary)',
      description: 'The Phynetech RO500L is a commercial-grade Reverse Osmosis water treatment machine producing 500 litres per hour of ultra-purified drinking water. Equipped with sand, carbon, and softener filters, UV sterilisation, and an antiscalant dosing pump, it removes 99.9% of contaminants — making it the gold standard for schools, hospitals, hotels, and water stations across Kenya.',
      features: ['500L/hour high-capacity production', 'Sand, carbon & softener pre-filtration', 'UV Sterilizer eliminates all pathogens', 'Antiscalant dosing pump included', 'KEBS certified | KSh 330,000'],
      image: 'https://phynetech.com/wp-content/uploads/2023/01/ro500-1-1-e1737380925942.png'
    },
    {
      id: 'w2',
      name: 'Drinking Water Purifier Machine',
      tag: 'Residential',
      tagColor: 'var(--primary)',
      description: 'Phynetech water treatment machines are the leading water purification solution in Kenya. Designed with an ergonomic, space-saving form factor, this machine eliminates 100% of impurities — sediment, bacteria, heavy metals, and odours — providing clean, safe drinking water at the tap for homes, offices, and small businesses. Simple to operate, no technical knowledge required.',
      features: ['100% impurity & pathogen elimination', 'Multi-stage RO + UV + carbon filtration', 'Ergonomic compact design', 'Simple one-button operation', '2-year warranty | KSh 230,000'],
      image: 'https://phynetech.com/wp-content/uploads/2022/05/water-purification-treatment-machine.jpg'
    },
    {
      id: 'w3',
      name: 'Phynetech Water Vending ATM',
      tag: 'Commercial ATM',
      tagColor: 'var(--secondary)',
      description: 'The Phynetech Water Vending ATM is a fully automated self-service machine that dispenses purified water on demand. With customizable pricing and volume controls, remote management via mobile, and M-Pesa payment integration, it empowers entrepreneurs to run profitable water businesses with minimal effort. Features an automatic self-cleaning cycle to maintain hygiene 24/7.',
      features: ['M-Pesa & multi-payment interface', 'Automated self-cleaning system', 'Remote monitoring & sales tracking', 'Customizable volume & pricing settings', 'KEBS Compliant | KSh 100,000'],
      image: 'https://phynetech.com/wp-content/uploads/2022/05/Water-Vending-ATM-Machine-700x459.png'
    },
    {
      id: 'w4',
      name: 'Phynetech Water Filling Station',
      tag: 'Multi-Tap',
      tagColor: 'var(--secondary)',
      description: 'The Phynetech Water Filling Station is a compact, high-throughput solution for community water access points, retail water shops, and jerry-can filling businesses. Available in 1, 2, or 3-tap configurations, it incorporates UV sterilisation, M-Pesa payment integration, and a built-in sales monitoring system — giving operators full control over their water business from anywhere.',
      features: ['1, 2 or 3-tap configurations available', 'UV sterilisation at point of dispense', 'M-Pesa & coin payment options', 'Built-in sales monitoring dashboard', 'KEBS Certified | KSh 100,000'],
      image: 'https://phynetech.com/wp-content/uploads/2023/01/manual-refill-1-1-e1769096693312.png'
    }
  ]
};

export const ProductCard = ({ product }: { product: typeof products.gates[number] }) => (
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

        {/* ===== FREQUENTLY ASKED QUESTIONS ===== */}
        <section style={{ marginTop: '5rem', padding: '4rem 0', borderTop: '1px solid rgba(151,205,151,0.2)' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-badge">Know The Facts</span>
            <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem', color: 'var(--text-primary)' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* FAQ 1 */}
            <div className="glass-panel" style={{ padding: '1.5rem 2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>How much do Tier-1 Solar Panels cost in Kenya?</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Depending on the wattage and brand (e.g. Jinko vs Amerisolar), panels typically range between <strong>Ksh 5,550</strong> for budget options up to <strong>Ksh 13,350</strong> for high-end 670W modules.</p>
            </div>
            {/* FAQ 2 */}
            <div className="glass-panel" style={{ padding: '1.5rem 2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>What is the return on investment (ROI) timeframe?</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>For residential setups combating high KPLC bills, a properly sized solar and lithium installation typically pays for itself in <strong>3 to 4 years</strong>, effectively giving you 'free power' for decades after.</p>
            </div>
            {/* FAQ 3 */}
            <div className="glass-panel" style={{ padding: '1.5rem 2rem' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--primary)', marginBottom: '0.5rem' }}>How long will my solar system last?</h4>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Top-tier panels from our catalog like Canadian Solar and Trina come with a <strong>25+ year</strong> manufacturer warranty, boasting a total use-life spanning more than 40 years. Quality Lithium batteries (like BYD & Dyness) are rated for <strong>6,000+ deep cycles</strong>.</p>
            </div>
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
