import React from "react";
import { FaTelegram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-100">
      <div className="container max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
          Contact <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Menga quyidagi platformalar orqali bog‘lanishingiz mumkin:
        </p>
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-4 text-lg">
            <FaEnvelope className="text-blue-500" />
            <span className="text-gray-800 cursor-default">javohir@example.com</span>
          </div>
          <div className="flex items-center space-x-4 text-lg">
            <FaTelegram className="text-blue-500" />
            <a target="_blank" href="https://t.me/Javohir_react" className="text-gray-800 hover:text-blue-500 transition">
              @Telegram/Javohir
            </a>
          </div>
          <div className="flex items-center space-x-4 text-lg">
            <FaGithub className="text-gray-900" />
            <a target="_blank" href="https://github.com/Jurayev311" className="text-gray-800 hover:text-blue-500 transition">
              github.com/Javohir
            </a>
          </div>
          <div className="flex items-center space-x-4 text-lg">
            <FaLinkedin className="text-blue-500" />
            <a target="_blank" href="https://linkedin.com" className="text-gray-800 hover:text-blue-500 transition">
              linkedin.com/in/Javohir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
