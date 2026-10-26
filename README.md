# Frontend Developer Portfolio (React + Vite)

A fully animated **black & red** developer portfolio built with **HTML, CSS, JavaScript and React**.
There is no contact form — visitors reach you through a `mailto:` link.

## Sections
Home · About · Skills · Projects · Experience & Education · Contact (email)

## Animations
Loader screen · glitch text · typewriter roles · particle network · custom cursor · scroll progress bar ·
scroll-reveal · animated counters · skill bars · skills marquee · 3D tilt project cards · timeline · mobile menu

## Run it
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in /dist
npm run preview
```

## Make it yours
1. Open `src/data.js` and replace your name, **email**, roles, skills, projects, experience and social links.
2. Change colours in `src/styles/global.css` (`:root` variables, e.g. `--red`).
3. Put your résumé PDF in a `public/` folder and set `resumeUrl: "/resume.pdf"` in `data.js`.

## Deploy
Upload the `dist/` folder to Netlify, Vercel, GitHub Pages, Cloudflare Pages, etc.

## Structure
```
index.html
src/
  main.jsx  App.jsx  data.js
  components/  Loader Particles Cursor Navbar Hero About Skills Projects Experience Contact Footer Reveal SectionTitle
  hooks/       useInView.js  useTyping.js
  styles/      global.css
```
