// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
  let sum = nums[0], maxSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
}

// Tests
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));