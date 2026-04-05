/* =========================
   Chat Widget — Vanilla JS Mock
   - open/close
   - append messages
   - typing indicator
   - mock knowledge base + sources
   - safe text rendering (escape)
========================= */

// DOM
const chatFab = document.getElementById('chatFab');
const chatWindow = document.getElementById('chatWindow');
const chatOverlay = document.getElementById('chatOverlay');
const chatCloseBtn = document.getElementById('chatCloseBtn');

const chatBody = document.getElementById('chatBody');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

const startChatBtn = document.getElementById('startChatBtn');
const openChatTopBtn = document.getElementById('openChatTopBtn');

const yearEl = document.getElementById('year');

// Footer year
yearEl.textContent = new Date().getFullYear();

// Simple “knowledge base” mock (імітація внутрішньої бази типових запитань)
const KB = [
  {
    match: [/розклад/i, /дзвінк/i],
    answer:
      "Актуальний розклад дзвінків зазвичай публікується в розділі «Навчальний процес» на сайті ліцею або в офіційних оголошеннях. Якщо підкажете клас/зміну — уточню формат.",
    sources: [
      { text: "Розділ «Навчальний процес»", url: "#" },
      { text: "Розклад дзвінків (документ)", url: "#" }
    ]
  },
  {
    match: [/захвор/i, /не прийд/i, /відсутн/i],
    answer:
      "Як правило, про відсутність через хворобу потрібно повідомити класного керівника/адміністратора класу в узгодженому каналі комунікації. Після одужання може знадобитися довідка — перевірте внутрішні правила.",
    sources: [
      { text: "Правила внутрішнього розпорядку", url: "#" },
      { text: "Комунікація з класом", url: "#" }
    ]
  },
  {
    match: [/довідк/i, /про навчання/i],
    answer:
      "Довідку про навчання зазвичай оформлює адміністрація/секретар. Напишіть, будь ласка, для якої установи потрібна довідка та бажану дату отримання — підкажу кроки.",
    sources: [
      { text: "Адміністрація / Секретаріат", url: "#" },
      { text: "Заява / форма запиту", url: "#" }
    ]
  },
  {
    match: [/домашн/i, /задач/i, /поясн/i, /математ/i, /укр/i, /англ/i],
    answer:
      "З радістю допоможу 🙂 Надішліть умову задачі/тему, клас і що саме потрібно: пояснення, приклад чи перевірка рішення. Я дам кроки та поясню логіку.",
    sources: [
      { text: "Поради з навчання", url: "#" }
    ]
  }
];

// Helpers
function isChatOpen() {
  return !chatWindow.classList.contains('hidden');
}

function setAriaExpanded(expanded) {
  chatFab.setAttribute('aria-expanded', String(expanded));
}

function openChat() {
  chatWindow.classList.remove('hidden');
  chatOverlay.classList.remove('hidden');
  chatOverlay.setAttribute('aria-hidden', 'false');
  setAriaExpanded(true);

  // focus
  setTimeout(() => chatInput.focus(), 50);

  // prevent background scroll on mobile/fullscreen chat
  document.body.style.overflow = 'hidden';
}

function closeChat() {
  chatWindow.classList.add('hidden');
  chatOverlay.classList.add('hidden');
  chatOverlay.setAttribute('aria-hidden', 'true');
  setAriaExpanded(false);

  document.body.style.overflow = '';
}

function toggleChat() {
  if (isChatOpen()) closeChat();
  else openChat();
}

// Security: escape user text to avoid injection
function escapeHTML(str) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function scrollToBottom() {
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Add message DOM
function appendMessage(text, sender, sources = []) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `message ${sender}`;

  const content = document.createElement('div');
  content.className = 'message-content';
  content.innerHTML = escapeHTML(text).replaceAll("\n", "<br/>");
  msgDiv.appendChild(content);

  if (sender === 'bot' && sources.length > 0) {
    const sourcesDiv = document.createElement('div');
    sourcesDiv.className = 'message-sources';

    const label = document.createElement('strong');
    label.textContent = 'Джерела:';
    sourcesDiv.appendChild(label);

    sources.forEach((s) => {
      const a = document.createElement('a');
      a.href = s.url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.textContent = s.text;
      sourcesDiv.appendChild(a);
    });

    msgDiv.appendChild(sourcesDiv);
  }

  chatBody.appendChild(msgDiv);
  scrollToBottom();
}

// Typing indicator
function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'typing-indicator';
  typingDiv.id = 'typingIndicator';
  typingDiv.innerHTML = '<span></span><span></span><span></span>';
  chatBody.appendChild(typingDiv);
  scrollToBottom();
}

function removeTypingIndicator() {
  const typing = document.getElementById('typingIndicator');
  if (typing) typing.remove();
}

// Mock response generator
function getMockResponse(userText) {
  const hit = KB.find(item => item.match.some(rgx => rgx.test(userText)));
  if (hit) return { answer: hit.answer, sources: hit.sources };

  // Default fallback (імітація відповіді Copilot)
  return {
    answer:
      "Дякую за запит! Щоб відповісти точно, уточніть, будь ласка, клас/дату/контекст. Я підкажу кроки та додам посилання на відповідні документи.",
    sources: [
      { text: "Політики та правила", url: "#" },
      { text: "Навчальний процес", url: "#" }
    ]
  };
}

/* =========================
   Events
========================= */
chatFab.addEventListener('click', toggleChat);
chatCloseBtn.addEventListener('click', closeChat);
chatOverlay.addEventListener('click', closeChat);

startChatBtn.addEventListener('click', openChat);
openChatTopBtn.addEventListener('click', openChat);

// ESC closes chat
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && isChatOpen()) {
    closeChat();
  }
});

// Send on submit
chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendMessage();
});

// Send message function
function sendMessage(prefilledText) {
  const text = (prefilledText ?? chatInput.value).trim();
  if (!text) return;

  // 1) user msg
  appendMessage(text, 'user');

  // clear input if it was typed
  if (!prefilledText) chatInput.value = '';

  // 2) typing indicator
  showTypingIndicator();

  // 3) mock async call (імітація Copilot API)
  setTimeout(() => {
    removeTypingIndicator();

    const { answer, sources } = getMockResponse(text);

    appendMessage(answer, 'bot', sources);

    // Example placeholder for real integration:
    // callCopilotApi(text).then(({answer, sources}) => appendMessage(answer, 'bot', sources));
  }, 900 + Math.random() * 800);
}

/* =========================
   FAQ -> send to chat
========================= */
document.querySelectorAll('.faq-send').forEach((btn) => {
  btn.addEventListener('click', () => {
    const q = btn.getAttribute('data-question');
    openChat();
    sendMessage(q);
  });
});

/* =========================
   (Optional) Real API stub example
   Replace with your backend endpoint (recommended),
   so you don't expose secrets in frontend.
========================= */
// async function callCopilotApi(userText) {
//   const res = await fetch('/api/chat', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ message: userText })
//   });
//   if (!res.ok) throw new Error('API error');
//   return await res.json(); // { answer: "...", sources: [{text,url}] }
// }
