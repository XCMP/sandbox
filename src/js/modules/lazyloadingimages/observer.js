let Observer;

function getObserver() {
  return Observer;
}

function createObserver({ callback, threshold = 0.5 }) {
  Observer = new IntersectionObserver(callback, {
    threshold: threshold,
  });
}

export default {
  getObserver,
  createObserver,
}