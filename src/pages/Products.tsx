import { motion } from 'framer-motion';
import { Shield, Sun, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = {
  gates: [
    {
      id: 'g1',
      name: 'Centurion D5 Smart Sliding Motor',
      description: 'Industry-leading gate motor for domestic and light-industrial applications. Features intelligent speed control and battery backup.',
      features: ['Top speed of up to 36m/min', 'Built-in vibration tamper detection', '24V deep-cycle battery backup', 'Smartphone app integration'],
      image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'g2',
      name: 'Vantage Swing Gate Motor',
      description: 'Robust and sleek automated swing gate operator. Built tough for the harsh African climate with full structural protection.',
      features: ['Strong die-cast aluminum housing', 'Smooth acceleration and deceleration', 'High push force for heavy gates', 'Secure anti-crushing sensors'],
      image: 'https://images.unsplash.com/photo-1510419263158-b193231eb96d?q=80&w=800&auto=format&fit=crop'
    }
  ],
  cctv: [
    {
      id: 'c1',
      name: '4K ColorVu Dome Camera',
      description: 'High-definition 8MP IP camera capturing vivid color 24/7, even in zero-light environments. Perfect for indoor/outdoor security.',
      features: ['8 Megapixel ultra-HD resolution', 'F1.0 lenses for 24/7 full-color imaging', 'IP67 water and dust resistance', 'Active strobe light & audio alarm'],
      image: 'https://images.unsplash.com/photo-1557597774-9d273e51eb6e?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 'c2',
      name: '16-Channel NVR Security Hub',
      description: 'Network Video Recorder providing smart motion detection, massive storage capacity, and seamless mobile app integration.',
      features: ['Supports up to 16 IP camera inputs', 'AI motion detection (human/vehicle)', 'Up to 8TB hard drive capacity', 'Remote viewing via mobile app'],
      image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop'
    }
  ],
  solar: [
    {
      id: 's1',
      name: '550W Monocrystalline Solar Panel',
      description: 'High-efficiency half-cell solar panels designed to maximize energy capture and reduce power loss, even on cloudy days.',
      features: ['High efficiency up to 21.3%', 'Half-cut cell technology', 'Anti-reflective/anti-soiling surface', '25-year performance warranty'],
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 's2',
      name: '5kWh Lithium-Ion LifePO4 Battery',
      description: 'Deep cycle, ultra-safe lithium storage battery. Extremely long lifespan with intelligent battery management systems (BMS).',
      features: ['Over 6000 cycles at 80% DoD', 'Built-in intelligent BMS', 'Wall-mounted aesthetic design', 'Scalable up to 15 units in parallel'],
      image: 'https://images.unsplash.com/photo-1620286801990-2bd161678dc2?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 's3',
      name: '5kW Hybrid Power Inverter',
      description: 'Seamlessly switch between solar, battery, and grid power. Ensures your security systems and home never lose power.',
      features: ['Pure sine wave output', 'Configurable AC/Solar input priority', 'Auto-restart during AC recovery', 'Generator power compatible'],
      image: 'https://images.unsplash.com/photo-1588697920130-97c7fb333833?q=80&w=800&auto=format&fit=crop'
    }
  ]
};

const ProductCard = ({ product }: { product: any }) => (
  <motion.div 
    whileHover={{ y: -8, boxShadow: '0 10px 30px rgba(0,229,255,0.1)' }}
    className="glass-panel" 
    style={{ display: 'flex', flexDirection: 'column', padding: '1rem', overflow: 'hidden' }}
  >
    <div style={{ width: '100%', height: '220px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{product.name}</h3>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1rem' }}>
      {product.description}
    </p>
    <ul style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '2rem', flexGrow: 1, paddingLeft: '1.2rem' }}>
      {product.features.map((feature: string, idx: number) => (
        <li key={idx} style={{ marginBottom: '0.3rem' }}>{feature}</li>
      ))}
    </ul>
    <Link to="/contact">
      <button className="btn-primary" style={{ width: '100%', padding: '0.8rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
        Enquire Now
      </button>
    </Link>
  </motion.div>
);

const Products = () => {
  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem', minHeight: 'calc(100vh - 80px)' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>Our Products</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
          We only install industry-leading, highly durable hardware designed to secure your property and outlast the African elements.
        </p>
      </div>

      {/* Gates */}
      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Shield color="var(--primary)" /> Automatic Gate Systems
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {products.gates.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* CCTV */}
      <section style={{ marginBottom: '6rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Video color="var(--primary)" /> CCTV & Surveillance Hardware
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {products.cctv.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

      {/* Solar */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--secondary-glow)', paddingBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Sun color="var(--secondary)" /> Solar Energy Solutions
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
          {products.solar.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>

    </div>
  );
};

export default Products;
