"use strict";
// https://leetcode.com/problems/unique-paths/
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var dp = Array(m)
        .fill(null)
        .map(function () { return Array(n); });
    for (var i = 0; i < dp.length; i++)
        dp[i][0] = 1;
    for (var j = 0; j < dp[0].length; j++)
        dp[0][j] = 1;
    for (var i = 1; i < dp.length; i++) {
        for (var j = 1; j < dp[0].length; j++) {
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
// Tests
console.log(uniquePaths(3, 2));
