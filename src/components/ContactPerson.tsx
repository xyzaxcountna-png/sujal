import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

interface ContactPersonProps {
  isDark: boolean;
}

export default function ContactPerson({ isDark }: ContactPersonProps) {
  const contacts = [
    { icon: Phone, label: 'Phone', value: '+91 8928498577', link: 'tel:+918928498577' },
    { icon: Mail, label: 'Mail', value: 'guptakashish3476475928@gmail.com', link: 'mailto:guptakashish3476475928@gmail.com' },
    { icon: MapPin, label: 'Address', value: 'Mumbai, India 400051', link: null }
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className="mb-8"
    >
      <h2 className={`text-2xl font-bold text-purple uppercase mb-4 border-b-4 border-peach pb-2 inline-block ${isDark ? 'drop-shadow-lg' : ''}`}>
        Contact Person
      </h2>
      <div className="space-y-4 mt-6">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          const content = (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`flex items-start gap-3 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow ${
                isDark ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="bg-purple/10 p-2 rounded-full">
                <Icon className="text-purple" size={20} />
              </div>
              <div>
                <p className={`font-semibold ${isDark ? 'text-white' : 'text-gray-800'}`}>{contact.label}</p>
                <p className={`text-sm break-all ${isDark ? 'text-gray-300' : 'text-grayText'}`}>{contact.value}</p>
              </div>
            </motion.div>
          );

          return contact.link ? (
            <a key={index} href={contact.link} className="block">
              {content}
            </a>
          ) : (
            <div key={index}>{content}</div>
          );
        })}
      </div>
    </motion.section>
  );
}
