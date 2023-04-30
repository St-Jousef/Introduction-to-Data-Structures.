// *PROBLEM 1*
// **********************
// Create a constant var for set1 and set2 and assign a set of array to each var.
// Create a function with the name "sumOfDistinctElements".
//  let the function takes two arrays (set1 and set2) as input,
// merge both set into a single array and give it a var.
// use Set to get only unique elements.
// use reduce to calculate the sum.
// return sum;

const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3];
const result = sumOfDistinctElements(set1, set2);
console.log(result); // Output: 13 (distinct elements 4, 7, 2)

// *PROBLEM 2*
// **********************
function dot_product(v1, v2) {
  let ps = 0;
  for (let i = 0; i < v1.length; i++) {
    ps += v1[i] * v2[i];
  }
  return ps;
}
