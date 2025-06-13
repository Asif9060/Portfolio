import React from 'react';
import { SkillCategory as SkillCategoryType } from '@/types/skills';
import SkillCard from './SkillCard';
import { cn } from '@/lib/utils';

interface SkillCategoryProps {
    category: SkillCategoryType;
    index: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, index }) => {
    return (
        <div
            className="space-y-6 animate-fade-in"
            style={{ animationDelay: `${index * 200}ms` }}
        >
            {/* Category Header */}      <div className="text-center space-y-2">
                <div className={cn(
                    "inline-flex items-center px-4 py-2 rounded-full",
                    "bg-gradient-to-r text-white font-medium shadow-md shadow-violet-500/20",
                    category.color
                )}>
                    <span className="text-sm font-semibold tracking-wide">
                        {category.name}
                    </span>
                </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.skills.map((skill, skillIndex) => (
                    <SkillCard
                        key={skill.name}
                        skill={skill}
                        categoryColor={category.color}
                        index={skillIndex}
                    />
                ))}
            </div>
        </div>
    );
};

export default SkillCategory;