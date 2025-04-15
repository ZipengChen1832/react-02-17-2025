import { Board } from ".";

export default function checkWinner(board: Board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const cell = board[i][j];
      if (cell === null) continue;

      // check vertical
      if (
        j < board[i].length - 3 &&
        cell === board[i][j + 1] &&
        cell === board[i][j + 2] &&
        cell === board[i][j + 3]
      ) {
        return cell;
      }

      // check horizontal
      if (
        i < board.length - 3 &&
        cell === board[i + 1][j] &&
        cell === board[i + 2][j] &&
        cell === board[i + 3][j]
      ) {
        return cell;
      }

      // check diagonal
      if (
        i < board.length - 3 &&
        j < board[i].length - 3 &&
        cell === board[i + 1][j + 1] &&
        cell === board[i + 2][j + 2] &&
        cell === board[i + 3][j + 3]
      ) {
        return cell;
      }
      if (
        i > 3 &&
        j < board[i].length - 3 &&
        cell === board[i - 1][j + 1] &&
        cell === board[i - 2][j + 2] &&
        cell === board[i - 3][j + 3]
      ) {
        return cell;
      }
    }
  }
  return null
}
