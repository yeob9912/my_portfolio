import React from 'react'

export default function Footer() {
  const socialLinks = [
    {
      
      url: "mailto:obssiyehwala@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "hover:bg-red-100 hover:text-red-600 dark:hover:bg-red-900"
    },
    {
      
      url: "https://t.me/yeob99",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.191c.305.683.621 1.996.857 2.933l.39 1.675c1.693 7.267 2.53 8.834 2.901 8.834.305 0 .763-.381.763-.381s3.204-3.066 3.204-5.832c0-2.766-2.167-3.204-2.167-3.204l-9.709-3.819c-3.204-1.224-4.58.381-4.58.381-1.145 1.145 1.145 2.29 1.145 2.29l2.29.763 5.34 3.442 1.527-1.527-6.873-1.914-9.709-2.29s-1.527-.381-1.527 1.527c0 1.908 2.29 2.29 2.29 2.29l6.873 1.914 1.527 4.58c.381 1.145 1.527 2.29 1.527 2.29s.763.381 1.527-1.145c.763-1.527 1.527-3.204 1.527-3.204z"/>
        </svg>
      ),
      color: "hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900"
    },
    {
  
      url: "https://www.linkedin.com/in/yehwala-obssi-69989136a",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900"
    },
    {
      
      url: "https://github.com/yeob9912",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: "hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700"
    }
  ]

  const aboutMe = {
    name: "Yehwala Obssi",
    education: "Computer Science and Engineering",
    university: "Adama Science and Technology University",
    description: "A passionate software developer with expertise in web technologies and problem-solving. Dedicated to creating efficient and user-friendly applications, with a strong focus on clean code, performance, and continuous learning."
  }

  return (
    <footer className="bg-black text-gray-300">
      {/* Top Section - About Me */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {/* About Me */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex justify-center">About Me</h3>
              <div className="space-y-2 ">
                <p className="text-lg font-medium text-white flex justify-center">{aboutMe.name}</p>
                <p className="text-blue-400 flex justify-center">
                  {aboutMe.education} Student 
                </p>
                <p className="text-blue-400 flex justify-center">at {aboutMe.university}</p>
                <p className="text-gray-400 mt-2 ml-5 flex justify-center">
                  {aboutMe.description}
                </p>
              </div>

            </div>
             {/* Navigation Links */}
             <div>
        <p className='flex justify-center text-blue-600 mt-5 underline'>Quick search</p>
            <div className="flex flex-col justify-center  gap-6 mt-8 ml-6">
              
              <div className='flex gap-6 justify-center'>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-400 hover:text-white transition-colors">
                Skills
              </a>
              </div>
               
               <div className='flex gap-6 justify-center'>
                 <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
               </div>
             
            </div>
            
            </div>
             
          </div>
           {/* Contact & Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex justify-center">Connect  Me</h3>
              <div className="space-y-4 flex justify-around">
                <div>
                  <div className="flex flex-wrap gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center p-3 rounded-lg bg-gray-800 border border-gray-700 ${social.color} transition-all duration-300`}
                        title={social.name}
                        aria-label={social.name}
                      >
                        {social.icon}
                        <span className="ml-2 hidden sm:inline">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        </div>

      </div>

      {/* Bottom Section - Copyright */}
      <div className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-center items-center">
            {/* Copyright */}
            <div className='flex justify-center flex-wrap items-center'>
            <div className="mb-4 md:mb-0 text-center md:text-left   ">
              <p className="text-gray-400 flex justify-center">
                © {new Date().getFullYear()} {aboutMe.name}. All rights reserved.
              </p>
             
            </div>
           </div>
          </div>
        </div>
      </div>

     
    </footer>
  )
}