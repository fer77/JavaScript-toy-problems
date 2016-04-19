// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arrChunks = [];
  for (var i = 0; i < arr.length; i += size) {
    arrChunks.push(arr.slice(i, i + size));
  }
  return arrChunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// .push() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// .slice() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
