import $ from 'jquery';
import getRandomColor from './colorRandomizer'

export default function changeColor(ev) {
  $(ev.currentTarget).css('background-color', getRandomColor());
}