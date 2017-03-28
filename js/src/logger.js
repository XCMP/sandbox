export default function log($el, text) {
  $el.html($el.html() + `<br>${text}`);
  $el.scrollTop($el.prop('scrollHeight'));
}
