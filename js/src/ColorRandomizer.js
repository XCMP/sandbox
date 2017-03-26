export default function getRandomColor() {
  let length = 6;
  const chars = '0123456789ABCDEF';
  let hex = '#';

  while(length--) {
    hex += chars[(Math.random() * 16) | 0];
  }

  console.log(hex);
  return hex;
}