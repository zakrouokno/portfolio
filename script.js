// Плавная прокрутка к секции "Навыки" при нажатии на кнопку "Посмотреть работы"
document.querySelector('.cta-button').addEventListener('click', function(e) {
    // Проверяем, что это не ссылка на Telegram (у которой есть href)
    if (!this.hasAttribute('href')) {
        const skillsSection = document.getElementById('skills');
        if (skillsSection) {
            skillsSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});