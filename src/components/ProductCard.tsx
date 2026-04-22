import type { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  title: string;
  description: string;
  githubUrl: string;
  icon: ReactNode;
  delay: number;
}

const ProductCard: FC<ProductCardProps> = ({ title, description, githubUrl, icon, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      className="glass-card"
      style={{
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        width: '50px', 
        height: '50px', 
        borderRadius: '12px', 
        background: 'rgba(255, 215, 0, 0.1)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: 'var(--accent-gold)'
      }}>
        {icon}
      </div>
      
      <div>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#1a1a1a' }}>{title}</h3>
        <p style={{ color: 'rgba(0, 0, 0, 0.6)', fontSize: '0.95rem', lineHeight: '1.6' }}>
          {description}
        </p>
      </div>

      <div style={{ marginTop: 'auto', display: 'flex', gap: '15px' }}>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="github-link">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          GitHub Repository
        </a>
      </div>
      
      {/* Decorative element */}
      <div style={{
        position: 'absolute',
        bottom: '-20px',
        right: '-20px',
        width: '100px',
        height: '100px',
        background: 'radial-gradient(circle, rgba(255, 215, 0, 0.05) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
    </motion.div>
  );
};

export default ProductCard;
