import './App.css'
import { motion } from 'framer-motion'
import profilePic from '../Profile pic.jpg'
import resumePdf from '../CV.pdf'
import fupremedpic from '../fupremedicare.jpg'
import mentorshippic from '../mentorship.jpg'
import schoolreportpic from '../reportcard mgmt.png'

const fadeInUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

const projects = [
  {
    title: 'FUPREMEDICARE',
    description:
      'A full-scale digital medical portal with secure RBAC for Patients, Doctors, Staff, and Admins. Features real-time appointment booking with double-booking prevention plus a digital pharmacy and dashboard suite.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    github: 'https://github.com/NATHANA31/FupreMedicare-final',
    demo: 'https://fupremedicare.netlify.app/',
    image: fupremedpic,
  },
  {
    title: 'Mentorship App',
    description:
      'A full-stack mentorship platform connecting mentors and mentees, handling authentication, scheduling, and program management with a smooth, responsive UI.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    github: 'https://github.com/NATHANA31/mentorship-project',
    demo: 'https://mentorship-project-1.onrender.com',
    image: mentorshippic,
  },
  {
    title: 'School Report System',
    description:
      'A MERN-based school report platform with teacher authentication, student enrollment, and public result viewing to streamline academic reporting.',
    tech: ['MongoDB', 'Express', 'React', 'Node'],
    github: 'https://github.com/NATHANA31',
    demo: null, // not live yet
    image: schoolreportpic,
  },
]

const skills = {
  frontend: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'JWT/Auth'],
  tools: ['Git & GitHub', 'Docker', 'Postman', 'Figma', 'Vite'],
}

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  )
}

