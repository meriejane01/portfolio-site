const items = [
  ['Website development', 'Responsive, production-ready websites built from a design or a brief.'],
  ['WordPress and Elementor', 'Custom page layouts, reusable components and dynamic content.'],
  ['Frontend refinement', 'Better layouts, responsiveness and interactions on existing interfaces.'],
  ['Maintenance and enhancements', 'Targeted updates and new functionality for sites already live.'],
];
export default function Services() {
  return (
    <section id="services" className="section tint">
      <div className="wrap">
        <h2>Services</h2>
        <ul className="rows">{items.map(([t, d]) => <li key={t}><h3>{t}</h3><p>{d}</p></li>)}</ul>
        <p className="meta note">Remote collaboration, agreed scope and deliverables, regular updates, and testing before handover.</p>
      </div>
    </section>
  );
}
