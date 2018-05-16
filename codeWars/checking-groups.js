// Your job in this kata will be to make a program that checks a string for correct grouping. For instance, the following groups are done correctly:

// ({})
// [[]()]
// [{()}]
// The next are done incorrectly:

// {(})
// ([]
// [])
// A correct string cannot close groups in the wrong order, open a group but fail to close it, or close a group before it is opened.

// Your function will take an input string that may contain any of the symbols (), {} or [] to create groups.

// It should return True if the string is empty or otherwise grouped correctly, or False if it is grouped incorrectly.


function groupCheck(s){
    var group = /\{\}|\[\]|\(\)/;
    while(group.test(s))
      s = s.replace(group, '');  
    return !s.length;   
  }