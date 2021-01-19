import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalBoard } from 'src/app/data/global-board.model';
import { LocalMove } from 'src/app/data/local-move.model';
import { MarkType } from 'src/app/data/mark-type.enum';
import { Move } from 'src/app/data/move.model';

@Component({
  selector: 'app-global-board',
  templateUrl: './global-board.component.html',
  styleUrls: ['./global-board.component.css'],
})
export class GlobalBoardComponent implements OnInit {
  @Input() globalBoard: GlobalBoard | null = null;
  @Input() currentPlayer: MarkType | null = null;

  @Output() makeMoveEvent = new EventEmitter<LocalMove>();

  constructor() {}

  ngOnInit(): void {}

  makeMove(localMove: LocalMove, index: number): void {
    const move: Move = { mark: localMove.mark, lbIndex: index, markIndex: localMove.markIndex };
    this.makeMoveEvent.emit(move);
  }
}
