// https://leetcode.com/problems/roman-to-integer/

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = s => {
  // Follow constraints
  if (s.length < 1 || s.length > 15) {
    return 0;
  }

  let ints = []; // Store values from roman param into an array
  let str = s.split(''); // Split string between each character to analyze
  for (let i = 0; i < str.length; i++) { // Assign values according to numeral index
    if (str[i] === 'I') {
      ints.push(1);
    } else if (str[i] === 'V') {
      ints.push(5);
    } else if (str[i] === 'X') {
      ints.push(10);
    } else if (str[i] === 'L') {
      ints.push(50);
    } else if (str[i] === 'C') {
      ints.push(100);
    } else if (str[i] === 'D') {
      ints.push(500);
    } else if (str[i] === 'M') {
      ints.push(1000);
    }
  }

  // Calculation for edge cases when s = 'IV' or s = 'CM' for example
  let total = 0;
  for (let i = 0; i < ints.length; i++) {
    if (ints[i] < ints[i + 1]) {
      total -= ints[i];
    } else {
      total += ints[i];
    }
  }

  return total;
};

// Tests
console.log(romanToInt('MCMXCIV')) // 1994