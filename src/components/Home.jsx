import React from 'react'

export default function Home() {
  const socialLinks = [
    { 
      name: 'GitHub', 
      href: 'https://github.com/yeob9912',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/yehwala-obssi-69989136a', 
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    { 
      name: 'Email', 
      href: 'mailto:obssiyehwala@gmail.com',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      )
    },
    { 
      name: 'Telegram', 
      href: 'https://t.me/yeob99',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.225-.536.225-.188 0-.539-.167-.835-.322l.022-.021-2.441-1.544-1.02-.323c-.64-.203-.658-.64.135-.954l9.733-3.76c.535-.196 1.004.128.832.941z"/>
        </svg>
      )
    }
  ];

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center px-6 sm:px-12 py-20 relative overflow-hidden transition-colors duration-300"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--text)'
      }}
    >
      {/* Background overlay details */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(45deg,rgba(255,49,49,0.05)_25%,transparent_25%,transparent_50%,rgba(255,49,49,0.05)_50%,rgba(255,49,49,0.05)_75%,transparent_75%,transparent)] bg-[length:40px_40px]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 md:gap-16">
          
          {/* Left Column - Oval profile image inside a glowing red moon backdrop */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
              {/* Red glowing moon backdrop circle */}
              <div 
                className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-br from-red-500 to-red-800 opacity-80 filter blur-[2px]"
                style={{ 
                  boxShadow: '0 0 50px rgba(255, 49, 49, 0.5)'
                }}
              ></div>
              
              {/* Oval Frame Profile Cutout */}
              <img 
                src="/6037363209787870571.jpg" 
                alt="Yehwala Obssi" 
                className="w-[82%] h-[90%] object-cover oval-frame relative z-25 border-4"
                style={{
                  clipPath: 'ellipse(42% 48% at 50% 50%)',
                  borderColor: '#ff3131',
                  boxShadow: '0 0 20px rgba(255, 49, 49, 0.3)'
                }}
              />
            </div>
          </div>
          
          {/* Right Column - Title, Description, Social circles, and action buttons */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div>
              {/* Main Greeting Header */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-[var(--text)]">
                Hi, I'm <span style={{ color: '#ff3131' }}>Yehwala</span>
              </h1>
              
              {/* Role Title with red accent */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-[var(--text)] mt-2">
                I'm a <span style={{ color: '#ff3131' }}>Web Developer</span>
              </h2>
            </div>
            
            {/* Description Text */}
            <p className="text-[var(--muted-text)] text-base max-w-xl leading-relaxed">
              Building digital solutions that challenge the status quo. Specializing in{' '}
              <span className="text-[var(--text)] font-bold">Privacy</span>,{' '}
              <span className="text-[var(--text)] font-bold">Optimization</span>, and{' '}
              <span className="font-bold" style={{ color: '#ff3131' }}>Innovation</span>.
            </p>
            
            {/* Social Icons - Circular outline buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:scale-105"
                  style={{
                    color: '#ff3131',
                    borderColor: 'var(--card-border)',
                    backgroundColor: 'var(--card-bg-start)',
                    backdropFilter: 'blur(4px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#ff3131';
                    e.currentTarget.style.boxShadow = '0 0 15px rgba(255, 49, 49, 0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 49, 49, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--card-border)';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.backgroundColor = 'var(--card-bg-start)';
                  }}
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            
            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects" 
                className="neon-glow-btn px-8 py-3.5 text-center text-sm uppercase tracking-widest transition-all duration-300"
                style={{ 
                  borderRadius: '12px'
                }}
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="neon-glow-btn-outline px-8 py-3.5 text-center text-sm uppercase tracking-widest transition-all duration-300"
                style={{ 
                  borderRadius: '12px'
                }}
              >
                Get In Touch
              </a>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  )
}
