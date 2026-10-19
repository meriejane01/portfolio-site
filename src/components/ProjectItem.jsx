import Shot from './Shot.jsx';
export default function ProjectItem({ p, layout }) {
  const href = p.live || p.caseStudy || undefined;
  return (
    <article className={`project ${layout}`}>
      <a className="project-img" href={href} {...(p.live ? { target: '_blank', rel: 'noopener noreferrer' } : {})} tabIndex={href ? 0 : -1} aria-label={`${p.title} screenshot`}>
        <Shot p={p} />
      </a>
      <div className="project-text">
        <h3>{p.title}</h3>
        <p className="meta">{[p.type, p.platform].filter(Boolean).join('. ')}</p>
        <p>{p.description}</p>
        <p className="links">
          {p.live && <a className="ulink" href={p.live} target="_blank" rel="noopener noreferrer">Visit live site</a>}
          {p.caseStudy && <a className="ulink" href={p.caseStudy}>View case study</a>}
        </p>
        {p.extras?.length > 0 && (
          <ul className="extras">{p.extras.map(x => (
            <li key={x.src}><img src={x.src} alt={`${p.title}: ${x.label}`} width={x.width} height={x.height} loading="lazy" decoding="async" /><span>{x.label}</span></li>
          ))}</ul>)}
      </div>
    </article>
  );
}
