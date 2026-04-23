import React from 'react';
import './Home.css';

const skills = {
  'Languages': ['Python', 'C', 'Java', 'SQL'],
  'Frameworks': ['FastAPI', 'Pandas', 'NumPy'],
  'AI / ML': ['Scikit-learn', 'LSTM / Keras', 'K-Means', 'Random Forest', 'Google Gemini API'],
  'Tools': ['Git', 'GitHub', 'MySQL', 'REST APIs', 'python-docx'],
};

const timeline = [
  {
    period: 'Dec 2025 – Feb 2026',
    role: 'Backend AI Developer',
    org: 'American Green Solutions (AGS)',
    desc: 'Built a FastAPI application that generates professional LinkedIn posts using Google Gemini API. Designed prompt engineering for consistent corporate-style output, and added Word document export via python-docx.',
    tags: ['FastAPI', 'Gemini API', 'Python', 'REST API'],
    type: 'work',
  },
  {
    period: 'Jun 2025 – Aug 2025',
    role: 'AI Intern',
    org: 'SAIS IT Services India Pvt. Ltd.',
    desc: 'Contributed to the NxtGenAI Payroll system. Designed and optimized MySQL database schemas, developed scalable REST API endpoints, and collaborated on debugging and testing backend workflows.',
    tags: ['FastAPI', 'Python', 'MySQL', 'System Design'],
    type: 'work',
  },
  {
    period: '2024 – Present',
    role: 'B.Tech — Artificial Intelligence',
    org: 'Mahindra University · CGPA 7.7/10',
    desc: 'Studying AI fundamentals, machine learning, backend systems, and data engineering. Active in the Aero Club as Finance Head and Software Vice Head.',
    tags: ['AI', 'ML', 'Backend', 'Leadership'],
    type: 'edu',
  },
];

const achievements = [
  { icon: '🏆', text: '2nd Place — Tech Expo', sub: 'Project presentation award' },
  { icon: '💼', text: 'Finance Head, Aero Club', sub: 'Budgeting & financial planning' },
  { icon: '⚙️', text: 'Software Vice Head, Aero Club', sub: 'Technical initiatives & events' },
  { icon: '🏀', text: 'Basketball Player', sub: 'Teamwork & discipline' },
];

