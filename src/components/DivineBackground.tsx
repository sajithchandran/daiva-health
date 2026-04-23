import type { FC } from 'react';

const DivineBackground: FC = () => {
  return (
    <div className="divine-background-container" style={{ 
      position: 'fixed', 
      inset: 0, 
      zIndex: -1, 
      background: '#ffffff' 
    }} />
  );
};

export default DivineBackground;
