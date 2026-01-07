import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const menuItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Projects" },
  { id: "education", label: "Education" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Navbar background on scroll
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect active section automatically
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    menuItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
      px-[7vw] lg:px-[20vw]
      ${
        isScrolled
          ? "bg-[#050414]/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between py-5 text-white">
        {/* Logo */}
        <div
          className="text-lg font-semibold cursor-pointer select-none"
          onClick={() => scrollToSection("about")}
        >
          <span className="text-[#8245ec]">&lt;</span>
          Tarun
          <span className="text-[#8245ec]">/</span>
          Garg
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                aria-label={`Go to ${item.label}`}
                className={`hover:text-[#8245ec] transition ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop Social */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://github.com/tarunbuilds"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-[#8245ec]"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/tarun-garg-910a7726b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-[#8245ec]"
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#8245ec]"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 w-[90%] bg-[#050414]/80 backdrop-blur-lg rounded-xl shadow-lg">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-300">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-white transition ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}

            <div className="flex gap-5 pt-3">
              <a
                href="https://github.com/tarunbuilds"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/tarun-garg-910a7726b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
