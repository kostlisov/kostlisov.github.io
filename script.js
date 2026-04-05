/* =========================
   Base + Design System
========================= */
:root {
  --primary: #6366f1;          /* indigo */
  --primary-hover: #4f46e5;
  --accent: #22c55e;           /* optional green accent */
  --bg: #f8fafc;
  --bg-2: #eef2ff;
  --text: #0f172a;
  --muted: #64748b;
  --white: #ffffff;
  --border: #e2e8f0;
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-lg: 0 16px 40px rgba(2, 6, 23, 0.18);
  --radius-lg: 18px;
  --radius-md: 14px;
  --radius-sm: 10px;

  --container: 1120px;

  --focus: 0 0 0 3px rgba(99, 102, 241, 0.25);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  background: radial-gradient(1200px 500px at 20% -10%, rgba(99,102,241,0.18), transparent 55%),
              radial-gradient(800px 400px at 95% 10%, rgba(79,70,229,0.12), transparent 55%),
              var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a { color: inherit; }
img { max-width: 100%; }

.container {
  max-width: var(--container);
  margin: 0 auto;
  padding: 0 20px;
}

/* Accessibility helpers */
.skip-link {
  position: absolute;
  left: -999px;
  top: 10px;
  background: var(--white);
  border: 1px solid var(--border);
  padding: 10px 12px;
  border-radius: 10px;
  box-shadow: var(--shadow-sm);
  z-index: 9999;
}
.skip-link:focus { left: 12px; outline: none; box-shadow: var(--focus), var(--shadow-sm); }

.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0,0,0,0);
  border: 0;
}

.muted { color: var(--muted); }
.small { font-size: 0.92rem; }

/* =========================
   Buttons
========================= */
button {
  border: none;
  cursor: pointer;
  transition: transform .2s ease, background-color .2s ease, box-shadow .2s ease, opacity .2s ease;
  font: inherit;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 12px;
  padding: 10px 14px;
  text-decoration: none;
  border: 1px solid transparent;
  user-select: none;
}

.btn:focus-visible { outline: none; box-shadow: var(--focus); }

.btn-primary {
  background: linear-gradient(180deg, var(--primary), var(--primary-hover));
  color: var(--white);
  box-shadow: 0 10px 20px rgba(99,102,241,0.25);
}
.btn-primary:hover { transform: translateY(-1px); opacity: 0.98; }

.btn-secondary {
  background: rgba(99,102,241,0.08);
  border-color: rgba(99,102,241,0.18);
  color: var(--text);
}
.btn-secondary:hover { transform: translateY(-1px); background: rgba(99,102,241,0.12); }

.btn-ghost {
  background: transparent;
  border-color: var(--border);
  color: var(--text);
}
.btn-ghost:hover { background: rgba(2,6,23,0.03); }

.btn-lg { padding: 14px 18px; border-radius: 14px; font-weight: 700; }
.btn-small { padding: 8px 12px; border-radius: 12px; font-weight: 600; }

/* =========================
   Header
========================= */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--border);
}

.header-content {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 230px;
}

.logo {
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: rgba(99,102,241,0.12);
  border: 1px solid rgba(99,102,241,0.18);
  display: grid;
  place-items: center;
  color: var(--primary);
  font-size: 22px;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}
.brand-name { font-weight: 800; letter-spacing: 0.2px; }
.brand-subtitle { font-size: 0.85rem; color: var(--muted); }

.header-nav {
  display: none; /* mobile-first */
  gap: 14px;
}
.nav-link {
  text-decoration: none;
  color: var(--muted);
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 10px;
}
.nav-link:hover { background: rgba(2,6,23,0.03); color: var(--text); }

.header-actions { display: flex; gap: 10px; }

/* =========================
   Hero
========================= */
.hero {
  padding: 52px 0 24px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 26px;
  align-items: center;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 999px;
  border: 1px solid rgba(99,102,241,0.18);
  background: rgba(255,255,255,0.65);
  box-shadow: var(--shadow-sm);
  color: var(--text);
  font-weight: 600;
  width: fit-content;
}

.hero h1 {
  margin: 14px 0 10px;
  font-size: clamp(2.05rem, 4.2vw, 3.2rem);
  line-height: 1.12;
  letter-spacing: -0.02em;
}

.lead {
  margin: 0 0 18px;
  color: var(--muted);
  max-width: 62ch;
  font-size: 1.05rem;
}

.hero-cta {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
}

.trust-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 18px;
  max-width: 560px;
}

.trust-item {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 12px 12px;
  box-shadow: var(--shadow-sm);
}
.trust-item strong { display: block; font-size: 1.05rem; }
.trust-item span { color: var(--muted); font-size: 0.9rem; }

/* Hero visual */
.hero-visual { display: grid; place-items: center; }
.glass-card {
  width: min(520px, 100%);
  border-radius: 22px;
  border: 1px solid rgba(226,232,240,0.9);
  background: linear-gradient(180deg, rgba(255,255,255,0.82), rgba(255,255,255,0.62));
  box-shadow: var(--shadow-lg);
  overflow: hidden;
}

