// https://leetcode.com/problems/reverse-integer/

// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
function reverseInt(x) {
  // Convert incoming number to a string, and only accept positive values
  let num = Math.abs(x).toString();
  let arr = [];

  // Loop through the string from last to first index
  for (let i = num.length - 1; i >= 0; i--) {
    arr.push(num[i]);
  }

  let result = Number(arr.join(''));

  if (x < 0) {
    result *= -1;
  }

  return result;
}

// Test
console.log(reverseInt(23047129845671))