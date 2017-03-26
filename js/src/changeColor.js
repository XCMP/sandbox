import getRandomColor from './colorRandomizer'

let count = 0;

export default function changeColor(ev) {
  console.log(++count);
  $(ev.currentTarget).css('background-color', getRandomColor());
}