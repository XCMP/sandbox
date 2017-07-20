import {TRANSISTION_TIME_IN_MS} from './constants'

import { getData } from './dataRetriever'
import { initObject } from './initObject'
import { TextSetter } from './textDisplayer'

TextSetter.setEl(document.querySelector('#text'));
const startButton = document.querySelector('#start-button');

let i = 0;
function animate(object, property) {
  if (i >= lines.length) {
    button.classList.remove('hidden');
    return;
  }

  const data = getData(object);
  initObject(object, data);
  const frame_rate = 0.06; // 60 FPS
  let frame = 0;
  const delta = data.width / TRANSISTION_TIME_IN_MS / frame_rate;
  var handle = setInterval(function () {
    frame++;
    var value = delta * frame;
    object.style[property] = value + "px";
    if (value >= data.width) {
      TextSetter.setText();
      clearInterval(handle);
      animate(lines[++i], 'width');
    }
  }, 1 / frame_rate);
};

const lines = document.querySelectorAll('.line');
animate(lines[0], "width");
