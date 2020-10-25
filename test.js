// Q: Given an array that repeats, "40, 40, 40, 50, 50, 60, 75, 75, 75, 75" you have to count the number of repeats and output something like this: "3, 40, 2, 50, 1, 60, 4, 75"

/**
 * @param {number[]} nums
 * @return {number[]}
 */
function countRepeats(nums) {
  // nums.sort();

  // let outputArr = [];
  // let current = null;
  // let count = 0;

  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] == current) {
  //     count++;
  //   } else {
  //     current = nums[i];
  //     count = 1;
  //   }
  //   outputArr.push(count, current);
  // }

  // return outputArr;

  // return count > 0 ? `${current} comes ${count} times` : '';

  // return nums.reduce((acc, value) => ({
  //   ...acc,
  //   [value]: (acc[value] || 0) + 1
  // }));

  // Unique array without duplicates
  let unique = [...new Set(nums)];

  return unique.map(val => [nums.filter(n => n === val).length, val]).join();
}

// Q: Given an integer, determine whether that int is a power of two or not

/**
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfTwo(n) {
  while (n > 1) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      break;
    }
  }

  return n === 1;
}

// Q: Determine if a given string is a palindrome or not

/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
  // let reversed = str.split('').reverse().join('');
  // return str == reversed;

  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str == reversed;
}

// Q: Reverse an integer

/**
 * @param {number} x
 * @return {number}
 */
function reverseInt(x) {
  // Initially, I'll only accept positive values (and convert back to negative if x was negative)
  let num = Math.abs(x).toString();
  let arr = [];

  // Reverse loop
  for (let i = num.length - 1; i >= 0; i--) {
    arr.push(num[i]);
  }

  // Convert back to number
  let result = Number(arr.join(''));

  // If x was negative, convert result to negative
  if (x < 0) {
    result *= -1;
  }

  return result;
}

// Q: Does this array contain a duplicate?

/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
  if (nums.length <= 1) {
    return false;
  }

  nums.sort();

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true;
    }
  }

  return false;
}

// Q: Given a string of words delimited by spaces, reverse the order of words. For example, given "hello there my friend", return "friend my there hello".

/**
 * @param {string} sentence
 * @return {string}
 */
function reverseWords(sentence) {
  // return sentence.split(' ').reverse().join(' ');

  let str = sentence.split(' ');
  let reversed = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reversed.push(str[i]);
  }
  return reversed.join(' ');
}



// Tests
// console.log(countRepeats([40, 40, 40, 50, 50, 60, 75, 75, 75, 75]));
// console.log(isPowerOfTwo(16));
// console.log(isPalindrome('racecar'));
// console.log(reverseInt(-123));
// console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(reverseWords('hello there my friend'));