import React from 'react';
import Project1 from '../assets/Project1.jpg'
import Project2 from '../assets/Project2.jpg'
import Project3 from '../assets/Project3.jpg'

const projects = [
  {
    title: 'Learning-Management-System',
    description: 'LMS is a full-featured web platform for learning and content sharing. It allows users to watch videos, attempt quizzes, and contact the team for more info. When someone submits a contact form, the site auto-matches relevant videos and sends them via email. The Admin Dashboard enables admins to upload videos, manage contact messages, and upload',
    image: Project1,
    link: 'https://github.com/Arijitsri/Learning-Management-System',
  },
  {
    title: 'Cream-App',
    description: 'The Ice-Cream App is an event-based ice cream service platform where users can submit detailed event requests for customized ice cream catering. The request form collects information such as flavor selection, quantity, event type, date/time, number of attendees, staff requirements, and contact details.',
    image: Project2,
    link: 'https://github.com/Arijitsri/Cream-App',
  },
  {
    title: 'Voting-App',
    description: 'Backend for a voting app using Node.js, Express.js, and MongoDB. Includes user authentication, vote management, and real-time results tracking, designed for scalability and security.',
    image: Project3,
    link: 'https://github.com/Arijitsri/Voting-App',
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-100 dark:bg-gray-800 w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            🚀 Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            A glimpse into some of the things I’ve built.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-fill"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
