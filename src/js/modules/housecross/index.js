import {TRANSISTION_TIME_IN_MS} from './constants'

import { getData } from './dataRetriever'
import { initObject } from './initObject'

let i = 0;
function animate(object, property) {
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
      clearInterval(handle);
      animate(lines[++i], 'width');
    }
  }, 1 / frame_rate);
};

const lines = document.querySelectorAll('.line');
animate(lines[0], "width");
