"use strict";
// https://leetcode.com/problems/palindrome-number/
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    var num = x.toString();
    var reversed = num.split('').reverse().join('');
    return num == reversed;
};
// Tests
console.log(isPalindrome(131)); // true
console.log(isPalindrome(132)); // false
