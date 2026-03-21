import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setIsSending(true);

    // Using placeholder Service ID, Template ID, and Public Key for EmailJS
    // The user will replace these with actual keys from emailjs.com
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
      .then(() => {
        setIsSending(false);
        setStatusMsg('Message sent successfully! We will get back to you soon.');
        formRef.current?.reset();
      }, (error) => {
        setIsSending(false);
        setStatusMsg('Failed to send message: ' + error.text);
      });
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '6rem 1.5rem', minHeight: 'calc(100vh - 80px)' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: 'var(--primary)' }}>Get in Touch</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
          Ready to secure your property or upgrade to solar? Request a free quote today and our Kenyan team will be in touch shortly.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem' }}>
        
        {/* Contact Info */}
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Contact Information</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(0, 229, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Phone color="var(--primary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Phone</h3>
                <p style={{ color: 'var(--text-secondary)' }}>+254 700 000 000</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(255, 183, 3, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Mail color="var(--secondary)" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Email</h3>
                <p style={{ color: 'var(--text-secondary)' }}>info@benzosecurity.co.ke</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ width: '50px', height: '50px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin color="#fff" />
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Head Office</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Nairobi, Kenya</p>
              </div>
            </div>
          </div>
          
          {/* Map Embed Placeholder */}
          <div style={{ marginTop: '3rem', width: '100%', height: '250px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--surface-border)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d36.707307448384214!3d-1.3032051185568228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) grayscale(80%)' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>

        {/* Email Form */}
        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <div className="glass-panel">
            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Send Us A Message</h2>
            <form ref={formRef} onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Full Name</label>
                <input 
                  type="text" 
                  name="user_name" 
                  required 
                  style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: '#fff', outline: 'none' }} 
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Email Address</label>
                <input 
                  type="email" 
                  name="user_email" 
                  required 
                  style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: '#fff', outline: 'none' }} 
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Service Required</label>
                <select 
                  name="service" 
                  style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: '#fff', outline: 'none' }}
                >
                  <option value="Automatic Gates">Automatic Gate Installation</option>
                  <option value="CCTV Installation">CCTV Installation</option>
                  <option value="Solar System">Solar Solutions</option>
                  <option value="Other">Other Query</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Message</label>
                <textarea 
                  name="message" 
                  required 
                  rows={4}
                  style={{ width: '100%', padding: '1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--surface-border)', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical' }} 
                  placeholder="Tell us about your project..."
                />
              </div>

              {statusMsg && <p style={{ color: statusMsg.includes('success') ? 'var(--primary)' : '#ff4444' }}>{statusMsg}</p>}

              <button 
                type="submit" 
                className="btn-primary" 
                disabled={isSending}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', marginTop: '1rem' }}
              >
                {isSending ? 'Sending...' : <>Send Message <Send size={20} /></>}
              </button>

            </form>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
