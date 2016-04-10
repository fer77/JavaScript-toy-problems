function palindrome(str) {
  var forward = str.replace(/[\W_]/g, "").toLowerCase();
  var backward = forward.split("").reverse().join("");
  return forward === backward;
}

palindrome("eye");

// RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// .replace()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// .toLowerCase()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
