import { MarkType } from "./mark-type.enum";

export interface MoveObject {
  mark: MarkType,
  lbIndex: number,
  markIndex: number
}