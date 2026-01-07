import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0d081f] text-white py-10 px-[7vw] lg:px-[20vw] border-t border-gray-700">
      <div className="max-w-5xl mx-auto text-center">
        {/* Logo / Name */}
        <h2 className="text-xl font-semibold text-purple-500">Tarun Garg</h2>

        {/* Navigation */}
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-5">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              aria-label={`Go to ${item.name}`}
              className="text-sm sm:text-base hover:text-purple-500 transition"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 mt-6">
          {[
            {
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/tarun-garg-910a7726b/",
              label: "LinkedIn",
            },
            {
              icon: <FaGithub />,
              link: "https://github.com/tarunbuilds",
              label: "GitHub",
            },
            {
              icon: <MdEmail />,
              link: "mailto:tarungarg727@gmail.com",
              label: "Email",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="text-xl hover:text-purple-500 transform hover:scale-110 transition"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400 mt-6">
          © {new Date().getFullYear()} Tarun Garg. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
