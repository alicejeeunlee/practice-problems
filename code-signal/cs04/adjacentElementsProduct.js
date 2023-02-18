// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
  let largest = -1000;
  for (let i = 0; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (product > largest) {
      largest = product;
    }
  }
  return largest;
}

solution([3, 6, -2, -5, 7, 3]);
// 21
