import { useState } from 'react';
import { site } from '../data/projects.js';
const links = [['Work', '#work'], ['Services', '#services'], ['About', '#about'], ['Contact', '#contact']];
export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <a className="mark" href="#top" onClick={close}>{site.name}</a>
      <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <nav id="nav" className={open ? 'nav open' : 'nav'} aria-label="Primary">
        {links.map(([l, h]) => <a key={h} href={h} onClick={close}>{l}</a>)}
        {site.available && <span className="avail">{site.availability}</span>}
        <a className="btn btn-sm" href="#contact" onClick={close}>Start a project</a>
      </nav>
    </header>
  );
}
