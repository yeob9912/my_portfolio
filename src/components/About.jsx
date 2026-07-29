import React from 'react'

export default function About() {
  const aboutInfo = {
    name: "Yehwala Obssi",
    subtitle: "Developer and CSE Student at ASTU",
    description: "Full-stack developer focused on building secure, efficient, and user-centric web applications. Passionate about clean code architecture, database optimization, and using modern software engineering to build tools that matter.",
    columns: [
      {
        title: "FOCUS",
        content: "Modern Web Architectures & Interactive Client Interfaces"
      },
      {
        title: "EXPERTISE",
        content: "Fullstack JavaScript, React Framework, Node.js, express and SQL Databases , mongo db"
      },
      {
        title: "MISSION",
        content: "Delivering reliable, performant, and accessible software solutions"
      }
    ]
  }

  return (
    <section 
      id="about" 
      className="py-20 px-6 sm:px-12 bg-black text-white border-b"
      style={{ borderColor: '#121212' }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Title (Persona 5 split font style: first 2 letters white, remaining red) */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-widest text-white uppercase inline-block">
            AB<span style={{ color: '#ff3131' }}>OUT</span>
          </h2>
          <div className="p5-skew-line w-20 mt-2"></div>
        </div>

        {/* About Container (Image 2 style: deep dark box with thin border and accent details) */}
        <div 
          className="p-8 sm:p-12 relative overflow-hidden border"
          style={{
            background: 'linear-gradient(145deg, var(--card-bg-start) 0%, var(--card-bg-end) 100%)',
            borderColor: 'var(--card-border)',
            borderRadius: '16px',
            boxShadow: 'var(--card-shadow)'
          }}
        >
          {/* Layered red triangle cutout on the bottom right */}
          <div className="p5-accent-cut-right"></div>

          <div className="space-y-6 relative z-10 max-w-4xl">
            {/* Header info */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-wide" style={{ color: '#ff3131' }}>
                {aboutInfo.name}
              </h3>
              <p className="text-sm font-bold text-gray-500 dark:text-zinc-500 mt-1 uppercase tracking-wider">
                {aboutInfo.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base leading-relaxed">
              {aboutInfo.description}
            </p>

            {/* Columns grid (Image 2 style) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-zinc-800/80">
              {aboutInfo.columns.map((col, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="text-xs font-black tracking-widest uppercase" style={{ color: '#ff3131' }}>
                    {col.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {col.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
