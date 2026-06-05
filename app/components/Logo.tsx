"use client";
export function Logo({ className }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 1400 300"
            className={className}
            role="img"
            aria-label="Luca Chiarappa - Private Chef a domicilio"
            xmlns="http://www.w3.org/2000/svg"
        >
            <text
                x="50%"
                y="50%"
                dy=".15em"
                dominantBaseline="middle"
                textAnchor="middle"
                style={{ fontFamily: '"Allison", serif', fill: 'currentColor', fontSize: '280px', fontWeight: 400 }}
            >
                Luca Chiarappa
            </text>
        </svg>
    );
}
