const steps = [
  ['Discover', 'Understand the project, requirements, audience and goals.'],
  ['Plan', 'Settle the structure, implementation approach and priorities.'],
  ['Build', 'Develop the site with attention to detail, responsiveness and function.'],
  ['Refine', 'Test, fix issues and prepare the final delivery.'],
];
export default function Process() {
  return (
    <section className="section wrap" aria-labelledby="process-h">
      <h2 id="process-h">How a project runs</h2>
      <ol className="steps">{steps.map(([t, d], i) => <li key={t}><span className="n">{i + 1}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </section>
  );
}
