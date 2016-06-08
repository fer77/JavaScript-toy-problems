//Caesars Cipher
/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input and returns a decoded string.
All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) { // LBH QVQ VG!
  return str.split('').map.call(str, function(char) {

    x = char.charCodeAt(0);

    if (x < 65 || x > 90) {
      return String.fromCharCode(x);
    } else if (x < 78) {
      return String.fromCharCode(x + 13);
    } else {
      return String.fromCharCode(x - 13);
    }
  }).join('');
}


// Change the inputs below to test
rot13("SERR PBQR PNZC");

/*
This one was tricky.  I had to look up a couple of new methods and one constructor to get to the answer.  Not fun.

Here's how to know weather to add or substract 13:
ASCII
http://www.ascii-code.com/

These were new ones:

.call()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call

String
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

.charCodeAt()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt

.fromCharCode()
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
*/
