import React from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-dark-500 flex items-center justify-center z-50">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="w-16 h-16 relative mb-6"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="absolute inset-0 border-t-4 border-r-4 border-neon-cyan rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              ease: "linear",
              repeat: Infinity
            }}
          />
          <motion.div
            className="absolute inset-2 border-b-4 border-l-4 border-primary-500 rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 2,
              ease: "linear",
              repeat: Infinity
            }}
          />
        </motion.div>
        
        <motion.h1
          className="text-xl md:text-2xl gradient-text font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Siddhardha Roy
        </motion.h1>
        
        <motion.p
          className="text-gray-400 mt-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Loading portfolio...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Preloader;