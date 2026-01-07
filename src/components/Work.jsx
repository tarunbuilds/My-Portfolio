import React, { useState } from "react";
import { projects } from "../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[6vw] md:px-[7vw] lg:px-[14vw] font-sans"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
          A showcase of projects highlighting my development skills
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="
              bg-gray-900 border border-gray-700
              rounded-2xl overflow-hidden cursor-pointer
              hover:-translate-y-1 hover:shadow-purple-500/30
              transition-all duration-300
            "
          >
            <div className="p-4">
              <div className="aspect-video rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>
            </div>

            <div className="px-6 pb-6">
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs px-3 py-1 rounded-full
                    bg-[#251f38] text-purple-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center px-3">
          <div
            className="
              relative bg-gray-900 w-full max-w-3xl
              max-h-[90vh] rounded-2xl
              overflow-hidden
            "
          >
            {/* Sticky Close */}
            <div className="sticky top-0 z-10 flex justify-end bg-gray-900 p-3 border-b border-gray-700">
              <button
                onClick={() => setSelectedProject(null)}
                className="text-3xl text-gray-400 hover:text-purple-500 leading-none"
              >
                &times;
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[calc(90vh-60px)]">
              {/* Image */}
              <div className="p-4">
                <div className="aspect-video rounded-xl overflow-hidden">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="px-6 pb-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full
                      bg-[#251f38] text-purple-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-xl
                    bg-gray-800 hover:bg-gray-700 text-gray-300"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-2 rounded-xl
                    bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