.glass-top {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(226,232,240,0.9);
}
.dots { display: inline-flex; gap: 6px; }
.dots span {
  width: 10px; height: 10px; border-radius: 999px;
  background: rgba(15,23,42,0.10);
}
.glass-title { color: var(--muted); font-weight: 600; font-size: 0.92rem; }

.mini-chat {
  padding: 16px;
  background: radial-gradient(500px 280px at 30% 0%, rgba(99,102,241,0.18), transparent 60%),
              rgba(248,250,252,0.85);
}

.mini-msg {
  max-width: 85%;
  padding: 10px 12px;
  border-radius: 14px;
  font-size: 0.95rem;
  border: 1px solid rgba(226,232,240,0.9);
  margin-bottom: 12px;
}

.mini-msg.user {
  margin-left: auto;
  background: linear-gradient(180deg, var(--primary), var(--primary-hover));
  color: var(--white);
  border-color: rgba(99,102,241,0.25);
  border-bottom-right-radius: 6px;
}

.mini-msg.bot {
  background: rgba(255,255,255,0.95);
  color: var(--text);
  border-bottom-left-radius: 6px;
}

.mini-sources {
  margin-top: 6px;
  font-size: 0.82rem;
  color: var(--muted);
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}
.mini-sources a {
  text-decoration: none;
  color: var(--primary);
  background: rgba(99,102,241,0.10);
  padding: 2px 8px;
  border-radius: 999px;
}

.mini-typing {
  width: 64px;
  display: flex;
  gap: 6px;
  padding: 10px 12px;
  border-radius: 14px;
  border: 1px solid rgba(226,232,240,0.9);
  background: rgba(255,255,255,0.95);
}
.mini-typing span {
  width: 7px; height: 7px; border-radius: 50%;
  background: rgba(100,116,139,0.8);
  animation: typing 1.4s infinite ease-in-out both;
}
.mini-typing span:nth-child(1) { animation-delay: -0.32s; }
.mini-typing span:nth-child(2) { animation-delay: -0.16s; }

.glass-bottom {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 14px 16px;
  border-top: 1px solid rgba(226,232,240,0.9);
  background: rgba(255,255,255,0.7);
}
.chip {
  display: inline-flex;
  gap: 8px;
  align-items: center;
  padding: 8px 10px;
  border-radius: 999px;
  border: 1px solid rgba(226,232,240,0.9);
  background: rgba(248,250,252,0.9);
  color: var(--muted);
  font-weight: 600;
  font-size: 0.9rem;
}

/* =========================
   Sections / Features / FAQ
========================= */
.section { padding: 42px 0; }
.section-alt {
  background: linear-gradient(180deg, rgba(238,242,255,0.55), rgba(248,250,252,0.2));
  border-top: 1px solid rgba(226,232,240,0.8);
  border-bottom: 1px solid rgba(226,232,240,0.8);
}

.section-head {
  text-align: center;
  margin-bottom: 22px;
}
.section-head h2 {
  margin: 0 0 10px;
  font-size: clamp(1.5rem, 3vw, 2.15rem);
  letter-spacing: -0.02em;
}
.section-head p { margin: 0 auto; color: var(--muted); max-width: 70ch; }

.features {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 18px;
}

.feature-card {
  background: rgba(255,255,255,0.82);
  border: 1px solid rgba(226,232,240,0.9);
  border-radius: var(--radius-lg);
  padding: 18px;
  box-shadow: var(--shadow-sm);
  text-align: left;
}
.feature-card:hover { transform: translateY(-2px); }

.icon-wrapper {
  width: 48px; height: 48px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: rgba(99,102,241,0.10);
  border: 1px solid rgba(99,102,241,0.18);
  color: var(--primary);
  font-size: 24px;
  margin-bottom: 12px;
}

.feature-card h3 { margin: 0 0 8px; }
.feature-card p { margin: 0; color: var(--muted); }

/* FAQ */
.faq { max-width: 900px; }
.faq-list { margin-top: 18px; display: grid; gap: 12px; }

.faq-item {
  background: rgba(255,255,255,0.86);
  border: 1px solid rgba(226,232,240,0.95);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  overflow: hidden;
}

.faq-item summary {
  list-style: none;
  cursor: pointer;
  padding: 16px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  font-weight: 700;
}
.faq-item summary::-webkit-details-marker { display: none; }

.faq-item summary i { transition: transform .2s ease; color: var(--muted); }
.faq-item[open] summary i { transform: rotate(180deg); }

.faq-answer {
  padding: 0 16px 16px;
  color: var(--muted);
}
.faq-answer p { margin: 0 0 10px; }

/* =========================
   Footer
========================= */
.site-footer {
  padding: 28px 0;
  margin-top: 12px;
  background: rgba(255,255,255,0.72);
  border-top: 1px solid var(--border);
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  justify-content: space-between;
}

.footer-brand {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
}
.footer-brand i { color: var(--primary); font-size: 1.2rem; }

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}
.footer-links a {
  text-decoration: none;
  color: var(--muted);
  font-weight: 600;
  padding: 8px 10px;
  border-radius: 10px;
}
.footer-links a:hover { background: rgba(2,6,23,0.03); color: var(--text); }

