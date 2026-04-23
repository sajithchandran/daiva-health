import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface PageLayoutProps {
  title: string;
  children: ReactNode;
  onBack: () => void;
}

const PageLayout: FC<PageLayoutProps> = ({ title, children, onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px 100px' }}
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
        Back to Home
      </button>

      <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '40px', letterSpacing: '-0.03em' }}>
        {title}
      </h1>

      <div style={{ lineHeight: '1.8', color: 'rgba(61, 43, 31, 1)' }}>
        {children}
      </div>
    </motion.div>
  );
};

export default PageLayout;
