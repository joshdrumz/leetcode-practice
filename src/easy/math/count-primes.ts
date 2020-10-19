// https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = (n: number): number => {
  const isPrime = (n: number): boolean => {
    if (n == 2) return true;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) return false;
    }

    return true;
  }

  if (n == 0 || n == 1) {
    return 0;
  }

  let count: number = 0;

  for (let i = 2; i < n; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  return count;
}

// Tests
console.log(countPrimes(3));