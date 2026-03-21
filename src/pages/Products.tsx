import { motion } from 'framer-motion';
import { Shield, Sun, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = {
  gates: [
    {
      id: 'g1',
      name: 'Centurion D5 Smart Sliding Motor',
      description: 'Industry-leading gate motor for domestic and light-industrial applications. Features intelligent speed control and battery backup.',
      image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=800&auto=format&fit=crop' // Modern gate placeholder
    },
    {
      id: 'g2',
      name: 'Vantage Swing Gate Motor',
      description: 'Robust and sleek automated swing gate operator. Built tough for the harsh African climate with full structural protection.',
      image: 'https://images.unsplash.com/photo-1510419263158-b193231eb96d?q=80&w=800&auto=format&fit=crop' // Wrought iron gate
    }
  ],
  cctv: [
    {
      id: 'c1',
      name: '4K ColorVu Dome Camera',
      description: 'High-definition 8MP IP camera capturing vivid color 24/7, even in zero-light environments. Perfect for indoor/outdoor security.',
      image: 'https://images.unsplash.com/photo-1557597774-9d273e51eb6e?q=80&w=800&auto=format&fit=crop' // CCTV camera
    },
    {
      id: 'c2',
      name: '16-Channel NVR Security Hub',
      description: 'Network Video Recorder providing smart motion detection, massive storage capacity, and seamless mobile app integration.',
      image: 'https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=800&auto=format&fit=crop' // Server/electronics rack
    }
  ],
  solar: [
    {
      id: 's1',
      name: '550W Monocrystalline Solar Panel',
      description: 'High-efficiency half-cell solar panels designed to maximize energy capture and reduce power loss, even on cloudy days.',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800&auto=format&fit=crop' // Solar panel
    },
    {
      id: 's2',
      name: '5kWh Lithium-Ion LifePO4 Battery',
      description: 'Deep cycle, ultra-safe lithium storage battery. Extremely long lifespan with intelligent battery management systems (BMS).',
      image: 'https://images.unsplash.com/photo-1620286801990-2bd161678dc2?q=80&w=800&auto=format&fit=crop' // Clean tech/battery aesthetic
    },
    {
      id: 's3',
      name: '5kW Hybrid Power Inverter',
      description: 'Seamlessly switch between solar, battery, and grid power. Ensures your security systems and home never lose power.',
      image: 'https://images.unsplash.com/photo-1588697920130-97c7fb333833?q=80&w=800&auto=format&fit=crop' // Inverter/Electronics
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
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem', flexGrow: 1 }}>
      {product.description}
    </p>
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
