function solution(numbers) {
  let answer = [];
  let stack = [];

  for (let i = 0; i < numbers.length; i++) {
    // console.log(stack.length, numbers[i], numbers[stack[stack.length - 1]])
    while (stack.length > 0 && numbers[i] > numbers[stack[stack.length - 1]]) {
      let top = stack.pop();
      answer[top] = numbers[i];
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    let top = stack.pop();
    answer[top] = -1;
  }

  return answer;
}
