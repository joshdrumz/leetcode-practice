// https://leetcode.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
  for (let i = 0; i < k; i++) {
    // For each i in k range, insert all removed elements at start of array 
    nums.unshift(nums.pop());
  }
}

// Tests
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));