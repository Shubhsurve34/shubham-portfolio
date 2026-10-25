
"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    type: "CAPSTONE · TEAM PROJECT",
    title: "CrowdGrid",
    description:
      "A final-year Diploma in Computer Engineering capstone project being developed collaboratively with my team. More details will be added as the project progresses.",
    stack: "Team capstone · Details in progress",
    status: "In development",
  },
  {
    number: "02",
    type: "WEB APPLICATION",
    title: "DropNexa",
    description:
      "Building a dependable file-sharing experience with a focus on consistency, usability and thoughtful error handling.",
    stack: "Next.js · TypeScript · Firebase",
    status: "In development",
  },
  {
    number: "03",
    type: "FOOTBALL ANALYTICS",
    title: "Tactora",
    description:
      "A football tactics planning tool for creating formations, arranging player positions and visualizing match strategies.",
    stack: "React · SVG · Firebase",
    status: "In development",
  },
];

const skillGroups = [
  {
    title: "PROGRAMMING",
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    title: "WEB DEVELOPMENT",
    skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
  },
  {
    title: "DATABASES & TOOLS",
    skills: ["SQL", "Git", "GitHub", "VS Code"],
  },
  {
    title: "WORKING STYLE",
    skills: [
      "Problem-solving",
      "Teamwork",
      "Adaptability",
      "Willingness to learn",
    ],
  },
];

