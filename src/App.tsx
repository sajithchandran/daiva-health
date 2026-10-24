import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import type { AnimationEvent } from 'react';
import { Activity, Layers, Database, FileText, ShieldCheck, Gauge } from 'lucide-react';
import Header from './components/Header';
import DivineBackground from './components/DivineBackground';
import ProductCard from './components/ProductCard';
import { useReveal } from './hooks/useReveal';

// Secondary pages load only when opened
const VisionDetails = lazy(() => import('./components/VisionDetails'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const TermsConditions = lazy(() => import('./components/TermsConditions'));
const PrivacyPolicy = lazy(() => import('./components/PrivacyPolicy'));

type View = 'home' | 'vision' | 'about' | 'terms' | 'privacy';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
  const [view, setView] = useState<View>('home');
  // While leaving, the current page plays its exit animation; the next view is shown when it ends
  const [leaving, setLeaving] = useState(false);
  const nextView = useRef<View>('home');
  const [catalogHeadingRef, catalogHeadingVisible] = useReveal<HTMLHeadingElement>();

  const leaveTimer = useRef<number | undefined>(undefined);

  const finishLeaving = () => {
    window.clearTimeout(leaveTimer.current);
    setLeaving(false);
    setView(nextView.current);
  };

  const navigate = (next: View) => {
    window.scrollTo(0, 0);
    if (prefersReducedMotion()) {
      setView(next);
      return;
    }
    nextView.current = next;
    setLeaving(true);
    // Fallback in case animationend never fires (e.g. the tab is hidden mid-animation)
    window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(finishLeaving, 1000);
  };

  const handlePageAnimationEnd = (e: AnimationEvent) => {
    if (e.target !== e.currentTarget || !leaving) return;
    finishLeaving();
  };

  const pageClass = (kind: 'home' | 'content' | 'vision') => `page page--${kind}${leaving ? ' is-leaving' : ''}`;

  useEffect(() => {
    window.scrollTo(0, 0);
    const titles = {
      home: 'Daiva Health — Free & Open-Source Healthcare Software (HIS, EMR, AI)',
      vision: 'Our Vision | Daiva Health',
      about: 'About Us | Daiva Health',
      terms: 'Terms & Conditions | Daiva Health',
      privacy: 'Privacy Policy | Daiva Health'
    };
    document.title = titles[view];
  }, [view]);

  const footerLinkStyle = {
    fontFamily: 'inherit',
    background: 'none',
    border: 'none',
    color: 'var(--accent-gold)',
    fontSize: '1rem',
    fontWeight: 500,
    cursor: 'pointer',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  };

  const products = [
    {
      title: 'athma CE',
      category: 'HIS / EMR',
      description: 'A comprehensive, open-source Hospital Information System (HIS) and Electronic Medical Record (EMR) product designed for modern healthcare facilities.',
      githubUrl: 'https://github.com/daivahealth/athma-ce',
      icon: <Activity size={24} />,
      delay: 0.2
    },
    {
      title: 'OpenMedForm',
      category: 'AI Forms',
      description: 'An AI-powered clinical form builder for designing, scoring, and embedding structured clinical forms and assessments into any EMR/EHR.',
      githubUrl: 'https://github.com/daivahealth/openmedform',
      websiteUrl: 'https://openmedform.daiva.health/',
      icon: <FileText size={24} />,
      delay: 0.4
    },
    {
      title: 'athma edge',
      category: 'BCP',
      description: 'A Business Continuity (BCP) solution that keeps clinical care running when the cloud HIS/EMR is unreachable — access active patient data, record notes, and register walk-ins locally.',
      githubUrl: 'https://github.com/daivahealth/athma-edge',
      icon: <ShieldCheck size={24} />,
      delay: 0.6
    },
    {
      title: 'padma',
      category: 'Clinical Pathways',
      description: 'A Clinical Pathway solution that enables healthcare providers to standardize care and improve patient outcomes through evidence-based protocols.',
      githubUrl: 'https://github.com/daivahealth/padma',
      icon: <Layers size={24} />,
      delay: 0.2
    },
    {
      title: 'aiorta',
      category: 'Clinical Research',
      description: 'A Clinical Research platform that leverages AI and clinical data to accelerate medical discoveries and insights.',
      githubUrl: 'https://github.com/daivahealth/aiorta',
      icon: <Database size={24} />,
      delay: 0.4
    },
    {
      title: 'SprintIQ',
      category: 'Engineering',
      description: 'An AI-powered Engineering Intelligence Platform that turns signals from planning, code, CI, and quality tools into delivery metrics, risks, and insights.',
      githubUrl: 'https://github.com/daivahealth/sprintiq',
      icon: <Gauge size={24} />,
      delay: 0.6
    }
  ];

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <DivineBackground />
      <Header />

      <Suspense fallback={null}>
        {view === 'home' ? (
          <main
            key="home"
            className={pageClass('home')}
            onAnimationEnd={handlePageAnimationEnd}
            style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px 100px' }}
          >
            {/* Intro Section */}
            <section style={{ textAlign: 'center', marginBottom: '100px' }}>
              <div
                className="anim-intro"
                style={{ maxWidth: '800px', margin: '0 auto' }}
              >
                <h1 style={{ 
                  margin: '1em 0',
                  fontSize: '1.8rem', 
                  lineHeight: '1.6', 
                  color: '#1a1a1a', 
                  fontWeight: 300,
                  letterSpacing: '-0.01em'
                }}>
                  <span style={{ color: 'var(--accent-gold)' }}>Free and open-source</span> healthcare software for every hospital, clinic, and doctor.
                </h1>
                <p style={{ 
                  fontSize: '1.1rem', 
                  color: 'rgba(0, 0, 0, 0.5)', 
                  marginTop: '30px', 
                  lineHeight: '1.8',
                  fontWeight: 300
                }}>
                  We are building a next-generation ecosystem of digital and AI-powered healthcare solutions, 
                  enabling hospitals, clinics, and healthcare providers of all sizes to adopt 
                  advanced technology without cost barriers.
                </p>
              </div>
            </section>

            {/* Product Catalog */}
            <section aria-labelledby="product-catalog">
              <h2
                id="product-catalog"
                ref={catalogHeadingRef}
                className={`reveal reveal--fade${catalogHeadingVisible ? ' is-visible' : ''}`}
                style={{ 
                  fontSize: '1rem', 
                  color: 'rgba(0, 0, 0, 0.3)', 
                  textAlign: 'center', 
                  marginBottom: '50px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1rem'
                }}
              >
                Product Catalog
              </h2>
              
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                gap: '40px'
              }}>
                {products.map((product, index) => (
                  <ProductCard key={index} {...product} />
                ))}
              </div>
            </section>
          </main>
        ) : (
          <div
            key={view}
            className={pageClass(view === 'vision' ? 'vision' : 'content')}
            onAnimationEnd={handlePageAnimationEnd}
          >
            {view === 'vision' ? (
              <VisionDetails onBack={() => navigate('home')} />
            ) : view === 'about' ? (
              <AboutUs onBack={() => navigate('home')} />
            ) : view === 'terms' ? (
              <TermsConditions onBack={() => navigate('home')} />
            ) : (
              <PrivacyPolicy onBack={() => navigate('home')} />
            )}
          </div>
        )}
      </Suspense>

      {/* Simple Footer */}
      <footer style={{ 
        textAlign: 'center', 
        padding: '60px 20px', 
        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
        color: 'rgba(0, 0, 0, 0.5)',
        fontSize: '0.9rem'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button onClick={() => navigate('about')} style={footerLinkStyle}>About Us</button>
            <button onClick={() => navigate('vision')} style={footerLinkStyle}>Our Vision</button>
            <button onClick={() => navigate('terms')} style={footerLinkStyle}>Terms & Conditions</button>
            <button onClick={() => navigate('privacy')} style={footerLinkStyle}>Privacy Policy</button>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="https://github.com/daivahealth" target="_blank" rel="noopener noreferrer" aria-label="Daiva Health on GitHub" style={{ color: 'inherit', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color = 'var(--accent-gold)'} onMouseOut={e => e.currentTarget.style.color = 'inherit'}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
          </div>
        </div>
        <p style={{ marginTop: '20px' }} suppressHydrationWarning>&copy; {new Date().getFullYear()} Daiva Health Systems Private Limited. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
