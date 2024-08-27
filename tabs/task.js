document.addEventListener('DOMContentLoaded', () => {
    // Функция для обработки переключения вкладок
    function setupTabs(tabContainer) {
        const tabs = tabContainer.querySelectorAll('.tab');
        const contents = tabContainer.querySelectorAll('.tab__content');

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Удаление активных классов
                tabs.forEach(t => t.classList.remove('tab_active'));
                contents.forEach(c => c.classList.remove('tab__content_active'));

                // Добавление активных классов
                tab.classList.add('tab_active');
                contents[index].classList.add('tab__content_active');
            });
        });
    }

    // Настройка вкладок для всех контейнеров вкладок на странице
    const tabContainers = document.querySelectorAll('.tabs');
    tabContainers.forEach(container => setupTabs(container));
});
