import React, { useState, useRef } from 'react'
import Footer from './Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [errors, setErrors] = useState({})
  
  const nameInputRef = useRef(null)

  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }))
    }
  }

  const focusForm = () => {
    if (nameInputRef.current) {
      nameInputRef.current.focus()
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    setSubmitMessage('')
    setErrors({})

    try {
      // Using Formspree with your email
      const response = await fetch('https://formspree.io/f/xaqrvrkr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Contact: ${formData.name}`,
          _to: 'obssiyehwala@gmail.com'
        }),
      })

      if (response.ok) {
        setSubmitMessage('✅ Message sent successfully! Yehwala will get back to you soon.')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitMessage('❌ Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      setSubmitMessage('❌ An error occurred. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section 
      id="contact" 
      className="pt-20 pb-4 px-6 sm:px-12 bg-black text-white border-b min-h-screen flex flex-col justify-between"
      style={{ borderColor: '#121212' }}
    >
      <div className="container mx-auto max-w-6xl flex-grow mb-12">
        
        {/* Section Title (Persona 5 split font style) */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-widest text-white uppercase inline-block">
            CON<span style={{ color: '#ff3131' }}>TACT</span>
          </h2>
          <div className="p5-skew-line w-20 mt-2"></div>
        </div>

        {/* Contact Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column - Contact info & Action Buttons inside a dark boxed card */}
          <div 
            className="lg:col-span-5 p-8 sm:p-10 border relative overflow-hidden flex flex-col justify-between min-h-[380px] transition-all duration-300"
            style={{
              background: 'linear-gradient(145deg, var(--card-bg-start) 0%, var(--card-bg-end) 100%)',
              borderColor: 'var(--card-border)',
              borderRadius: '16px',
              boxShadow: 'var(--card-shadow)'
            }}
          >
            {/* Layered red triangle cutout on the bottom left (matches P5 style) */}
            <div className="p5-accent-cut-left"></div>

            <div className="space-y-6 relative z-10">
              <h3 className="text-3xl font-black tracking-tight leading-tight">
                Let's Build <br />
                Something <span style={{ color: '#ff3131' }}>Amazing</span>
              </h3>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                Interested in collaborating on new projects, discussing full-stack systems, 
                or just want to connect? <span style={{ color: '#ff3131' }} className="font-bold">I'd love to hear from you.</span>
              </p>
            </div>

            {/* Persona 5 button layout block - Attractive Neon Glowing buttons */}
            <div className="flex flex-col gap-3 pt-6 relative z-10">
              <button 
                onClick={focusForm}
                className="px-6 py-3 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 text-center cursor-pointer"
                style={{ 
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ff3131, #8b0000)',
                  boxShadow: '0 4px 15px rgba(255,49,49,0.4)'
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 6px 25px rgba(255,49,49,0.65)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 15px rgba(255,49,49,0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                Send Email Form
              </button>
              
              <a 
                href="https://www.linkedin.com/in/yehwala-obssi-69989136a"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-[var(--text)] font-bold text-sm tracking-widest uppercase transition-all duration-300 text-center border"
                style={{ 
                  borderRadius: '12px',
                  borderColor: 'rgba(255,49,49,0.5)',
                  background: 'rgba(255,49,49,0.06)',
                  boxShadow: '0 2px 10px rgba(255,49,49,0.15)'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,49,49,0.18)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,49,49,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,49,49,0.06)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(255,49,49,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                LinkedIn
              </a>

              <a 
                href="https://github.com/yeob9912"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-[var(--text)] font-bold text-sm tracking-widest uppercase transition-all duration-300 text-center border"
                style={{ 
                  borderRadius: '12px',
                  borderColor: 'rgba(255,49,49,0.5)',
                  background: 'rgba(255,49,49,0.06)',
                  boxShadow: '0 2px 10px rgba(255,49,49,0.15)'
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,49,49,0.18)'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,49,49,0.4)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,49,49,0.06)'; e.currentTarget.style.boxShadow = '0 2px 10px rgba(255,49,49,0.15)'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right Column - Interactive Form with P5 aesthetics */}
          <div className="lg:col-span-7 flex">
            <div 
              className="p-8 sm:p-10 border w-full flex flex-col justify-between transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, var(--card-bg-start) 0%, var(--card-bg-end) 100%)',
                borderColor: 'var(--card-border)',
                borderRadius: '16px',
                boxShadow: 'var(--card-shadow)'
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6 w-full relative z-10">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-black tracking-widest uppercase text-red-500 mb-2" style={{ color: '#ff3131' }}>
                    Name
                  </label>
                  <input
                    ref={nameInputRef}
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border bg-black text-white outline-none transition-all duration-200 ${
                      errors.name ? 'border-red-500' : 'border-zinc-800 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    }`}
                    style={{ borderRadius: '10px' }}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-black tracking-widest uppercase text-red-500 mb-2" style={{ color: '#ff3131' }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border bg-black text-white outline-none transition-all duration-200 ${
                      errors.email ? 'border-red-500' : 'border-zinc-800 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    }`}
                    style={{ borderRadius: '10px' }}
                    placeholder="name@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-black tracking-widest uppercase text-red-500 mb-2" style={{ color: '#ff3131' }}>
                    Message Content
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border bg-black text-white outline-none resize-none transition-all duration-200 ${
                      errors.message ? 'border-red-500' : 'border-zinc-800 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                    }`}
                    style={{ borderRadius: '10px' }}
                    placeholder="Write your message details..."
                  />
                  {errors.message && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.message}</p>
                  )}
                </div>

                {/* Status Indicator */}
                {submitMessage && (
                  <div className={`p-4 border text-xs font-bold uppercase tracking-wider ${submitMessage.includes('✅') ? 'bg-green-500/10 border-green-500/30 text-green-400' : 'bg-red-500/10 border-red-500/30 text-red-400'}`} style={{ borderRadius: '10px' }}>
                    {submitMessage}
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center py-3.5 text-white font-black text-xs tracking-widest uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  style={{ 
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #ff3131, #8b0000)',
                    boxShadow: '0 4px 18px rgba(255,49,49,0.45)'
                  }}
                  onMouseEnter={e => { if(!e.currentTarget.disabled){ e.currentTarget.style.boxShadow = '0 6px 28px rgba(255,49,49,0.7)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}}
                  onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 4px 18px rgba(255,49,49,0.45)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {isSubmitting ? 'SENDING TRANSMISSION...' : 'SEND MESSAGE'}
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </section>
  )
}