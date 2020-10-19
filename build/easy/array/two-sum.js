"use strict";
// https://leetcode.com/problems/two-sum/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // Approach 1: Brute Force
    for (var i = 0; i < nums.length; i++) {
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // Approach 2: Two-pass Hash Table (JS object)
    // let indices = {};
    // nums.forEach((item, index) => {
    //   indices[item] = index;
    // });
    // for (let i = 0; i < nums.length; i++) {
    //   let complement = target - nums[i];
    //   if (indices[complement] !== undefined && indices[complement] !== i) {
    //     return [i, indices[complement]];
    //   }
    // }
    // Approach 3: One-pass Hash Table
    // let indices = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //   let complement = target - nums[i];
    //   if (indices.has(complement)) {
    //     return [indices.get(complement), i];
    //   }
    //   indices.set(nums[i], i);
    // }
};
// Tests
console.log(twoSum([2, 7, 11, 15], 9));
