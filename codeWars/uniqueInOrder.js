// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
  var list = [],
      listItem;
      
  for (var i = 0; i < iterable.length; i++) {
    
    if (iterable[i] != listItem) {
      list.push(listItem = iterable[i]);
    }
    else {
      iterable[i].delete;
    }
  }
  return list;
}

uniqueInOrder('AAAABBBCCDAABBB');