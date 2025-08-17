import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Arijit Srivastava. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="https://github.com/Arijitsri" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/arijit-srivastava-a75113245/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
