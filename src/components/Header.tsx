import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

interface HeaderProps {
  isDark: boolean;
}

export default function Header({}: HeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-white uppercase tracking-wider mb-4 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Sujal Pappu Gupta
      </motion.h1>
      <motion.div
        className="flex flex-wrap gap-3 md:gap-4 text-white text-sm md:text-base"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="flex items-center gap-2 hover:scale-105 transition-transform">
          <MapPin size={16} />
          <span>Mumbai, India 400051</span>
        </div>
        <div className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Phone size={16} />
          <span>8928498577</span>
        </div>
        <div className="flex items-center gap-2 hover:scale-105 transition-transform">
          <Mail size={16} />
          <span className="break-all">guptakashish3476475928@gmail.com</span>
        </div>
      </motion.div>
    </motion.header>
  );
}
