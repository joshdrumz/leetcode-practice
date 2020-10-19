"use strict";
// https://leetcode.com/problems/count-primes/
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    var isPrime = function (n) {
        if (n == 2)
            return true;
        for (var i = 2; i <= Math.sqrt(n); i++) {
            if (n % i == 0)
                return false;
        }
        return true;
    };
    if (n == 0 || n == 1) {
        return 0;
    }
    var count = 0;
    for (var i = 2; i < n; i++) {
        if (isPrime(i)) {
            count++;
        }
    }
    return count;
};
// Tests
console.log(countPrimes(3));
