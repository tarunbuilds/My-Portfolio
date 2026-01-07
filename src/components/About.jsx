import Tilt from "react-parallax-tilt";
import resume from "../assets/Tarun_Resume.pdf";
import profileImage from "../assets/ProfilePhoto.jpg";
import { TypeAnimation } from "react-type-animation";

const About = () => {
  return (
    <section id="about" className="relative pt-24 pb-16 font-sans">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Hi, I am
            </h1>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Tarun Garg
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
              <span className="text-white">I am a </span>
              <TypeAnimation
                sequence={[
                  "Fullstack Developer",
                  2000,
                  "MERN Stack Developer",
                  2000,
                  "UI/UX Designer",
                  2000,
                  "Coder",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className="text-[#8245ec]"
              />
            </h3>

            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mt-6">
              I am a MERN Stack Developer with hands-on experience in building
              full-stack web applications, REST APIs, authentication systems,
              and scalable backend services. Strong knowledge of React, Node.js,
              MongoDB, and modern development tools.
            </p>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-10 px-8 py-3 rounded-full text-lg font-bold text-white transition-transform duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 8px #8245ec, 0 0 40px #8245ec",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Tilt
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 rounded-full border-4 border-purple-700"
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              gyroscope
            >
              <img
                src={profileImage}
                alt="Tarun Garg"
                className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_25px_rgba(130,69,236,0.5)]"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
