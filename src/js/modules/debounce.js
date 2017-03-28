import $ from 'jquery';
import log from './logger'

export default function debounce(func, threshold, immediate) {

  var timeout,
      $log = $('.js_debounce_log');

  return function debounced() {
    log($log, 'clicked');
    var obj = this, args = arguments;

    function delayed() {
      if (!immediate) {
        log($log, 'color changed');
        func.apply(obj, args);
      }
      timeout = null;
    }

    if (timeout) {
      clearTimeout(timeout);
    } else if (immediate) {
      log($log, 'color changed');
      func.apply(obj, args);
    }

    timeout = setTimeout(delayed, threshold || 100);
  };

}