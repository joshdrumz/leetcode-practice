// https://leetcode.com/problems/merge-sorted-array/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
  nums1.splice(m, n);
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
}

// Tests
console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));