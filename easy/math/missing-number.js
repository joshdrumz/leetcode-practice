// https://leetcode.com/problems/missing-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
function missingNumber(nums) {
  // First, sort the numbers
  nums.sort((a, b) => a - b);

  // Check if current iteration of nums is not equal to iter in for loop
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return nums.length;
}

// Tests
console.log(missingNumber([3, 0, 1]));
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
console.log(missingNumber([0, 1]));
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
console.log(missingNumber([0]));
// Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.