import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Shield, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? 'var(--primary)' : 'var(--text-secondary)';

  return (
    <>
      <ScrollToTop />
      {/* Navigation Bar */}
      <header style={{ 
        height: 'var(--nav-height)', 
        borderBottom: '1px solid var(--surface-border)',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(10px)',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>
            <Shield size={32} />
            BENZO <span style={{ color: '#fff' }}>SECURITY</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav style={{ display: 'none' }} className="desktop-nav">
            <Link to="/" style={{ color: isActive('/') }}>Home</Link>
            <Link to="/about" style={{ color: isActive('/about') }}>About</Link>
            <Link to="/services" style={{ color: isActive('/services') }}>Services</Link>
            <Link to="/projects" style={{ color: isActive('/projects') }}>Projects</Link>
            <Link to="/contact" style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', color: 'var(--primary)', fontWeight: 600, padding: '0.5rem 1rem', border: '1px solid var(--primary)', borderRadius: '20px' }}>
              Contact Us <ChevronRight size={16} />
            </Link>
          </nav>
        </div>
      </header>

      {/* Adding a quick mobile nav hack inline to ensure UI doesn't break, ideally needs hamburger menu */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', padding: '1rem', background: 'var(--surface-color)', flexWrap: 'wrap' }} className="mobile-nav">
          <Link to="/" style={{ color: isActive('/') }}>Home</Link>
          <Link to="/projects" style={{ color: isActive('/projects') }}>Projects</Link>
          <Link to="/contact" style={{ color: isActive('/contact') }}>Contact</Link>
      </div>

      {/* Main Content Router */}
      <main style={{ minHeight: 'calc(100vh - var(--nav-height) - 300px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Universal Footer */}
      <footer style={{ background: '#020202', borderTop: '1px solid var(--surface-border)', padding: '4rem 0 2rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          
          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '1rem' }}>
              <Shield size={24} />
              BENZO SECURITY
            </Link>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Kenya's leading specialists in automated gate engineering, deep 4K CCTV surveillance, and premium solar energy solutions.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Quick Links</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link to="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
              <Link to="/about" style={{ color: 'var(--text-secondary)' }}>About Us</Link>
              <Link to="/projects" style={{ color: 'var(--text-secondary)' }}>Our Projects (Videos)</Link>
              <Link to="/services" style={{ color: 'var(--text-secondary)' }}>Services</Link>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Get Local Support</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <p>📍 Nairobi, Kenya</p>
              <p>📞 +254 700 000 000</p>
              <p>📧 info@benzosecurity.co.ke</p>
            </div>
          </div>

        </div>
        <div className="container" style={{ textAlign: 'center', color: 'var(--surface-border)', fontSize: '0.9rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          © {new Date().getFullYear()} Benzo Security Kenya. All Rights Reserved.
        </div>
      </footer>
    </>
  );
};

export default App;
