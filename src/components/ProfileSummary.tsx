import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

export default function ProfileSummary() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <FileText className="text-pink" size={24} />
        <h2 className="text-2xl font-bold text-purple uppercase">Profil</h2>
      </div>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="bg-gradient-to-br from-pink/90 to-pink/70 p-6 rounded-2xl shadow-xl text-white"
      >
        <p className="leading-relaxed text-white/95">
          Experienced and dedicated food service manager with skills in conflict resolution,
          staff oversight, and implementing food safety procedures. Proficient in managing team
          coordination, possessing strong time management and communication skills, dedicated to
          enhancing operational efficiency in the food industry.
        </p>
      </motion.div>
    </motion.section>
  );
}
