import { motion } from 'framer-motion';

interface BackgroundShapesProps {
  isDark: boolean;
}

export default function BackgroundShapes({ isDark }: BackgroundShapesProps) {
  const shapes = [
    { size: 300, top: '10%', left: '5%', delay: 0, duration: 8 },
    { size: 200, top: '60%', right: '10%', delay: 1, duration: 10 },
    { size: 250, bottom: '20%', left: '15%', delay: 2, duration: 12 },
    { size: 180, top: '40%', right: '20%', delay: 1.5, duration: 9 }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className={`absolute rounded-full blur-3xl ${
            isDark
              ? 'bg-gradient-to-br from-purple/20 via-pink/20 to-peach/20'
              : 'bg-gradient-to-br from-purple/10 via-pink/10 to-peach/10'
          }`}
          style={{
            width: shape.size,
            height: shape.size,
            top: shape.top,
            bottom: shape.bottom,
            left: shape.left,
            right: shape.right,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
