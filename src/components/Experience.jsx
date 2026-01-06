import { experiences } from "../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-0 sm:left-1/2 w-1 h-full bg-white transform sm:-translate-x-1/2" />

        {experiences.map((exp, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`relative flex flex-col sm:flex-row items-center mb-16 ${
                isEven ? "sm:justify-end" : "sm:justify-start"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 sm:left-1/2 transform -translate-x-1/2 w-14 h-14 bg-gray-400 border-4 border-[#8245ec] rounded-full z-10 flex items-center justify-center">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Card */}
              <div
                className={`w-full sm:max-w-md ml-8 sm:ml-44 sm:mr-44 p-6 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_rgba(130,69,236,0.3)] transition-transform duration-300 hover:scale-105`}
              >
                {/* Header */}
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                    <img
                      src={exp.img}
                      alt={exp.company}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-gray-300">{exp.company}</p>
                    <p className="text-xs text-gray-500 mt-1">{exp.date}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-gray-400">{exp.desc}</p>

                {/* Skills */}
                <div className="mt-4">
                  <h5 className="text-white font-medium">Skills:</h5>
                  <ul className="flex flex-wrap gap-2 mt-2">
                    {exp.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="px-3 py-1 text-xs sm:text-sm rounded-lg bg-[#8245ec] text-gray-200 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
