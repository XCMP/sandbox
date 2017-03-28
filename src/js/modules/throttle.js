import $ from 'jquery'
import log from './logger'

export default function throttle(fn, threshold, scope) {
  threshold || (threshold = 250);
  var last,
      deferTimer,
      $log = $('.js_throttle_log');

  return function () {
    log($log, 'clicked');
    var context = scope || this;

    var now = +new Date,
        args = arguments;
    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      log($log, 'color changed');
      fn.apply(context, args);
    }
  };
}