// https://leetcode.com/problems/plus-one/

// Example 1:
// Input: digits = [1, 2, 3]
// Output: [1, 2, 4]
// Explanation: The array represents the integer 123.

// Example 2:
// Input: digits = [4, 3, 2, 1]
// Output: [4, 3, 2, 2]
// Explanation: The array represents the integer 4321.

// Example 3:
// Input: digits = [0]
// Output: [1]

/**
 * @param {number[]} digits
 * @return {number[]}
 */
function plusOne(digits) {
  // Read digits in reverse order and calculation starts from the last position in digits
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) { // If first iter in loop is not 9, add one to current iter
      digits[i]++;
      return digits;
    } else { // Otherwise, current iter should equal 0
      digits[i] = 0;
    }
  }

  // Special edge case: when digits = [9,9,9] -> result should be [1,0,0,0]
  // We simply need to add one to the start of array and return
  digits.unshift(1);
  return digits;
}

// Tests
console.log(plusOne([9, 9, 9]));















// // Read digits in reverse order and calculation starts from the last position in digits
// for (let i = digits.length - 1; i >= 0; i--) {
//   if (digits[i] !== 9) { // If first iter in loop is not 9, add one to current iter
//     digits[i]++;
//     return digits;
//   } else { // Otherwise, current iter should equal 0
//     digits[i] = 0;
//   }
// }

// // Special edge case: when digits = [9,9,9] -> result should be [1,0,0,0]
// // We simply need to add one to the start of array and return
// digits.unshift(1);
// return digits;