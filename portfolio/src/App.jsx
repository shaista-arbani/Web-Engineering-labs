
import {
  ArrowUpRight,
  Mail,
  Code2,
  Heart,
  Sparkles,
  GraduationCap
} from 'lucide-react';

const projects = [
  {
    number: '01',
    name: 'ShopKit',
    type: 'E-commerce concept',
    description:
      'A clean shopping experience with thoughtfully organized product sections.',
    tags: ['React', 'CSS']
  },
  {
    number: '02',
    name: 'Study Space',
    type: 'Student productivity',
    description:
      'A simple space for keeping study tasks, notes and goals in one place.',
    tags: ['JavaScript', 'UI Design']
  },
  {
    number: '03',
    name: 'My Portfolio',
    type: 'Personal website',
    description:
      'A little corner of the internet to share my work and learning journey.',
    tags: ['React', 'Vite']
  }
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#home">
          shaista<span>.</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact" className="nav-cta">
            Say hello <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <span className="eyebrow">
              <Sparkles size={14} />
              COMPUTER SCIENCE STUDENT & ASPIRING DEVELOPER
            </span>

            <h1>
              Creating little
              <br />
              things with <em>big</em>
              <br />
              dreams.
            </h1>

            <p className="hero-text">
              Hi, I'm Shaista — learning, building, and finding my own way
              through the world of technology.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                Explore my work <ArrowUpRight size={16} />
              </a>
              <a className="text-link" href="#about">
                A little about me
              </a>
            </div>
          </div>

          <div
            className="hero-art"
            aria-label="Decorative pink bow illustration"
            role="img"
          >
            <div className="art-circle"></div>
            <div className="bow">
              <span className="bow-loop left"></span>
              <span className="bow-loop right"></span>
              <span className="bow-knot"></span>
              <span className="bow-tail left-tail"></span>
              <span className="bow-tail right-tail"></span>
            </div>
            <span className="art-note note-one">
              dream
              <br />
              • learn • create
            </span>
            <span className="art-note note-two">made with ♡</span>
          </div>

          <div className="scroll-note">
            SCROLL TO EXPLORE <span></span>
          </div>
        </section>

        <section className="about section-wrap" id="about">
          <SectionHeading
            eyebrow="A LITTLE INTRODUCTION"
            title="Hello, lovely to meet you."
            text="A curious mind, a growing skill set, and a whole lot left to explore."
          />

          <div className="about-grid">
            <p className="about-lead">
              I'm a Computer Science student who enjoys turning ideas into
              things people can actually use.
            </p>

            <div className="about-detail">
              <p>
                I'm currently exploring web development and strengthening my
                foundations one project at a time. I believe good work comes
                from curiosity, patience, and being brave enough to keep trying.
              </p>

              <div className="mini-facts">
                <span>
                  <GraduationCap size={17} /> BS Computer Science
                </span>
                <span>
                  <Heart size={16} /> Always learning
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section-wrap" id="projects">
          <SectionHeading
            eyebrow="A FEW THINGS I'VE MADE"
            title="Selected projects."
            text="Small steps, real practice, and ideas I'm bringing to life."
          />

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number} / 03</span>
                  <span className="project-icon">
                    <Code2 size={18} />
                  </span>
                </div>

                <div className="project-art">
                  <span className="art-window">
                    <i></i>
                    <i></i>
                    <i></i>
                    <b>{project.name}</b>
                  </span>
                </div>

                <div className="project-info">
                  <span className="project-type">{project.type}</span>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>

                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills section-wrap" id="skills">
          <SectionHeading
            eyebrow="MY TOOLKIT"
            title="Things I'm learning."
            text="Growing my skills through coursework, practice, and building."
          />

          <div className="skills-list">
            <span>HTML & CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Java</span>
            <span>Python basics</span>
            <span>Responsive design</span>
            <span>Git & GitHub</span>
            <span>Problem solving</span>
          </div>

          <p className="skills-note">
            Not an expert in everything — just excited to keep getting better.
            <span>♡</span>
          </p>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-card">
            <span className="eyebrow">HAVE A PROJECT OR AN IDEA?</span>

            <h2>
              Let's make
              <br />
              <em>something lovely.</em>
            </h2>

            <p>
              I'm always happy to connect, learn, and talk about creative ideas.
            </p>

            <a className="button-primary" href="mailto:hello@example.com">
              Get in touch <Mail size={16} />
            </a>

            <div className="contact-sparkle">✳</div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">
          shaista<span>.</span>
        </a>

        <p>
          Made with care & a little bit of pink <Heart size={13} />
        </p>

        <div className="socials">
          <a href="https://github.com/" aria-label="GitHub">
            GitHub ↗
          </a>
          <a href="https://linkedin.com/" aria-label="LinkedIn">
            LinkedIn ↗
          </a>
        </div>

        <span className="copyright">© 2026 Shaista</span>
      </footer>
    </>
  );
}
