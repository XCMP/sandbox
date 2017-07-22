export function copy(options) {

  if (!(options && options.source && options.target)) {
    console.error('ERROR: No source and/or target given.')
  }

  const source = options.source;
  const target = options.target;

  source.onkeyup = function() {
    target.value = source.value;
  };
}