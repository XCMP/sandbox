import $ from 'jquery'
import { log } from './logger'

export default function throttle(fn, threshold, scope) {
  threshold || (threshold = 250);
  let last,
      deferTimer;
  const $log = $('.js_throttle_log');

  return function () {
    log($log, 'clicked');
    let context = scope || this;

    let now = +new Date,
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