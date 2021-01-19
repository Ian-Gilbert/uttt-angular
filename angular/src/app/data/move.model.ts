import { MarkType } from './mark-type.enum';

export interface Move {
  mark: MarkType;
  lbIndex: number;
  markIndex: number;
}
