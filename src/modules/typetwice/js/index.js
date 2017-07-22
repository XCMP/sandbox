import { copy } from './copier'

const init = () => {

  copy({
    source: document.querySelector('.js_source'),
    target: document.querySelector('.js_target'),
  });

};

init();