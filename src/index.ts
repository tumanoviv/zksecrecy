document.addEventListener('DOMContentLoaded', init);

function init() {
  faqAccordion();
}

function faqAccordion() {
  const items = document.querySelectorAll('.faq__accordion-item');

  if (items.length === 0) {
    return; // Если нет элементов, функция завершается
  }

  function toggleAccordion(item) {
    items.forEach((el) => {
      const content = el.querySelector('.faq__content');
      if (!content) {
        return; // Пропустить, если контент не найден
      }

      if (el === item) {
        el.classList.toggle('active');
        content.style.height = el.classList.contains('active') ? content.scrollHeight + 'px' : '0';
      } else {
        el.classList.remove('active');
        content.style.height = '0';
      }
    });
  }

  // Добавляем обработчики на каждый заголовок
  items.forEach((item) => {
    item.addEventListener('click', () => toggleAccordion(item));
  });

  // Открыть первый элемент сразу после загрузки страницы, если он существует
  if (items.length > 0) {
    toggleAccordion(items[0]);
  }
}
