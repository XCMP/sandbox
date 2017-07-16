export function getData(object) {
  return {
    degrees: object.dataset.degrees,
    top    : object.dataset.top,
    left   : object.dataset.left,
    width  : object.dataset.width,
  };
}
