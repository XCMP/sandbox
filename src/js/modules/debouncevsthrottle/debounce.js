import { log } from './utils/logger'

export default function debounce(func, threshold, immediate) {

  let timeout;
  const logEl = document.querySelector('.js_debounce_log');

  return function debounced() {
    log(logEl, 'clicked');
    const obj = this, args = arguments;

    function delayed() {
      if (!immediate) {
        log(logEl, 'color changed');
        func.apply(obj, args);
      }
      timeout = null;
    }

    if (timeout) {
      clearTimeout(timeout);
    } else if (immediate) {
      log(logEl, 'color changed');
      func.apply(obj, args);
    }

    timeout = setTimeout(delayed, threshold || 100);
  };

}