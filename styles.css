:root {
  --bg: #f6efe3;
  --bg-deep: #11352f;
  --bg-panel: rgba(10, 32, 29, 0.8);
  --panel-light: rgba(255, 249, 239, 0.82);
  --ink: #132220;
  --ink-soft: #4f605d;
  --line: rgba(19, 34, 32, 0.12);
  --white: #ffffff;
  --accent: #c98231;
  --accent-strong: #9c5a10;
  --accent-soft: rgba(201, 130, 49, 0.14);
  --shadow-lg: 0 30px 80px rgba(19, 34, 32, 0.18);
  --shadow-md: 0 18px 40px rgba(19, 34, 32, 0.12);
  --radius-xl: 32px;
  --radius-lg: 24px;
  --radius-md: 18px;
  --max-width: 1180px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  color: var(--ink);
  background:
    radial-gradient(circle at top left, rgba(201, 130, 49, 0.12), transparent 28%),
    radial-gradient(circle at bottom right, rgba(17, 53, 47, 0.16), transparent 22%),
    linear-gradient(180deg, #fff9ef 0%, #f6efe3 48%, #f3eadc 100%);
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select {
  font: inherit;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.container {
  width: min(calc(100% - 2rem), var(--max-width));
  margin: 0 auto;
}

.page-glow {
  position: fixed;
  z-index: -1;
  border-radius: 999px;
  filter: blur(12px);
  opacity: 0.8;
}

.page-glow-one {
  top: 90px;
  right: -80px;
  width: 260px;
  height: 260px;
  background: rgba(201, 130, 49, 0.16);
}

.page-glow-two {
  bottom: 120px;
  left: -90px;
  width: 320px;
  height: 320px;
  background: rgba(17, 53, 47, 0.12);
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  padding: 1rem 0 0;
}

.nav-shell {
  width: min(calc(100% - 2rem), var(--max-width));
  margin: 0 auto;
  padding: 1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  backdrop-filter: blur(18px);
  background: rgba(255, 249, 239, 0.72);
  box-shadow: 0 10px 35px rgba(19, 34, 32, 0.08);
}

.brand {
  display: inline-flex;
  align-items: center;
  min-width: 0;
}

.brand-logo {
  display: block;
  width: clamp(180px, 22vw, 250px);
  height: auto;
}

.hero h1,
.section h2,
.panel-card h2,
.service-card h3,
.destination-card h3,
.process-card h3,
.testimonial-card footer,
.contact-card a,
.contact-card p {
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
}

.site-nav {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  font-size: 0.95rem;
}

.site-nav a {
  color: var(--ink-soft);
  transition: color 180ms ease, transform 180ms ease;
}

.site-nav a:hover,
.site-nav a:focus-visible,
.inline-link:hover,
.inline-link:focus-visible {
  color: var(--accent-strong);
}

.nav-cta {
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: rgba(17, 53, 47, 0.08);
  color: var(--ink);
}

.nav-toggle {
  display: none;
  width: 48px;
  height: 48px;
  padding: 0;
  border: 0;
  border-radius: 14px;
  background: rgba(17, 53, 47, 0.08);
  cursor: pointer;
}

.nav-toggle span {
  display: block;
  width: 18px;
  height: 2px;
  margin: 4px auto;
  background: var(--ink);
  border-radius: 999px;
}

.hero {
  padding: 6rem 0 2rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(320px, 0.85fr);
  gap: 1.5rem;
  align-items: stretch;
}

.hero-copy {
  position: relative;
  padding: 3rem;
  border-radius: var(--radius-xl);
  overflow: hidden;
  color: var(--white);
  background:
    linear-gradient(135deg, rgba(6, 21, 19, 0.35), rgba(6, 21, 19, 0.75)),
    linear-gradient(120deg, rgba(201, 130, 49, 0.18), transparent 45%),
    url("old/BackGround.jpg") center/cover no-repeat;
  box-shadow: var(--shadow-lg);
}

.hero-copy::after {
  content: "";
  position: absolute;
  inset: auto -30px -30px auto;
  width: 170px;
  height: 170px;
  border-radius: 28px;
  background: linear-gradient(135deg, rgba(201, 130, 49, 0.36), rgba(255, 255, 255, 0.05));
  transform: rotate(14deg);
}

.eyebrow,
.section-tag,
.card-kicker {
  margin: 0 0 0.9rem;
  color: #f0d8b6;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.hero h1 {
  margin: 0;
  max-width: 12ch;
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 0.96;
  letter-spacing: -0.04em;
}

.hero-text {
  max-width: 58ch;
  margin: 1.4rem 0 0;
  font-size: 1.02rem;
  color: rgba(255, 249, 239, 0.9);
}

.hero-actions,
.contact-actions,
.location-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
}

.hero-actions {
  margin-top: 2rem;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 52px;
  padding: 0.85rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 700;
  transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
}

.button:hover,
.button:focus-visible,
.site-nav a:hover,
.site-nav a:focus-visible {
  transform: translateY(-1px);
}

.button-primary {
  background: linear-gradient(135deg, var(--accent), #e9c18b);
  color: var(--white);
  box-shadow: 0 12px 28px rgba(156, 90, 16, 0.25);
}

.button-secondary {
  border-color: rgba(255, 255, 255, 0.28);
  background: rgba(255, 255, 255, 0.08);
  color: var(--white);
}

.button-block {
  width: 100%;
}

.hero-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 2rem;
}

.hero-pills span,
.route-strip-track span {
  padding: 0.7rem 0.95rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.16);
  font-size: 0.88rem;
}

.hero-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.2rem;
}

