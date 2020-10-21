const addArrays = (array1: number[], array2: number[]): number[] => {
  let num1: number = parseInt(array1.join(''));
  let num2: number = parseInt(array2.join(''));

  let sum: number = num1 + num2;

  return Array.from(String(sum), Number);

  // console.log(num1, num2);
}

console.log(addArrays([6, 7], [6, 7]));