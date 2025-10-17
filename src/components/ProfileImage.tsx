import { motion } from 'framer-motion';

export default function ProfileImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-center mb-8"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="w-48 h-48 rounded-full bg-gradient-to-br from-purple via-pink to-peach flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white relative"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full shadow-[0_0_20px_5px_rgba(128,0,128,0.5)]"></div>
        
        <div className="w-full h-full rounded-full overflow-hidden relative z-10">
          <img 
            src="/Assets/ProfileImage/profile-image.png" 
            alt="Sujal Pattu Gupta" 
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}