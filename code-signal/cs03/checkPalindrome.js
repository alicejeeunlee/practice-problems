// Given the string, check if it is a palindrome.

function solution(inputString) {
  for (let i = 0; i < inputString.length / 2; i++) {
    if (inputString[i] !== inputString[inputString.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

solution('aabaa');
// true

solution('abac');
// false

solution('a');
// true