export default function Home() {
  return (
    <div className="home">

      {/* ── Hero ── */}
      <section className="hero">
        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left fade-up">
              <div className="hero-tag">
                <span className="hero-tag-dot" />
                Available for Internships & Opportunities
              </div>
              <h1 className="hero-name">
                Gangapuram<br />
                <span className="hero-name-accent">Aryan</span>
              </h1>
              <p className="hero-title">AI Engineer · Backend Developer</p>
              <p className="hero-bio">
                3rd-year Artificial Intelligence student at Mahindra University,
                building scalable backend systems and AI-powered applications.
                Passionate about turning complex problems into clean, real-world solutions.
              </p>
              <div className="hero-actions">
                <a
                  href="https://github.com/GangapuramAryan"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/gangapuram-aryan-21954a333/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-ghost"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.93v5.68H9.37V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45C23.2 24 24 23.23 24 22.28V1.72C24 .77 23.2 0 22.22 0z"/>
                  </svg>
                  LinkedIn
                </a>
                <a href="mailto:gangapuramaryanx1b@gmail.com" className="btn btn-ghost">
                  ✉ Email
                </a>
              </div>
            </div>

            {/* Profile Card */}
            <div className="hero-card fade-up delay-2">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>GA</span>
                </div>
                <div className="avatar-ring" />
                <div className="avatar-ring2" />
              </div>

              <div className="profile-info">
                <div className="profile-info-row">
                  <span className="profile-info-label">// location</span>
                  <span className="profile-info-val">Hyderabad, Telangana</span>
                </div>
                <div className="profile-info-row">
                  <span className="profile-info-label">// phone</span>
                  <span className="profile-info-val">+91 63044 33017</span>
                </div>
                <div className="profile-info-row">
                  <span className="profile-info-label">// email</span>
                  <span className="profile-info-val email-val">gangapuramaryanx1b@gmail.com</span>
                </div>
                <div className="profile-info-row">
                  <span className="profile-info-label">// university</span>
                  <span className="profile-info-val">Mahindra University</span>
                </div>
                <div className="profile-info-row">
                  <span className="profile-info-label">// cgpa</span>
                  <span className="profile-info-val">7.7 / 10</span>
                </div>
                <div className="profile-info-row">
                  <span className="profile-info-label">// status</span>
                  <span className="profile-info-val" style={{color:'var(--accent3)'}}>● Open to work</span>
                </div>
              </div>

              <div className="profile-links">
                <a href="https://github.com/GangapuramAryan" target="_blank" rel="noreferrer" className="profile-link">
                  github.com/GangapuramAryan ↗
                </a>
                <a href="https://www.linkedin.com/in/gangapuram-aryan-21954a333/" target="_blank" rel="noreferrer" className="profile-link">
                  linkedin.com/in/gangapuram-aryan ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section" id="about">
        <div className="container">
          <p className="section-label fade-up">About Me</p>
          <div className="about-grid fade-up delay-1">
            <div className="about-text card">
              <h2 className="section-title">Building the bridge between<br /><span style={{color:'var(--accent)'}}>AI and real-world systems</span></h2>
              <p style={{color:'var(--text2)', marginTop:'1.25rem', lineHeight:'1.85'}}>
                I'm a 3rd-year B.Tech AI student who loves writing backend code that actually ships.
                My focus is on FastAPI-powered services, machine learning pipelines, and integrating
                large language models into practical products.
              </p>
              <p style={{color:'var(--text2)', marginTop:'1rem', lineHeight:'1.85'}}>
                I've interned at two companies, built payroll AI systems, LinkedIn post generators,
                and predictive maintenance ML pipelines. Outside of code, I handle finances for
                the Aero Club and play basketball — both require quick decisions under pressure.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <span className="stat-num">2+</span>
                  <span className="stat-label">Internships</span>
                </div>
                <div className="stat">
                  <span className="stat-num">3rd</span>
                  <span className="stat-label">Year AI Student</span>
                </div>
                <div className="stat">
                  <span className="stat-num">2nd</span>
                  <span className="stat-label">Tech Expo Place</span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="achievements-col">
              {achievements.map((a, i) => (
                <div className="card achievement-card fade-up" key={i} style={{animationDelay:`${0.1*i+0.2}s`}}>
                  <span className="achievement-icon">{a.icon}</span>
                  <div>
                    <p style={{fontWeight:'700', color:'var(--text)', fontSize:'0.9rem'}}>{a.text}</p>
                    <p style={{color:'var(--text3)', fontSize:'0.78rem', marginTop:'0.2rem'}}>{a.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ── Skills ── */}
      <section className="section" id="skills">
        <div className="container">
          <p className="section-label fade-up">Technical Skills</p>
          <h2 className="section-title fade-up delay-1">Research Interests &amp; Stack</h2>
          <p className="section-sub fade-up delay-2">
            Backend systems, machine learning pipelines, and LLM integrations.
          </p>
          <div className="skills-grid fade-up delay-3">
            {Object.entries(skills).map(([cat, items]) => (
              <div className="card skill-card" key={cat}>
                <p className="skill-category">{cat}</p>
                <div className="skill-tags">
                  {items.map(s => (
                    <span className="tag" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ── Timeline ── */}
      <section className="section" id="experience">
        <div className="container">
          <p className="section-label fade-up">Experience & Education</p>
          <h2 className="section-title fade-up delay-1">Where I've Been</h2>
          <div className="timeline fade-up delay-2">
            {timeline.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" data-type={item.type} />
                <div className="timeline-body card">
                  <div className="timeline-header">
                    <div>
                      <p className="timeline-role">{item.role}</p>
                      <p className="timeline-org">{item.org}</p>
                    </div>
                    <span className={`tag ${item.type === 'edu' ? 'tag-purple' : 'tag-green'}`}>
                      {item.period}
                    </span>
                  </div>
                  <p className="timeline-desc">{item.desc}</p>
                  <div className="timeline-tags">
                    {item.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider container" />

      {/* ── CTA ── */}
      <section className="section cta-section fade-up">
        <div className="container">
          <div className="cta-box card">
            <p className="section-label" style={{justifyContent:'center'}}>Let's Connect</p>
            <h2 className="section-title" style={{textAlign:'center', marginTop:'0.5rem'}}>
              Open to internships &amp;<br /><span style={{color:'var(--accent)'}}>collaborations</span>
            </h2>
            <p className="cta-sub">
              Whether you have a project idea or an opportunity — I'm always up for a conversation.
            </p>
            <div className="cta-actions">
              <a href="mailto:gangapuramaryanx1b@gmail.com" className="btn btn-primary">
                ✉ Get in Touch
              </a>
              <a href="/projects" className="btn btn-ghost">View Projects →</a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
