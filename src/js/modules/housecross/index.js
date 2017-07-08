const init = () => {

  const transitionTime = .5;

  function getData(object) {
    return {
      degrees: object.dataset.degrees,
      top    : object.dataset.top,
      left   : object.dataset.left,
      width  : object.dataset.width,
    };
  }

  function init(object, data) {
    object.style.display = 'block';
    object.style.transform = 'rotate(' + data.degrees + 'deg)';
    object.style.top = data.top;
    object.style.left = data.left;
    object.style.transition = `${transitionTime}s`;
    object.style['-webkit-transition'] = `-webkit-transform ${transitionTime}s`;
    object.style['-moz-transition'] = `-moz-transform ${transitionTime}s`;

  }

  let i = 0;
  function animate(object, property, time) {
    const data = getData(object);
    init(object, data);
    var frame_rate = 0.06; // 60 FPS
    var frame = 0;
    var delta = data.width / time / frame_rate;
    var handle = setInterval(function () {
      frame++;
      var value = 0 + delta * frame;
      object.style[property] = value + "px";
      if (value >= data.width) {
        clearInterval(handle);
        animate(lines[++i], 'width', transitionTime*1000);
      }
    }, 1 / frame_rate);
  };

  const lines = document.querySelectorAll('.line');
  animate(lines[0], "width", transitionTime*1000);
};

init();