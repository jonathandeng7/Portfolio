'use client'

import { motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export function Hero() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* Organic blob shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-accent-coral/8 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/3 -left-48 w-80 h-80 bg-accent-sage/10 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.08, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent-ochre/8 rounded-full blur-3xl"
        />
      </div>
      
      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed top-0 left-0 right-0 w-full z-[110]"
      >
        <div 
          className={`w-full px-6 sm:px-8 lg:px-12 py-4 transition-all duration-300 ease-out ${
            isScrolled 
              ? 'bg-background/95 backdrop-blur-xl border-b border-border' 
              : 'bg-transparent'
          }`}
        >
          <div className="flex items-center justify-between max-w-6xl mx-auto">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="flex items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="font-serif text-2xl italic text-foreground">jd</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  className="text-muted-foreground hover:text-foreground font-medium gentle-animation relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-coral group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* Social Links + Mobile Menu */}
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/jonathandeng7" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:block text-muted-foreground hover:text-accent-coral gentle-animation hover:rotate-6"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/jonathandeng/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hidden sm:block text-muted-foreground hover:text-accent-blue gentle-animation hover:-rotate-6"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg gentle-animation"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden fixed inset-0 bg-background/80 backdrop-blur-sm z-[100]"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden fixed top-0 right-0 h-full w-72 bg-background border-l border-border z-[105] p-6 pt-20"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-accent-coral font-medium text-lg py-2 gentle-animation"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center space-x-4 pt-4 border-t border-border">
                <a 
                  href="https://github.com/jonathandeng7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/jonathandeng/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-accent-coral/10 text-accent-coral rounded-full text-sm font-medium">
              👋 Hey there, I'm
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl leading-tight mb-8 text-foreground"
          >
            <span className="font-serif italic">Jonathan</span>{' '}
            <span className="font-bold">Deng</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          >
            I'm a CS student at UF who loves building things that{' '}
            <span className="text-foreground font-medium">actually help people</span>.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-lg text-muted-foreground max-w-xl mx-auto mb-10"
          >
            From hackathon projects that won awards to apps that make fitness social.
            I like turning ideas into real, working software.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a
              href="#projects"
              className="group bg-foreground text-background font-semibold px-8 py-3.5 rounded-full hover:bg-foreground/90 gentle-animation flex items-center gap-2"
            >
              See My Work
              <motion.span 
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#contact"
              className="border-2 border-border text-foreground font-semibold px-8 py-3.5 rounded-full hover:border-accent-coral hover:text-accent-coral gentle-animation"
            >
              Let's Chat
            </a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground gentle-animation cursor-pointer"
        >
          <span className="text-sm font-medium">Scroll down</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.a>
      </div>
      
      {/* Hand-drawn squiggle decoration */}
      <svg className="absolute bottom-32 left-10 w-24 h-12 text-accent-coral/30 hidden lg:block" viewBox="0 0 100 40">
        <motion.path
          d="M5 20 Q 15 5, 25 20 T 45 20 T 65 20 T 85 20 T 95 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
        />
      </svg>
    </div>
  )
}