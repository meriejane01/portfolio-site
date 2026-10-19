/* ==========================================================
   EDIT THIS BLOCK: all site content lives here.
   Leave a field out (or set it to "") and it simply won't show.
   ========================================================== */
const SITE = {
  name: "Merie Jane C. Lamata",
  tagline: "Web developer building responsive WordPress and Elementor websites.",
  email: "meriejane111@gmail.com",
  availability: "Taking new projects. I work part-time, about 3 to 4 hours a day, so I can fit small and mid-size jobs and ongoing site maintenance.",
  links: [
    { label: "Upwork", url: "" } // paste your Upwork profile link between the quotes
  ],
  photo: "",
  formEndpoint: "",
  about: [
    "I build and customize websites, mostly with WordPress and Elementor, plus HTML, CSS and JavaScript when a project needs more control. I like turning a design into a site that works well on every screen size, and tracking down the layout or styling bug that’s been bothering everyone.",
    "I’ve worked on business sites, real estate sites, landing pages and online stores. I pay attention to the details, and I keep learning new tools and ways to make my workflow faster."
  ],
  skills: {
    "Web development": ["HTML5", "CSS3", "JavaScript"],
    "CMS and website builders": ["WordPress", "Elementor", "Elementor Pro", "Gutenberg"],
    "Functionality and customization": ["Responsive web design", "Custom CSS and JavaScript", "WordPress customization", "WooCommerce", "Layout debugging", "Third-party plugin integration"],
    "Tools and workflow": ["Figma", "Browser developer tools"]
  },
  jobs: [
    { title: "Web Developer", company: "Your company name", dates: "Month Year – Present",
      points: ["Built pages for client websites in collaboration with a team (Ashford Homes Ohio, J&K Custom Homes, Futurethink).", "Replace or add your own responsibilities."],
      tech: "WordPress, Elementor Pro, CSS" }
  ],
  /* Add screenshots: set "image" to a file path like "images/ashford-home.jpg". */
  projects: [
    { name: "Ashford Homes Ohio", type: "Real estate / homes", shape: "wide",
      image: "", url: "https://www.ashfordhomesohio.com/", caseStudy: "", host: "ashfordhomesohio.com",
      description: "A live company website built as a team project. I built four of its pages.",
      tech: ["WordPress", "Elementor Pro"],
      did: ["Homepage", "About Us page", "Process page", "VIP Partner Incentive page"] },
    { name: "J&K Custom Homes", type: "Real estate / homes", shape: "narrow",
      image: "", url: "https://www.jkcustomhomes.net/", caseStudy: "", host: "jkcustomhomes.net",
      description: "A live custom home builder website made as a team project. I built four of its pages.",
      tech: ["WordPress", "Elementor Pro"],
      did: ["Homepage", "Custom Home Builder page", "Areas We Build listing page", "Homes For Sale page"] },
    { name: "Futurethink: Navigate Change", type: "Business website", shape: "wide",
      image: "", url: "https://futurethink.com/navigate-change/", caseStudy: "", host: "futurethink.com",
      description: "A page on the Futurethink website, built as part of a team project.",
      tech: ["WordPress", "Elementor Pro"],
      did: ["Built the Navigate Change page (desktop and mobile layouts)"] }
  ]
};

/* ---------- rendering (no need to edit below) ---------- */
const $ = (s, r = document) => r.querySelector(s);
const el = (tag, attrs = {}, kids = []) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) k === "text" ? n.textContent = v : n.setAttribute(k, v);
  [].concat(kids).forEach(c => c && n.append(c));
  return n;
};
document.querySelectorAll("[data-bind]").forEach(n => n.textContent = SITE[n.dataset.bind]);
document.title = SITE.name + " – Web Developer";
$("#year").textContent = new Date().getFullYear();

function frame(p, lazy, tall) {
  const bar = el("div", { class: "frame-bar" }, [el("i"), el("i"), el("i"), el("span", { text: p.host || "your-project.com" })]);
  const shot = el("div", { class: "shot" + (tall ? " tall" : "") });
  if (p.image) {
    shot.append(el("img", { src: p.image, alt: "Screenshot of " + p.name, width: 1600, height: 1000, ...(lazy ? { loading: "lazy" } : {}) }));
  } else {
    const ph = el("div", { class: "ph", role: "img", "aria-label": "Placeholder for " + p.name + " screenshot" }, [el("b"), el("u"), el("em"), el("em"), el("small", { text: "Placeholder screenshot" })]);
    shot.append(ph);
  }
  return [bar, shot];
}

// hero preview uses the first project
const hf = $("#hero-frame");
frame(SITE.projects[0], false).forEach(n => hf.append(n));

