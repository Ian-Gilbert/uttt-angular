import { TicTacToeBoard } from "./tic-tac-toe-board.model";

export interface LocalBoard extends TicTacToeBoard {
    focus: boolean,
    playable: boolean
}
