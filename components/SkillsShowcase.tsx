import React from 'react';
import { skillCategories } from '@/data/portfolioSkills';
import SkillCategory from './SkillCategory';

const SkillsShowcase: React.FC = () => {
  return (
    <div className="min-h-screen translate-y-[11em] bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels across different domains
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-violet-400 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Skills Categories */}
        <div className="space-y-16">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.name}
              category={category}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 space-y-4">          <p className="text-gray-300">
          Interested in working together?
        </p>
          <button className="px-8 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105 transition-all duration-200">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsShowcase;