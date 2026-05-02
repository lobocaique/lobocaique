import React from 'react';

type FlagType = 'es-latam' | 'pt-br' | 'en-us-uk';

interface HybridFlagProps {
    type: FlagType;
    size?: number;
}

export const HybridFlag: React.FC<HybridFlagProps> = ({ type, size = 48 }) => {
    const renderFlag = () => {
        switch (type) {
            case 'es-latam':
                // Left: Spain (Red/Yellow/Red), Right: LatAm (Generic Green/Blue globe-ish)
                return (
                    <g>
                        <defs>
                            <clipPath id="clip-left">
                                <rect x="0" y="0" width="16" height="32" />
                            </clipPath>
                            <clipPath id="clip-right">
                                <rect x="16" y="0" width="16" height="32" />
                            </clipPath>
                        </defs>
                        {/* Spain (Left) */}
                        <g clipPath="url(#clip-left)">
                            <rect x="0" y="0" width="32" height="32" fill="#AA151B" />
                            <rect x="0" y="8" width="32" height="16" fill="#F1BF00" />
                        </g>
                        {/* LatAm (Right) - Using map-like colors */}
                        <g clipPath="url(#clip-right)">
                            <rect x="0" y="0" width="32" height="32" fill="#87CEEB" /> {/* Sky Blue */}
                            <circle cx="24" cy="16" r="10" fill="#4CAF50" /> {/* Green Land */}
                        </g>
                    </g>
                );
            case 'pt-br':
                // Left: Portugal (Green/Red), Right: Brazil (Green/Yellow/Blue)
                return (
                    <g>
                        <defs>
                            <clipPath id="clip-left-pt">
                                <rect x="0" y="0" width="16" height="32" />
                            </clipPath>
                            <clipPath id="clip-right-br">
                                <rect x="16" y="0" width="16" height="32" />
                            </clipPath>
                        </defs>
                        {/* Portugal (Left) */}
                        <g clipPath="url(#clip-left-pt)">
                            <rect x="0" y="0" width="12" height="32" fill="#006600" />
                            <rect x="12" y="0" width="20" height="32" fill="#FF0000" />
                        </g>
                        {/* Brazil (Right) */}
                        <g clipPath="url(#clip-right-br)">
                            <rect x="0" y="0" width="32" height="32" fill="#009C3B" />
                            <path d="M 0,16 L 16,8 L 32,16 L 16,24 Z" fill="#FFDF00" />
                            <circle cx="16" cy="16" r="6" fill="#002776" />
                        </g>
                    </g>
                );
            case 'en-us-uk':
                // Left: US (Stripes/Blue), Right: UK (Union Jack approx)
                return (
                    <g>
                        <defs>
                            <clipPath id="clip-left-us">
                                <rect x="0" y="0" width="16" height="32" />
                            </clipPath>
                            <clipPath id="clip-right-uk">
                                <rect x="16" y="0" width="16" height="32" />
                            </clipPath>
                        </defs>
                        {/* US (Left) */}
                        <g clipPath="url(#clip-left-us)">
                            <rect x="0" y="0" width="32" height="32" fill="white" />
                            {[...Array(7)].map((_, i) => (
                                <rect key={i} x="0" y={i * 4.5} width="32" height="2.25" fill="#BF0A30" />
                            ))}
                            <rect x="0" y="0" width="16" height="18" fill="#002868" />
                        </g>
                        {/* UK (Right) */}
                        <g clipPath="url(#clip-right-uk)">
                            <rect x="0" y="0" width="32" height="32" fill="#012169" />
                            <path d="M 0,0 L 32,32 M 32,0 L 0,32" stroke="white" strokeWidth="4" />
                            <path d="M 0,0 L 32,32 M 32,0 L 0,32" stroke="#C8102E" strokeWidth="2" />
                            <rect x="14" y="0" width="4" height="32" fill="white" />
                            <rect x="0" y="14" width="32" height="4" fill="white" />
                            <rect x="15" y="0" width="2" height="32" fill="#C8102E" />
                            <rect x="0" y="15" width="32" height="2" fill="#C8102E" />
                        </g>
                    </g>
                );
        }
    };

    return (
        <svg width={size} height={size} viewBox="0 0 32 32" style={{ borderRadius: '50%', overflow: 'hidden', boxShadow: 'var(--shadow-sm)' }}>
            {renderFlag()}
        </svg>
    );
};
