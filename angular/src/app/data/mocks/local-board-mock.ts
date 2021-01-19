import { LocalBoard } from '../local-board.model';
import { ticTacToeBoardMock } from './tic-tac-toe-board-mock';

export const localBoardMock: LocalBoard = {
  board: ticTacToeBoardMock.board,
  focus: true,
  playable: true,
};
