export default function loadimage(changes, Observer) {

  changes.forEach(change => {

    const el = change.target;

    const img = document.createElement('img');
    img.src = el.dataset.srcUrl;
    el.appendChild(img);
    Observer.unobserve(el);

    img.onload = () => img.classList.add('fade-in');

  });

}