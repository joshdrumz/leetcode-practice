// https://leetcode.com/problems/plus-one/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits: number[]): number[] => {
  // Read through digits in reverse order and calculate starting at the last position
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) { // If first digit in loop is not 9, add one to next iteration
      digits[i]++;
      return digits;
    } else { // otherwise, current iteration should be 0
      digits[i] = 0;
    }
  }

  // Special edge case: when digits = [9, 9, 9] -> should result in [1, 0, 0, 0]
  digits.unshift(1);
  return digits;
}

// Tests
console.log(plusOne([0]));