import Observer from './observer';
import callback from './imageloader';

const init = () => {

  const els = document.querySelectorAll('div.image');
  Observer.createObserver({
    callback: callback,
    threshold: 0.5,
  });
  els.forEach(el => Observer.getObserver().observe(el));

};

init();