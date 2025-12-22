'use client'

import { Award, Heart, Eye, TrendingUp, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

export function Projects() {
  const projects = [
    {
      title: 'VitaGuide',
      event: 'SHPE Code For Change Hackathon',
      badge: '🏆 Health Award Winner',
      tech: ['React', 'Next.js', 'Scikit-learn', 'Python'],
      bullets: [
        'Developed a web application to help users identify potential vitamin deficiencies through an interactive questionnaire.',
        'Implemented a K-Nearest Neighbors (KNN) machine learning model to analyze user responses and provide personalized recommendations.',
        'Collaborated with a team to design an intuitive user interface focused on accessibility and ease of use.'
      ],
      icon: Heart,
      color: 'accent-coral'
    },
    {
      title: 'Sentiment Analysis Pipeline',
      event: 'Personal Project',
      tech: ['Python', 'Twitter API', 'News API', 'TextBlob', 'Machine Learning'],
      bullets: [
        'Developed two NLP-driven data pipelines to analyze sentiment trends across news articles and financial tweets.',
        'Integrated the News API to scrape and analyze public media sentiment using TextBlob polarity scoring, identifying tone patterns across major publications.',
        'Leveraged the Twitter API to collect and preprocess stock-related tweets, performing sentiment classification to correlate public opinion with market movements.',
        'Generated structured datasets and visualizations for data-driven insight extraction, supporting exploratory analysis of financial and media sentiment trends.'
      ],
      icon: BarChart3,
      color: 'accent-sage'
    },
    {
      title: 'Algorithmic Trading Bot',
      event: 'Personal Project',
      tech: ['Python', 'yfinance', 'Pandas', 'NumPy', 'Backtrader'],
      bullets: [
        'Built a momentum-based algorithmic trading bot using Backtrader to backtest technical strategies on over 4 years of historical market data.',
        'Fetched and preprocessed stock data with yfinance, using pandas and numpy to calculate technical indicators like RSI, momentum, SMA, ATR, and MACD.',
        'Engineered custom entry/exit signals with dynamic stop loss and take profit thresholds, simulating realistic portfolio rebalancing and risk management.',
        'Evaluated performance through Sharpe ratio, hit rate, and drawdown analysis to fine-tune strategy parameters and maximize returns.'
      ],
      icon: TrendingUp,
      color: 'accent-ochre'
    },
    {
      title: 'BeFit',
      event: 'Personal Project',
      tech: ['React Native', 'Expo', 'MongoDB'],
      bullets: [
        'Developed a BeReal-style fitness application enabling users to share real-time workout photos with friends.',
        'Implemented full authentication flow and camera integration using React Native and Expo.',
        'Designed and built a MongoDB backend to handle user data and social interactions.'
      ],
      icon: Award,
      color: 'accent-blue'
    },
    {
      title: 'Art Beyond Sight',
      event: 'GatorDays Hackathon',
      badge: '♿ Accessibility Focus',
      tech: ['React Native', 'Mistral LLM', 'Suno AI', 'ResNet'],
      bullets: [
        'Created an accessibility-focused application that transforms images into audio experiences for visually impaired users.',
        'Integrated Mistral LLM and ResNet for image analysis and description generation.',
        'Utilized Suno AI to convert visual descriptions into immersive soundscapes.',
        'Conducted user testing with visually impaired individuals during the hackathon to gather feedback and iterate on the design.'
      ],
      icon: Eye,
      color: 'accent-emerald'
    }
  ]

  return (
    <section id="projects" className="relative py-24 bg-muted/30 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-accent-ochre/10 rounded-full blur-2xl" />
      <div className="absolute bottom-32 right-10 w-32 h-32 bg-accent-sage/10 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-5xl">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: 'var(--accent-ochre)', opacity: 0.9 }}
            >
              <Award className="w-6 h-6 text-white" />
            </div>
            <span className="text-accent-ochre font-medium text-sm uppercase tracking-wider">Projects</span>
          </div>
          <h2 className="text-4xl sm:text-5xl leading-tight mt-2 text-foreground">
            <span className="font-serif italic">Featured</span>{' '}
            <span className="font-bold">Projects</span>
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-background clean-border rounded-3xl overflow-hidden"
            >
              <div className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `var(--${project.color})`, opacity: 0.9 }}
                  >
                    <project.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      {project.badge && (
                        <span 
                          className="px-3 py-1 rounded-full text-sm font-medium text-white"
                          style={{ backgroundColor: `var(--${project.color})` }}
                        >
                          {project.badge}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4">{project.event}</p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((t) => (
                        <span 
                          key={t}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-lg text-xs font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    {/* Bullets */}
                    <ul className="space-y-2">
                      {project.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3 text-muted-foreground leading-relaxed text-sm">
                          <span 
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: `var(--${project.color})` }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
