// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

var uniqueInOrder=function(iterable){
  //your code here - remember iterable can be a string or an array
    var unique = "";
    var uniqueOrder = [];
    for (var i = 0; i < iterable.length; i++) {
      if (iterable[i] === unique) {
        delete iterable[i];
      } else {
        unique = iterable[i];
        uniqueOrder.push(iterable[i]);
      }
    }
    return uniqueOrder;
};
uniqueInOrder('AAAABBBCCDAABBB');