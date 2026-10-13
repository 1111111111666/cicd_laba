// Счётчик кликов
let count = 0;
const counterEl = document.getElementById('counter');
const clickBtn = document.getElementById('click-btn');

clickBtn.addEventListener('click', () => {
    count++;
    counterEl.textContent = count;
});

// Переключение темы
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    themeToggle.textContent = isDark ? '☀️ Светлая тема' : '🌙 Сменить тему';
});