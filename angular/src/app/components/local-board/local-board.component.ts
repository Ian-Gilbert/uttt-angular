import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalBoard } from 'src/app/data/local-board.model';
import { LocalMove } from 'src/app/data/local-move.model';
import { MarkType } from 'src/app/data/mark-type.enum';

@Component({
  selector: 'app-local-board',
  templateUrl: './local-board.component.html',
  styleUrls: ['./local-board.component.css'],
})
export class LocalBoardComponent implements OnInit {
  @Input() localBoard: LocalBoard | null = null;
  @Input() currentPlayer: MarkType | null = null;
  @Input() gbMark: MarkType | null = null;

  @Output() makeMoveEvent = new EventEmitter<LocalMove>();

  markType = MarkType;

  constructor() {}

  ngOnInit(): void {}

  makeMove(index: number): void {
    if (this.currentPlayer) {
      const move: LocalMove = { mark: this.currentPlayer, markIndex: index };
      this.makeMoveEvent.emit(move);
    }
  }
}
