import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

interface HardSkillsProps {
  isDark: boolean;
}

export default function HardSkills({ isDark }: HardSkillsProps) {
  const skills = [
    'Food Industry Knowledge',
    'Conflict Resolution',
    'Food Safety Policies & Procedures',
    'Time Management',
    'Basic Computer Knowledge (XLS)',
    'Written Communication',
    'Cashier Operations',
    'Public Speaking',
    'Leadership',
    'Self-Directed'
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={container}
    >
      <h2 className={`text-2xl font-bold text-purple uppercase mb-4 border-b-4 border-peach pb-2 inline-block ${isDark ? 'drop-shadow-lg' : ''}`}>
        Hard Skills
      </h2>
      <motion.div
        variants={container}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05, x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex items-center gap-2 p-3 rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer ${
              isDark ? 'bg-gray-800 text-gray-200' : 'bg-white text-grayText'
            }`}
          >
            <CheckCircle2 className="text-purple flex-shrink-0" size={20} />
            <span className="font-medium text-sm md:text-base">{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
