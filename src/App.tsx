import complianceImg from './assets/compliance_auditor_real.png'
import earthImg from './assets/earth_monitor_real.png'
import React from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { LanguageToggle } from './components/LanguageToggle';
import { ProjectCard } from './components/ProjectCard';
import { AnalogClock } from './components/AnalogClock';
import './index.css';

const AppContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="layout-container">

      {/* LEFT SIDEBAR: Hero & About Me */}
      <aside className="layout-sidebar">
        <div>
          <h1 style={{ fontSize: '32px', color: 'var(--color-primary)', marginBottom: '8px' }}>C da Ericeira Lobo</h1>
        </div>

        <LanguageToggle />

        <div style={{ marginTop: '20px' }}>
          <h3 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent)', marginBottom: '12px' }}>
            {t('summary_title')}
          </h3>
          <div style={{ fontSize: '15px', lineHeight: '1.6', color: 'var(--color-text-main)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ margin: 0 }}>{t('about_p1')}</p>
            <p style={{ margin: 0 }}>{t('about_p2')}</p>
            <p style={{ margin: 0 }}>{t('about_p3')}</p>
          </div>
        </div>

        <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>LinkedIn</a>
          <a href="https://github.com/lobocaique" target="_blank" rel="noreferrer" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>GitHub</a>
        </div>
      </aside>

      {/* RIGHT CONTENT: Projects & Info */}
      <main className="layout-content">

        {/* Projects Section */}
        <section>
          <h2 style={{ fontSize: '24px', marginBottom: '24px', color: 'var(--color-primary)', borderBottom: '1px solid var(--color-border)', paddingBottom: '12px' }}>
            {t('projects_title')}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <ProjectCard
              title="I. Compliance Auditor"
              summary={t('euroguard_desc')}
              architecture={t('euroguard_arch')}
              githubUrl="https://github.com/lobocaique/compliance-audit"
              techStack={[
                'React',
                'TypeScript',
                'Vite',
                'FastAPI',
                'LangGraph',
                'Gemini 1.5 Flash',
                'PostgreSQL',
                'pgvector',
                'RAG',
                'Docker',
                'Google Generative AI SDK',
              ]}
              screenshotUrl={complianceImg}
            />
            <ProjectCard
              title="II. Earth Monitor"
              summary={t('ecologistics_desc')}
              architecture={t('ecologistics_arch')}
              githubUrl="https://github.com/lobocaique/earth-monitor"
              techStack={[
                'Angular',
                'GraphQL',
                'Node.js',
                'FastAPI',
                'PyTorch',
                'Apache Spark',
                'OpenSearch',
                'Kafka',
                'Hugging Face',
                'Docker',
              ]}
              screenshotUrl={earthImg}
            />
          </div>
        </section>

        {/* Timezones & Languages Section */}
        <section style={{
          paddingTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '40px'
        }}>
          {/* Clocks */}
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '24px' }}>
            <AnalogClock timezone="Europe/Madrid" label={t('madrid')} />
            <AnalogClock timezone="Europe/London" label={t('london')} />
            <AnalogClock timezone="America/New_York" label={t('ny')} />
          </div>
        </section>

      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;
