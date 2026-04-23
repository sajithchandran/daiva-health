import type { FC } from 'react';
import PageLayout from './PageLayout';
import { ShieldCheck } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

const PrivacyPolicy: FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <PageLayout title="Privacy Policy" onBack={onBack}>
      <section style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
          <ShieldCheck color="var(--accent-gold)" size={28} />
          <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Your data belongs to you.</p>
        </div>
        <p>
          At Daiva Health, we are committed to protecting your privacy. This policy explains how we handle data in the context of our open-source software and our website.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>1. We Don't Collect Clinical Data</h2>
        <p>
          Because our products are open-source and self-hosted, <strong>Daiva Health does not have access to any clinical or patient data</strong> you manage within our software. All clinical data stays within your controlled environment.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>2. Website Analytics</h2>
        <p>
          On this website, we may collect minimal, non-identifying analytics (such as page views or browser types) purely to improve the user experience. We do not sell or share this information with third parties.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>3. Local Compliance</h2>
        <p>
          Our software is designed to help you comply with regulations like HIPAA and GDPR, but the ultimate responsibility for configuration and data management lies with the entity deploying the software.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>4. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please reach out to us via our GitHub or social media channels.
        </p>
      </section>

      <p style={{ marginTop: '60px', fontSize: '0.9rem', color: 'rgba(61, 43, 31, 0.5)' }}>
        Last updated: {new Date().toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
      </p>
    </PageLayout>
  );
};

export default PrivacyPolicy;
