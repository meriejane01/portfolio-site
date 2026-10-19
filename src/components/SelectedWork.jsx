import { projects } from '../data/projects.js';
import ProjectItem from './ProjectItem.jsx';
const layouts = ['left', 'right', 'wide', 'tall'];
export default function SelectedWork() {
  return (
    <section id="work" className="section wrap">
      <h2>Selected work</h2>
      <div className="projects">
        {projects.map((p, i) => <ProjectItem key={p.id} p={p} layout={layouts[i % layouts.length]} />)}
      </div>
    </section>
  );
}
