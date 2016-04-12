// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWord(str) {
  var words = str.split(" ");
  var longestWord = "";
  for(var i = 0; i < words.length; i++) {
    if(longestWord < words[i].length) {
      longestWord = words[i].length;
    }
  }
  return longestWord;
}

findLongestWord("The quick brown fox jumped over the lazy dog");

// .split()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split 
