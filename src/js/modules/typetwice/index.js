import $ from 'jquery'

import copy from './copier'

const init = () => {

  // type twice
  copy({
    source: $('.js_source'),
    target: $('.js_target'),
  });

};

init();