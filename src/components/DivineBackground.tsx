import type { FC } from 'react';
import { motion } from 'framer-motion';

const DivineBackground: FC = () => {
  return (
    <div className="divine-background-container" style={{ position: 'fixed', inset: 0, zIndex: -1, overflow: 'hidden', background: '#f5f5f5' }}>
      <div className="divine-background" style={{
        background: 'radial-gradient(circle at 50% 20%, #ffffff 0%, #f7f7f7 70%, #efefef 100%)',
        opacity: 1,
        filter: 'none'
      }} />
      <motion.div 
        className="glow-orb"
        animate={{
          opacity: [0.03, 0.08, 0.03],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(circle, rgba(212, 140, 59, 0.04) 0%, transparent 70%)',
          width: '100%',
          height: '100vh',
          top: 0,
          left: 0,
          transform: 'translateX(0)'
        }}
      />
      {/* Premium Noise Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/noise-lines.png")',
        opacity: 0.05,
        pointerEvents: 'none'
      }} />
      {/* Subtle Grain */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/p6.png")',
        opacity: 0.07,
        mixBlendMode: 'overlay',
        pointerEvents: 'none'
      }} />
    </div>
  );
};

export default DivineBackground;
