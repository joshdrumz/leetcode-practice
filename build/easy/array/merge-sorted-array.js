"use strict";
// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    nums1.splice(m, n);
    nums1.push.apply(nums1, nums2);
    nums1.sort(function (a, b) { return a - b; });
};
// Tests
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
