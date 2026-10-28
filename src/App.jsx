import { useState } from 'react'
import { ArrowUpRight, Image, Mail, Menu, MessageCircle, X } from 'lucide-react'

const contactEmail = 'soueidjeanpierre2@gmail.com'
const whatsappNumber = '96181326949'

const projects = [
  { number: '01', title: '[ Stephie\'s accessories ]', image: '/images/Screenshot 2026-10-27 130123.png', stack: ['[ Javascript ]', '[ react ]', '[ css ]','[ node.js ]'], projectLink: 'https://stephie-s-accessories.soueidjeanpierre2.workers.dev/' },
]

const skills = [
  { name: '[ Python ]', icon: 'python/python-original' },
  { name: '[ JavaScript ]', icon: 'javascript/javascript-plain' },
  { name: '[ React ]', icon: 'react/react-original' },
  { name: '[ Node.js ]', icon: 'nodejs/nodejs-original' },
  { name: '[ CSS ]', icon: 'css3/css3-plain-wordmark' },
  { name: '[ HTML ]', icon: 'html5/html5-plain-wordmark' },
  { name: '[ Git ]', icon: 'git/git-original' },
  { name: '[ SQL ]', icon: 'mysql/mysql-original-wordmark' },
  { name: '[ PHP ]', icon: 'php/php-original' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
       <div className="logo"><span>JP</span></div>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          <a href="#work" onClick={closeMenu}>[ My Work ]</a>
          <a href="#skills" onClick={closeMenu}>[ My Skills ]</a>
          <a href="#contact" onClick={closeMenu}>[ Contact Me ]</a>
        </div>
        <button className="menu-button" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> [Web Developper]</p>
          <h1>JeanPierre<br />Soueid</h1>
          <p className="hero-subtitle">[ I'm a web developer who enjoys turning ideas into websites and applications that are both useful and easy to use. I like solving problems, and building projects that come to life. I'm always looking for ways to improve every project I work on ]</p>
          <a className="text-link" href="#work">[ VIEW WORK ] <ArrowUpRight size={17} /></a>
        </div>
        <div className="hero-art" aria-label="Geometric code artwork">
          <img src="/images/geometry.svg" alt="Abstract geometric code network" />
        </div>
      </section>

      <section className="work" id="work">
        <header className="section-header">
          <p>[ My Work ]</p>
        </header>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <a className="project-image" href={project.projectLink} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`}>
                <span className="project-number">{project.number}</span>
                {project.image ? (
                  <img className="project-preview" src={project.image} alt={project.title} />
                ) : (
                  <div className="project-image-placeholder">
                    <Image size={24} aria-hidden="true" />
                  </div>
                )}
                <ArrowUpRight className="image-arrow" size={22} />
              </a>
              <div className="project-meta">
                <h2>{project.title}</h2>
                <div className="project-stack">{project.stack.map((item, index) => <small key={`${item}-${index}`}>{item}</small>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about" id="skills">
        <header className="section-header">
          <p>[ My Skills ]</p>
        </header>
        <div className="skill-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={`skill-${index}`}>
                <div className={`skill-logo ${skill.icon ? '' : 'is-empty'}`}>
                  {skill.icon ? (
                    <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}.svg`} alt={`${skill.name} icon`} />
                  ) : (
                    <Image size={26} aria-hidden="true" />
                  )}
                </div>
                <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact">
        <div className="contact-heading">
          <header className="section-header">
            <p>[ Contact Me ]</p>
          </header>
        </div>
        <div className="contact-panel">
          <div className="contact-actions">
            <a
              className="contact-button"
              href={`mailto:${contactEmail}`}
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Mail size={19} />
              <span>Send me an email</span>
              <ArrowUpRight size={18} />
            </a>
            <a
              className="contact-button"
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={19} />
              <span>Message me on WhatsApp</span>
              <ArrowUpRight size={18} />
            </a>
          </div>
          <hr className="contact-divider" />
          <div className="social-footer">
            <div className="social-links">
              <a className="github-icon-button" href="https://github.com/jeanpierre343" aria-label="GitHub profile">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" />
              </a>
              <a className="instagram-icon-button" href="https://instagram.com/soueidjeanpierre" aria-label="Instagram profile" target="_blank" rel="noopener noreferrer">
                <img src="/images/insta.svg" alt="Instagram" />
              </a>
            </div>
            <p className="copyright">© {new Date().getFullYear()} JeanPierre Soueid. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
