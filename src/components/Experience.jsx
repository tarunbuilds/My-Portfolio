import { experiences } from "../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Vertical Line */}
        <div
          className="absolute top-0 h-full w-[2px] bg-white/30 
                        left-0 sm:left-1/2 sm:-translate-x-1/2"
        />

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={exp.id}
              className={`relative flex w-full mb-24 
                          flex-col sm:flex-row 
                          ${isLeft ? "sm:justify-start" : "sm:justify-end"}`}
            >
              {/* Timeline Dot */}
              <div className="absolute sm:left-1/2 left-0 top-6 sm:-translate-x-1/2 z-10 w-14 h-14 rounded-full bg-gray-900 border-4 border-[#8245ec] flex items-center justify-center">
                <img
                  src={exp.img}
                  alt={exp.company}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Card */}
              <div className="w-full sm:w-1/2 px-0 sm:px-4 mt-16 sm:mt-0 sm:ml-0 sm:mr-0">
                <div className="p-6 sm:p-8 rounded-2xl bg-gray-900 border border-white/20 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.25)] transition-transform duration-300 hover:scale-105">
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
                  <p className="mt-4 text-gray-400 leading-relaxed">
                    {exp.desc}
                  </p>

                  {/* Skills */}
                  <div className="mt-4">
                    <h5 className="text-white font-medium mb-2">Skills:</h5>
                    <ul className="flex flex-wrap gap-2">
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
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
