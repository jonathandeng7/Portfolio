'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="relative py-16 bg-foreground text-background">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Name */}
          <div className="mb-6">
            <span className="font-serif text-3xl italic text-background">Jonathan Deng</span>
          </div>
          
          {/* Tagline */}
          <p className="text-background/60 mb-8 max-w-md">
            Building things that help people, one project at a time.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-6 mb-10">
            <a
              href="mailto:jonathandeng@ufl.edu"
              className="text-background/60 hover:text-background gentle-animation hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jonathandeng/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background gentle-animation hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/jonathandeng7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/60 hover:text-background gentle-animation hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
          
          {/* Divider */}
          <div className="w-16 h-px bg-background/20 mb-8" />
          
          {/* Copyright */}
          <div className="flex items-center gap-1.5 text-background/50 text-sm">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-accent-coral fill-accent-coral" />
            <span>in Florida © {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}