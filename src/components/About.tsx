'use client'

import { GraduationCap, MapPin, Award, BookOpen, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export function About() {
  const coursework = [
    'Data Structures & Algorithms',
    'Algorithm Design',
    'Databases',
    'Software Engineering',
    'Operating Systems',
    'iOS Development'
  ]

  return (
    <section id="about" className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent-sage/10 rounded-full blur-2xl" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-accent-ochre/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent-coral font-medium text-sm uppercase tracking-wider">A bit about me</span>
          <h2 className="text-4xl sm:text-5xl leading-tight mt-2 text-foreground">
            <span className="font-serif italic">Where I'm</span>{' '}
            <span className="font-bold">learning</span>
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-background clean-border rounded-3xl p-8 lg:p-10 mb-10 relative overflow-hidden"
        >
          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-coral/5 rounded-bl-full" />
          
          <div className="flex flex-col lg:flex-row lg:items-start gap-8 relative">
            {/* University Info */}
            <div className="flex-1">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-accent-sage/15 rounded-2xl flex items-center justify-center flex-shrink-0 rotate-3">
                  <GraduationCap className="w-8 h-8 text-accent-sage" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">University of Florida</h3>
                  <p className="text-muted-foreground">Aug 2023 – May 2027</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-muted-foreground" />
                  <span className="text-foreground">B.S. Computer Science</span>
                </div>
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-accent-ochre" />
                  <span className="text-foreground font-semibold">3.90 GPA</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-muted-foreground" />
                  <span className="text-muted-foreground">Gainesville, FL</span>
                </div>
              </div>
              
              <div className="inline-flex items-center gap-2 bg-accent-sage/10 text-accent-sage px-4 py-2.5 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                Dean's List (4 semesters)
              </div>
            </div>
            
            {/* Coursework */}
            <div className="lg:w-72">
              <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                What I've been studying
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course, index) => (
                  <motion.span 
                    key={course}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, rotate: Math.random() > 0.5 ? 2 : -2 }}
                    className="bg-muted text-foreground px-3 py-2 rounded-xl text-sm font-medium cursor-default"
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-background clean-border rounded-3xl p-8 lg:p-10 relative"
        >
          <div className="absolute -top-3 left-8 px-3 py-1 bg-accent-coral text-white text-xs font-medium rounded-full">
            TL;DR
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I got into coding because I wanted to build things that I can see have direct impact. 
            That curiosity led me from tinkering with web apps to building apps in hackathons and teaching kids how to code. 
            These days I'm most excited about accessibility tech and AI-powered tools that make life easier for people. 
            When I'm not coding, I'm probably playing football or spending my time outdoors. 
          </p>
        </motion.div>
      </div>
    </section>
  )
}