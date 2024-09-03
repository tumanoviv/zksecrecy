import gsap from 'gsap';
gsap.to('.main', { opacity: 0, duration: 10 });
gsap.registerPlugin(ScrollTrigger);

// INIT

document.addEventListener('DOMContentLoaded', init);

function init() {
  //showSite();
  //heroAnimation();
  //aboutSvgAnimation();
  //titleAnimation();
  // featuredAnimation();
  //roadmap();
  // communityAnimation();
  faqAnimation();
  //modalAll();
}

const showSite = () => {
  gsap.to('.main', { autoAlpha: 1, duration: 1.5, ease: 'power1.inOut' });
};

// HERO

const heroAnimation = () => {
  const title = document.querySelector('.hero__title');
  const subTitle = document.querySelector('.hero__subtitle');
  const button = document.querySelector('.hero .button-wrapper');

  const splitTitle = new SplitType(title);

  const firstLine = splitTitle.lines[0].querySelectorAll('.char');
  const secomdLine = splitTitle.lines[1].querySelectorAll('.char');

  const tlTitle = gsap.timeline({
    defaults: { ease: 'expo.out', autoAlpha: 0, skewX: -5, yPercent: 20 },
  });
  tlTitle.from(firstLine, { stagger: 0.06, duration: 2.2 });
  tlTitle.from(secomdLine, { stagger: 0.08, duration: 2.6 }, '-=80%');

  const tl = gsap.timeline({
    defaults: { ease: 'sine.out', autoAlpha: 0, yPercent: 30, duration: 1.2 },
  });
  tl.addLabel('start');
  tl.add(tlTitle);
  tl.from(subTitle, { yPercent: 50 }, '<+=30%');
  tl.from(button, { yPercent: 20, duration: 0.8 }, '<+=70%');

  return tl;
};

// ABOUT

function aboutSvgAnimation() {
  const svgElOne = document.querySelector('.lender-processing-wrapper');
  const svgElTwo = document.querySelector('.lender-platform-wrapper');
  const svgElThree = document.querySelector('.lender-ai-wrapper');

  gsap.set([svgElOne, svgElTwo, svgElThree], { autoAlpha: 0 });

  const svgTl = gsap.timeline({
    defaults: { autoAlpha: 1, duration: 1.3, ease: 'power1.inOut' },
    scrollTrigger: {
      trigger: '.about',
      start: 'top bottom-=20%',
    },
  });

  svgTl.to(svgElOne, {});
  svgTl.to(svgElTwo, {}, '-=50%');
  svgTl.to(svgElThree, {}, '-=50%');
}

function titleAnimation() {
  const title = document.querySelector('.about__lead');
  const splitTitle = new SplitType(title);
  // const subTitle = document.querySelector('.about__title');
  // const text = document.querySelector('.about__text');

  const firstLine = splitTitle.lines[0].querySelectorAll('.char');
  const secomdLine = splitTitle.lines[1].querySelectorAll('.char');

  const tlTitle = gsap.timeline({
    defaults: { ease: 'expo.out', autoAlpha: 0, yPercent: 20 },
    scrollTrigger: { trigger: title, start: 'center bottom' },
  });

  tlTitle.from(firstLine, { stagger: 0.06, duration: 2.6, skewX: -5 });
  tlTitle.from(secomdLine, { stagger: 0.08, duration: 3, skewX: -5 }, '-=80%');
  // tlTitle.from(subTitle, { yPercent: 50 }, '<-=90%');
  // tlTitle.from(text, { yPercent: 30, duration: 4, ease: 'power4.out' }, '<+=30%');
}

// FEATURED

function featuredAnimation() {
  const featuredItem = document.querySelectorAll('.features__item');

  featuredItem.forEach((sections) => {
    const title = sections.querySelector('.features__title');
    const text = sections.querySelector('.features__text-wrapper');
    const button = sections.querySelector('.button');
    const splitTitle = new SplitType(title, { types: 'words, chars' });

    const tlTitle = gsap.timeline({
      defaults: { ease: 'expo.out', autoAlpha: 0, yPercent: 20 },
      scrollTrigger: { trigger: sections, start: 'top bottom' },
    });

    tlTitle.from(splitTitle.chars, { stagger: 0.06, duration: 2.8, skewX: -5 });
    tlTitle.from(text, { ease: 'power1.out', yPercent: 10, duration: 1 }, '<+=50%');
    tlTitle.from(button, { ease: 'power1.out', yPercent: 10, duration: 1 }, '<+=80%');
  });
}

