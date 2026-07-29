import React, { useState } from "react";

export default function Navbar({ darkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT", href: "#contact" }
  ];

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-12 py-5 transition-all duration-300"
      style={{
        backgroundColor: 'var(--nav-bg)',
        borderBottom: '1px solid var(--border-color)',
        backdropFilter: 'blur(12px)'
      }}
    >
      {/* Left - Logo (P5 Red Diamond style) */}
      <a href="#home" className="flex items-center group">
        <svg className="w-5 h-5 mr-2.5 text-red-500 fill-current transform rotate-45 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" style={{ color: '#ff3131' }}>
          <rect x="4" y="4" width="16" height="16" />
        </svg>
        <span className="font-black text-xl tracking-widest text-[var(--text)] group-hover:text-red-500 transition-colors">
          PORTFOLIO
        </span>
      </a>

      {/* Desktop Links (Top Right style from P5 image) */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-sm font-black tracking-widest text-[var(--muted-text)] hover:text-red-500 transition-colors relative py-1 group"
          >
            {link.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300" style={{ backgroundColor: '#ff3131' }}></span>
          </a>
        ))}

        {/* Theme Toggle in Navbar Header */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-xl border text-sm hover:scale-105 transition-all cursor-pointer"
          style={{
            color: 'var(--text)',
            borderColor: 'var(--card-border)',
            backgroundColor: 'var(--card-bg-start)',
            boxShadow: 'var(--card-shadow)'
          }}
          aria-label="Toggle Theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="flex items-center gap-4 md:hidden">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl border text-sm cursor-pointer"
          style={{
            color: 'var(--text)',
            borderColor: 'var(--card-border)',
            backgroundColor: 'var(--card-bg-start)'
          }}
          aria-label="Toggle Theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl focus:outline-none p-1 cursor-pointer"
          style={{ color: '#ff3131' }}
          aria-label="Toggle Navigation Menu"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden mt-[69px]">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Container */}
          <div 
            className="absolute top-0 right-0 h-full w-64 max-w-[80%] p-6 flex flex-col justify-start border-l"
            style={{
              backgroundColor: 'var(--background)',
              borderColor: 'var(--border-color)'
            }}
          >
            <div className="space-y-6 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-lg font-black tracking-widest text-[var(--text)] hover:text-red-500 py-2 border-b border-[var(--border-color)] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}