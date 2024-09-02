// dfs 시간 초과
// function solution(x, y, n) {
//     var answer = -1;

//     function getY (num, cnt) {
//         if (num > y) {
//             return;
//         }
//         else if (num === y) {
//             answer = answer === -1 ? cnt : Math.min(answer, cnt);
//             return;
//         } else {
//             getY(num+n, cnt + 1);
//             getY(num*2, cnt + 1);
//             getY(num*3, cnt + 1);
//         }
//     }

//     getY(x, 0);

//     return answer;
// }

// dp
function solution(x, y, n) {
  var dp = new Array(y + 1).fill(-1);
  dp[x] = 0;

  for (let i = x; i <= y; i++) {
    if (dp[i] === -1) continue;
    if (i + n <= y)
      dp[i + n] = dp[i + n] === -1 ? dp[i] + 1 : Math.min(dp[i] + 1, dp[i + n]);
    if (i * 2 <= y)
      dp[i * 2] = dp[i * 2] === -1 ? dp[i] + 1 : Math.min(dp[i] + 1, dp[i * 2]);
    if (i * 3 <= y)
      dp[i * 3] = dp[i * 3] === -1 ? dp[i] + 1 : Math.min(dp[i] + 1, dp[i * 3]);
  }

  return dp[y];
}
