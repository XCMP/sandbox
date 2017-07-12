export const TextSetter =  {

  i: 0,
  TEXT_ARRAY: [
    'IE-', 'DER ', 'HUIS-', 'JE ', 'HEEFT ', 'EEN ', 'KRUIS-', 'JE.'
  ],

  setEl(el) {
    this.el = el;
  },

  setText() {
    this.el.innerHTML = this.el.innerHTML + this.TEXT_ARRAY[this.i++];
  }

}