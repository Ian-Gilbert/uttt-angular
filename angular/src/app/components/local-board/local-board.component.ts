import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LocalBoard } from 'src/app/data/local-board.model';
import { MarkType } from 'src/app/data/mark-type.enum';
import { MoveObject } from 'src/app/data/move-object.model';

@Component({
  selector: 'app-local-board',
  templateUrl: './local-board.component.html',
  styleUrls: ['./local-board.component.css']
})
export class LocalBoardComponent implements OnInit {
  @Input() localBoard: LocalBoard | null = null;
  @Input() currentPlayer: MarkType | null = null;
  @Input() gbMark: MarkType | null = null;

  @Output() makeMoveEvent = new EventEmitter<MoveObject>();

  markType = MarkType;

  constructor() { }

  ngOnInit(): void {
  }

  makeMove(markIndex: number) {
    if (this.currentPlayer) {
      let move: MoveObject = { mark: this.currentPlayer, lbIndex: NaN, markIndex: markIndex };
      this.makeMoveEvent.emit(move);
    }
  }

}
