"use strict";
// https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // Making use of a map to set init values
    var arr = [];
    var parens = new Map();
    parens.set('(', ')');
    parens.set('[', ']');
    parens.set('{', '}');
    for (var i = 0; i < s.length; i++) {
        // If index is an opening paren, push to stack
        if (parens.has(s[i])) {
            arr.push(s[i]);
        }
        else { // Else (closing param)
            var top_1 = arr[arr.length - 1];
            if (parens.get(top_1) !== s[i]) {
                return false;
            }
            else {
                arr.pop();
            }
        }
    }
    // If the stack still has no values, it is a mismatched paren
    if (arr.length) {
        return false;
    }
    return true;
};
// Tests
console.log(isValid('()'));
