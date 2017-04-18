function getRandomColor() {
  let length = 6;
  const chars = '0123456789ABCDEF';
  let hex = '#';

  while(length--) {
    hex += chars[(Math.random() * 16) | 0];
  }

  return hex;
}

export default function changeColor(el) {
  el.target.style = 'background-color: ' + getRandomColor();
}
