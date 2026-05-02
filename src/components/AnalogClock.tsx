import React, { useEffect, useState } from 'react';

interface AnalogClockProps {
    timezone: string;
    label: string;
    size?: number;
}

export const AnalogClock: React.FC<AnalogClockProps> = ({ timezone, label, size = 120 }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Calculate angles based on timezone
    const getAngles = () => {
        const now = time;
        // Create date string for target timezone to parse hours/mins/secs
        // Using en-US to ensure HH:MM:SS format parsing reliability
        const tzString = now.toLocaleTimeString('en-US', { timeZone: timezone, hour12: false });
        const [h, m, s] = tzString.split(':').map(Number);

        const secondAngle = s * 6;
        const minuteAngle = m * 6 + s * 0.1;
        const hourAngle = (h % 12) * 30 + m * 0.5;

        return { hourAngle, minuteAngle, secondAngle };
    };

    const { hourAngle, minuteAngle, secondAngle } = getAngles();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
            <div style={{ position: 'relative', width: size, height: size }}>
                {/* Clock Face */}
                <svg width={size} height={size} viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="48" fill="white" stroke="#002147" strokeWidth="2" />

                    {/* Hour Marks */}
                    {[...Array(12)].map((_, i) => (
                        <line
                            key={i}
                            x1="50"
                            y1="6"
                            x2="50"
                            y2="12"
                            transform={`rotate(${i * 30} 50 50)`}
                            stroke="#1d1d1f"
                            strokeWidth="2"
                        />
                    ))}

                    {/* Hour Hand */}
                    <line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="25"
                        stroke="#002147"
                        strokeWidth="4"
                        transform={`rotate(${hourAngle} 50 50)`}
                        strokeLinecap="round"
                    />

                    {/* Minute Hand */}
                    <line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="15"
                        stroke="#002147"
                        strokeWidth="3"
                        transform={`rotate(${minuteAngle} 50 50)`}
                        strokeLinecap="round"
                    />

                    {/* Second Hand */}
                    <line
                        x1="50"
                        y1="50"
                        x2="50"
                        y2="10"
                        stroke="#c62828"
                        strokeWidth="1"
                        transform={`rotate(${secondAngle} 50 50)`}
                    />

                    <circle cx="50" cy="50" r="2" fill="#c62828" />
                </svg>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--color-primary)' }}>{label}</span>
        </div>
    );
};
