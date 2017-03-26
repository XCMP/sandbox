export default function debounce(func, threshold, immediate) {

  var timeout;

  return function debounced () {
    var obj = this, args = arguments;

    function delayed() {
      if (!immediate)
      func.apply(obj, args);
      timeout = null;
    }

    if (timeout) {
      clearTimeout(timeout);
    } else if (immediate) {
      func.apply(obj, args);
    }

    timeout = setTimeout(delayed, threshold || 100);
  };

}