// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
// isIsogram( "Dermatoglyphics" ) == true
// isIsogram( "aba" ) == false
// isIsogram( "moOse" ) == false // -- ignore letter case

function isIsogram(str){
  str = str.toLowerCase();
  for(var i = 0; i < str.length; ++i)
    for(var j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

// function isIsogram(str) {
//   return !/(\w).*\1/i.test(str);
// }

// RegExr
// http://regexr.com/

// .test()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