.hero-metrics article {
  padding: 1rem;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
}

.hero-metrics strong {
  display: block;
  font-size: 1.35rem;
}

.hero-metrics span {
  display: block;
  margin-top: 0.2rem;
  font-size: 0.84rem;
  color: rgba(255, 249, 239, 0.8);
}

.hero-panel {
  display: grid;
  gap: 1rem;
}

.panel-card {
  border-radius: var(--radius-xl);
  padding: 1.65rem;
  background: var(--panel-light);
  border: 1px solid rgba(255, 255, 255, 0.35);
  box-shadow: var(--shadow-md);
}

.panel-card h2 {
  margin: 0;
  font-size: 1.9rem;
  line-height: 1;
}

.panel-card p {
  margin: 0.65rem 0 0;
  color: var(--ink-soft);
}

.card-kicker,
.section-tag {
  color: var(--accent-strong);
}

.inquiry-form {
  display: grid;
  gap: 0.85rem;
  margin-top: 1.4rem;
}

.inquiry-form label {
  font-size: 0.87rem;
  font-weight: 700;
  color: var(--ink);
}

.inquiry-form input,
.inquiry-form select {
  width: 100%;
  min-height: 50px;
  padding: 0.85rem 1rem;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.82);
  color: var(--ink);
  outline: none;
}

.inquiry-form input:focus,
.inquiry-form select:focus {
  border-color: rgba(201, 130, 49, 0.55);
  box-shadow: 0 0 0 4px rgba(201, 130, 49, 0.12);
}

.location-card {
  position: relative;
  min-height: 230px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  color: var(--white);
  background:
    linear-gradient(180deg, rgba(8, 23, 20, 0.14), rgba(8, 23, 20, 0.82)),
    url("old/Select.jpg") center/cover no-repeat;
}

.location-card p,
.location-card a {
  color: rgba(255, 249, 239, 0.88);
}

.inline-link {
  font-weight: 700;
}

.route-strip {
  padding: 0 0 1rem;
}

.route-strip-track {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.route-strip-track span {
  background: rgba(17, 53, 47, 0.07);
  border-color: rgba(17, 53, 47, 0.08);
}

.section {
  padding: 2rem 0 5rem;
}

.section-tinted {
  position: relative;
}

.section-tinted::before {
  content: "";
  position: absolute;
  inset: 1rem 0;
  background: linear-gradient(180deg, rgba(17, 53, 47, 0.05), rgba(201, 130, 49, 0.06));
  z-index: -1;
}

.section-heading {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.8rem;
}

.section h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 0.98;
  color: var(--bg-deep);
}

.section-heading p,
.section-text {
  max-width: 56ch;
  margin: 0.9rem 0 0;
  color: var(--ink-soft);
}

.split-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 420px);
  gap: 1.5rem;
  align-items: stretch;
}

.story-card {
  min-height: 360px;
  border-radius: var(--radius-xl);
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(11, 30, 27, 0.14), rgba(11, 30, 27, 0.8)),
    linear-gradient(135deg, rgba(201, 130, 49, 0.2), transparent),
    url("old/Select.jpg") center/cover no-repeat;
  box-shadow: var(--shadow-md);
}

