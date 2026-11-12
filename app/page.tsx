"use client";

import { useEffect, useState } from "react";
import { Seen, StretchName, WorkPass } from "./effects";

const EMAIL = "shubhamsurve571@gmail.com";
const GITHUB = "https://github.com/Shubhsurve34";
const LINKEDIN = "https://www.linkedin.com/in/shubhamsurve11";
const RESUME = "/Shubham-Surve-Resume.pdf";

type Project = {
  name: string;
  kind: string;
  summary: string;
  stack: string[];
  role: string;
  status: "Live" | "In progress" | "Next up";
  accent: "carbon" | "lime" | "ink";
  link?: { href: string; label: string };
};

const projects: Project[] = [
  {
    name: "DropNexa",
    kind: "File and text sharing",
    summary:
      "Send text, links and files through links that expire, lock with a password or open only once. It has accounts, drop inboxes that collect files from anyone, end-to-end encryption in the browser and Premium plans billed through Razorpay.",
    stack: ["Next.js", "TypeScript", "Firebase", "Upstash", "Razorpay"],
    role: "Solo build",
    status: "Live",
    accent: "carbon",
    link: { href: "https://dropnexa-app.vercel.app", label: "Open DropNexa" },
  },
  {
    name: "CrowdGrid",
    kind: "Pilgrim services for the Simhastha Kumbh",
    summary:
      "Verified stays, free meals, shuttles to the ghats and 24/7 SOS for pilgrims at the Simhastha Kumbh 2026–28 in Nashik and Trimbakeshwar. Everything a family books sits under one QR pass that works offline. Our final-year capstone, where I worked across the frontend and backend.",
    stack: [],
    role: "Full-stack, team capstone",
    status: "Live",
    accent: "ink",
    link: { href: "https://crowdgrid.vercel.app", label: "Open CrowdGrid" },
  },
  {
    name: "Tactora",
    kind: "Football tactics board",
    summary:
      "A board for setting formations, placing players and sketching match plans, so a tactic can be shared as easily as a link.",
    stack: ["React", "SVG", "Firebase"],
    role: "Solo build",
    status: "Next up",
    accent: "ink",
  },
  {
    name: "ShubhTechIN",
    kind: "This site",
    summary:
      "My portfolio and the home of everything I make. It sets the look DropNexa and my later projects share.",
    stack: ["Next.js", "TypeScript", "CSS"],
    role: "Solo build",
    status: "Live",
    accent: "lime",
  },
];

