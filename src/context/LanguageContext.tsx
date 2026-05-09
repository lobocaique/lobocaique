import { createContext, useContext, useState, type ReactNode } from 'react';

export type Language = 'en' | 'es' | 'pt';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
    en: {
        summary_title: "About",
        projects_title: "Projects",
        about_p1: "Interested in data challenges, full-stack development, and cloud technologies. Certified GCP Professional ML Engineer and AWS Solution Architect Associate based in Madrid.",
        about_p2: "Spent six years in data and tech related roles, including leading a BI team, developing ETL and reporting infrastructure, and automating workflows.",
        about_p3: "Currently focused on building data pipelines and ML and LLM-based applications.",
        madrid: "Madrid",
        london: "London",
        ny: "New York",
        spanish: "Spanish",
        portuguese: "Portuguese",
        english: "English",
        view_details: "View Details",
        hide_details: "Hide Details",
        euroguard_desc: "Agentic GDPR/HIPAA compliance platform. Analyzes privacy/compliance risks dynamically based on product context.",
        euroguard_arch: "Architecture: React frontend, FastAPI backend, PostgreSQL. Uses a LangGraph state machine with a self-correcting evaluation loop (Gemini 1.5 Flash) to reduce hallucinations.",
        ecologistics_desc: "Satellite imagery platform with environmental risk alerts. Fetches Sentinel-2 scenes from natural language queries and runs a PyTorch classifier for alert predictions (proof of concept — synthetic data, not trained on real imagery).",
        ecologistics_arch: "Architecture: Angular frontend, Apollo GraphQL backend, FastAPI + PyTorch ML service. Kafka, Spark, and OpenSearch included in the stack for ingestion/indexing (not yet wired to the main flow). Uses Hugging Face Mistral for query parsing."
    },
    es: {
        summary_title: "Sobre",
        projects_title: "Proyectos",
        about_p1: "Interesado en retos relacionados con datos, desarrollo full-stack y tecnologías en la nube. GCP Professional ML Engineer y AWS Solution Architect Associate con sede en Madrid.",
        about_p2: "Seis años de experiencia en roles relacionados con datos y tech, liderando un equipo de BI, desarrollando infraestructura de ETL y reportes, y automatizando flujos de trabajo.",
        about_p3: "Enfoque actual en la construcción de aplicaciones basadas en ML y LLM.",
        madrid: "Madrid",
        london: "Londres",
        ny: "Nueva York",
        spanish: "Español",
        portuguese: "Portugués",
        english: "Inglés",
        view_details: "Ver Detalles",
        hide_details: "Ocultar Detalles",
        euroguard_desc: "Plataforma de cumplimiento GDPR/HIPAA. Analiza riesgos de privacidad/compliance dinámicamente según el contexto del producto.",
        euroguard_arch: "Arquitectura: Frontend en React, backend en FastAPI, PostgreSQL. Utiliza LangGraph con un ciclo de evaluación auto-correctivo (Gemini 1.5 Flash) para reducir alucinaciones.",
        ecologistics_desc: "Plataforma de imágenes de satélite con alertas de riesgos ambientales. Obtiene escenas Sentinel-2 a partir de consultas en lenguaje natural y ejecuta un clasificador PyTorch para predicción de alertas (prueba de concepto — datos sintéticos, no entrenado con imágenes reales).",
        ecologistics_arch: "Arquitectura: Frontend en Angular, backend Apollo GraphQL, servicio ML con FastAPI + PyTorch. Kafka, Spark y OpenSearch incluidos en el stack para ingesta/indexación (aún no conectados al flujo principal). Usa Hugging Face Mistral para parseo de consultas."
    },
    pt: {
        summary_title: "Sobre",
        projects_title: "Projetos",
        about_p1: "Interesse em desafios relacionados com dados, desenvolvimento full-stack e tecnologias em nuvem. GCP Professional ML Engineer e AWS Solution Architect Associate com sede em Madrid.",
        about_p2: "Seis anos de experiência em funções relacionadas com dados e tech, liderando equipe de BI, desenvolvendo infraestrutura de ETL e relatórios, e automatizando fluxos de trabalho.",
        about_p3: "Foco atual na construção de aplicações baseadas em ML e LLM.",
        madrid: "Madri",
        london: "Londres",
        ny: "Nova York",
        spanish: "Espanhol",
        portuguese: "Português",
        english: "Inglês",
        view_details: "Ver Detalhes",
        hide_details: "Ocultar Detalhes",
        euroguard_desc: "Plataforma de conformidade GDPR/HIPAA. Analisa riscos de privacidade/compliance dinamicamente com base no contexto do produto.",
        euroguard_arch: "Arquitetura: Frontend em React, backend em FastAPI, PostgreSQL. Utiliza uma máquina de estados LangGraph com loop de avaliação auto-corretivo (Gemini 1.5 Flash) para reduzir alucinações.",
        ecologistics_desc: "Plataforma de imagens de satélite com alertas de riscos ambientais. Obtém cenas Sentinel-2 a partir de consultas em linguagem natural e executa um classificador PyTorch para previsão de alertas (prova de conceito — dados sintéticos, não treinado com imagens reais).",
        ecologistics_arch: "Arquitetura: Frontend em Angular, backend Apollo GraphQL, serviço ML com FastAPI + PyTorch. Kafka, Spark e OpenSearch incluídos no stack para ingestão/indexação (ainda não conectados ao fluxo principal). Usa Hugging Face Mistral para parsing de consultas."
    }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>('en');

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