function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="nav-brand">
          <span className="nav-logo-orb" />
          <span className="nav-name">Nate the Enigma</span>
          <span className="nav-tagline">Full Stack MERN Developer</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={fadeInUp}
          custom={0}
        >
          <p className="hero-kicker">
            I build clean, functional MERN apps with AI-boosted workflows.
          </p>
          <h1 className="hero-title">
            Nathan Aguele
            <span className="hero-gradient"> Full Stack MERN Developer.</span>
          </h1>
          <p className="hero-subtitle">
            I am a fresh Computer Science graduate and Full-Stack Developer focused on
            building scalable MERN applications. I solve real-world problems with
            efficient code and AI-assisted development to ship fast, reliable products.
          </p>
          <div className="hero-actions">
            <a
              href={resumePdf}
              className="btn btn-primary"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(245,158,11,0.4), 0 0 20px rgba(245,158,11,0.25), 0 0 45px rgba(245,158,11,0.35)',
              }}
            >
              Download Resume
            </a>
            <a href="#projects" className="btn btn-ghost">
              View Projects
            </a>
          </div>
          <div className="hero-meta">
            <div>
              <span className="hero-metric">3+</span>
              <span className="hero-label">Years building MERN</span>
            </div>
            <div>
              <span className="hero-metric">6+</span>
              <span className="hero-label">Projects shipped</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          custom={0.2}
        >
          <div className="hero-orbit">
            <div
              className="hero-avatar"
              style={{
                backgroundImage: `url(${profilePic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <div className="hero-orbit-ring hero-orbit-ring-1" />
            <div className="hero-orbit-ring hero-orbit-ring-2" />
            <div className="hero-orbit-pill hero-orbit-pill-1">MongoDB</div>
            <div className="hero-orbit-pill hero-orbit-pill-2">Express</div>
            <div className="hero-orbit-pill hero-orbit-pill-3">React</div>
            <div className="hero-orbit-pill hero-orbit-pill-4">Node</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariant}
        >
          <p className="eyebrow">Selected Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="section-description">
            A snapshot of the kind of systems I like to build — fast, resilient, and
            thoughtfully designed.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              className="project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index * 0.1}
              variants={fadeInUp}
            >
              <div
                className="project-image"
                style={
                  project.image
                    ? {
                        backgroundImage: `linear-gradient(140deg, rgba(17,24,39,0.65), rgba(2,6,23,0.9)), url(${project.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : undefined
                }
              />
              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="icon-link" target="_blank" rel="noreferrer">
                    <span className="icon"></span>
                    <span>GitHub</span>
                  </a>
                  {project.demo ? (
                    <a href={project.demo} className="icon-link" target="_blank" rel="noreferrer">
                      <span className="icon">↗</span>
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span className="icon-link disabled">
                      <span className="icon">⏳</span>
                      <span>Live Demo (fixing bugs)</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariant}
        >
          <p className="eyebrow">What I work with</p>
          <h2 className="section-title">Skills</h2>
        </motion.div>

        <div className="skills-grid">
          <SkillCard title="Frontend" items={skills.frontend} icon="⚡" />
          <SkillCard title="Backend" items={skills.backend} icon="🧩" />
          <SkillCard title="Tools" items={skills.tools} icon="🛠" />
        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, items, icon }) {
  return (
    <motion.div
      className="skill-card"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={fadeInUp}
    >
      <div className="skill-card-header">
        <span className="skill-icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <ul className="skill-list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </motion.div>
  )
}

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <motion.div
          className="about-photo-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <div
            className="about-photo"
            style={{
              backgroundImage: `linear-gradient(160deg, rgba(17,24,39,0.85), rgba(2,6,23,0.8)), url(${profilePic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </motion.div>

        <motion.div
          className="about-copy"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          custom={0.1}
        >
          <p className="eyebrow">About Me</p>
          <h2 className="section-title">Developer. Problem solver. Builder.</h2>
          <p className="section-description">
            I am a fresh Computer Science graduate and Full-Stack Developer with a
            specialized focus on building scalable web applications using the MERN stack.
            My foundation is rooted in creating complex, logic-driven systems like
            FupreMedicare, where I architected secure role-based access control and
            multi-role dashboards. I prioritize efficiency and precision using the V-Model
            and modern AI-assisted development methods.
          </p>
          <p className="section-description">
            Beyond the screen, I&apos;m a creative world-builder who loves narrative
            storytelling, DC Comics, and concept musicals like &quot;Epic: The Musical.&quot;
            That passion for complex systems informs how I design intuitive, engaging user
            experiences. I&apos;m focused on mastering backend optimization and scaling to
            land high-impact roles that offer both technical challenges and competitive
            rewards.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <motion.div
          className="contact-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariant}
        >
          <p className="eyebrow">Let&apos;s build something</p>
          <h2 className="section-title">Contact</h2>
          <p className="section-description">
            Have an idea, a project, or just want to say hi? Drop a message — I&apos;ll
            get back to you as soon as I can.
          </p>
        </motion.div>

        <motion.form
          className="contact-form"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInUp}
          action="mailto:nathanaguele0@gmail.com"
          method="POST"
          encType="text/plain"
          target="_blank"
        >
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                autoComplete="name"
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
              />
            </div>
          </div>
          <div className="form-field">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="Let&apos;s collaborate" />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Share a bit about what you're working on..."
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{
              boxShadow:
                '0 0 0 1px rgba(245,158,11,0.45), 0 0 18px rgba(245,158,11,0.2), 0 0 38px rgba(245,158,11,0.4)',
            }}
          >
            Send Message
          </button>
        </motion.form>

        <footer className="footer">
      <p className="footer-copy">
        Prefer email or phone? nathanaguele0@gmail.com · 08116502277
      </p>
          <div className="footer-social">
        <a
          href="https://github.com/NATHANA31"
          aria-label="GitHub"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
              
            </a>
        <a
          href="https://www.linkedin.com/in/nate-aguele-b21782371?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          aria-label="LinkedIn"
          className="social-icon"
          target="_blank"
          rel="noreferrer"
        >
          in
        </a>
          </div>
        </footer>
      </div>
    </section>
  )
}

export default App
