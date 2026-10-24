import type { FC } from 'react';

const Header: FC = () => {
  return (
    <header style={{ 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      padding: '20px 20px',
      position: 'relative'
    }}>
      <div
        className="anim-header"
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
          src="/logo-600.webp"
          srcSet="/logo-600.webp 600w, /logo-900.webp 900w"
          sizes="300px"
          width={600}
          height={335}
          fetchPriority="high"
          decoding="async"
          alt="Daiva Health Logo" 
          style={{ 
            width: '100%', 
            height: 'auto',
            display: 'block',
            mixBlendMode: 'multiply',
            filter: 'contrast(1.05) brightness(1.02)' // Match the vividness
          }} 
        />
      </div>
    </header>
  );
};

export default Header;
