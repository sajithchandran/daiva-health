import { motion } from 'framer-motion';
import { Activity, Layers, Database } from 'lucide-react';
import Header from './components/Header';
import DivineBackground from './components/DivineBackground';
import ProductCard from './components/ProductCard';

function App() {
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

      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 100px' }}>
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
            gap: '40px', // Increased gap for better mobile spacing
            alignItems: 'start'
          }}>
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '60px 20px', 
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        color: 'rgba(0, 0, 0, 0.3)',
        fontSize: '0.9rem'
      }}>
        <p>&copy; {new Date().getFullYear()} Daiva Health. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
