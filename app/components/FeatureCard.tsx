"use client";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    className?: string; // Allow custom classes like different backdrop-blur
    iconColor?: string;
}

export function FeatureCard({ icon: Icon, title, description, className = "bg-white/10 backdrop-blur-sm", iconColor = "text-white" }: FeatureCardProps) {
    return (
        <div className={`${className} p-6 rounded-lg text-white`}>
            <Icon className={`w-10 h-10 mb-4 ${iconColor}`} />
            <h3 className='text-2xl mb-2'>{title}</h3>
            <p className='text-gray-200'>
                {description}
            </p>
        </div>
    );
}
