export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  color: string;
  skills: Skill[];
}