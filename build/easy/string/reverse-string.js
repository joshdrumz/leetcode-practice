"use strict";
// Reverse a string
/**
 * @param {string} str
 * @return {string}
 */
var reverseString = function (str) {
    // Approach 1: Reverse a string with a decrementing for loop
    var reversed = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
    // Approach 2: Reverse a string with built-in functions
    // return str.split('').reverse().join('');
    // Approach 3: Reverse a string with recursion
    /*
    First Part of the recursion method
    You need to remember that you won’t have just one call, you’ll have several nested calls
    
    Each call: str === "?"        	                  reverseString(str.subst(1))     + str.charAt(0)
    1st call – reverseString("Hello")   will return   reverseString("ello")           + "h"
    2nd call – reverseString("ello")    will return   reverseString("llo")            + "e"
    3rd call – reverseString("llo")     will return   reverseString("lo")             + "l"
    4th call – reverseString("lo")      will return   reverseString("o")              + "l"
    5th call – reverseString("o")       will return   reverseString("")               + "o"
    
    Second part of the recursion method
    The method hits the if condition and the most highly nested call returns immediately
    
    5th call will return reverseString("") + "o" = "o"
    4th call will return reverseString("o") + "l" = "o" + "l"
    3rd call will return reverseString("lo") + "l" = "o" + "l" + "l"
    2nd call will return reverserString("llo") + "e" = "o" + "l" + "l" + "e"
    1st call will return reverserString("ello") + "h" = "o" + "l" + "l" + "e" + "h"
    */
    // if (str === '') {
    //   return '';
    // } else {
    //   return reverseStr(str.substr(1)) + str.charAt(0);
    // }
};
// Tests
console.log(reverseString('hello world'));
