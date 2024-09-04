function faq__accordion() {
  const items = document.querySelectorAll('.faq__accordion-item');

  function toggleAccordion(item) {
    items.forEach((el) => {
      if (el === item) {
        el.classList.toggle('active');
        const content = el.querySelector('.faq__content');
        content.style.height = el.classList.contains('active') ? content.scrollHeight + 'px' : '0';
      } else {
        el.classList.remove('active');
        el.querySelector('.faq__content').style.height = '0';
      }
    });
  }

  items.forEach((item) => {
    item.addEventListener('click', () => toggleAccordion(item));
  });

  toggleAccordion(items[0]);
}
