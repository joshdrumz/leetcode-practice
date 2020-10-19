"use strict";
// https://leetcode.com/problems/roman-to-integer/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // Follow constraints
    if (s.length < 1 || s.length > 15) {
        return 0;
    }
    var ints = []; // Store values from roman param into an array
    var str = s.split(''); // Split string between each character to analyze
    for (var i = 0; i < str.length; i++) { // Assign values according to numeral index
        if (str[i] === 'I') {
            ints.push(1);
        }
        else if (str[i] === 'V') {
            ints.push(5);
        }
        else if (str[i] === 'X') {
            ints.push(10);
        }
        else if (str[i] === 'L') {
            ints.push(50);
        }
        else if (str[i] === 'C') {
            ints.push(100);
        }
        else if (str[i] === 'D') {
            ints.push(500);
        }
        else if (str[i] === 'M') {
            ints.push(1000);
        }
    }
    // Calculation for edge cases when s = 'IV' or s = 'CM' for example
    var total = 0;
    for (var i = 0; i < ints.length; i++) {
        if (ints[i] < ints[i + 1]) {
            total -= ints[i];
        }
        else {
            total += ints[i];
        }
    }
    return total;
};
// Tests
console.log(romanToInt('MCMXCIV')); // 1994
