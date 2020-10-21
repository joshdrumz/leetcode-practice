// https://leetcode.com/problems/factorial-trailing-zeroes/

/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = (n: number): number => {
  let numZeroes: number = 0;
  for (let i = 5; i <= n; i *= 5) {
    numZeroes += Math.floor(n / i);
  }
  return numZeroes;
}

// Tests
console.log(trailingZeroes(3));
// Output: 0
// Explanation: 3! = 6, no trailing zero.
console.log(trailingZeroes(5));
// Output: 1
// Explanation: 5! = 120, one trailing zero.