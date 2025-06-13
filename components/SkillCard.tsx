"use client"
import React, { useState } from 'react';
import { Skill } from '@/types/skills';
import { cn } from '@/lib/utils';

interface SkillCardProps {
    skill: Skill;
    categoryColor: string;
    index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, categoryColor, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className={cn(
            "group relative p-6 rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm",
            "hover:border-violet-500/50 transition-all duration-300 hover:scale-105",
            "hover:shadow-lg hover:shadow-violet-500/20"
        )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                animationDelay: `${index * 100}ms`
            }}
        >
            {/* Icon and Name */}
            <div className="flex items-center gap-4 mb-4">
                <div
                    className={cn(
                        "w-12 h-12 rounded-lg flex items-center justify-center text-2xl",
                        "bg-gradient-to-br shadow-md"
                    )}
                    style={{
                        backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                    }}
                >
                    <span className="filter drop-shadow-sm">{skill.icon}</span>
                </div>
                <div>          <h3 className="font-semibold text-lg text-white group-hover:text-violet-400 transition-colors">
                    {skill.name}
                </h3>
                    <p className="text-sm text-gray-400">
                        {skill.description}
                    </p>
                </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">        <div className="flex justify-between text-sm">
                <span className="text-gray-400">Proficiency</span>
                <span className="font-medium text-white">{skill.level}%</span>
            </div>
                <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                    <div
                        className={cn(
                            "h-full bg-gradient-to-r transition-all duration-1000 ease-out",
                            categoryColor
                        )}
                        style={{
                            width: isHovered ? `${skill.level}%` : '0%',
                            transitionDelay: isHovered ? `${index * 100}ms` : '0ms'
                        }}
                    />
                </div>
            </div>

            {/* Hover Effect Overlay */}      <div className={cn(
                "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100",
                "bg-gradient-to-br from-violet-500/10 to-cyan-500/10",
                "transition-opacity duration-300 pointer-events-none"
            )} />
        </div>
    );
};

export default SkillCard;