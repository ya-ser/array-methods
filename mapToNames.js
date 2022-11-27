/* Map to names
importance: 5
You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.

For instance:

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
*/



let user = [
  { name: "John", age: 25 },
  { name: "Pete", age: 30 },
  { name: "Mary", age: 28 }
];

// take our user array, for each user, we want the user.name
const people = user => user.map(user => user.name);

console.log(people(user)) // John, Pete, Mary