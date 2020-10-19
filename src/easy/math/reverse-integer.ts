// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @return {number}
 */
const reverseInt = (x: number): number => {
  let num: string = Math.abs(x).toString();
  let arr: (string | number)[] = [];

  for (let i = num.length - 1; i >= 0; i--) {
    arr.push(num[i]);
  }

  let result: number = Number(arr.join(''));

  if (result < 0) {
    result *= -1;
  }

  return result;
}

// Tests
console.log(reverseInt(123));