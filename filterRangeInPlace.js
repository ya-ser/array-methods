/* Filter range "in place"

Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]
*/

let arr = [5, 3, 8, 1, 7, 9, 10];

const filterRangeInPlace = (arr, a, b) => {
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num < a || num > b) {
      arr.splice(i, 1);
      // control the index of the array so we don't skip a num
      i--;
    }
  };
  return arr;
};

console.log(filterRangeInPlace(arr, 1, 4));
console.log(arr);