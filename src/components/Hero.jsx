import { projects } from '../data/projects.js';
import Shot from './Shot.jsx';
export default function Hero() {
  const f = projects.find(p => p.featured) || projects[0];
  return (
    <section id="top" className="hero wrap">
      <div className="hero-copy">
        <p className="meta">Independent web developer</p>
        <h1>Thoughtful websites. Carefully built.</h1>
        <p className="lead">I build responsive, polished websites for businesses and teams, combining visual precision with practical implementation.</p>
        <div className="actions">
          <a className="btn" href="#work">Explore my work</a>
          <a className="btn btn-ghost" href="#contact">Let&rsquo;s work together</a>
        </div>
      </div>
      <div className="hero-shot"><Shot p={f} eager /></div>
    </section>
  );
}
