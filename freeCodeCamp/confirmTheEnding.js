// Check if a string (first argument, str) ends with the given target string (second argument, target).

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return str.indexOf(target, str.length - target.length) !== -1;
}

confirmEnding("Bastian", "n");

// .indexOf()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
