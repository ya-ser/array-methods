/* Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
*/

const camelize = str => {
  // split words into array
  let arr = str.split('-');
  // check if the index is 0 and keep it the same if it is, if not turn the first letter upper case, add the following letters to it
  let toUpper = arr.map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1));
  // join the array to make one string
  return toUpper.join('');
};

console.log(camelize("background-color")); // "backgroundColor"