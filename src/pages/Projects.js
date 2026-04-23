import React, { useState } from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Hybrid Predictive Maintenance System',
    subtitle: 'AI / Machine Learning · Research Project',
    description:
      'A full ML pipeline for engine degradation modeling using the NASA CMAPSS dataset. Combines unsupervised clustering, supervised classification, and deep sequence modeling to predict Remaining Useful Life (RUL) of turbofan engines.',
    longDesc: [
      'Implemented K-Means clustering to segment engine operational regimes across FD001–FD004 datasets.',
      'Built a Random Forest classifier for fault detection, achieving robust cross-dataset performance.',
      'Designed and trained an LSTM recurrent network for time-series RUL regression.',
      'Validated the hybrid pipeline against all four CMAPSS flight condition subsets.',
    ],
    tags: ['Python', 'LSTM / Keras', 'Scikit-learn', 'K-Means', 'Random Forest', 'Pandas', 'NumPy'],
    category: 'ML',
    github: 'https://github.com/GangapuramAryan',
    status: 'Completed',
    statusColor: 'green',
  },
  {
    id: 2,
    title: 'LinkedIn Post Generator',
    subtitle: 'Backend AI · American Green Solutions',
    description:
      'A FastAPI-powered service that generates professional, corporate-style LinkedIn posts from user-supplied topics. Integrated Google Gemini API for structured content generation across multiple business use cases.',
    longDesc: [
      'Built REST API endpoints for content generation, image handling, and document export.',
      'Engineered prompts to consistently produce formal, business-appropriate language.',
      'Added Word document export functionality using python-docx for offline sharing.',
      'Deployed as a production-ready microservice with clean API design.',
    ],
    tags: ['FastAPI', 'Python', 'Google Gemini API', 'REST API', 'python-docx', 'Prompt Engineering'],
    category: 'Backend',
    github: 'https://github.com/GangapuramAryan',
    status: 'Production',
    statusColor: 'accent',
  },
  {
    id: 3,
    title: 'NxtGenAI Payroll System',
    subtitle: 'Backend · SAIS IT Services Internship',
    description:
      'Contributed to an AI-enhanced payroll management system during my internship at SAIS IT Services. Focused on backend API development, database architecture, and workflow optimization.',
    longDesc: [
      'Designed and optimized MySQL database schemas for payroll data structures.',
      'Developed scalable REST API endpoints using FastAPI and Python.',
      'Collaborated on debugging, testing, and improving backend workflows.',
      'Gained experience in production-grade system design and code review.',
    ],
    tags: ['FastAPI', 'Python', 'MySQL', 'REST API', 'System Design'],
    category: 'Backend',
    github: 'https://github.com/GangapuramAryan',
    status: 'Internship',
    statusColor: 'purple',
  },
];

const categories = ['All', 'ML', 'Backend'];

const statusColors = {
  green: { bg: 'rgba(6,255,165,0.07)', border: 'rgba(6,255,165,0.25)', text: 'var(--accent3)' },
  accent: { bg: 'rgba(0,229,255,0.07)', border: 'rgba(0,229,255,0.25)', text: 'var(--accent)' },
  purple: { bg: 'rgba(124,58,237,0.1)', border: 'rgba(124,58,237,0.3)', text: '#a78bfa' },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expanded, setExpanded] = useState(null);

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="projects-page">
      <div className="projects-hero">
        <div className="projects-hero-bg" aria-hidden="true" />
        <div className="container">
          <p className="section-label fade-up">My Work</p>
          <h1 className="projects-heading fade-up delay-1">
            Projects &amp;<br />
            <span style={{ color: 'var(--accent)' }}>Contributions</span>
          </h1>
          <p className="projects-sub fade-up delay-2">
            From ML research pipelines to production backend services —
            each project is a real-world problem solved.
          </p>
          {/* Filters */}
          <div className="filter-bar fade-up delay-3">
            {categories.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="projects-list container fade-up delay-2">
        {filtered.map((p, i) => {
          const sc = statusColors[p.statusColor];
          const isOpen = expanded === p.id;
          return (
            <div
              className={`project-card card ${isOpen ? 'open' : ''}`}
              key={p.id}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Top row */}
              <div className="project-top">
                <div className="project-meta">
                  <div className="project-number">/{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <h2 className="project-title">{p.title}</h2>
                    <p className="project-subtitle">{p.subtitle}</p>
                  </div>
                </div>
                <span
                  className="project-status"
                  style={{ background: sc.bg, border: `1px solid ${sc.border}`, color: sc.text }}
                >
                  ● {p.status}
                </span>
              </div>

              <p className="project-desc">{p.description}</p>

              {/* Expanded details */}
              {isOpen && (
                <div className="project-details">
                  <p className="detail-label">// Key Highlights</p>
                  <ul className="detail-list">
                    {p.longDesc.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags & Actions */}
              <div className="project-footer">
                <div className="project-tags">
                  {p.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
                <div className="project-actions">
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setExpanded(isOpen ? null : p.id)}
                  >
                    {isOpen ? 'Less ↑' : 'Details ↓'}
                  </button>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* GitHub CTA */}
      <div className="container github-cta fade-up">
        <div className="card github-cta-card">
          <div className="github-cta-left">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--text2)">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.1.82-.26.82-.58v-2.03c-3.34.72-4.04-1.6-4.04-1.6-.54-1.38-1.33-1.75-1.33-1.75-1.08-.74.08-.72.08-.72 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.3 3.46.99.1-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.9 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <div>
              <p style={{ fontFamily: 'var(--font-head)', fontWeight: '700', color: 'var(--text)' }}>
                See all my code
              </p>
              <p style={{ color: 'var(--text3)', fontSize: '0.82rem', marginTop: '0.25rem' }}>
                github.com/GangapuramAryan
              </p>
            </div>
          </div>
          <a
            href="https://github.com/GangapuramAryan"
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost"
          >
            Visit GitHub ↗
          </a>
        </div>
      </div>
    </div>
  );
}
