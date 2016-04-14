// Repeat a given string (first argument) num times (second argument). Return an empty string if num is a negative number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  var repeatStr = "";
    while (num > 0) {
        repeatStr += str;
        num--;
    }
    return repeatStr;
}


repeatStringNumTimes("abc", 3);
