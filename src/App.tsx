import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Layers, Database } from 'lucide-react';
import Header from './components/Header';
import DivineBackground from './components/DivineBackground';
import ProductCard from './components/ProductCard';
import VisionDetails from './components/VisionDetails';
import AboutUs from './components/AboutUs';
import TermsConditions from './components/TermsConditions';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [view, setView] = useState<'home' | 'vision' | 'about' | 'terms' | 'privacy'>('home');

  const footerLinkStyle = {
    background: 'none',
    border: 'none',
    color: 'var(--accent-gold)',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  };

  const products = [
    {
      title: 'athma CE',
      description: 'A comprehensive, open-source Hospital Information System (HIS) and Electronic Medical Record (EMR) product designed for modern healthcare facilities.',
      githubUrl: 'https://github.com/daivahealth/athma-community',
      icon: <Activity size={24} />,
      delay: 0.2
    },
    {
      title: 'padma',
      description: 'A Clinical Pathway solution that enables healthcare providers to standardize care and improve patient outcomes through evidence-based protocols.',
      githubUrl: 'https://github.com/daivahealth/padma',
      icon: <Layers size={24} />,
      delay: 0.4
    },
    {
      title: 'aiorta',
      description: 'A Clinical Research platform that leverages AI and clinical data to accelerate medical discoveries and insights.',
      githubUrl: 'https://github.com/daivahealth/aiorta',
      icon: <Database size={24} />,
      delay: 0.6
    }
  ];

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <DivineBackground />
      <Header />

      <AnimatePresence mode="wait">
        {view === 'home' ? (
          <motion.main 
            key="home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 100px' }}
          >
            {/* Intro Section */}
            <section style={{ textAlign: 'center', marginBottom: '100px' }}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                style={{ maxWidth: '800px', margin: '0 auto' }}
              >
                <p style={{ 
                  fontSize: '1.8rem', 
                  lineHeight: '1.6', 
                  color: '#1a1a1a', 
                  fontWeight: 300,
                  letterSpacing: '-0.01em'
                }}>
                  <span style={{ color: 'var(--accent-gold)' }}>Free and open-source</span> healthcare software for every hospital, clinic, and doctor.
                </p>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'rgba(0, 0, 0, 0.5)', 
                  marginTop: '30px', 
                  lineHeight: '1.8',
                  fontWeight: 300
                }}>
                  We are building a next-generation ecosystem of digital and AI-powered healthcare solutions, 
                  enabling hospitals, clinics, and healthcare providers of all sizes to adopt 
                  advanced technology without cost barriers.
                </p>
              </motion.div>
            </section>

            {/* Product Catalog */}
            <section>
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ 
                  fontSize: '1rem', 
                  color: 'rgba(0, 0, 0, 0.3)', 
                  textAlign: 'center', 
                  marginBottom: '50px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1rem'
                }}
              >
                Product Catalog
              </motion.h2>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '40px'
              }}>
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </section>
          </motion.main>
        ) : view === 'vision' ? (
          <VisionDetails key="vision" onBack={() => setView('home')} />
        ) : view === 'about' ? (
          <AboutUs key="about" onBack={() => setView('home')} />
        ) : view === 'terms' ? (
          <TermsConditions key="terms" onBack={() => setView('home')} />
        ) : (
          <PrivacyPolicy key="privacy" onBack={() => setView('home')} />
        )}
      </AnimatePresence>

      {/* Simple Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '60px 20px', 
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '0.9rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={() => setView('about')} style={footerLinkStyle}>About Us</button>
            <button onClick={() => setView('vision')} style={footerLinkStyle}>Our Vision</button>
            <button onClick={() => setView('terms')} style={footerLinkStyle}>Terms & Conditions</button>
            <button onClick={() => setView('privacy')} style={footerLinkStyle}>Privacy Policy</button>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
        <p style={{ marginTop: '20px' }}>&copy; {new Date().getFullYear()} Daiva Health. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
