/* Shuffle an array
importance: 3
Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements. For instance:

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
 */
let arr = ["1", "2", "3"];
/*
Depending on the JS engine, this function will favor certain array orders instead of having all outcomes equal. 

const shuffle = arr => arr.sort(() => Math.random() - 0.5);

// counts of appearances for all possible permutations
 let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

OUTPUT:
123: 375891
132: 62320
213: 124945
231: 62267
312: 62277
321: 312300

As you can see, it favors 123, 321, and 213 on this JS engine. This is because sort wants to create some kind of hierarchy in all the randomness to provide order.

To fix that, use the Fisher-Yates shuffle algorithm:
*/
const shuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// counts of appearances for all possible permutations
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}

/* OUTPUT:
123: 166772
132: 166180
213: 166859
231: 167015
312: 166667
321: 166507

Looks good now: all permutations appear with the same probability.

Also, performance-wise the Fisher-Yates algorithm is much better, there’s no “sorting” overhead.
*/