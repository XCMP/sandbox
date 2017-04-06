import $ from 'jquery'

import copy from './copier'

const init = () => {

  copy({
    source: $('.js_source'),
    target: $('.js_target'),
  });

};

init();