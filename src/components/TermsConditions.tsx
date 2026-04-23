import type { FC } from 'react';
import PageLayout from './PageLayout';
import { AlertTriangle } from 'lucide-react';

interface TermsConditionsProps {
  onBack: () => void;
}

const TermsConditions: FC<TermsConditionsProps> = ({ onBack }) => {
  return (
    <PageLayout title="Terms & Conditions" onBack={onBack}>
      <div style={{ 
        padding: '30px', 
        background: 'rgba(139, 0, 0, 0.05)', 
        border: '1px solid rgba(139, 0, 0, 0.1)', 
        borderRadius: '16px',
        marginBottom: '40px',
        display: 'flex',
        gap: '20px',
        alignItems: 'flex-start'
      }}>
        <AlertTriangle color="var(--daiva-red)" size={24} style={{ marginTop: '4px' }} />
        <div>
          <h3 style={{ color: 'var(--daiva-red)', marginBottom: '8px' }}>Open Source Disclaimer</h3>
          <p style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
            As this is an open-source project, the software is provided "as is". <strong>Daiva Health and its contributors will not be responsible or liable for any issues, data loss, or failures arising from your specific deployment or use of the software.</strong>
          </p>
        </div>
      </div>

      <section style={{ marginBottom: '40px' }}>
        <h2>1. Deployment & Testing</h2>
        <p>
          Users are solely responsible for the installation, configuration, and security of their deployments. Since the software is open-source, we strongly advise that you <strong>test it thoroughly by yourself</strong> in a controlled environment before using it for live clinical or operational purposes.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>2. Data Responsibility</h2>
        <p>
          You are responsible for ensuring that your use of the software complies with local healthcare data regulations (such as HIPAA, GDPR, etc.). Daiva Health does not host your data and cannot be held accountable for any data breaches or non-compliance issues within your infrastructure.
        </p>
      </section>

      <section style={{ marginBottom: '40px' }}>
        <h2>3. Licenses</h2>
        <p>
          The software is licensed under the specific open-source licenses found in each product's GitHub repository. Please review those individual licenses (e.g., AGPL, MIT) for detailed rights and restrictions.
        </p>
      </section>

      <p style={{ marginTop: '60px', fontSize: '0.9rem', color: 'rgba(61, 43, 31, 0.5)' }}>
        Last updated: {new Date().toLocaleDateString(undefined, { month: 'long', year: 'numeric' })}
      </p>
    </PageLayout>
  );
};

export default TermsConditions;
