/* Get average age
importance: 4
Write the function getAverageAge(users) that gets an array of objects with property age and returns the average age.

The formula for the average is (age1 + age2 + ... + ageN) / N.
*/

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const getAverageAge = arr => {
  // prev starts at 0 and current means we add the current users age to our prev
  let sum = arr.reduce((prev, current) => prev + current.age, 0);
  return sum / arr.length;
};

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28