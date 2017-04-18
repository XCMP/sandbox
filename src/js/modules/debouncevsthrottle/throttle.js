import { log } from './utils/logger'

export default function throttle(fn, threshold, scope) {
  threshold || (threshold = 250);
  let last,
      deferTimer;
  const logEl = document.querySelector('.js_throttle_log');

  return function () {
    log(logEl, 'clicked');
    let context = scope || this;

    let now = +new Date,
        args = arguments;
    if (last && now < last + threshold) {
      clearTimeout(deferTimer);
      deferTimer = setTimeout(function () {
        last = now;
        log(logEl, 'color changed');
        fn.apply(context, args);
      }, threshold);
    } else {
      last = now;
      log(logEl, 'color changed');
      fn.apply(context, args);
    }
  };
}