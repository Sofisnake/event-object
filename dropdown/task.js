document.addEventListener('DOMContentLoaded', () => {
    // Получаем все элементы с классом dropdown
    const dropdowns = Array.from(document.querySelectorAll('.dropdown'));

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const listElement = dropdown.querySelector('.dropdown__list');

        // Обработчик нажатия на кнопку
        valueElement.addEventListener('click', () => {
            // Закрываем все открытые списки
            dropdowns.forEach(d => {
                if (d !== dropdown) {
                    d.querySelector('.dropdown__list').classList.remove('dropdown__list_active');
                }
            });

            // Переключаем видимость текущего списка
            listElement.classList.toggle('dropdown__list_active');
        });

        // Обработчик клика на пункт меню
        listElement.addEventListener('click', event => {
            const item = event.target.closest('.dropdown__item');

            if (item) {
                event.preventDefault(); // Запрещаем переход по ссылке
                const link = item.querySelector('.dropdown__link');
                const newValue = link.textContent.trim();

                // Обновляем значение кнопки
                valueElement.textContent = newValue;

                // Закрываем список
                listElement.classList.remove('dropdown__list_active');
            }
        });
    });
});
