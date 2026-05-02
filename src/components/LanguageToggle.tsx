import React from 'react';
import { useLanguage, type Language } from '../context/LanguageContext';

export const LanguageToggle: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();

    const languages: { code: Language; label: string }[] = [
        { code: 'en', label: t('english') },
        { code: 'es', label: t('spanish') },
        { code: 'pt', label: t('portuguese') }
    ];

    return (
        <div style={{ display: 'flex', gap: '8px', background: '#f5f5f7', padding: '4px', borderRadius: '100px' }}>
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    style={{
                        background: language === lang.code ? 'var(--color-primary)' : 'transparent',
                        color: language === lang.code ? 'white' : 'var(--color-text-muted)',
                        border: 'none',
                        borderRadius: '100px',
                        padding: '6px 12px',
                        fontSize: '14px',
                        fontWeight: 500
                    }}
                >
                    {lang.label}
                </button>
            ))}
        </div>
    );
};
