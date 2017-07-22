import { getHtml } from './htmlGetter';
import { sourceImg, sourceHtml } from './elements';

const images =
    Array.prototype.slice.call(
        document.querySelectorAll('.js_imgages')
    );

const removeSelected = function() {
  images.forEach(function(i) {
    i.classList.remove('selected');
  })
};

const ImageGetter = {
  currentIndex : -1,
  images: images,

  setCurrentIndex: function(i) {
    this.currentIndex = i;
  },

  getNextIndex: function() {
    this.currentIndex++;
    if (this.currentIndex > images.length-1) {
      this.currentIndex = 0;
    }
    return this.currentIndex;
  },

  getNextImage: function() {
    removeSelected();
    const nextImage = images[this.getNextIndex()];
    nextImage.classList.add('selected');
    return nextImage.src;
  },

};

const selectThisImage = function(img) {
  removeSelected();
  img.classList.add('selected');
  sourceImg.src = img.src;
  sourceHtml.innerText = getHtml(sourceImg.cloneNode(false));
  ImageGetter.setCurrentIndex(img.dataset.index);
};


images.forEach(function(i) {
  i.addEventListener("click", function(ev) {selectThisImage(ev.currentTarget)});
});

export default ImageGetter;