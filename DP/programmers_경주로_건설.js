function solution(board) {
  var answer = 0;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  const N = board.length;
  const dp = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(4).fill(Infinity))
  );
  const queue = [];
  const isInBoard = (x, y) =>
    x >= 0 && x < N && y >= 0 && y < N && board[x][y] !== 1;

  while (queue.length) {}

  return answer;
}
