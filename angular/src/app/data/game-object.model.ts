import { GameStatus } from "./game-status.enum";
import { GlobalBoard } from "./global-board.model";
import { MarkType } from "./mark-type.enum";

export interface GameObject {
    id: string,
    board: GlobalBoard,
    status: GameStatus,
    currentPlayer: MarkType
}
