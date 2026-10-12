import React from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Ethio-Shopping",
      type: "E-Commerce Web Application",
      description: "A full-stack e-commerce web application with product browsing, category filtering, wishlist, and a live search system. Built with a clean and responsive UI for a smooth shopping experience.",
      demoLink: "https://ethio-shop-nu.vercel.app/",
      githubLink: "https://github.com/yeob9912",
      image: "/ethio-shop.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      accent: "#8b5cf6"
    },
    {
      title: "Pharmacy Locator",
      type: "Full Stack Web Application",
      description: "A real-time platform that helps users find medicines and compare pricing across certified pharmacies nearby. Features medicine search, pharmacy listings, and favorites management.",
      demoLink: "https://clinic-hub-system-9jzx-psi.vercel.app",
      githubLink: "https://github.com/yeob9912",
      image: "/Screenshot 2026-07-29 095613.png",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express"],
      accent: "#00c9a7"
    },
    {
      title: "Student Complaint System",
      type: "Admin Dashboard & Web App",
      description: "ASTU Smart — A university campus complaint management system with admin dashboard, analytics, ticket tracking, and real-time resolution rate monitoring across departments.",
      demoLink: "https://astu-steam-final-project.vercel.app",
      githubLink: "https://github.com/yeob9912",
      image: "/adminpage.png",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      accent: "#4f8ef7"
    },
    {
      title: "ASTU Helper Chatbot",
      type: "AI Chatbot Application",
      description: "An AI-powered chatbot assistant for ASTU students that provides instant answers about campus life, academics, and university resources using natural language processing.",
      demoLink: "https://chatbot-mauve-pi-87.vercel.app",
      githubLink: "https://github.com/yeob9912",
      image: "/Screenshot 2026-07-29 094721.png",
      technologies: ["Next.js", "Express", "AI/NLP", "REST API"],
      accent: "#a855f7"
    },
    {
      title: "Simple Calculator",
      type: "Web Application",
      description: "A responsive calculator that performs basic arithmetic operations including addition, subtraction, multiplication, and division. Features a clean interface with error handling.",
      demoLink: "https://simple-calculator-livid-mu.vercel.app/",
      githubLink: "https://github.com/yeob9912/simple_calculator",
      image: "/image.png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      accent: "#f59e0b"
    },
    {
      title: "Temperature Converter",
      type: "Utility Tool",
      description: "A tool for converting temperatures between Celsius and Fahrenheit. Provides instant conversion with a user-friendly interface and clear visual feedback.",
      demoLink: "https://temperature-conversion-wdp7.vercel.app/",
      githubLink: "https://github.com/yeob9912/Temperature-conversion",
      image: "/Screenshot 2026-02-04 214327(1).png",
      technologies: ["HTML5", "CSS3", "JavaScript", "Real-Time"],
      accent: "#ec4899"
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-12 bg-black text-white border-b"
      style={{ borderColor: '#121212' }}
    >
      <div className="container mx-auto max-w-6xl">

        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-widest text-white uppercase inline-block">
            PRO<span style={{ color: '#ff3131' }}>JECTS</span>
          </h2>
          <div className="p5-skew-line w-20 mt-2"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group flex flex-col relative overflow-hidden transition-all duration-500"
              style={{
                background: 'linear-gradient(145deg, var(--card-bg-start) 0%, var(--card-bg-end) 100%)',
                borderRadius: '16px',
                border: '1px solid var(--card-border)',
                boxShadow: 'var(--card-shadow)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = `1px solid ${project.accent}55`
                e.currentTarget.style.boxShadow = `0 8px 40px ${project.accent}22, 0 0 0 1px ${project.accent}33`
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1px solid var(--card-border)'
                e.currentTarget.style.boxShadow = 'var(--card-shadow)'
                e.currentTarget.style.transform = 'translateY(0px)'
              }}
            >
              {/* Colored top accent bar */}
              <div
                className="w-full h-1 rounded-t-2xl"
                style={{ background: `linear-gradient(90deg, ${project.accent}, #ff3131)` }}
              />

              {/* Screenshot Image */}
              <div className="relative overflow-hidden" style={{ height: '190px' }}>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark gradient fade at bottom of image */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 40%, #1a1a1a 100%)'
                  }}
                />
                {/* GitHub icon overlay */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
                  style={{
                    background: 'rgba(0,0,0,0.65)',
                    borderRadius: '8px',
                    backdropFilter: 'blur(6px)'
                  }}
                  aria-label="View on GitHub"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>

                {/* Project number badge */}
                <div
                  className="absolute top-3 left-3 w-7 h-7 flex items-center justify-center text-white text-[10px] font-black"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}, #ff3131)`,
                    borderRadius: '6px'
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-grow p-5">
                {/* Type badge */}
                <div
                  className="text-[9px] font-black tracking-widest uppercase mb-2 inline-flex items-center gap-1"
                  style={{ color: project.accent }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ background: project.accent }}
                  />
                  {project.type}
                </div>

                {/* Title */}
                <h3
                  className="text-base font-bold tracking-wide text-white mb-2 transition-colors duration-300 group-hover:text-[var(--accent)]"
                  style={{ '--accent': project.accent }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-xs leading-relaxed flex-grow mb-4">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider"
                      style={{
                        color: project.accent,
                        background: `${project.accent}15`,
                        border: `1px solid ${project.accent}33`,
                        borderRadius: '5px'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Launch Button */}
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-white text-xs tracking-widest font-black uppercase transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${project.accent}cc, #ff3131cc)`,
                    borderRadius: '10px',
                    boxShadow: `0 4px 15px ${project.accent}33`
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = `0 6px 25px ${project.accent}55`
                    e.currentTarget.style.transform = 'scale(1.02)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = `0 4px 15px ${project.accent}33`
                    e.currentTarget.style.transform = 'scale(1)'
                  }}
                >
                  LAUNCH PROJECT
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}