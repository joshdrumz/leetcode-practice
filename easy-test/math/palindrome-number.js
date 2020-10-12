// https://leetcode.com/problems/palindrome-number/

// Determine whether an integer is a palindrome. 
// An integer is a palindrome when it reads the same backward as forward.

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  let num = x.toString();
  let reversed = num.split('').reverse().join('');
  return x == reversed;
}

console.log(isPalindrome(131))
console.log(isPalindrome(-131))