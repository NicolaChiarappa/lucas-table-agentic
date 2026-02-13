"use client";
export function Logo({ className }: { className?: string }) {
    return (
        <svg
            version="1.2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="900 0 2000 1800"
            className={className}

        >
            <g id="Layer 1">
                <text
                    id="Luca's"
                    transform="matrix(5.034,0,0,5.034,1300,453.688)"
                    style={{ fontFamily: '"Allison", serif', fill: 'currentColor' }}
                >
                    <tspan x="0" y="77.5" fontSize="150" fontWeight="400">L</tspan>
                    <tspan y="77.5" fontSize="150" fontWeight="400">u</tspan>
                    <tspan y="77.5" fontSize="150" fontWeight="400">c</tspan>
                    <tspan y="77.5" fontSize="150" fontWeight="400">a</tspan>
                    <tspan y="77.5" fontSize="150" fontWeight="400">&apos;</tspan>
                    <tspan y="77.5" fontSize="150" fontWeight="400">s</tspan>
                </text>
                <text
                    id="Table"
                    transform="translate(1498,986)"
                    style={{ fontFamily: '"Allison", serif', fill: 'currentColor' }}
                >
                    <tspan x="0" y="390.4" fontSize="755" fontWeight="400">T</tspan>
                    <tspan y="390.4" fontSize="755" fontWeight="400">a</tspan>
                    <tspan y="390.4" fontSize="755" fontWeight="400">b</tspan>
                    <tspan y="390.4" fontSize="755" fontWeight="400">l</tspan>
                    <tspan y="390.4" fontSize="755" fontWeight="400">e</tspan>
                </text>
            </g>
        </svg>
    );
}
