"use strict";
// https://leetcode.com/problems/contains-duplicate/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    if (nums.length <= 1) {
        return false;
    }
    nums = nums.sort();
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            return true;
        }
    }
    return false;
};
// Tests
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
