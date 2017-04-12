import Observer from './observer';

export default function loadimage(changes) {

  changes.forEach(change => {

    const el = change.target;

    const img = document.createElement('img');
    img.src = el.dataset.srcUrl;
    el.appendChild(img);
    Observer.getObserver().unobserve(el);

    img.onload = () => img.classList.add('fade-in');

  });

}