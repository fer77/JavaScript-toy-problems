// Generate a function that computes the series starting from 0 and ending until the given number following the sequence:

// 0 1 3 6 10 15 21 28 36 45 55 ....

// which is created by

// 0, 0+1, 0+1+2, 0+1+2+3, 0+1+2+3+4, 0+1+2+3+4+5, 0+1+2+3+4+5+6, 0+1+2+3+4+5+6+7 etc..

// input: 6

// output: 0+1+2+3+4+5+6 = 21

var sequenceSum = function(num) {
	if (num < 0) {
		return num + '<0';
    } else if (num === 0) { 
		return num + '=0'
    }
    var seq = Array.apply(null, {length: num + 1}).map(Function.call, Number);
    // console.log(seq);

    var sum = seq.reduce(function(a, b) { return a + b; }, 0);
    // console.log(sum);
    
    return seq.join(' + ') + ' = ' + sum;
};

sequenceSum(6);// "1 + 2 + 3 + 4 + 5 + 6 = 21"
