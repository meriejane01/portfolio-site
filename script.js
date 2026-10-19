/* ===== EDIT YOUR CONTENT HERE ===== */
// Replace placeholders with real, verified info. Set image to "assets/images/your-file.webp".
// Leave liveUrl "" if there is no public link. Remove placeholder:true once real.
const projects = [
  { title: "Project name 01", category: "Real Estate", filter: "Business", description: "Replace with a short, specific description of the website and its purpose.", role: "Your role and contributions", technologies: ["WordPress", "Elementor"], image: "", liveUrl: "", featured: true, placeholder: true },
  { title: "Project name 02", category: "E-commerce", filter: "E-commerce", description: "Replace with a short, specific description of the website and its purpose.", role: "Your role and contributions", technologies: ["WordPress", "WooCommerce", "CSS"], image: "", liveUrl: "", featured: true, placeholder: true },
  { title: "Project name 03", category: "Landing Page", filter: "WordPress", description: "Replace with a short, specific description of the website and its purpose.", role: "Your role and contributions", technologies: ["HTML", "CSS", "JavaScript"], image: "", liveUrl: "", featured: false, placeholder: true }
];
const skills = {
  "Core Frontend": ["HTML5", "CSS3", "JavaScript"],
  "CMS and Builders": ["WordPress", "Elementor", "Elementor Pro", "Gutenberg"],
  "Website Functionality": ["Responsive web design", "Custom CSS and JavaScript", "Dynamic WordPress content", "Custom post types and taxonomies", "Custom fields", "WooCommerce", "Plugin integration", "Website debugging and optimization"],
  "Design and Development Workflow": ["Figma design implementation", "Browser developer tools", "Git and GitHub"]
};
const jobs = [
  { title: "Job title", company: "Company name", period: "Start – End", duties: "Main responsibilities. Replace with real details.", tech: ["WordPress", "Elementor"] }
];
const links = [
  { label: "Email", url: "mailto:you@example.com" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/your-profile" },
  { label: "GitHub", url: "https://github.com/your-username" }
];
const FILTERS = ["All", "WordPress", "Business", "E-commerce"];
/* ===== END EDIT AREA ===== */

const $ = (s) => document.querySelector(s);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; };
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const sorted = () => [...projects].sort((a, b) => b.featured - a.featured);

function shot(p, lazy) {
  if (p.image) return `<img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" width="1600" height="1000" ${lazy ? 'loading="lazy"' : ""}>`;
  return `<div class="ph">Placeholder: add a screenshot for ${esc(p.title)}</div>`;
}
function renderProjects(filter = "All") {
  const box = $("#projects"); box.innerHTML = "";
  sorted().filter((p) => filter === "All" || p.filter === filter).forEach((p, i) => {
    const art = el("article", "project");
    art.innerHTML = `<button class="shot" aria-label="View details for ${esc(p.title)}">${shot(p, i > 0)}</button>
      <div class="info"><p class="meta">${esc(p.category)}${p.placeholder ? " (placeholder)" : ""}</p><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p>
      <p class="meta">${esc(p.role)}</p><ul class="tags">${p.technologies.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
      <button class="more">View details</button></div>`;
    art.querySelectorAll(".shot,.more").forEach((b) => b.addEventListener("click", () => openModal(p)));
    box.append(art);
  });
}
function renderFilters() {
  const box = $("#filters");
  FILTERS.forEach((f) => {
    const b = el("button", "", f); b.type = "button"; b.setAttribute("aria-pressed", f === "All");
    b.addEventListener("click", () => { box.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b)); renderProjects(f); });
    box.append(b);
  });
}
const modal = $("#modal");
function openModal(p) {
  const live = p.liveUrl ? `<a class="btn solid" href="${esc(p.liveUrl)}" target="_blank" rel="noopener noreferrer">Visit live website (opens in new tab)</a>` : `<p class="meta">No public link for this project.</p>`;
  $("#mBody").innerHTML = `<p class="meta">${esc(p.category)}</p><h3 id="mTitle">${esc(p.title)}</h3><div class="shot">${shot(p, false)}</div>
    <p>${esc(p.description)}</p><p><strong>Role:</strong> ${esc(p.role)}</p><ul class="tags">${p.technologies.map((t) => `<li>${esc(t)}</li>`).join("")}</ul><p>${live}</p>`;
  modal.showModal();
}
$("#mClose").addEventListener("click", () => modal.close());
modal.addEventListener("click", (e) => { if (e.target === modal) modal.close(); });

function renderStatic() {
  const sk = $("#skillList");
  Object.entries(skills).forEach(([g, items]) => sk.append(el("div", "group", `<h3>${esc(g)}</h3><ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`)));
  jobs.forEach((j) => $("#jobs").append(el("li", "", `<h3>${esc(j.title)}, ${esc(j.company)}</h3><p class="meta">${esc(j.period)}</p><p>${esc(j.duties)}</p><ul class="tags">${j.tech.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>`)));
  links.forEach((l) => {
    const a = el("a", "btn", esc(l.label)); a.href = l.url;
    if (!l.url.startsWith("mailto:")) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    $("#links").append(a);
  });
  $("#year").textContent = new Date().getFullYear();
}
function initNav() {
  const burger = $("#burger"), menu = $("#menu");
  const set = (open) => { menu.classList.toggle("open", open); burger.setAttribute("aria-expanded", open); burger.setAttribute("aria-label", open ? "Close menu" : "Open menu"); };
  burger.addEventListener("click", () => set(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => set(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
}
function initCursor() {
  if (!matchMedia("(hover:hover) and (pointer:fine)").matches) return;
  const c = $("#cursor");
  document.addEventListener("mousemove", (e) => {
    c.style.left = e.clientX + "px"; c.style.top = e.clientY + "px";
    c.classList.toggle("on", !!e.target.closest(".shot") && !modal.open);
  });
}
renderFilters(); renderProjects(); renderStatic(); initNav(); initCursor();
