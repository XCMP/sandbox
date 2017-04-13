import $ from 'jquery'

import changeColor from './color/color'
import debounce from './debounce'
import throttle from './throttle'
import { bindLogReset } from './utils/logger'

const init = () => {

  $('.js_debounce')
      .on('click', debounce(changeColor, 1000, false));
  bindLogReset($('.js_debounce_log'), 'DEBOUNCE log');

  $('.js_throttle')
      .on('click', throttle(changeColor, 1000));
  bindLogReset($('.js_throttle_log'), 'THROTTLE log');

};

init();