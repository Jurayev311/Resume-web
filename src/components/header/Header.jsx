import { useState, useEffect } from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full h-14 bg-white bg-opacity-80 backdrop-blur-md rounded-b-xl shadow-lg 
        flex items-center justify-center gap-6 p-3 z-50 md:hidden"
      >
        {[FaGithub, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-600 hover:text-blue-500 text-xl p-2 rounded-full transition-transform transform hover:scale-110"
          >
            <Icon />
          </a>
        ))}
      </header>

      <header
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-4 py-2
        flex items-center gap-4 z-50 transition-all duration-300 hidden md:flex
        ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {[FaGithub, FaTwitter, FaLinkedin, FaInstagram].map((Icon, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-600 hover:text-blue-500 text-xl p-3 rounded-full transition-transform transform hover:scale-110"
          >
            <Icon />
          </a>
        ))}
      </header>
    </>
  );
};

export default Header;
