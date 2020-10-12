// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
function reverseInt(x) {
  // Approach 1: assuming the number is always positive, will not work for Leetcode

  // let reversed = x.toString().split('').reverse().join('');
  // return reversed;

  // Approach 2: Beginner friendly JS soln
  // https://leetcode.com/problems/reverse-integer/discuss/768553/Beginner-Friendly-JS-Solution

  // Make the number positive and turn it into a string
  let num = Math.abs(x).toString();
  let arr = [];

  // Push each number from last to first into an array
  for (let i = num.length - 1; i >= 0; i--) {
    arr.push(num[i]);
  }

  // Turn the reversed string into a number
  let result = Number(arr.join(''));

  // If the number exceeds the range, return 0
  if (result > 2 ** 31 - 1) {
    return 0;
  }

  // If x is negative, turn final number into a negative
  if (x < 0) {
    result *= -1;
  }

  return result;
}

// Tests
console.log(reverseInt(123));
console.log(reverseInt(-123));