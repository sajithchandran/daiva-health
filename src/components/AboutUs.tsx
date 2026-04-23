import type { FC } from 'react';
import PageLayout from './PageLayout';
import { Users, Code, Stethoscope } from 'lucide-react';

interface AboutUsProps {
  onBack: () => void;
}

const AboutUs: FC<AboutUsProps> = ({ onBack }) => {
  return (
    <PageLayout title="About Us" onBack={onBack}>
      <section style={{ marginBottom: '60px' }}>
        <p style={{ fontSize: '1.25rem', marginBottom: '30px' }}>
          Daiva Health was born from a simple yet powerful realization: the tools used to save lives should be accessible to everyone who needs them.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginTop: '40px' }}>
          <div style={{ background: 'rgba(212, 140, 59, 0.05)', padding: '30px', borderRadius: '24px' }}>
            <div style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>
              <Stethoscope size={32} />
            </div>
            <h3 style={{ marginBottom: '10px' }}>Built by Doctors</h3>
            <p style={{ color: 'rgba(61, 43, 31, 0.7)', fontSize: '0.95rem' }}>
              Our clinical team brings years of frontline experience, ensuring that every product we build is grounded in real-world medical needs and workflows.
            </p>
          </div>
          <div style={{ background: 'rgba(212, 140, 59, 0.05)', padding: '30px', borderRadius: '24px' }}>
            <div style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>
              <Code size={32} />
            </div>
            <h3 style={{ marginBottom: '10px' }}>Engineered by Experts</h3>
            <p style={{ color: 'rgba(61, 43, 31, 0.7)', fontSize: '0.95rem' }}>
              Our engineers have decades of combined experience building secure, scalable enterprise software for the world's leading healthcare institutions.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{ fontSize: '1.75rem', marginBottom: '20px' }}>Our Story</h2>
        <p style={{ marginBottom: '20px' }}>
          We are a team of passionate Doctors and Engineers who have spent many years building great products in the healthcare space. Having seen the barriers that costs and proprietary systems put between clinicians and patients, we decided to join together and do something for society.
        </p>
        <p>
          By open-sourcing our core technologies, we are removing the "digital tax" on healthcare. We aren't just building software; we are building a movement towards a more equitable, efficient, and transparent healthcare future.
        </p>
      </section>

      <div style={{ marginTop: '80px', textAlign: 'center', opacity: 0.5 }}>
        <Users size={40} style={{ margin: '0 auto 20px' }} />
        <p>Innovation for the health of humanity.</p>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
