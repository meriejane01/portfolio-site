import { useState } from 'react';
import { site } from '../data/projects.js';
const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form));
    const er = {};
    if (!d.name.trim()) er.name = 'Enter your name.';
    if (!/^\S+@\S+\.\S+$/.test(d.email)) er.email = 'Enter a valid email address.';
    if (d.details.trim().length < 10) er.details = 'Tell me a little about the project.';
    setErrors(er);
    if (Object.keys(er).length) { setStatus('idle'); return; }
    if (!endpoint) { setStatus('error'); return; }
    setStatus('sending');
    try {
      const r = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) });
      setStatus(r.ok ? 'done' : 'error');
      if (r.ok) form.reset();
    } catch { setStatus('error'); }
  }
  const field = (id, label, props = {}, area) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {area ? <textarea id={id} name={id} rows="5" {...props} /> : <input id={id} name={id} {...props} />}
      {errors[id] && <p className="err" id={`${id}-e`}>{errors[id]}</p>}
    </div>
  );
  return (
    <section id="contact" className="section wrap contact">
      <div><h2>Have a website in mind?</h2><p className="lead">Tell me what you need. I read every message and reply by email.</p>
        {site.available && <p className="meta">{site.availabilityNote}</p>}
        <p><a className="ulink" href={`mailto:${site.email}`}>{site.email}</a></p></div>
      <form onSubmit={onSubmit} noValidate>
        {field('name', 'Name', { required: true, autoComplete: 'name', 'aria-describedby': 'name-e' })}
        {field('email', 'Email', { type: 'email', required: true, autoComplete: 'email', 'aria-describedby': 'email-e' })}
        {field('company', 'Company or website (optional)', { autoComplete: 'organization' })}
        <div className="field"><label htmlFor="type">Type of project</label>
          <select id="type" name="type"><option>New website</option><option>WordPress or Elementor work</option><option>Frontend refinement</option><option>Updates to an existing site</option><option>Something else</option></select></div>
        <div className="field"><label htmlFor="budget">Budget range (optional)</label>
          <select id="budget" name="budget"><option value="">Prefer to discuss</option><option>Under $500</option><option>$500 to $1,500</option><option>$1,500 to $5,000</option><option>$5,000 or more</option></select></div>
        {field('details', 'Project details', { required: true, 'aria-describedby': 'details-e' }, true)}
        <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending' : 'Send message'}</button>
        <p role="status" aria-live="polite" className={status === 'error' ? 'err' : 'ok'}>
          {status === 'done' && 'Message sent. I will reply by email.'}
          {status === 'error' && (endpoint ? 'The message did not send. Try again or email me directly.' : 'The form is not connected yet. Set VITE_FORM_ENDPOINT, or email me directly.')}
        </p>
      </form>
    </section>
  );
}
