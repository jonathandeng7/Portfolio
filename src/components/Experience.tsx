'use client'

import { Briefcase, Calendar, MapPin, Code, Users, Wrench, DollarSign } from 'lucide-react'
import { motion } from 'framer-motion'

export function Experience() {
  const experiences = [
    {
      company: 'Engineers Without Borders UF',
      location: 'Gainesville, FL',
      totalDuration: '2 yrs 3 mos',
      icon: Code,
      color: 'accent-coral',
      roles: [
        {
          title: 'Fundraising Team',
          dates: 'Oct 2023 – Present',
          bullets: [
            'Coordinated on-campus fundraising events, engaging with students and staff to maximize participation.',
            'Led the development and implementation of fundraising strategies, raising over $300 to support international engineering projects.'
          ],
          skills: ['Event Planning']
        },
        {
          title: 'Website Design Team',
          dates: 'Jun 2024 – Jan 2025',
          bullets: [
            'Focused on developing the frontend of the EWB website using React.js, CSS, HTML.',
            'Collaborated with a team to improve site usability and design, aligning with growing organization needs.'
          ],
          skills: ['Version Control Tools', 'React.js', 'CSS', 'HTML']
        }
      ]
    },
    {
      company: 'Breakthrough Miami',
      location: 'Boca Raton, FL',
      icon: Users,
      color: 'accent-sage',
      roles: [
        {
          title: 'Teaching Fellow',
          dates: 'Jun 2025 – Aug 2025',
          bullets: [
            'Taught 6th grade students coding fundamentals using Scratch and LEGO robotics, resulting in a 60% increase in exam scores.',
            'Delivered cross-curricular instruction in mathematics, integrating technology concepts with core subjects.',
            'Managed classroom operations and coordinated events for over 100 students.'
          ],
          skills: ['Teaching', 'Curriculum Development', 'STEM Education']
        }
      ]
    },
    {
      company: 'Palm Beach County School District',
      location: 'West Palm Beach, FL',
      icon: Wrench,
      color: 'accent-ochre',
      roles: [
        {
          title: 'IT Support Intern',
          dates: 'May 2023 – Aug 2023',
          bullets: [
            'Repaired and maintained over 100 laptops for a district serving 190,000 students.',
            'Provided technical support and troubleshooting assistance to staff and faculty.'
          ],
          skills: ['Hardware Repair', 'Technical Support', 'Troubleshooting']
        }
      ]
    }
  ]

  return (
    <section id="experience" className="relative py-24 bg-background overflow-hidden">
      {/* Decorative blob */}
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-accent-coral/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-accent-sage font-medium text-sm uppercase tracking-wider">Experience</span>
          <h2 className="text-4xl sm:text-5xl leading-tight mt-2 text-foreground">
            <span className="font-serif italic">Work</span>{' '}
            <span className="font-bold">Experience</span>
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card clean-border rounded-3xl p-6 lg:p-8 relative overflow-hidden"
            >
              {/* Colored accent bar */}
              <div 
                className="absolute top-0 left-0 w-2 h-full rounded-l-3xl"
                style={{ backgroundColor: `var(--${exp.color})` }}
              />
              
              <div className="pl-4">
                {/* Company Header */}
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `var(--${exp.color})`, opacity: 0.15 }}
                  >
                    <exp.icon className="w-7 h-7" style={{ color: `var(--${exp.color})` }} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                    <div className="flex flex-wrap gap-3 mt-1 text-sm text-muted-foreground">
                      {exp.totalDuration && (
                        <span>{exp.totalDuration}</span>
                      )}
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Roles */}
                <div className="space-y-6 border-l-2 border-muted ml-7 pl-6">
                  {exp.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="relative">
                      {/* Timeline dot */}
                      <div 
                        className="absolute -left-[31px] top-1 w-3 h-3 rounded-full border-2 bg-background"
                        style={{ borderColor: `var(--${exp.color})` }}
                      />
                      
                      <h4 className="text-lg font-semibold text-foreground">{role.title}</h4>
                      <p className="text-sm text-muted-foreground mb-3 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {role.dates}
                      </p>
                      
                      {/* Bullets */}
                      <ul className="space-y-2 mb-3">
                        {role.bullets.map((bullet, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
                            <span 
                              className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                              style={{ backgroundColor: `var(--${exp.color})` }}
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                      
                      {/* Skills */}
                      {role.skills && (
                        <div className="flex flex-wrap gap-2">
                          {role.skills.map((skill) => (
                            <span 
                              key={skill}
                              className="bg-muted text-muted-foreground px-2 py-0.5 rounded text-xs font-medium"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
