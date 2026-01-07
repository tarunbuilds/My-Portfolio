import { education } from "../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Header */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4" />
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Vertical Line */}
        <div
          className="absolute top-0 h-full w-[2px] bg-white/30 
                        left-0 sm:left-1/2 sm:-translate-x-1/2"
        />

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`relative flex w-full mb-24 flex-col sm:flex-row ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 sm:left-1/2 top-6 sm:-translate-x-1/2 z-10 w-14 h-14 rounded-full bg-gray-900 border-4 border-[#8245ec] flex items-center justify-center">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>

              {/* Card */}
              <div className="w-full sm:w-1/2 px-0 sm:px-4 mt-16 sm:mt-0">
                <div className="p-6 sm:p-8 rounded-2xl bg-gray-900 border border-white/20 backdrop-blur-md shadow-[0_0_25px_rgba(130,69,236,0.25)] transition-transform duration-300 hover:scale-105">
                  {/* Header */}
                  <div className="flex items-center gap-5">
                    <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-gray-300">{edu.school}</p>
                      <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                    </div>
                  </div>

                  {/* Grade */}
                  <p className="mt-4 text-gray-300 font-semibold">
                    Grade: <span className="text-gray-400">{edu.grade}</span>
                  </p>

                  {/* Description */}
                  <p className="mt-3 text-gray-400 leading-relaxed">
                    {edu.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