.story-overlay {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.7rem;
}

.story-list {
  margin: 0.75rem 0 0;
  padding-left: 1.2rem;
  color: rgba(255, 249, 239, 0.9);
}

.story-list li + li {
  margin-top: 0.55rem;
}

.card-grid,
.destination-grid,
.process-grid,
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.2rem;
}

.service-card,
.destination-card,
.process-card,
.testimonial-card,
.contact-card {
  position: relative;
  overflow: hidden;
  border-radius: var(--radius-lg);
  padding: 1.45rem;
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(255, 255, 255, 0.42);
  box-shadow: var(--shadow-md);
}

.service-card::after,
.destination-card::after,
.process-card::after {
  content: "";
  position: absolute;
  inset: auto -36px -36px auto;
  width: 110px;
  height: 110px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(201, 130, 49, 0.18), rgba(17, 53, 47, 0.05));
  transform: rotate(24deg);
}

.service-index,
.process-card span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 56px;
  height: 34px;
  padding: 0 0.8rem;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.service-card h3,
.destination-card h3,
.process-card h3 {
  margin: 1rem 0 0.6rem;
  font-size: 1.45rem;
  line-height: 1.05;
  color: var(--bg-deep);
}

.service-card p,
.destination-card p,
.process-card p,
.testimonial-card p,
.contact-card p {
  position: relative;
  z-index: 1;
  margin: 0;
  color: var(--ink-soft);
}

.testimonial-card {
  padding-top: 2rem;
}

.testimonial-card::before {
  content: '"';
  position: absolute;
  top: -14px;
  left: 16px;
  color: rgba(201, 130, 49, 0.22);
  font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif;
  font-size: 5rem;
  line-height: 1;
}

.testimonial-card footer {
  margin-top: 1.1rem;
  font-size: 1.1rem;
  color: var(--bg-deep);
}

.contact-section {
  padding-bottom: 6rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
  gap: 1.5rem;
  align-items: start;
}

.contact-card {
  background: linear-gradient(180deg, rgba(17, 53, 47, 0.96), rgba(17, 53, 47, 0.84));
  color: var(--white);
}

.contact-card a,
.contact-card p {
  color: rgba(255, 249, 239, 0.92);
}

.contact-row + .contact-row {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
}

.contact-row span {
  display: block;
  margin-bottom: 0.4rem;
  color: #f0d8b6;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.contact-actions {
  margin-top: 1.5rem;
}

.site-footer {
  padding: 0 0 2rem;
}

.footer-shell {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.5rem;
  border-radius: 26px;
  background: rgba(17, 53, 47, 0.08);
  color: var(--ink-soft);
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 560ms ease, transform 560ms ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 980px) {
  .hero-grid,
  .split-layout,
  .contact-grid,
  .card-grid,
  .destination-grid,
  .process-grid,
  .testimonial-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hero-grid,
  .split-layout,
  .contact-grid {
    align-items: start;
  }
}

@media (max-width: 760px) {
  .site-header {
    padding-top: 0.75rem;
  }

  .nav-shell {
    position: relative;
    border-radius: 28px;
    padding: 0.85rem 1rem;
  }

  .nav-toggle {
    display: inline-block;
  }

  .site-nav {
    position: absolute;
    top: calc(100% + 0.6rem);
    left: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: stretch;
    padding: 1rem;
    border-radius: 24px;
    background: rgba(255, 249, 239, 0.96);
    box-shadow: var(--shadow-md);
  }

  .site-nav.is-open {
    display: flex;
  }

  .hero {
    padding-top: 5rem;
  }

  .brand-logo {
    width: min(190px, 100%);
  }

  .hero-copy,
  .panel-card {
    padding: 1.5rem;
  }

  .hero h1 {
    max-width: none;
    font-size: clamp(2.4rem, 11vw, 4rem);
  }

  .hero-metrics {
    grid-template-columns: 1fr;
  }

  .hero-grid,
  .split-layout,
  .contact-grid,
  .card-grid,
  .destination-grid,
  .process-grid,
  .testimonial-grid {
    grid-template-columns: 1fr;
  }

  .section-heading,
  .footer-shell {
    display: block;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .reveal {
    opacity: 1;
    transform: none;
  }
}
