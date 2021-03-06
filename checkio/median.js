/* 
A median is a numerical value separating the upper half of a sorted array of numbers from the lower half. In a list where there are an odd number of entities, the median is the number found in the middle of the array. If the array contains an even number of entities, then there is no single middle value, instead the median becomes the average of the two numbers found in the middle. For this mission, you are given a non-empty array of natural numbers (X). With it, you must separate the upper half of the numbers from the lower half and find the median.

Input: An array as a list of integers.

Output: The median as a float or an integer.

Example:

median([1, 2, 3, 4, 5]) == 3
median([3, 1, 2, 5, 3]) == 3
median([1, 300, 2, 200, 1]) == 2
median([3, 6, 20, 99, 10, 15]) == 12.5
*/

function median(a) {
    var orderedArr = a.sort(function(a, b) {

        return a - b;

    });
    var arrLen = orderedArr.length;
    var median = Math.floor(arrLen / 2);

    if (arrLen % 2 == 1) {

        return orderedArr[median];

    } else {

        return (orderedArr[median] + (orderedArr[median - 1])) / 2;
        
    }
}