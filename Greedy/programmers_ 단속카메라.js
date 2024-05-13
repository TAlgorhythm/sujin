function solution(routes) {
  var answer = 1;

  routes.sort((a, b) => a[1] - b[1]);
  let cur = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    if (cur < routes[i][0]) {
      answer += 1;
      cur = routes[i][1];
    }
  }

  return answer;
}
