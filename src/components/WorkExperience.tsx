import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

interface WorkExperienceProps {
  isDark: boolean;
}

export default function WorkExperience({ isDark }: WorkExperienceProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      variants={fadeInUp}
    >
      <div className="flex items-center gap-2 mb-4">
        <Briefcase className="text-purple" size={24} />
        <h2 className={`text-2xl font-bold text-purple uppercase ${isDark ? 'drop-shadow-lg' : ''}`}>Work Experience</h2>
      </div>
      <div className="border-l-4 border-peach pl-4 md:pl-6 ml-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="flex justify-between items-start mb-2 flex-wrap gap-2">
            <div>
              <h3 className={`text-lg md:text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>Food Manager</h3>
              <p className={isDark ? 'text-gray-300' : 'text-grayText'}>Sujal – Mumbai, India</p>
            </div>
            <span className="text-xs md:text-sm font-medium text-purple bg-lightPurple/30 px-3 py-1 rounded-full whitespace-nowrap">
              06/2024 – Current
            </span>
          </div>
          <ul className="space-y-2 mt-4">
            {[
              'Resolved conflicts between kitchen staff members in a timely manner.',
              'Managed development and implementation of food safety policies and procedures.',
              'Responded to customer complaints regarding food quality or service promptly and professionally.'
            ].map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                className={`flex items-start gap-2 text-sm md:text-base ${isDark ? 'text-gray-300' : 'text-grayText'}`}
              >
                <span className="text-pink font-bold mt-1">•</span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
