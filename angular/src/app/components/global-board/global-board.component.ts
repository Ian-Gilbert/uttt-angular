import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalBoard } from 'src/app/data/global-board.model';
import { MarkType } from 'src/app/data/mark-type.enum';
import { MoveObject } from 'src/app/data/move-object.model';

@Component({
  selector: 'app-global-board',
  templateUrl: './global-board.component.html',
  styleUrls: ['./global-board.component.css']
})
export class GlobalBoardComponent implements OnInit {
  @Input() globalBoard: GlobalBoard | null = null;
  @Input() currentPlayer: MarkType | null = null;

  @Output() makeMoveEvent = new EventEmitter<MoveObject>();

  constructor() { }

  ngOnInit(): void {
  }

  makeMove(move: MoveObject, lbIndex: number) {
    move.lbIndex = lbIndex;
    this.makeMoveEvent.emit(move);
  }

}
