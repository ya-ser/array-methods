/* Copy and sort array
importance: 5
We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)
*/

// when comparing strings, use localeCompare() method to perform case insensitivity comparisons and ignore accent letters
// const copySorted = arr => arr.sort((a, b) => a.localeCompare(b));

let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = arr => arr.slice().sort();

let sort = copySorted(arr);

console.log('sorted: ', sort);
console.log(arr);