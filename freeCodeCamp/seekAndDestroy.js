// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
  var args = [].slice.call(arguments);
  args.splice(0,1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);


// Arguments object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//
// I had to look this one up.  I have never used Arguments and had no idea I could turn it into an array.
