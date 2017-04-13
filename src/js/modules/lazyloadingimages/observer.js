export default function createObserver({ callback, threshold = 0.5 }) {
  return new IntersectionObserver(callback, {
    threshold: threshold,
  });
}