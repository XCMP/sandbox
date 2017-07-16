import changeColor from './color/color'
import debounce from './debounce'
import throttle from './throttle'
import { bindLogReset } from './utils/logger'

const init = () => {

  document.querySelector('.js_debounce').addEventListener('click', debounce(changeColor, 1000, false));
  bindLogReset(document.querySelector('.js_debounce_log'), 'DEBOUNCE log');

  document.querySelector('.js_throttle').addEventListener('click', throttle(changeColor, 1000));
  bindLogReset(document.querySelector('.js_throttle_log'), 'THROTTLE log');

};

init();