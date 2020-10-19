// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = (n: number): boolean => {
  while (n > 1) {
    if (n % 3 === 0) {
      n /= 3;
    } else {
      break;
    }
  }

  return n === 1;
}

// Tests
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(3));
console.log(isPowerOfThree(9));