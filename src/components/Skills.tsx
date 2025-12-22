'use client'

import { Code, Layers, Wrench, GitBranch } from 'lucide-react'
import { motion } from 'framer-motion'

export function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'C++', 'JavaScript', 'Swift', 'TypeScript', 'HTML/CSS'],
      color: 'accent-coral'
    },
    {
      title: 'Frameworks',
      icon: Layers,
      skills: ['React Native', 'UIKit', 'Expo', 'pandas', 'numpy'],
      color: 'accent-sage'
    },
    {
      title: 'Tools',
      icon: Wrench,
      skills: ['VS Code', 'GitHub', 'Xcode', 'MongoDB', 'REST APIs', 'TensorFlow'],
      color: 'accent-ochre'
    },
    {
      title: 'How I Work',
      icon: GitBranch,
      skills: ['Agile', 'Scrum', 'Git Flow'],
      color: 'accent-blue'
    }
  ]

  return (
    <section id="skills" className="relative py-24 bg-background overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute bottom-20 -left-20 w-48 h-48 bg-accent-coral/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent-blue font-medium text-sm uppercase tracking-wider">Skills</span>
          <h2 className="text-4xl sm:text-5xl leading-tight mt-2 text-foreground">
            <span className="font-serif italic">What I</span>{' '}
            <span className="font-bold">know</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Always learning, always adding to this list.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-card clean-border rounded-3xl p-6 lg:p-8 hover:shadow-md transition-shadow duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-2">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `var(--${category.color})`, opacity: 0.9 }}
                >
                  <category.icon 
                    className="w-6 h-6 text-white" 
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
                </div>
              </div>
              
              {/* Skills */}
              <div className="flex flex-wrap gap-2 mt-5">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + skillIndex * 0.03 }}
                    whileHover={{ 
                      scale: 1.08, 
                      rotate: Math.random() > 0.5 ? 3 : -3,
                      transition: { duration: 0.2 }
                    }}
                    className="bg-background text-foreground px-4 py-2 rounded-xl text-sm font-medium clean-border cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}