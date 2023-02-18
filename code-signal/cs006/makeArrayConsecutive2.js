// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non - negative integer size.Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that.Help him figure out the minimum number of additional statues needed.

function solution(statues) {
  const sorted = statues.sort((a, b) => a - b);
  const largest = sorted[sorted.length - 1];
  const smallest = sorted[0];
  const totalNumOfStatues = (largest - smallest) + 1;
  const additionalStatues = totalNumOfStatues - sorted.length;
  return additionalStatues;
}

solution([6, 2, 3, 8]);
// 3;
