# Portfolio

## Run locally
    npm install
    cp .env.example .env   # then fill in values
    npm run dev            # http://localhost:5173
    npm run build && npm run preview

## Add your content
- `src/data/projects.js`: your name, email, links and projects. Put screenshots in `public/images/` and set `image`, `width`, `height`.
- `src/components/About.jsx`: replace the placeholder copy.
- Set `site.available` to true only when it is accurate.

## Contact form
Create a form at formspree.io (or similar), then set `VITE_FORM_ENDPOINT` in `.env` and in Vercel. Until then the form shows an honest "not connected" message.

## Deploy
1. `git init && git add . && git commit -m "Initial portfolio"`, create a GitHub repo and push.
2. In Vercel: Add New Project, import the repo (Vite is auto-detected).
3. Add `VITE_FORM_ENDPOINT` and `VITE_CONTACT_EMAIL` under Environment Variables, then deploy.

## Test checklist (1440, 1024, 768, 390, 320 px)
- [ ] No horizontal scroll; menu opens and closes; anchors scroll correctly
- [ ] Every project has a real image, alt text, working live/case study links
- [ ] Form: invalid fields show errors; success and failure messages appear
- [ ] Keyboard: tab order, visible focus, skip link
- [ ] `npm run build` passes; run Lighthouse on the Vercel URL

## Add your Upwork link
In `src/data/projects.js`, put your profile URL in the Upwork `href`. It appears in the footer once filled.
