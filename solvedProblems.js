// List to Array
// Lists are data structures composed of nested objects, each containing a single value and a reference to the next object.
//
// Here's an example of a list in JavaScript:
//
// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
//
// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:
//
// [1, 2, 3]
//
// ### Solution
function listToArray(list) {
  return !list ? [] : [list.value].concat(listToArray(list.next));
}
