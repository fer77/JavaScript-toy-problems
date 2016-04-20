// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
// The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
// Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".


function mutation(arr) {
  return arr[1].toLowerCase().split('').every(function (letter){
    return arr[0].toLowerCase().indexOf(letter) != -1;
  });
}

mutation(["hello", "hey"]);


// .every(callback)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// .every() together with indexOf() will basically compare each letter.
