import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import Header from './components/Header';
import ProfileImage from './components/ProfileImage';
import WorkExperience from './components/WorkExperience';
import HardSkills from './components/HardSkills';
import ProfileSummary from './components/ProfileSummary';
import ContactPerson from './components/ContactPerson';
import Education from './components/Education';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { isDark, toggle } = useDarkMode();

  return (
    <div className={`min-h-screen font-raleway relative transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <BackgroundShapes isDark={isDark} />

      <motion.button
        onClick={toggle}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
      >
        {isDark ? <Sun className="text-yellow-400" size={24} /> : <Moon className="text-purple" size={24} />}
      </motion.button>

      <div className="relative z-10">
        <div className="animate-gradient bg-gradient-to-r from-purple via-pink to-peach py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="max-w-6xl mx-auto"
            >
              <Header isDark={isDark} />
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
              <div className="lg:col-span-3 space-y-6 md:space-y-8">
                <WorkExperience isDark={isDark} />
                <HardSkills isDark={isDark} />
              </div>

              <div className="lg:col-span-2 space-y-6 md:space-y-8">
                <ProfileImage />
                <ProfileSummary />
                <ContactPerson isDark={isDark} />
                <Education isDark={isDark} />
              </div>
            </div>
          </div>
        </div>

        <Footer isDark={isDark} />
      </div>
    </div>
  );
}

export default App;
