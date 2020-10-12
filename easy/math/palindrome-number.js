// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = x => {
  // Convert number to string
  // let num = x.toString();

  // if beginning and end of string are the same, return true (BAD: assumes that the number is only 2-3 digits long!!)
  // if (num.charAt(0) === num.slice(-1)) {
  //   return true;
  // } else {
  //   return false;
  // }

  let num = x.toString();
  let reversed = num.split('').reverse().join('');
  return x == reversed;
};

// Tests
console.log(isPalindrome(131)) // true
console.log(isPalindrome(132)) // false