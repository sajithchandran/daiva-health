import type { FC } from 'react';
import { motion } from 'framer-motion';
import logoImg from '../assets/daiva.png';

const Header: FC = () => {
  return (
    <header style={{ 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      padding: '20px 20px',
      position: 'relative'
    }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: '300px' // Significantly smaller logo
        }}
      >
        <img 
          src={logoImg} 
          alt="Daiva Health Logo" 
          style={{ 
            width: '100%', 
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply',
            filter: 'contrast(1.05) brightness(1.02)' // Match the vividness
          }} 
        />
      </motion.div>
    </header>
  );
};

export default Header;
