import { convertImageToBase64Data } from './converter';
import ImageGetter from './imageGetter';
import { getHtml } from './htmlGetter';
import { sourceImg, sourceHtml, destinationImg, destinationHtml } from './elements';

// init
sourceImg.src = ImageGetter.getNextImage();
sourceHtml.innerText = getHtml(sourceImg.cloneNode(false));

// switch button
const switchImageButton = document.querySelector('#js_switch_image_button');
const selectNextImage = function() {

  sourceImg.src = ImageGetter.getNextImage();
  sourceHtml.innerText = getHtml(sourceImg.cloneNode(false));

};
switchImageButton.addEventListener("click", selectNextImage);

// convert button
const convertButton = document.querySelector('#js_convert_button');
const convertCallback = function(data) {

  destinationImg.src = data;

  destinationHtml.textContent = getHtml(destinationImg.cloneNode(false));

};
convertButton.addEventListener("click", function() {convertImageToBase64Data(sourceImg.src, convertCallback)});


