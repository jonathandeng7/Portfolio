import * as React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  FloatingIconsHero,
  type FloatingIconsHeroProps,
} from '@/components/ui/floating-icons-hero-section';

// Tech stack icons using lucide-react
import {
  Code,
  Brain,
  Smartphone,
  Database,
  GitBranch,
  Terminal,
  Globe,
  Layers,
  Cpu,
  Zap,
  Rocket,
  Target,
  Heart,
  Eye,
  TrendingUp,
  Award
} from 'lucide-react';

// Define the floating icons for the hero
const heroIcons: FloatingIconsHeroProps['icons'] = [
  { id: 1, icon: Code, className: 'top-[10%] left-[10%]' },
  { id: 2, icon: Brain, className: 'top-[20%] right-[8%]' },
  { id: 3, icon: Smartphone, className: 'top-[80%] left-[10%]' },
  { id: 4, icon: Database, className: 'bottom-[10%] right-[10%]' },
  { id: 5, icon: GitBranch, className: 'top-[5%] left-[30%]' },
  { id: 6, icon: Terminal, className: 'top-[5%] right-[30%]' },
  { id: 7, icon: Globe, className: 'bottom-[8%] left-[25%]' },
  { id: 8, icon: Layers, className: 'top-[40%] left-[15%]' },
  { id: 9, icon: Cpu, className: 'top-[75%] right-[25%]' },
  { id: 10, icon: Zap, className: 'top-[90%] left-[70%]' },
  { id: 11, icon: Rocket, className: 'top-[50%] right-[5%]' },
  { id: 12, icon: Target, className: 'top-[55%] left-[5%]' },
  { id: 13, icon: Heart, className: 'top-[5%] left-[55%]' },
  { id: 14, icon: Eye, className: 'bottom-[5%] right-[45%]' },
  { id: 15, icon: TrendingUp, className: 'top-[25%] right-[20%]' },
  { id: 16, icon: Award, className: 'top-[60%] left-[30%]' },
];

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

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/jonathandeng7',
      label: 'GitHub' 
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/jonathandeng/',
      label: 'LinkedIn' 
    },
    { 
      icon: Mail, 
      href: 'mailto:jonathandeng@ufl.edu',
      label: 'Email' 
    },
  ]

  return (
    <div className="relative w-full overflow-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-md border-b border-border/50 shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-xl lg:text-2xl font-bold text-foreground"
            >
              JD
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="text-foreground/80 hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wider"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden lg:flex items-center space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.href}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border/50"
          >
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium text-foreground hover:text-accent-coral transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="flex space-x-6 pt-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Floating Icons Hero Section */}
      <FloatingIconsHero
        title="Jonathan Deng"
        subtitle="Full-Stack Developer passionate about creating accessible, innovative solutions that make a real impact. From AI to mobile apps, I build technology that matters."
        ctaText="Explore My Work"
        ctaHref="#about"
        icons={heroIcons}
        className="relative"
      />

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-muted-foreground"
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </div>
    </div>
  )
}