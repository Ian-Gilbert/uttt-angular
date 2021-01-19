import { Local } from 'protractor/built/driverProviders';
import { LocalBoard } from './local-board.model';
import { TicTacToeBoard } from './tic-tac-toe-board.model';

export interface GlobalBoard extends TicTacToeBoard {
  localBoards: LocalBoard[];
}
