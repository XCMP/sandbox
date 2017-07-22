import { loadimage } from './imageloader';

const init = () => {

  const Observer = new IntersectionObserver(loadimage, {
    threshold: 0.75,
  });

  const els = document.querySelectorAll('div.image');
  els.forEach(el => Observer.observe(el));

};

init();