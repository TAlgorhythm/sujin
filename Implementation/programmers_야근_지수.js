function solution(n, works) {
  var answer = 0;
  let total = 0;
  for (let i = 0; i < works.length; i++) {
    total += works[i];
  }
  if (total <= n) return 0;

  works.sort((a, b) => b - a);

  while (n) {
    let max = works[0];
    for (let i = 0; i < works.length; i++) {
      if (max <= works[i]) {
        works[i] -= 1;
        n -= 1;
        if (n === 0) break;
      } else {
        break;
      }
    }
  }

  for (let i = 0; i < works.length; i++) {
    answer += Math.pow(works[i], 2);
  }

  return answer;
}
