// src/index.ts

import './index.css';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

roadmapLine();
roadmapItem();
heading();

function heading() {
  const text = new SplitType('.hero__title', { types: 'chars' });
  gsap.set(text.chars, { opacity: 0 });
  gsap.to(text.chars, { opacity: 1, duration: 3, ease: 'expo', stagger: 0.03, xPercent: 0 });
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
    scrollTrigger: { trigger: columnCenter, start: 'top center', scrub: true },
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

cardAnimation();

function cardAnimation() {
  const card = document.querySelectorAll('.features__card');
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: '.features',
      scrub: 1,
    },
  });
  tl.from(card[0], { yPercent: 40, opacity: 0 });
  tl.from(card[1], { yPercent: 40, opacity: 0 }, '<');
}

// function numberSquare(indeEl) {
//   const square = document.querySelectorAll('.square');
//   square.forEach((item) => {
//     if (indeEl === item.dataset.number) {
//       return item;
//     }
//   });
// }

// const roadmapLine = document.querySelectorAll('.line__green');
// roadmapLine.forEach((item) => {
//   const path = item.querySelector('path');
//   const lenght = path.getTotalLength();
//   gsap.set(path, { strokeDasharray: lenght });

//   const roadmapTl = gsap.timeline({
//     scrollTrigger: {
//       trigger: item,
//       start: 'top center',
//       end: 'bottom top',
//       scrub: 1,
//     },
//   });
//   roadmapTl.to(line, { opacity: 1 });
//   roadmapTl.fromTo(path, { strokeDashoffset: lenght }, { strokeDashoffset: 0 }, '<');
// });
