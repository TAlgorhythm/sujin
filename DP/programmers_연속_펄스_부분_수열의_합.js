function solution(sequence) {
  var answer = 0;

  const posList = [];
  const negList = [];

  for (let i = 0; i < sequence.length; i++) {
    if (i === 0) {
      posList.push(sequence[i]);
      negList.push(-sequence[i]);
    } else if (i % 2 === 0) {
      posList.push(Math.max(posList[i - 1] + sequence[i], sequence[i]));
      negList.push(Math.max(negList[i - 1] - sequence[i], -sequence[i]));
    } else {
      posList.push(Math.max(posList[i - 1] - sequence[i], -sequence[i]));
      negList.push(Math.max(negList[i - 1] + sequence[i], sequence[i]));
    }
    answer = Math.max(answer, posList[i], negList[i]);
  }

  return answer;
}
