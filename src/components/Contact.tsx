'use client'

import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contact() {
  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'jonathandeng@ufl.edu',
      href: 'mailto:jonathandeng@ufl.edu',
      description: 'Best way to reach me',
      color: 'accent-coral'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/jonathandeng',
      href: 'https://www.linkedin.com/in/jonathandeng/',
      description: 'Let\'s connect',
      color: 'accent-blue'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '@jonathandeng7',
      href: 'https://github.com/jonathandeng7',
      description: 'See my code',
      color: 'accent-sage'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '561-221-4919',
      href: 'tel:561-221-4919',
      description: 'For quick chats',
      color: 'accent-ochre'
    }
  ]

  return (
    <section id="contact" className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-accent-coral/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-accent-sage/10 rounded-full blur-2xl" />
      
      {/* Hand-drawn arrow */}
      <svg className="absolute bottom-40 right-32 w-16 h-16 text-accent-coral/20 hidden lg:block rotate-45" viewBox="0 0 50 50">
        <motion.path
          d="M10 40 L40 10 M40 10 L40 25 M40 10 L25 10"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
      </svg>
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-4xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-coral font-medium text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl sm:text-5xl leading-tight mt-2 text-foreground">
            <span className="font-serif italic">Let's</span>{' '}
            <span className="font-bold">talk</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-lg mx-auto">
            Whether it's a job opportunity, a collaboration, or just to say hi,
            I'd love to hear from you.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {contactLinks.map((contact, index) => (
            <motion.a 
              key={contact.label}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-background clean-border rounded-2xl p-5 group cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition-transform duration-300"
                  style={{ backgroundColor: `var(--${contact.color})`, opacity: 0.15 }}
                >
                  <contact.icon 
                    className="w-5 h-5" 
                    style={{ color: `var(--${contact.color})` }} 
                  />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{contact.description}</p>
                  <p className="text-foreground font-semibold group-hover:text-accent-coral transition-colors">
                    {contact.value}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Location + CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground bg-background clean-border rounded-full px-5 py-3">
            <MapPin className="w-4 h-4" />
            <span>Based in <strong className="text-foreground">Boca Raton, FL</strong> · Open to remote</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}