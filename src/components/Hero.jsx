import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Photo from '../assets/Photo.jpg';
import Resume from '../assets/Resume.pdf';


const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-4xl text-center"
      >
        {/* Profile Image */}

        <img src={Photo} className="w-35 h-45 md:w-40 md:h-45 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover" />

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 leading-tight">
          Hi, I'm Arijit Srivastava
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          Software Developer (MERN Stack)
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            to="/projects"
            smooth={true}
            duration={500}
            className="cursor-pointer px-5 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            smooth={true}
            duration={500}
            className="cursor-pointer px-5 py-3 bg-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition"
          >
            Contact Me
          </Link>
          <a
            href={Resume}
            download="Arijit_Srivastava_Resume.pdf"
            className="cursor-pointer px-5 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
          >
            Download Resume
          </a>
        </div>


        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/Arijitsri"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/arijit-srivastava-a75113245"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin size={28} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
