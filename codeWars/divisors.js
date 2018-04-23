/*
Find the divisors!
Create a function named divisors that takes an integer and returns an array with all of the integer's divisors(except for 1 and the number itself). If the number is prime return the string '(integer) is prime'
*/

function divisors(integer) {
  var divArr = [];
  
  for (var i = 2; i <= Math.floor(integer/2); i++) {
    if (integer % i == 0) {
      divArr.push(i);
    }
  }
  
  return divArr.length ? divArr : integer + ' is prime';
};