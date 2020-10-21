"use strict";
// https://leetcode.com/problems/longest-common-prefix/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) {
        return '';
    }
    for (var i = 0; i < strs[0].length; i++) {
        for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
            var s = strs_1[_i];
            if (s[i] !== strs[0][i]) {
                return s.slice(0, i);
            }
        }
    }
    return strs[0];
};
// Tests
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
// Explanation: There is no common prefix among the input strings.
