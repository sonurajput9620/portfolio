import React from 'react';
import { motion } from 'framer-motion';
import { Download, MapPin, Phone, Mail } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary-600 to-purple-600 p-1">
                  <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                    <div className="text-6xl text-gray-400 dark:text-gray-500">
                      👨‍💻
                    </div>
                    {/* Replace with actual image */}
                    {/* <img
                      src="/profile.jpg"
                      alt="Sonu"
                      className="w-full h-full object-cover rounded-2xl"
                    /> */}
                  </div>
                </div>
                
                {/* Floating Badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg border border-gray-200 dark:border-gray-700"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-600">4+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Full Stack Developer & Problem Solver
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                {/* <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm passionate about creating scalable and efficient web solutions that solve real-world problems. 
                  My experience spans across frontend frameworks like Angular and React, backend technologies like Node.js, 
                  and database management with MySQL and MongoDB.
                </p> */}
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Phone</div>
                    <div className="font-medium text-gray-900 dark:text-white">{personalInfo.phone}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Email</div>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                    <div className="font-medium text-gray-900 dark:text-white">India</div>
                  </div>
                </div>
              </div>

              {/* Download CV Button */}
              <motion.a
                href={personalInfo.resumeUrl}
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 btn-primary"
              >
                <Download className="w-5 h-5" />
                <span>Download Resume</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
