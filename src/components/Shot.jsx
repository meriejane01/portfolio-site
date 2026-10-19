export default function Shot({ p, eager = false }) {
  return (
    <div className="shot">
      {p.image
        ? <img src={p.image} alt={`Screenshot of ${p.title}`} width={p.width} height={p.height} loading={eager ? 'eager' : 'lazy'} decoding="async" />
        : <div className="ph" style={{ aspectRatio: `${p.width} / ${p.height}` }} role="img" aria-label="Placeholder for project screenshot">
            <span>Placeholder. Add a real screenshot in /public/images and set <code>image</code> in projects.js</span>
          </div>}
    </div>
  );
}