/* =========================
   Chat Widget
========================= */
.chat-widget-container {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
}

/* Overlay to close chat on outside click */
.chat-overlay {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.18);
  backdrop-filter: blur(2px);
  z-index: 999;
}
.hidden { display: none !important; }

.chat-fab {
  width: 60px;
  height: 60px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--primary), var(--primary-hover));
  color: white;
  font-size: 28px;
  box-shadow: var(--shadow-lg);
  display: grid;
  place-items: center;
}
.chat-fab:hover { transform: scale(1.04); }
.chat-fab:focus-visible { outline: none; box-shadow: var(--focus), var(--shadow-lg); }

.chat-window {
  width: min(380px, calc(100vw - 36px));
  height: 560px;
  background: rgba(255,255,255,0.92);
  border: 1px solid rgba(226,232,240,0.95);
  border-radius: 18px;
  box-shadow: var(--shadow-lg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transform-origin: bottom right;
  animation: pop .18s ease-out;
  z-index: 1000;
}

@keyframes pop {
  from { transform: scale(0.96) translateY(6px); opacity: 0.6; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}

.chat-header {
  background: linear-gradient(180deg, var(--primary), var(--primary-hover));
  color: white;
  padding: 14px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.chat-title .avatar {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: rgba(255,255,255,0.18);
  border: 1px solid rgba(255,255,255,0.22);
  font-size: 1.35rem;
}

.status {
  display: block;
  font-size: 0.78rem;
  opacity: 0.9;
}

.close-btn {
  background: transparent;
  color: white;
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  border-radius: 12px;
}
.close-btn:hover { background: rgba(255,255,255,0.12); }

.chat-body {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background: radial-gradient(500px 260px at 20% 0%, rgba(99,102,241,0.12), transparent 60%),
              rgba(248,250,252,0.85);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Messages */
.message { max-width: 86%; display: flex; flex-direction: column; gap: 6px; }
.message.user { align-self: flex-end; }
.message.bot { align-self: flex-start; }

.message-content {
  padding: 12px 14px;
  border-radius: 14px;
  font-size: 0.95rem;
  border: 1px solid rgba(226,232,240,0.95);
}

.message.user .message-content {
  background: linear-gradient(180deg, var(--primary), var(--primary-hover));
  border-color: rgba(99,102,241,0.25);
  color: white;
  border-bottom-right-radius: 6px;
}

.message.bot .message-content {
  background: rgba(255,255,255,0.95);
  color: var(--text);
  border-bottom-left-radius: 6px;
}

.message-sources {
  font-size: 0.82rem;
  color: var(--muted);
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.message-sources a {
  color: var(--primary);
  text-decoration: none;
  background: rgba(99,102,241,0.10);
  border: 1px solid rgba(99,102,241,0.12);
  padding: 2px 8px;
  border-radius: 999px;
}
.message-sources a:hover { background: rgba(99,102,241,0.14); }

/* Typing indicator */
.typing-indicator {
  padding: 10px 12px;
  background: rgba(255,255,255,0.95);
  border: 1px solid rgba(226,232,240,0.95);
  border-radius: 14px;
  width: 72px;
  display: flex;
  gap: 6px;
  align-self: flex-start;
}

.typing-indicator span {
  width: 7px;
  height: 7px;
  background: rgba(100,116,139,0.85);
  border-radius: 50%;
  animation: typing 1.4s infinite ease-in-out both;
}
.typing-indicator span:nth-child(1) { animation-delay: -0.32s; }
.typing-indicator span:nth-child(2) { animation-delay: -0.16s; }

@keyframes typing {
  0%, 80%, 100% { transform: scale(0); }
  40% { transform: scale(1); }
}

.chat-input-area {
  padding: 12px;
  background: rgba(255,255,255,0.95);
  border-top: 1px solid rgba(226,232,240,0.95);
  display: flex;
  gap: 10px;
}

.chat-input-area input {
  flex: 1;
  padding: 12px 14px;
  border: 1px solid rgba(226,232,240,0.95);
  border-radius: 999px;
  outline: none;
  font-size: 0.95rem;
  background: rgba(248,250,252,0.9);
}
.chat-input-area input:focus { border-color: rgba(99,102,241,0.55); box-shadow: var(--focus); }

.chat-input-area button {
  width: 46px;
  height: 46px;
  border-radius: 999px;
  background: linear-gradient(180deg, var(--primary), var(--primary-hover));
  color: white;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
}
.chat-input-area button:hover { transform: translateY(-1px); }

/* =========================
   Responsive
========================= */
@media (min-width: 780px) {
  .header-nav { display: flex; }
  .hero-grid { grid-template-columns: 1.15fr 0.85fr; gap: 34px; }
  .hero-cta { flex-direction: row; align-items: center; }
  .features { grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .footer-content { flex-direction: row; align-items: center; }
}

@media (max-width: 480px) {
  .trust-row { grid-template-columns: 1fr; }
  .chat-widget-container { right: 12px; bottom: 12px; }

  .chat-window {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  * { animation: none !important; transition: none !important; }
}
