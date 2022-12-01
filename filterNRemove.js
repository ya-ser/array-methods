/* Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.
*/

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

const unique = arr => arr.filter((item, index) => arr.indexOf(item) === index);

console.log( unique(strings) ); // Hare, Krishna, :-O