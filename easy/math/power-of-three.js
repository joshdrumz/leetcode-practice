// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  // While n is greater than 1, check to see if remainder of division by 3 equals 0.
  // If so, n should be equal to 1 at the end and return true, otherwise false.
  while (n > 1) {
    if (n % 3 === 0) {
      n /= 3;
    } else {
      break;
    }
  }

  if (n === 1) {
    return true;
  } else {
    return false;
  }
}

// Tests
console.log(isPowerOfThree(27));