import { UtttObject } from '../uttt-object.model';
import { GameStatus } from '../game-status.enum';
import { MarkType } from '../mark-type.enum';
import { globalBoardMock } from './global-board-mock';

export const utttObjectMock: UtttObject = {
  id: '0',
  status: GameStatus.IN_PROGRESS,
  currentPlayer: MarkType.PLAYER1,
  board: globalBoardMock,
};

export const updatedUtttObjectMock: UtttObject = {
  id: '0',
  status: GameStatus.DRAW,
  currentPlayer: MarkType.PLAYER2,
  board: globalBoardMock
}
