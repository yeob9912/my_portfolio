import React, { useState } from "react";

const SectionIcons = {
  home: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  skills: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  projects: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
  contact: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
};

// Navigation sections in order
const sections = ["home","skills", "projects", "contact"];

export default function Navbar({ darkMode, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-6 py-4 shadow-md"
      style={{
        backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
        backdropFilter: 'none', // Remove any backdrop blur
      }}
    >
      {/* Mobile: Left - Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden text-2xl p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        aria-label="Toggle menu"
        style={{
          backgroundColor: darkMode ? '#2a2a2a' : '#f8f9fa'
        }}
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>

      {/* Desktop: Left - Logo */}
      <h1 className="hidden md:block font-bold text-xl cursor-pointer transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] hover:text-blue-400 text-glow">
        MyPortfolio
      </h1>

      {/* Desktop: Center - Navigation Links with Icons */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6 font-medium absolute left-1/2 transform -translate-x-1/2">
        {sections.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
            style={{
              backgroundColor: darkMode ? '#2a2a2a' : '#f8f9fa'
            }}
          >
            {SectionIcons[id]}
            <span>{id.charAt(0).toUpperCase() + id.slice(1)}</span>
          </a>
        ))}
      </div>

      {/* Right - Theme Toggle (Always visible) */}
      {/* <button
        onClick={toggleTheme}
        className="text-2xl p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        style={{
          backgroundColor: darkMode ? '#2a2a2a' : '#f8f9fa'
        }}
      >
        {darkMode ? "🌙" : "☀️"}
      </button> */}

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden mt-16">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-30"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Container */}
          <div 
            className={`absolute top-0 left-0 h-full w-64 max-w-[80%] shadow-xl`}
            style={{
              backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
              color: darkMode ? '#f0f0f0' : '#213547',
              borderRight: `1px solid ${darkMode ? '#333' : '#e0e0e0'}`
            }}
          >
            {/* Menu Header with Logo */}
            <div style={{ borderBottom: `1px solid ${darkMode ? '#333' : '#e0e0e0'}` }}>
              <div className="p-4">
                <h2 className="font-bold text-lg flex items-center gap-2">
                  <span className="text-blue-500">📱</span>
                  Menu
                </h2>
              </div>
            </div>
            
            {/* Menu Items with Icons */}
            <div className="overflow-y-auto h-full py-4">
              {sections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`flex items-center gap-3 px-6 py-4 transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    color: darkMode ? '#f0f0f0' : '#213547',
                    backgroundColor: darkMode ? '#1a1a1a' : '#ffffff',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = darkMode ? '#2a2a2a' : '#f8f9fa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = darkMode ? '#1a1a1a' : '#ffffff';
                  }}
                >
                  <span className="text-blue-500">
                    {SectionIcons[id]}
                  </span>
                  <span className="font-medium">
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Menu Footer */}
            <div style={{ borderTop: `1px solid ${darkMode ? '#333' : '#e0e0e0'}` }}>
              <div className="p-4">
                <div className="text-sm opacity-70 text-center">
                  Click outside to close
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}