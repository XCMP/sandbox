import createObserver from './observer';
import loadimage from './imageloader';

const init = () => {

  const els = document.querySelectorAll('div.image');

  const Observer = createObserver({
    callback: loadimage,
    threshold: 1,
  });

  els.forEach(el => Observer.observe(el));

};

init();