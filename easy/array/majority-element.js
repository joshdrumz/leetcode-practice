// https://leetcode.com/problems/majority-element/

/**
 * @param {number[]} nums
 * @return {number}
 */
function majorityElement(nums) {
  let currentNum = nums[0];
  let count = 0;

  for (let x of nums) {
    if (currentNum == x) {
      count++;
    } else {
      count--;
      if (!count) {
        currentNum = x;
        count = 1;
      }
    }
  }

  return currentNum;
}

// Tests
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));