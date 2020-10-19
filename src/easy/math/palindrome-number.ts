// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x: number): boolean => {
  let num: string = x.toString();
  let reversed: string = num.split('').reverse().join('');
  return num == reversed;
};

// Tests
console.log(isPalindrome(131)) // true
console.log(isPalindrome(132)) // false