import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Simple Calculator",
      type: "Web Application",
      description: "A responsive calculator that performs basic arithmetic operations including addition, subtraction, multiplication, and division. Features a clean interface with error handling.",
      screenshot: "/image.png",
      demoLink: "https://simple-calculator-livid-mu.vercel.app/",
      githubLink: "https://github.com/yeob9912/simple_calculator",
      technologies: [],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Temperature Converter",
      type: "Utility Tool",
      description: "A tool for converting temperatures between Celsius and Fahrenheit. Provides instant conversion with a user-friendly interface and clear visual feedback.",
      screenshot: "/Screenshot 2026-02-04 214327(1).png",
      demoLink: "https://temperature-conversion-wdp7.vercel.app/",
      githubLink: "https://github.com/yeob9912/Temperature-conversion",
      technologies: [],
      color: "from-orange-500 to-red-500"
    },
    // {
    //   title: "MVAPP",
    //   type: "Web Application",
    //   description: "A minimum viable product application that validates core features with real users. Built with essential functionality only to test business hypotheses and gather feedback.",
    //   screenshot: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    //   demoLink: "https://mvapp-demo.vercel.app/",
    //   githubLink: "https://github.com/yourusername/mvapp",
    //   technologies: ["React", "Node.js", "MongoDB"],
    //   color: "from-green-500 to-emerald-500"
    // }
  ];

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundColor: 'color-mix(in srgb, var(--background) 95%, rgba(147, 197, 253, 0.05))',
        borderBottom: '1px solid #e5e7eb dark:border-gray-700'
      }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-12 mx-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 inline-block pb-3 relative">
            My Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Practical applications built with modern web technologies
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Left - Screenshot (50% width) */}
                <div className="lg:w-1/2 p-4">
                  <div className="relative rounded-lg overflow-hidden border border-gray-300 dark:border-gray-600">
                    <img 
                      src={project.screenshot} 
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
               
                  </div>
                </div>

                {/* Right - Description & Links (50% width) */}
                <div className="lg:w-1/2 p-6 flex flex-col">
                  <div className="flex-1">
                    {/* Project Title and Type */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {project.title}
                    </h3>
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 mb-4">
                      {project.type}
                    </div>
                    
                    {/* Simple Description */}
                    <div className="mb-6">
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">Features:</h4>
                      <ul className="space-y-2">
                        {project.title === "Simple Calculator" && (
                          <>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Basic arithmetic operations (+, -, ×, ÷)</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Clear button to reset calculations</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Responsive design for all devices</span>
                            </li>
                          </>
                        )}
                        {project.title === "Temperature Converter" && (
                          <>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Celsius to Fahrenheit conversion</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Fahrenheit to Celsius conversion</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Real-time conversion as you type</span>
                            </li>
                          </>
                        )}
                        {project.title === "To-Do List App" && (
                          <>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Add, edit, and delete tasks</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Mark tasks as complete/incomplete</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Data saved in browser's local storage</span>
                            </li>
                          </>
                        )}
                        {project.title === "MVAPP" && (
                          <>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Core feature validation with real users</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>User feedback collection system</span>
                            </li>
                            <li className="flex items-start text-gray-600 dark:text-gray-400">
                              <span className="w-2 h-2 rounded-full bg-green-500 mt-2 mr-2 flex-shrink-0"></span>
                              <span>Essential functionality only for rapid testing</span>
                            </li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>

                  {/* Links - Right aligned */}
                  <div className="flex justify-end space-x-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <a 
                      href={project.demoLink}
                      className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 text-white font-medium rounded-lg"
                    >
                      Live Demo
                    </a>
                    <a 
                      href={project.githubLink}
                      className="px-5 py-2 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white font-medium rounded-lg flex items-center"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}