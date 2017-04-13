import Observer from './observer';
import loadimage from './imageloader';

const init = () => {

  const els = document.querySelectorAll('div.image');

  Observer.createObserver({
    callback: loadimage,
    threshold: 1,
  });

  els.forEach(el => Observer.getObserver().observe(el));

};

init();