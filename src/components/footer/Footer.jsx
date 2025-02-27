import React from "react";
import { FaGithub, FaTelegram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-12">
      <div className="container max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          © 2025 Javohir | All rights reserved.
        </p>

        <div className="flex space-x-4 mt-4 md:mt-0">
          <a target="_blank" href="https://github.com/Jurayev311" className="hover:text-blue-400 transition">
            <FaGithub size={20} />
          </a>
          <a target="_blank" href="https://t.me/Javohir_react" className="hover:text-blue-400 transition">
            <FaTelegram size={20} />
          </a>
          <a target="_blank" href="https://linkedin.com" className="hover:text-blue-400 transition">
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
