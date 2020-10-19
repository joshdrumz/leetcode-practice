"use strict";
// https://leetcode.com/problems/majority-element/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var currentNum = nums[0];
    var count = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var x = nums_1[_i];
        if (currentNum == x) {
            count++;
        }
        else {
            count--;
            if (!count) {
                currentNum = x;
                count = 1;
            }
        }
    }
    return currentNum;
};
// Tests
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
