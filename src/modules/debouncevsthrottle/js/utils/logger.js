export function bindLogReset(el, header) {
  el.addEventListener('click', (el) => el.target.innerHTML = header);
}

export function log(el, text) {
  el.innerHTML = el.innerHTML + `<br>${text}`;
  el.scrollTop = el.scrollHeight;
}