export default function Home() {
  const [year, setYear] = useState("2026");
  const [emailCopied, setEmailCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setYear(String(new Date().getFullYear()));
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(
      ".content-section, .skills-section, .projects-heading, .project-card, .contact-section"
    );

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => {
      element.classList.add("scroll-reveal");
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("shubhamsurve571@gmail.com");
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      window.prompt(
        "Copy your email address:",
        "shubhamsurve571@gmail.com"
      );
    }
  }

  return (
    <main className="site theme-dark">
      
<header className="nav">
  <a
    href="#home"
    className="brand"
    aria-label="ShubhTechIN home"
    onClick={() => setMenuOpen(false)}
  >
    <img
      src="/images/shubhtechin-logo.png"
      alt="ShubhTechIN"
      className="brand-logo"
    />
  </a>

  <button
    type="button"
    className="mobile-menu-button"
    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
    aria-expanded={menuOpen}
    aria-controls="main-navigation"
    onClick={() => setMenuOpen((open) => !open)}
  >
    <span className={menuOpen ? "menu-icon menu-icon-open" : "menu-icon"}>
      <span />
      <span />
      <span />
    </span>
    <span className="mobile-menu-label">
      {menuOpen ? "Close" : "Menu"}
    </span>
  </button>

  <nav
    id="main-navigation"
    className={`nav-links${menuOpen ? " nav-links-open" : ""}`}
    aria-label="Main navigation"
  >
    <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
    <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
    <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
    <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
    <a
      href="https://www.linkedin.com/in/shubhamsurve11"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => setMenuOpen(false)}
    >
      LinkedIn
    </a>
  </nav>
</header>


      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow reveal delay-1">
            COMPUTER ENGINEERING · WEB DEVELOPMENT
          </p>

          <h1 className="hero-title reveal delay-2">
            Learning to build.
            <br />
            <span>Building to learn.</span>
          </h1>

          <p className="hero-description reveal delay-3">
            I'm Shubham, a computer engineering student exploring
            software development by turning ideas into useful,
            well-crafted digital products.
          </p>

          <div className="hero-actions reveal delay-3">
            <a className="primary-link" href="#projects">
              Explore my work
            </a>

            <a className="text-link" href="#about">
              A little about me
            </a>

            <a
              className="text-link"
              href="/Shubham-Surve-Resume.pdf"
              download="Shubham-Surve-Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="hero-art reveal delay-3" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="orbit-core">
            <span>&lt;/&gt;</span>
          </div>

          <span className="orbit-node node-one">JS</span>
          <span className="orbit-node node-two">{"{}"}</span>
          <span className="orbit-node node-three">✳</span>

          <span className="orbit-caption">
            IDEAS · CODE · PRODUCTS
          </span>
        </div>

        <aside className="hero-aside reveal delay-3">
          <div className="availability">
            <span className="status-dot" />
            CURRENTLY BUILDING
          </div>

          <div className="aside-rule" />

          <p className="aside-label">MY APPROACH</p>

          <p className="aside-text">
            Understand the problem.
            <br />
            Build the simplest solution.
            <br />
            Make it work reliably.
          </p>

          <div className="aside-rule" />

          <p className="aside-label">CURRENT FOCUS</p>

          <div className="interest-list">
            <span>Software development</span>
            <span>Team capstone project</span>
            <span>Internship opportunities</span>
          </div>
        </aside>

        <div className="hero-index">
          <span>PROJECTS</span>
          <span>01 — 03</span>
        </div>
      </section>

      <section id="about" className="content-section section-wrap">
        <div className="section-heading">
          <p className="eyebrow">01 / ABOUT</p>

          <h2>
            Curious by nature.
            <br />
            <span>Practical by design.</span>
          </h2>
        </div>

        <div className="about-copy">
          <p>
            I'm a Diploma in Computer Engineering student at
            St. Xavier’s Technical Institute, Mumbai, building my
            software development skills through practical work.
          </p>

          <p>
            I enjoy breaking problems into manageable steps,
            learning new tools and turning ideas into useful
            applications. I value clear communication, teamwork
            and improving a product through feedback.
          </p>

          <p>
            I'm currently developing CrowdGrid with my team as our
            final-year diploma capstone project. I'm also looking
            for opportunities to learn from real-world engineering
            work and contribute as an intern.
          </p>
        </div>
      </section>

      <section id="skills" className="skills-section section-wrap">
        <div className="section-heading">
          <p className="eyebrow">02 / SKILLS & EDUCATION</p>

          <h2>
            Tools I work with.
            <br />
            <span>Knowledge I'm building.</span>
          </h2>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <p className="eyebrow">{group.title}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="education-card">
          <p className="eyebrow">EDUCATION</p>
          <h3>Diploma in Computer Engineering</h3>
          <p>St. Xavier’s Technical Institute, Mumbai</p>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="section-wrap">
          <div className="projects-heading">
            <div>
              <p className="eyebrow">03 / SELECTED WORK</p>

              <h2>
                Things I'm building<span>.</span>
              </h2>
            </div>

            <p className="section-note">
              Individual builds and a team capstone.
              <br />
              All currently in development.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-main">
                  <p className="project-type">{project.type}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <p className="project-stack">{project.stack}</p>
                </div>

                <div className="project-meta">
                  <span className="project-status">
                    <span className="status-dot" />
                    {project.status}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="projects-footnote">
            These projects are works in progress. More details and
            live demo links will be added as the applications develop
            and are deployed.
          </p>
        </div>
      </section>

      <section id="contact" className="contact-section section-wrap">
        <p className="eyebrow">04 / CONTACT</p>

        <h2>
          Have an idea?
          <br />
          <span>Let's talk.</span>
        </h2>

        <p className="contact-description">
          I'm open to internship opportunities where I can contribute,
          learn from experienced developers and keep improving my
          software engineering skills. Feel free to reach out.
        </p>

        <div className="contact-actions">
          <button className="primary-link" onClick={copyEmail}>
            {emailCopied ? "Copied!" : "Email"}
          </button>

          <a
            href="https://github.com/Shubhsurve34"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-link"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shubhamsurve11"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-link"
          >
            LinkedIn
          </a>
        </div>
      </section>

      <footer className="footer section-wrap">
        <a href="#home" className="wordmark">
          ShubhTechIN<span>.</span>
        </a>

        <p>Designed with intention. Built while learning.</p>
        <p>© {year} ShubhTechIN</p>
      </footer>
    </main>
  );
}

