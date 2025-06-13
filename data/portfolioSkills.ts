import { SkillCategory } from '@/types/skills';

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      {
        name: 'React',
        icon: '⚛️',
        level: 90,
        category: 'Frontend',
        description: 'Building interactive user interfaces'
      },
      {
        name: 'TypeScript',
        icon: '📘',
        level: 50,
        category: 'Frontend',
        description: 'Type-safe JavaScript development'
      },
      {
        name: 'Next.js',
        icon: '▲',
        level: 85,
        category: 'Frontend',
        description: 'Full-stack React framework'
      },
      {
        name: 'Tailwind CSS',
        icon: '🎨',
        level: 90,
        category: 'Frontend',
        description: 'Utility-first CSS framework'
      }
    ]
  },
  {
    name: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: [
      {
        name: 'Node.js',
        icon: '🟢',
        level: 70,
        category: 'Backend',
        description: 'Server-side JavaScript runtime'
      },
    //   {
    //     name: 'Python',
    //     icon: '🐍',
    //     level: 85,
    //     category: 'Backend',
    //     description: 'Versatile programming language'
    //   },
    //   {
    //     name: 'PostgreSQL',
    //     icon: '🐘',
    //     level: 80,
    //     category: 'Backend',
    //     description: 'Advanced relational database'
    //   },
      {
        name: 'MongoDB',
        icon: '🍃',
        level: 75,
        category: 'Backend',
        description: 'NoSQL document database'
      }
    ]
  },
//   {
//     name: 'Tools & Other',
//     color: 'from-purple-500 to-pink-500',
//     skills: [
//       {
//         name: 'Git',
//         icon: '🌿',
//         level: 90,
//         category: 'Tools',
//         description: 'Version control system'
//       },
//       {
//         name: 'Docker',
//         icon: '🐳',
//         level: 78,
//         category: 'Tools',
//         description: 'Containerization platform'
//       },
//       {
//         name: 'AWS',
//         icon: '☁️',
//         level: 72,
//         category: 'Tools',
//         description: 'Cloud computing services'
//       },
//       {
//         name: 'Figma',
//         icon: '🎯',
//         level: 82,
//         category: 'Tools',
//         description: 'UI/UX design tool'
//       }
//     ]
//   }
];
