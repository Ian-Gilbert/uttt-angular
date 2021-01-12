import { GlobalBoard } from "../global-board.model";
import { localBoardMock } from "./local-board-mock";
import { ticTacToeBoardMock } from "./tic-tac-toe-board-mock";

export const globalBoardMock: GlobalBoard = {
  board: ticTacToeBoardMock.board,
  localBoards: [
    localBoardMock,
    localBoardMock,
    localBoardMock,
    localBoardMock,
    localBoardMock,
    localBoardMock,
    localBoardMock,
    localBoardMock,
    localBoardMock
  ]
};