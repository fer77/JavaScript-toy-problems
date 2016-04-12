// Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  // You can do this!
  var largetsArray = [];
  for(var i = 0; i < arr.length; i++) {
    var largest = 0; //I think because of scope this var had to go here instead of outside of this for loop.
    for(var j = 0; j < arr[i].length; j++) {
      if(largest < arr[i][j]) {
        largest = arr[i][j];
      }
      largetsArray[i] = largest;
    }
  }
  return largetsArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//I used "find the longest word in a string" solution to solve this.
