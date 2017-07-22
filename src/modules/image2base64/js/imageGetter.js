const images =
    Array.prototype.slice.call(
        document.querySelectorAll('.js_imgages')
    );

const ImageGetter = {
  currentIndex : -1,
  images: images,

  getNextIndex: function() {
    this.currentIndex++;
    if (this.currentIndex > images.length-1) {
      this.currentIndex = 0;
    }
    return this.currentIndex;
  },

  removeSelected: function() {
    this.images.forEach(function(i) {
      i.classList.remove('selected');
    })
  },

  getNextImage: function() {
    this.removeSelected();
    const nextImage = images[this.getNextIndex()];
    nextImage.classList.add('selected');
    return nextImage.src;
  },

};

export default ImageGetter;