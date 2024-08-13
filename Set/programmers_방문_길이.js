function solution(dirs) {
  const move = { U: [1, 0], D: [-1, 0], L: [0, -1], R: [0, 1] };
  const visited = new Set();
  let [curX, curY] = [0, 0];

  for (let dir of dirs) {
    let nextX = curX + move[dir][0];
    let nextY = curY + move[dir][1];

    if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) continue;

    visited.add(`${curX}` + `${curY}` + `${nextX}` + `${nextY}`);
    visited.add(`${nextX}` + `${nextY}` + `${curX}` + `${curY}`);

    [curX, curY] = [nextX, nextY];
  }

  return visited.size / 2;
}
