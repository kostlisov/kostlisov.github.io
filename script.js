// Елементи DOM
const chatWindow = document.getElementById('chatWindow');
const chatBody = document.getElementById('chatBody');
const chatInput = document.getElementById('chatInput');
const chatFab = document.getElementById('chatFab');

// Функція відкриття/закриття чату
function toggleChat() {
    const isHidden = chatWindow.classList.contains('hidden');
    
    if (isHidden) {
        chatWindow.classList.remove('hidden');
        chatFab.style.transform = 'scale(0)';
        setTimeout(() => chatInput.focus(), 300); // Фокус після завершення анімації
    } else {
        chatWindow.classList.add('hidden');
        chatFab.style.transform = 'scale(1)';
    }
}

// Відправка повідомлення по натисканню Enter
chatInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault(); // Запобігаємо стандартній поведінці (якщо форма)
        sendMessage();
    }
});

// Основна функція відправки повідомлення
function sendMessage() {
    const text = chatInput.value.trim();
    if (text === '') return;

    // 1. Додаємо повідомлення користувача
    appendMessage(text, 'user');
    chatInput.value = '';

    // 2. Показуємо індикатор друкування "бота"
    showTypingIndicator();

    // 3. Імітація запиту до API Gemini (Затримка 1.5 - 2 секунди)
    setTimeout(() => {
        removeTypingIndicator();
        
        // Mock-up відповідь від ШІ, адаптована під ліцей
        const botResponse = `Згідно з правилами ліцею "Інвентор", якщо учень відчуває нездужання, батькам необхідно попередити куратора класу через електронний щоденник. Чи можу я допомогти вам знайти контакт вашого куратора?`;
        
        const sources = [
            { text: "Правила внутрішнього розпорядку", url: "#" },
            { text: "Електронний щоденник", url: "#" }
        ];

        appendMessage(botResponse, 'bot', sources);
    }, 1800);
}

// Захист від XSS (екранування HTML)
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

// Функція додавання HTML повідомлення в чат
function appendMessage(text, sender, sources = []) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender);

    // Використовуємо escapeHTML для тексту повідомлення
    let innerHTML = `<div class="message-content">${escapeHTML(text)}</div>`;

    // Якщо це бот і є джерела, додаємо блок джерел
    if (sender === 'bot' && sources.length > 0) {
        let sourcesHTML = '<div class="message-sources"><strong>Джерела:</strong> ';
        sources.forEach(source => {
            // Використовуємо іконку з Phosphor Icons для лінків
            sourcesHTML += `<a href="${source.url}" target="_blank"><i class="ph ph-link"></i> ${escapeHTML(source.text)}</a>`;
        });
        sourcesHTML += '</div>';
        innerHTML += sourcesHTML;
    }

    msgDiv.innerHTML = innerHTML;
    chatBody.appendChild(msgDiv);
    
    // Прокрутка чату вниз
    scrollToBottom();
}

// Робота з індикатором друкування
function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.classList.add('typing-indicator');
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(typingDiv);
    scrollToBottom();
}

function removeTypingIndicator() {
    const typingDiv = document.getElementById('typingIndicator');
    if (typingDiv) {
        typingDiv.remove();
    }
}

function scrollToBottom() {
    chatBody.scrollTo({
        top: chatBody.scrollHeight,
        behavior: 'smooth'
    });
}
