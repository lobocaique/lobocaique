import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
    title: string;
    summary: string;
    architecture?: string;
    githubUrl?: string;
    techStack?: string[];
    screenshotUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ title, summary, architecture, githubUrl, techStack, screenshotUrl }) => {
    const [expanded, setExpanded] = useState(false);
    const { t } = useLanguage();

    return (
        <div style={{
            padding: '24px',
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            transition: 'all 0.3s ease',
            cursor: 'pointer'
        }}
        onClick={() => setExpanded(!expanded)}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h3 style={{ fontSize: '20px', color: 'var(--color-primary)', margin: 0 }}>{title}</h3>
                <span
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-text-muted)',
                        fontSize: '14px',
                        textDecoration: 'underline'
                    }}
                >
                    {expanded ? t('hide_details') : t('view_details')}
                </span>
            </div>

            <p style={{ margin: 0, color: 'var(--color-text-main)', lineHeight: '1.5' }}>
                {summary}
            </p>

            {expanded && (
                <div style={{ marginTop: '16px', animation: 'fadeIn 0.3s ease' }} onClick={(e) => e.stopPropagation()}>
                    {architecture && (
                        <p style={{ margin: '0 0 16px 0', color: 'var(--color-text-main)', lineHeight: '1.5', fontSize: '15px' }}>
                            {architecture}
                        </p>
                    )}
                    {screenshotUrl && (
                        <div style={{
                            width: '100%',
                            height: 'auto',
                            backgroundColor: '#e0e0e0',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            marginBottom: '16px'
                        }}>
                            <img src={screenshotUrl} alt={title} style={{ width: '100%', display: 'block', objectFit: 'cover' }} />
                        </div>
                    )}
                    
                    {techStack && techStack.length > 0 && (
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                            {techStack.map(tech => (
                                <span key={tech} style={{ 
                                    fontSize: '12px', 
                                    padding: '4px 10px', 
                                    background: '#ebebeb', 
                                    borderRadius: '100px', 
                                    color: '#1a1a1a',
                                    fontWeight: 600
                                }}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}

                    {githubUrl && (
                        <a 
                            href={githubUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            style={{
                                display: 'inline-block',
                                padding: '8px 16px',
                                backgroundColor: '#24292e',
                                color: 'white',
                                textDecoration: 'none',
                                borderRadius: '6px',
                                fontSize: '14px',
                                fontWeight: 500
                            }}
                        >
                            View on GitHub
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};
