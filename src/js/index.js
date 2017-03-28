import $ from 'jquery'
import changeColor from './modules/changeColor'
import debounce from './modules/debounce'
import throttle from './modules/throttle'

const init = () => {

  $('.js_debounce')
      .on('click', debounce(changeColor, 1000, false))
      .on('dblclick', debounce(changeColor, 1000, true));

  $('.js_throttle')
      .on('click', throttle(changeColor, 1000))
      .on('dblclick', throttle(changeColor, 1000));

};

init();