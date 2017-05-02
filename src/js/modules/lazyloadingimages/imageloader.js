export default function loadimage(changes, Observer) {

  changes.forEach(change => {

    if (!isInView(change, Observer.thresholds[0])) {
      return;
    }

    const el = change.target;

    const img = document.createElement('img');
    img.src = el.dataset.srcUrl;
    el.appendChild(img);
    Observer.unobserve(el);

    img.onload = () => img.classList.add('fade-in');
  });

}

function isInView(change, threshold) {
  return (
    (change.intersectionRect.width * change.intersectionRect.height) /
    (change.boundingClientRect.width * change.boundingClientRect.height) >= threshold
  );
}