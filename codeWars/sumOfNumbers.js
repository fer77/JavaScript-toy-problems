// Generate a function that computes the series starting from 0 and ending until the given number following the sequence:

// 0 1 3 6 10 15 21 28 36 45 55 ....

// which is created by

// 0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..

// input: 6

// output: 0+1+2+3+4+5+6 = 21

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(num) {
    var sum = 0,
        str = "";
    
    if (num < 0) {
      return num + "<0";
    } else if (num == 0) {
      return "0=0";
    } else {
      for (var i = 0; i <= num; i++) {
        sum += i;
        str += i + "+";
      };
      
      // sum += num;
      str += i + " = " + sum;
      return str;
    }
  };

  return SequenceSum;

})();
