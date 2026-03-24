import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Shield, ChevronRight, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Products from './pages/Products';

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
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    location.pathname === path ? 'var(--primary)' : 'var(--text-secondary)';

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/products', label: 'Products' },
    { to: '/projects', label: 'Projects' },
  ];

  return (
    <>
      <ScrollToTop />

      {/* ===== Navigation Bar ===== */}
      <header style={{
        height: 'var(--nav-height)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(6, 10, 20, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '10px',
              background: 'linear-gradient(135deg, var(--primary) 0%, #0070f3 100%)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 0 16px var(--primary-glow)'
            }}>
              <Shield size={22} color="#000" />
            </div>
            <span style={{ fontSize: '1.4rem', fontWeight: 900, fontFamily: 'var(--font-heading)' }}>
              <span className="gradient-text">BENZO</span>
              <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}> SECURITY</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" style={{ display: 'none' }}>
            {navLinks.map(({ to, label }) => (
              <Link key={to} to={to} style={{
                color: isActive(to),
                fontWeight: 500,
                fontSize: '0.95rem',
                fontFamily: 'var(--font-heading)',
                transition: 'color 0.2s',
                position: 'relative',
                padding: '0.25rem 0'
              }}>
                {label}
              </Link>
            ))}
            <Link to="/contact">
              <button className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
                Contact Us <ChevronRight size={15} />
              </button>
            </Link>
          </nav>

          {/* Hamburger Button (mobile) */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: 'none',
              background: 'var(--surface-color)',
              border: '1px solid var(--surface-border)',
              borderRadius: '8px',
              padding: '0.5rem',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div style={{
          position: 'fixed',
          top: 'var(--nav-height)',
          left: 0,
          right: 0,
          zIndex: 99,
          background: 'rgba(6, 10, 20, 0.98)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          animation: 'slideUp 0.2s ease'
        }}>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              style={{
                color: isActive(to),
                fontWeight: 600,
                fontSize: '1.1rem',
                fontFamily: 'var(--font-heading)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                background: location.pathname === to ? 'rgba(0, 229, 255, 0.08)' : 'transparent',
                display: 'block'
              }}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" style={{ marginTop: '0.5rem' }}>
            <button className="btn-solid" style={{ width: '100%', justifyContent: 'center', padding: '0.85rem' }}>
              Contact Us <ChevronRight size={16} />
            </button>
          </Link>
        </div>
      )}

      {/* ===== Main Content ===== */}
      <main style={{ minHeight: 'calc(100vh - var(--nav-height) - 320px)' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ===== Footer ===== */}
      <footer style={{ background: '#040810', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '5rem 0 2rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

          <div>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem', textDecoration: 'none' }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--primary) 0%, #0070f3 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <Shield size={18} color="#000" />
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                <span className="gradient-text">BENZO</span>
                <span style={{ color: 'var(--text-secondary)' }}> SECURITY</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem' }}>
              Kenya's leading specialists in automated gate engineering, deep 4K CCTV surveillance, and premium solar energy solutions.
            </p>
          </div>

          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.25rem', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 700 }}>
              Quick Links
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { to: '/', label: 'Home' }, { to: '/about', label: 'About Us' },
                { to: '/services', label: 'Services' }, { to: '/products', label: 'Products' },
                { to: '/projects', label: 'Our Projects' }, { to: '/contact', label: 'Contact' }
              ].map(({ to, label }) => (
                <Link key={to} to={to} style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1.25rem', fontSize: '1rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 700 }}>
              Get In Touch
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              <p>📍 Nairobi, Kenya</p>
              <p>📞 <a href="tel:+254700000000" style={{ color: 'var(--primary)' }}>+254 700 000 000</a></p>
              <p>📧 <a href="mailto:info@benzosecurity.co.ke" style={{ color: 'var(--primary)' }}>info@benzosecurity.co.ke</a></p>
              <p style={{ marginTop: '0.5rem', lineHeight: 1.6 }}>
                🕐 Mon – Sat: 8:00 AM – 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="container" style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          © {new Date().getFullYear()} Benzo Security Kenya. All Rights Reserved. |{' '}
          <span style={{ color: 'var(--text-secondary)' }}>Nairobi, Kenya</span>
        </div>
      </footer>
    </>
  );
};

export default App;
