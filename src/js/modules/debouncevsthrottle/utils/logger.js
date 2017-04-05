import $ from 'jquery'

export function bindLogReset($el, header) {
  $el.on('click', (el) => $(el.currentTarget).html(header));
}

export function log($el, text) {
  $el.html($el.html() + `<br>${text}`);
  $el.scrollTop($el.prop('scrollHeight'));
}
