let arr = [ "1", "15", 100 ];

console.log(arr.sort((a, b) => a-b)) // Ignores strings

arr.sort // converts array elements into strings and sorts by UTF-16 order making new array. Its important to add the comparison function to the sort as a callback so that the order makes sense.

let numbs = [1, 4, 3, 1000];
console.log(numbs.sort(((a, b) => b-a)).reverse()); // [1, 1000, 3, 4]
/*
In UTF-16, 1000 is less then 3 or 4 bc it has 1 in it. To fix it, add comparison.

let smallToLarge = numbs.sort((a, b) => a - b);

console.log(smallToLarge); // [1, 3, 4, 1000]

This is now checking 2 values in the array and seeing if it returns either negative, positive, or 0. If a - b returns a negative value, a is smaller then b and therefore goes before it in our new array. If a - b returns a positive value, then a is larger and therefore goes after. And if it equals 0, then theyre the same so they hold the position.

When comparing strings, use the localeCompare() method.

let countries = ['Österreich', 'Andorra', 'Vietnam'];

alert( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)

alert( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)
*/