const skills = [
  { title: "Languages", items: ["C", "C++", "Java", "Python"] },
  { title: "Web", items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"] },
  { title: "Data and tools", items: ["SQL", "Firebase", "Git", "GitHub", "VS Code"] },
];

const semesters = [
  { label: "Semester 1", score: 79.75 },
  { label: "Semester 2", score: 81.24 },
  { label: "Semester 3", score: 86.25 },
  { label: "Semester 4", score: 87.66 },
];

function Wordmark() {
  return (
    <span className="wordmark" aria-label="ShubhTechIN">
      ShubhTech<span className="wordmark-in">IN</span>
    </span>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [year, setYear] = useState("2026");

  useEffect(() => {
    const id = window.setTimeout(() => setYear(String(new Date().getFullYear())), 0);
    return () => window.clearTimeout(id);
  }, []);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  }

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>

      <header className="top">
        <div className="top-inner">
          <a href="#main" className="top-brand">
            <Wordmark />
          </a>
          <nav aria-label="Main" className="top-nav">
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href={RESUME} download className="top-resume">
              Resume
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* Hero: who, plus the work pass */}
        <section className="hero wrap">
          <div className="hero-copy">
            <p className="hero-hello">Hi, I&apos;m</p>
            <StretchName lines={["Shubham", "Surve"]} />
            <p className="hero-line">
              I study computer engineering in Mumbai and build web apps people can actually use.
              Right now that&apos;s <a href="#work">DropNexa</a>, a way to send things that
              don&apos;t stick around.
            </p>
            <div className="hero-actions">
              <a className="btn btn-ink" href="#work">
                See my work
              </a>
              <a className="btn btn-line" href={RESUME} download>
                Download resume
              </a>
            </div>
          </div>

          <WorkPass
            front={
              <>
                <span className="pass-hole" aria-hidden="true" />
                <header className="pass-head">
                  <Wordmark />
                  <span className="pass-kind">Work pass</span>
                </header>
                <dl className="pass-fields">
                  <div className="pass-field pass-field-wide">
                    <dt>Name</dt>
                    <dd className="pass-name">Shubham Anant Surve</dd>
                  </div>
                  <div className="pass-field pass-field-wide">
                    <dt>Studying</dt>
                    <dd>Diploma in Computer Engineering</dd>
                  </div>
                  <div className="pass-field pass-field-wide">
                    <dt>At</dt>
                    <dd>St. Xavier&apos;s Technical Institute, Mumbai</dd>
                  </div>
                  <div className="pass-field">
                    <dt>Builds with</dt>
                    <dd>Next.js and TypeScript</dd>
                  </div>
                  <div className="pass-field">
                    <dt>Latest score</dt>
                    <dd>87.66%</dd>
                  </div>
                </dl>
                <footer className="pass-foot">
                  <div className="pass-valid">
                    <span>Valid from {year}</span>
                    <span className="pass-code" aria-hidden="true" />
                  </div>
                  <span className="stamp pass-stamp">
                    Open to
                    <br />
                    internships
                  </span>
                </footer>
              </>
            }
            back={
              <>
                <span className="pass-hole" aria-hidden="true" />
                <header className="pass-head">
                  <Wordmark />
                  <span className="pass-kind">Back of pass</span>
                </header>
                <div className="pass-found">
                  <p className="pass-found-label">If found, please return to</p>
                  <p className="pass-found-name">Shubham Surve</p>
                </div>
                <ul className="pass-links">
                  <li>
                    <a href={`mailto:${EMAIL}`}>Email</a>
                    <span>{EMAIL}</span>
                  </li>
                  <li>
                    <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                    <span>shubhamsurve11</span>
                  </li>
                  <li>
                    <a href={GITHUB} target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                    <span>Shubhsurve34</span>
                  </li>
                  <li>
                    <a href={RESUME} download>
                      Resume
                    </a>
                    <span>PDF, one page</span>
                  </li>
                </ul>
                <p className="pass-back-note">No reward offered. A reply would be nice, though.</p>
              </>
            }
          />
        </section>

        {/* Work */}
        <section id="work" className="section wrap" aria-labelledby="work-title">
          <div className="section-head">
            <h2 id="work-title">Things I&apos;ve built</h2>
            <p>
              Three live, including our team capstone, and one on the bench. Every new one gets the
              same look, so you can tell they come from the same place.
            </p>
          </div>

          <ol className="tickets">
            {projects.map((project) => (
              <Seen as="li" key={project.name} className={`ticket accent-${project.accent}`}>
                <div className="ticket-main">
                  <p className="ticket-kind">{project.kind}</p>
                  <h3 className="ticket-name">{project.name}</h3>
                  <p className="ticket-summary">{project.summary}</p>
                  {project.stack.length > 0 ? (
                    <ul className="ticket-stack" aria-label="Built with">
                      {project.stack.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                  {project.link ? (
                    <a
                      className="ticket-link"
                      href={project.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.link.label}
                    </a>
                  ) : null}
                </div>
                <div className="ticket-stub">
                  <span className={`stamp stamp-${project.status === "Live" ? "live" : "wait"}`}>
                    {project.status}
                  </span>
                  <span className="ticket-role">{project.role}</span>
                </div>
              </Seen>
            ))}
          </ol>
        </section>

        {/* About + skills */}
        <section id="about" className="section wrap about" aria-labelledby="about-title">
          <div className="section-head">
            <h2 id="about-title">Curious, practical, still learning</h2>
          </div>

          <div className="about-grid">
            <div className="about-copy">
              <p>
                I&apos;m in the final year of a Diploma in Computer Engineering at St. Xavier&apos;s
                Technical Institute, Mumbai. I learn best by building: pick a real problem, break it
                into small steps, ship something that works, then make it better.
              </p>
              <p>
                DropNexa is where most of that has happened. It taught me authentication, rate
                limiting, encryption, payments and how much care goes into an error message. With my
                team I built CrowdGrid, our capstone, as a full-stack developer.
              </p>
              <p>
                I&apos;m looking for an internship where I can work on real software with people
                who know more than I do. I work well in a team, I communicate clearly, and I like
                being given a hard problem.
              </p>
            </div>

            <div className="skills">
              {skills.map((group) => (
                <div key={group.title} className="skill-group">
                  <h3>{group.title}</h3>
                  <p>{group.items.join(", ")}</p>
                </div>
              ))}
              <div className="skill-group">
                <h3>How I work</h3>
                <p>Communication, teamwork, leadership, problem-solving and managing my time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="section wrap" aria-labelledby="edu-title">
          <div className="section-head">
            <h2 id="edu-title">Education</h2>
          </div>

          <div className="edu-grid">
            <div className="edu-card">
              <h3>Diploma in Computer Engineering</h3>
              <p className="edu-where">St. Xavier&apos;s Technical Institute, Mumbai</p>
              <Seen as="ol" className="grades">
                {semesters.map((sem, i) => (
                  <li key={sem.label} style={{ ["--i" as string]: i }}>
                    <span className="grade-label">{sem.label}</span>
                    <span className="grade-track">
                      <span className="grade-bar" style={{ width: `${sem.score}%` }} />
                    </span>
                    <span className="grade-value">{sem.score.toFixed(2)}%</span>
                  </li>
                ))}
              </Seen>
              <p className="edu-note">Up every semester so far.</p>
            </div>

            <div className="edu-card edu-card-quiet">
              <h3>CBSE Secondary</h3>
              <p className="edu-where">SSL English School</p>
              <p className="edu-score">
                73.80%<span>March 2021</span>
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact wrap" aria-labelledby="contact-title">
          <span className={`stamp contact-stamp${copied ? " is-on" : ""}`} aria-hidden="true">
            Copied
          </span>
          <h2 id="contact-title">
            Have an internship, a project or a question? Write to me.
          </h2>
          <div className="contact-row">
            <button type="button" className="btn btn-ink contact-email" onClick={copyEmail}>
              {copied ? "Email copied" : EMAIL}
            </button>
            <a className="btn btn-line" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a className="btn btn-line" href={GITHUB} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </div>
          <p className="contact-hint" aria-live="polite">
            {copied ? "It's on your clipboard. Talk soon." : "Click the address to copy it."}
          </p>
        </section>
      </main>

      <footer className="foot wrap">
        <Wordmark />
        <p>
          Also from ShubhTechIN:{" "}
          <a href="https://dropnexa-app.vercel.app" target="_blank" rel="noopener noreferrer">
            DropNexa
          </a>
        </p>
        <p>© {year} Shubham Surve</p>
      </footer>
    </>
  );
}
