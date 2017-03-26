import changeColor from './src/changeColor';
import debounce from './src/debounce';
import throttle from './src/throttle';

const init = () => {

  $('.js_debounce')
    .on('click', debounce(changeColor, 1000, false))
    .on('mouseenter', debounce(changeColor, 1000, true));

  $('.js_throttle')
    .on('click', throttle(changeColor, 1000))
    .on('mouseenter', throttle(changeColor, 1000));

};

init();