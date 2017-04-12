import Observer from './observer';

export default function callback(changes) {

  changes.forEach(change => {

    const el = change.target;

    const img = document.createElement('img');
    img.src = el.dataset.srcUrl;
    el.appendChild(img);
    Observer.getObserver().unobserve(el);

  });

}