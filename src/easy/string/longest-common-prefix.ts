// https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs: string[]): string => {
  if (!strs.length) {
    return '';
  }

  for (let i = 0; i < strs[0].length; i++) {
    for (let s of strs) {
      if (s[i] !== strs[0][i]) {
        return s.slice(0, i);
      }
    }
  }

  return strs[0];
}

// Tests
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
// Explanation: There is no common prefix among the input strings.