// src/index.ts

import './index.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

heading();
roadmap();
cardAnimation();
roadmapMobile();

const showSite = () => {
  gsap.to('.main', { autoAlpha: 1, duration: 1.5, ease: 'power1.inOut' });
};

function heading() {
  const text = new SplitType('.hero__title', { types: 'chars' });
  gsap.set(text.chars, { opacity: 0 });
  gsap.to(text.chars, { opacity: 1, duration: 3, ease: 'expo', stagger: 0.03, xPercent: 0 });
}

function roadmap() {
  const square = gsap.utils.toArray('.square');
  const block = document.querySelectorAll('[roadmap="item"]');
  const squareDur = 1;
  const lineGreen = document.querySelector('.line__green');

  const columnCenter = document.querySelector('.roadmap__column--center');
  gsap.set(block, { opacity: 0 });

  const lenght = lineGreen.getTotalLength();
  gsap.set(lineGreen, { strokeDasharray: lenght });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: columnCenter,
      start: 'top bottom-=10%',
      end: 'bottom+=80% bottom',
      scrub: 1,
    },
  });
  tl.fromTo(lineGreen, { strokeDashoffset: lenght }, { strokeDashoffset: 0, duration: 10 });
  tl.addLabel('start', 0);
  tl.to(
    square[0],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    0
  );

  tl.to(
    square[1],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    '0.55'
  );
  tl.to(
    square[2],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    '1.7'
  );
  tl.to(
    square[3],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    '2.7'
  );
  tl.to(
    square[4],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    '3.8'
  );
  tl.to(
    square[5],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    '4.6'
  );
}

function roadmapMobile() {
  const square = gsap.utils.toArray('.square-mobile');
  const block = document.querySelectorAll('[roadmap="item"]');
  const squareDur = 1;
  const lineGreen = document.querySelector('.line__green-mobile');

  const columnCenter = document.querySelector('.roadmap__column--center');
  gsap.set(block, { opacity: 0 });

  const lenght = lineGreen.getTotalLength();
  gsap.set(lineGreen, { strokeDasharray: lenght });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: columnCenter,
      start: 'top bottom-=10%',
      end: 'bottom+=80% bottom',
      scrub: 1,
    },
  });
  tl.fromTo(lineGreen, { strokeDashoffset: lenght }, { strokeDashoffset: 0, duration: 10 });
  tl.addLabel('start', 0);
  tl.to(
    square[0],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    0
  );
  tl.to(block[3], { opacity: 1, duration: 2 }, '0.3');
  tl.to(block[2], { opacity: 1, duration: 2 }, '4.5');
  tl.to(block[0], { opacity: 1, duration: 2 }, '0.5');
  tl.to(block[1], { opacity: 1, duration: 2 }, '2.2');
  tl.to(block[5], { opacity: 1, duration: 2 }, '3.5');
  tl.to(block[4], { opacity: 1, duration: 2 }, '1.5');
  tl.to(
    square[1],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    '0.55'
  );
  tl.to(
    square[2],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    '1.7'
  );
  tl.to(
    square[3],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    '2.7'
  );
  tl.to(
    square[4],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    '3.8'
  );
  tl.to(
    square[5],
    { scale: 2, color: '#C4FE48', transformOrigin: 'center center', duration: squareDur },
    '4.6'
  );
}

function roadmapLine() {
  const square = gsap.utils.toArray('.square');
  // square.forEach((item, index) => {
  //   gsap.to(item[index], { scale: 2 });
  // });
  const columnCenter = document.querySelector('.roadmap__column--center');

  const lineGreen = document.querySelector('.line__green');
  const lenght = lineGreen.getTotalLength();
  gsap.set(lineGreen, { strokeDasharray: lenght });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: columnCenter,
      start: 'top center',
      end: 'bottom+=80% bottom',
      scrub: true,
      markers: true,
    },
  });
  tl.fromTo(lineGreen, { strokeDashoffset: lenght }, { strokeDashoffset: 0 });
}

function roadmapItem() {
  const square = gsap.utils.toArray('.square');
  const block = document.querySelectorAll('[roadmap="item"]');
  gsap.set(block, { opacity: 0 });

  square.forEach((item, index) => {
    const tween = gsap.to(square[index], {
      scale: 2,
      color: '#C4FE48',
      transformOrigin: 'center center',
      paused: true,
    });
    ScrollTrigger.create({
      trigger: item,
      start: 'top bottom-=300px',
      animation: tween,
      toggleActions: 'play pause pause reverse',
    });
  });

  block.forEach((item, index) => {
    const tween = gsap.to(block[index], {
      opacity: 1,
      paused: true,
    });
    ScrollTrigger.create({
      trigger: item,
      start: 'top bottom-=300px',
      animation: tween,
      toggleActions: 'play pause pause reverse',
    });
  });
}

function cardAnimation() {
  const card = document.querySelectorAll('.features__card');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.features',
      scrub: 1,
      start: 'top-=30% bottom',
      end: 'bottom-=30% bottom',
    },
  });
  tl.from(card[0], { yPercent: 30, opacity: 0, ease: 'power2.inOut' });
  tl.from(card[1], { yPercent: 30, opacity: 0, ease: 'power2.inOut' }, '<');
}

const mobBurger = document.querySelector('.header__burger');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    // Условие прокрутки в пикселях
    mobBurger.classList.add('scrolled');
  } else {
    mobBurger.classList.remove('scrolled');
  }
});
