import React from 'react';
import Photo from '../assets/Photo.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full bg-white dark:bg-gray-900 flex items-center pt-16 md:pt-24 pb-10"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Content layout */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6">
              👋 About Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Arijit Srivastava</span>, a passionate <strong>MERN Stack Developer</strong> who loves building scalable, efficient, and delightful web experiences.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
              I have hands-on experience with React.js, Node.js, Express.js, and MongoDB. I enjoy contributing to open-source, solving real-world problems, and collaborating on impactful projects.
            </p>
            <div className="mt-6">
              <a
                href="/contact"
                className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow hover:bg-indigo-700 transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="overflow-hidden rounded-2xl shadow-lg w-full max-w-md">
              {/* <img
                src= Pho
                alt="Arijit Srivastava"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
              /> */}

              <img src={Photo} alt="Arijit Srivastava" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
