import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  isDark: boolean;
}

export default function Education({ isDark }: EducationProps) {
  const education = [
    { school: 'Bandra Priti High School', location: 'Mumbai', degree: '10th STD PASS' },
    { school: 'Kaiser College Of Commerce', location: 'Mumbai', degree: '11th & 12th STD PASS' },
    { school: 'Kaiser College Of Commerce', location: 'Mumbai', degree: 'Current Doing B.Com' }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <GraduationCap className="text-purple" size={24} />
        <h2 className={`text-2xl font-bold text-purple uppercase ${isDark ? 'drop-shadow-lg' : ''}`}>Education</h2>
      </div>
      <div className="space-y-4">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ scale: 1.02, x: 5 }}
            className={`p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow border-l-4 border-purple ${
              isDark ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <h3 className={`font-bold text-sm md:text-base ${isDark ? 'text-white' : 'text-gray-800'}`}>{edu.school}</h3>
            <p className={`text-xs md:text-sm ${isDark ? 'text-gray-300' : 'text-grayText'}`}>{edu.location}</p>
            <p className="text-purple font-semibold mt-1 text-sm md:text-base">{edu.degree}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
