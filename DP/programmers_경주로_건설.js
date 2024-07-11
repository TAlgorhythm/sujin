const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

function solution(board) {
  let answer = 0;
  const len = board.length;

  // 시작 x, 시작 y, 오던 방향(index), 가격
  const queue = [
    [0, 0, 0, 0],
    [0, 0, 1, 0],
  ];

  const dp = Array.from({ length: len }, () =>
    Array.from({ length: len }, () => Array(4).fill(Infinity))
  );

  const isInBoard = (x, y) =>
    x >= 0 && x < len && y >= 0 && y < len && board[x][y] !== 1;

  while (queue.length) {
    const [x, y, preDirIndex, cost] = queue.shift();

    for (let nextDirIndex = 0; nextDirIndex < 4; nextDirIndex++) {
      const [nx, ny] = [x + dx[nextDirIndex], y + dy[nextDirIndex]];
      if (!isInBoard(nx, ny)) continue;

      const newCost = cost + (preDirIndex === nextDirIndex ? 100 : 600);

      if (newCost < dp[nx][ny][nextDirIndex]) {
        dp[nx][ny][nextDirIndex] = newCost;
        queue.push([nx, ny, nextDirIndex, newCost]);
      }
    }
  }

  return Math.min(...dp[len - 1][len - 1]);
}
