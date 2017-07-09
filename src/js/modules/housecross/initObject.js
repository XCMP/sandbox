export function initObject(object, data) {
  object.style.display = 'block';
  object.style.transform = 'rotate(' + data.degrees + 'deg)';
  object.style.top = data.top;
  object.style.left = data.left;
  object.style.transition = `0s`;
  object.style['-webkit-transition'] = `0s`;
  object.style['-moz-transition'] = `0s`;
}