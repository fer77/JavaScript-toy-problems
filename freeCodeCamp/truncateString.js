// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var splitStr = str.split("");
  var strLength = splitStr.length;
  if (num <= 3) {
    return splitStr.splice(0, num).join("") + "...";
  } else if (str.length > num) {
    return splitStr.splice(0, num - 3).join("") + "...";
  } else if (str.length === num || str.length < num) {
    return str;
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
