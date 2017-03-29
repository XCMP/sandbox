import $ from 'jquery'
import changeColor from './modules/changeColor'
import debounce from './modules/debounce'
import throttle from './modules/throttle'
import { bindLogReset } from './modules/logger'

const init = () => {

  $('.js_debounce')
      .on('click', debounce(changeColor, 1000, false))
      .on('dblclick', debounce(changeColor, 1000, true));
  bindLogReset($('.js_debounce_log'), 'DEBOUNCE log');

  $('.js_throttle')
      .on('click', throttle(changeColor, 1000))
      .on('dblclick', throttle(changeColor, 1000));
  bindLogReset($('.js_throttle_log'), 'THROTTLE log');

};

init();