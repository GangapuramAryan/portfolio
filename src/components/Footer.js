import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        Built by <span>Gangapuram Aryan</span> — AI Engineer ·{' '}
        <a
          href="https://github.com/GangapuramAryan"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--text3)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
        >
          GitHub
        </a>{' '}
        ·{' '}
        <a
          href="https://www.linkedin.com/in/gangapuram-aryan-21954a333/"
          target="_blank"
          rel="noreferrer"
          style={{ color: 'var(--text3)', textDecoration: 'underline', textUnderlineOffset: '3px' }}
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}