// ROADMAP

function roadmap() {
  const roadmapItem = document.querySelectorAll('.roadmap__header');
  const roadmapList = document.querySelectorAll('.roadmap__list');

  roadmapList.forEach((item, index) => {
    ScrollTrigger.create({
      trigger: item,
      start: 'top center',
      end: 'bottom center',
      onEnter: () => {
        roadmapToggle(index);
      },
      onEnterBack: () => {
        roadmapToggle(index);
      },
    });
  });

  function roadmapToggle(i) {
    roadmapItem.forEach((item) => {
      item.classList.remove('active');
      roadmapItem[i].classList.add('active');
    });
  }

  roadmapItem.forEach((item, index) => {
    item.addEventListener('click', () => {
      roadmapList[index].scrollIntoView({ behavior: 'smooth' });
    });
  });
  // ROADMAP LINE

  gsap.set('.line-svg', { opacity: 0.2 });

  const roadmapLine = document.querySelectorAll('.roadmap__line');
  roadmapLine.forEach((item) => {
    const line = item.querySelector('.line-svg');
    const path = item.querySelector('path');
    const lenght = path.getTotalLength();
    gsap.set(path, { strokeDasharray: lenght });

    const roadmapTl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
      },
    });
    roadmapTl.to(line, { opacity: 1 });
    roadmapTl.fromTo(path, { strokeDashoffset: lenght }, { strokeDashoffset: 0 }, '<');
  });
}

// COMMUNITY

function communityAnimation() {
  const title = document.querySelector('.community__title');
  const subTitle = document.querySelector('.community__text');
  const linkWrapper = document.querySelector('.community__link-wrapper');
  const splitTitle = new SplitType(title);

  const firstLine = splitTitle.lines[0].querySelectorAll('.char');
  const secomdLine = splitTitle.lines[1].querySelectorAll('.char');

  const tlTitle = gsap.timeline({
    defaults: { ease: 'expo.out', autoAlpha: 0, skewX: -5, yPercent: 20 },
  });
  tlTitle.from(firstLine, { stagger: 0.06, duration: 2.2 });
  tlTitle.from(secomdLine, { stagger: 0.08, duration: 2.6 }, '-=80%');

  const tl = gsap.timeline({
    defaults: { ease: 'sine.out', autoAlpha: 0, yPercent: 30, duration: 1.2 },
    scrollTrigger: { trigger: title, start: 'top center+=30%' },
  });
  tl.addLabel('start');
  tl.add(tlTitle);
  tl.from(subTitle, { yPercent: 50 }, '<+=30%');
  tl.from(linkWrapper, { yPercent: 20, duration: 1 }, '<+=60%');

  return tl;
}

// FAQ
function faqAnimation() {
  // -----ACCORDION
  const items = document.querySelectorAll('.faq__accordion-item');

  // Функция, которая открывает один элемент и закрывает все остальные
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

  // Добавляем обработчики на каждый заголовок
  items.forEach((item) => {
    item.addEventListener('click', () => toggleAccordion(item));
  });

  // Открыть первый элемент сразу после загрузки страницы
  toggleAccordion(items[0]);
}

function modalAll() {
  const modalOPen = document.querySelectorAll('.popup-open');
  const modalClose = document.querySelector('.pop-up__close');
  const modal = document.querySelector('.pop-up');

  modalOPen.forEach((item) => {
    item.addEventListener('click', modalToggle);
  });

  modalClose.addEventListener('click', modalToggle);

  function modalToggle() {
    if (!modal.classList.contains('open')) {
      modal.classList.add('open');
    } else {
      modal.classList.remove('open');
    }
  }

  const burger = document.querySelector('.header__burger');
  const navClose = document.querySelector('.nav-close__wrapper');
  const navMobile = document.querySelector('.nav-moblie');

  burger.addEventListener('click', navToggle);
  navClose.addEventListener('click', navToggle);

  const mobileLink = document.querySelectorAll('.nav-mobile__link');

  mobileLink.forEach((item) => {
    item.addEventListener('click', navToggle);
  });

  function navToggle() {
    if (!navMobile.classList.contains('open')) {
      navMobile.classList.add('open');
    } else {
      navMobile.classList.remove('open');
    }
  }
}

// MOBILE

const mobBurger = document.querySelector('.header__burger');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Условие прокрутки в пикселях
    mobBurger.classList.add('scrolled');
  } else {
    mobBurger.classList.remove('scrolled');
  }
});
