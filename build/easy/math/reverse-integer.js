"use strict";
// https://leetcode.com/problems/reverse-integer/
/**
 * @param {number} x
 * @return {number}
 */
var reverseInt = function (x) {
    var num = Math.abs(x).toString();
    var arr = [];
    for (var i = num.length - 1; i >= 0; i--) {
        arr.push(num[i]);
    }
    var result = Number(arr.join(''));
    if (result < 0) {
        result *= -1;
    }
    return result;
};
// Tests
console.log(reverseInt(123));
