import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import ExperienceTimeline from './components/ExperienceTimeline'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <section id="hero" aria-label="Hero section">
          <Hero />
        </section>
        <section id="about" aria-label="About section">
          <About />
        </section>
        <section id="experience" aria-label="Experience section">
          <Experience />
        </section>
        <section id="experience-timeline" aria-label="Interactive Experience Timeline">
          <ExperienceTimeline />
        </section>
        <section id="projects" aria-label="Projects section">
          <Projects />
        </section>
        <section id="skills" aria-label="Skills section">
          <Skills />
        </section>
        <section id="contact" aria-label="Contact section">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}