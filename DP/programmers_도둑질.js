function solution(money) {
  var answer = 0;
  const len = money.length;

  const dp1 = [money[0], money[0], ...Array(len - 2).fill(0)];
  const dp2 = [0, money[1], ...Array(len - 2).fill(0)];

  for (let i = 2; i < len; i++) {
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
  }

  return Math.max(dp1[len - 2], dp2[len - 1]);
}
