import { site } from '../data/projects.js';
export default function Footer() {
  return (
    <footer className="footer"><div className="wrap foot">
      <span className="mark">{site.name}</span>
      <nav aria-label="Footer"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href={`mailto:${site.email}`}>Email</a>
        {site.links.filter(l => l.href).map(l => <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>)}</nav>
      <small>&copy; {new Date().getFullYear()} {site.name}</small>
    </div></footer>
  );
}
