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
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);

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
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        display: 'flex',
        alignItems: 'center',
        background: 'rgba(255,241,231,0.92)',
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
            {navLinks.map(({ to, label }) => {
              if (label === 'Products') {
                return (
                  <div key={to} 
                    onMouseEnter={() => setProductDropdownOpen(true)}
                    onMouseLeave={() => setProductDropdownOpen(false)}
                    style={{ position: 'relative', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <Link to={to} style={{
                      color: isActive(to), fontWeight: 500, fontSize: '0.95rem',
                      fontFamily: 'var(--font-heading)', transition: 'color 0.2s', padding: '1.5rem 0'
                    }}>
                      {label}
                    </Link>
                    {productDropdownOpen && (
                    <div style={{
                        position: 'absolute', top: '100%', left: '-1rem',
                        background: 'rgba(255,241,231,0.98)', backdropFilter: 'blur(20px)',
                        border: '1px solid rgba(151,205,151,0.3)', borderRadius: '12px',
                        padding: '0.5rem', display: 'flex', flexDirection: 'column',
                        minWidth: '240px', animation: 'slideUp 0.15s ease',
                        boxShadow: '0 10px 40px rgba(0,0,0,0.12)'
                      }}>
                        {[
                          { name: '🚪 Gates & Automation', hash: 'gates' },
                          { name: '📷 CCTV & Surveillance', hash: 'cctv' },
                          { name: '☀️ Solar Energy', hash: 'solar' },
                          { name: '💧 Water Tech', hash: 'water' }
                        ].map(item => (
                          <Link key={item.name} to={`/products`} onClick={() => {
                            setTimeout(() => {
                              const el = document.getElementById(item.hash);
                              if (el) el.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }}
                          style={{ color: 'var(--text-secondary)', padding: '0.75rem 1rem', fontSize: '0.9rem', borderRadius: '6px', transition: 'all 0.2s' }}
                            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.background = 'rgba(151,205,151,0.1)'; }}
                            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.background = 'transparent'; }}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link key={to} to={to} style={{
                  color: isActive(to), fontWeight: 500, fontSize: '0.95rem',
                  fontFamily: 'var(--font-heading)', transition: 'color 0.2s', padding: '1.5rem 0'
                }}>
                  {label}
                </Link>
              );
            })}
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
          {navLinks.map(({ to, label }) => {
            if (label === 'Products') {
              return (
                <div key={to}>
                  <Link to={to} style={{
                    color: isActive(to), fontWeight: 600, fontSize: '1.1rem',
                    fontFamily: 'var(--font-heading)', padding: '0.75rem 1rem',
                    borderRadius: '8px', background: location.pathname === to ? 'rgba(0, 229, 255, 0.08)' : 'transparent',
                    display: 'block'
                  }}>
                    {label}
                  </Link>
                  <div style={{ paddingLeft: '2rem', display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
                    {[
                      { name: '🚪 Gates & Automation', hash: 'gates' },
                      { name: '📷 CCTV & Surveillance', hash: 'cctv' },
                      { name: '☀️ Solar Energy', hash: 'solar' },
                      { name: '💧 Water Tech', hash: 'water' }
                    ].map(item => (
                      <Link key={item.name} to={`/products`} onClick={() => {
                        setMenuOpen(false);
                        setTimeout(() => {
                          const el = document.getElementById(item.hash);
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }, 150);
                      }}
                      style={{ color: 'var(--text-secondary)', padding: '0.5rem', fontSize: '0.95rem' }}>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link key={to} to={to} style={{
                color: isActive(to), fontWeight: 600, fontSize: '1.1rem',
                fontFamily: 'var(--font-heading)', padding: '0.75rem 1rem',
                borderRadius: '8px', background: location.pathname === to ? 'rgba(0, 229, 255, 0.08)' : 'transparent',
                display: 'block'
              }}>
                {label}
              </Link>
            );
          })}
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
                <Shield size={18} color="#fff" />
              </div>
              <span style={{ fontSize: '1.15rem', fontWeight: 800, fontFamily: 'var(--font-heading)' }}>
                <span className="gradient-text">BENZO</span>
                <span style={{ color: 'var(--text-secondary)' }}> SECURITY</span>
              </span>
            </Link>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
              Kenya's leading specialists in automated gate engineering, 4K CCTV surveillance, premium solar energy, and clean water solutions.
            </p>
            {/* Social Media Icons */}
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {/* WhatsApp */}
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer"
                style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', flexShrink: 0 }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(37,211,102,0.12)'; e.currentTarget.style.transform = 'none'; }}
                title="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/benzosecurity" target="_blank" rel="noopener noreferrer"
                style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(225,48,108,0.12)', border: '1px solid rgba(225,48,108,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', flexShrink: 0 }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(225,48,108,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(225,48,108,0.12)'; e.currentTarget.style.transform = 'none'; }}
                title="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#E1306C">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com/benzosecurity" target="_blank" rel="noopener noreferrer"
                style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(24,119,242,0.12)', border: '1px solid rgba(24,119,242,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', flexShrink: 0 }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(24,119,242,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(24,119,242,0.12)'; e.currentTarget.style.transform = 'none'; }}
                title="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://tiktok.com/@benzosecurity" target="_blank" rel="noopener noreferrer"
                style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,0,0,0.08)', border: '1px solid rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', flexShrink: 0 }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.15)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'none'; }}
                title="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#010101">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
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
