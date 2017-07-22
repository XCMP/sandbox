import { convertImageToBase64Data } from './converter';
import ImageGetter from './imageGetter';
import { getHtml } from './htmlGetter';

// init
const source = document.querySelector('#js_src');
const sourceHtml = document.querySelector('#js_src_src');
source.src = ImageGetter.getNextImage();
sourceHtml.innerText = getHtml(source.cloneNode(false));

// switch button
const switchImageButton = document.querySelector('#js_switch_image_button');
const nextImage = function() {

  source.src = ImageGetter.getNextImage();
  sourceHtml.innerText = getHtml(source.cloneNode(false));

};
switchImageButton.addEventListener("click", nextImage);

// convert button
const convertButton = document.querySelector('#js_convert_button');
const convertCallback = function(data) {

  const destinationImg = document.querySelector('#js_dest');
  destinationImg.src = data;

  const destinationHtml = document.querySelector('#js_dest_src');
  destinationHtml.textContent = getHtml(destinationImg.cloneNode(false));

};
convertButton.addEventListener("click", function() {convertImageToBase64Data(source.src, convertCallback)});