// projects
const list = $("#project-list");
SITE.projects.forEach(p => {
  const f = el("div", { class: "frame" }); frame(p, true).forEach(n => f.append(n));
  const info = el("div", { class: "info" }, [
    el("p", { class: "meta", text: p.type }),
    el("h3", { text: p.name }),
    el("p", { text: p.description, style: "margin-top:.75rem" }),
    el("ul", { class: "tags", "aria-label": "Technologies" }, (p.tech || []).map(t => el("li", { text: t }))),
    p.did && p.did.length ? el("h4", { text: "What I did" }) : null,
    p.did && p.did.length ? el("ul", { class: "did" }, p.did.map(d => el("li", { text: d }))) : null,
    (p.url || p.caseStudy) ? el("div", { class: "links" }, [
      p.url ? el("a", { href: p.url, target: "_blank", rel: "noopener noreferrer", text: "Visit live site" }) : null,
      p.caseStudy ? el("a", { href: p.caseStudy, text: "Project details" }) : null
    ]) : null
  ]);
  list.append(el("article", { class: "project" + (p.shape === "narrow" ? " narrow" : "") }, [el("div", { class: "vis" }, f), info]));
});

// about
SITE.about.forEach(t => $("#about-text").append(el("p", { text: t })));
if (SITE.photo) { const p = $("#portrait"); p.textContent = ""; p.append(el("img", { src: SITE.photo, alt: "Portrait of " + SITE.name, loading: "lazy" })); }

// skills
Object.entries(SITE.skills).forEach(([cat, items]) =>
  $("#skill-list").append(el("div", {}, [el("h3", { text: cat }), el("ul", {}, items.map(i => el("li", { text: i })))])));

// jobs
SITE.jobs.forEach(j => $("#job-list").append(el("div", { class: "job" }, [
  el("div", {}, [el("h3", { text: j.title }), el("p", { text: j.company, style: "margin:.25rem 0 0" }), el("p", { class: "when", text: j.dates })]),
  el("div", {}, [el("ul", {}, j.points.map(x => el("li", { text: x }))), j.tech ? el("p", { class: "when", text: "Technologies: " + j.tech }) : null])
])));

// contact links
const cl = $("#contact-links");
if (SITE.availability) $("#availability").textContent = SITE.availability;
cl.append(el("li", {}, el("a", { href: "mailto:" + SITE.email, text: SITE.email })));
SITE.links.filter(l => l.url).forEach(l => cl.append(el("li", {}, el("a", { href: l.url, target: "_blank", rel: "noopener noreferrer", text: l.label }))));

// mobile menu
const burger = $(".burger"), menu = $("#menu");
function setMenu(open) {
  menu.classList.toggle("open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}
burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
menu.addEventListener("click", e => { if (e.target.closest("a")) setMenu(false); });
document.addEventListener("keydown", e => { if (e.key === "Escape") { setMenu(false); burger.focus(); } });
matchMedia("(min-width:860px)").addEventListener("change", e => e.matches && setMenu(false));

// contact form
const form = $("#form"), status = $("#status");
const rules = {
  name: v => v.trim() ? "" : "Enter your name.",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? "" : "Enter a valid email address, like name@example.com.",
  subject: v => v.trim() ? "" : "Enter a subject.",
  message: v => v.trim().length >= 10 ? "" : "Write a message of at least 10 characters."
};
function validate() {
  let ok = true;
  for (const k in rules) {
    const i = form.elements[k], msg = rules[k](i.value);
    $('[data-for="' + k + '"]').textContent = msg;
    i.setAttribute("aria-invalid", !!msg);
    if (msg && ok) { i.focus(); ok = false; }
  }
  return ok;
}
function say(t) { status.textContent = t; status.classList.add("show"); }
form.addEventListener("submit", async e => {
  e.preventDefault();
  status.classList.remove("show");
  if (form.elements.website.value) return;
  if (!validate()) return say("Fix the highlighted fields and send again.");
  const d = Object.fromEntries(new FormData(form));
  if (SITE.formEndpoint) {
    try {
      const r = await fetch(SITE.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
      if (!r.ok) throw 0;
      form.reset(); say("Message sent. I’ll reply by email.");
    } catch { say("The message didn’t send. Email me directly at " + SITE.email + "."); }
  } else {
    location.href = "mailto:" + SITE.email + "?subject=" + encodeURIComponent(d.subject) + "&body=" + encodeURIComponent(d.message + "\n\n" + d.name + " (" + d.email + ")");
    say("Your email app should open with the message filled in. If it doesn’t, email " + SITE.email + " directly.");
  }
});
