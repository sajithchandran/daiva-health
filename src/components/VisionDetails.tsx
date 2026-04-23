import type { FC } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Globe, Heart, Shield } from 'lucide-react';

interface VisionDetailsProps {
  onBack: () => void;
}

const VisionDetails: FC<VisionDetailsProps> = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px' }}
    >
      <button 
        onClick={onBack}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: 'none',
          border: 'none',
          color: '#3d2b1f',
          cursor: 'pointer',
          fontSize: '1rem',
          marginBottom: '40px',
          padding: '8px 0',
          transition: 'transform 0.2s'
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'translateX(-4px)'}
        onMouseOut={e => e.currentTarget.style.transform = 'none'}
      >
        <ArrowLeft size={20} />
        Back to Products
      </button>

      <section style={{ marginBottom: '80px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '24px', letterSpacing: '-0.03em' }}>
          Our Vision for <span style={{ color: 'var(--accent-gold)' }}>Global Health</span>
        </h1>
        <p style={{ fontSize: '1.4rem', lineHeight: '1.6', color: 'rgba(61, 43, 31, 0.8)', fontWeight: 300 }}>
          We believe that world-class healthcare software is a human right, not a luxury. 
          Our mission is to bridge the digital divide in healthcare by providing free, 
          open-source, and enterprise-grade solutions to every corner of the globe.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '80px' }}>
        <div className="vision-column">
          <Globe size={32} color="var(--accent-gold)" style={{ marginBottom: '16px' }} />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Universal Access</h3>
          <p style={{ color: 'rgba(61, 43, 31, 0.6)', lineHeight: '1.7' }}>
            From urban medical centers to rural clinics, our software is built to scale and adapt to any environment, regardless of budget.
          </p>
        </div>
        <div className="vision-column">
          <Heart size={32} color="var(--daiva-red)" style={{ marginBottom: '16px' }} />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Patient First</h3>
          <p style={{ color: 'rgba(61, 43, 31, 0.6)', lineHeight: '1.7' }}>
            By automating clinical workflows, we give healthcare providers the time and tools they need to focus on what matters most: saving lives.
          </p>
        </div>
        <div className="vision-column">
          <Shield size={32} color="var(--accent-gold)" style={{ marginBottom: '16px' }} />
          <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Open Sovereignty</h3>
          <p style={{ color: 'rgba(61, 43, 31, 0.6)', lineHeight: '1.7' }}>
            We advocate for data sovereignty. With open source, institutions own their data and their future, free from vendor lock-in.
          </p>
        </div>
      </div>

      <section style={{ 
        padding: '60px', 
        background: 'rgba(212, 140, 59, 0.03)', 
        borderRadius: '32px', 
        border: '1px solid rgba(212, 140, 59, 0.1)',
        marginBottom: '80px'
      }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Beyond Software</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(61, 43, 31, 0.7)' }}>
          Daiva Health is more than a software company; we are an ecosystem. 
          By fostering a global community of developers, doctors, and researchers, 
          we are creating a self-sustaining cycle of innovation that accelerates 
          medical breakthroughs and improves standard of care globally.
        </p>
      </section>

      <footer style={{ textAlign: 'center', color: 'rgba(61, 43, 31, 0.4)' }}>
        <p>Joined by the vision of a healthier world.</p>
      </footer>
    </motion.div>
  );
};

export default VisionDetails;
