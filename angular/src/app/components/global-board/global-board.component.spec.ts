import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LocalBoard } from 'src/app/data/local-board.model';
import { LocalMove } from 'src/app/data/local-move.model';
import { MarkType } from 'src/app/data/mark-type.enum';
import { globalBoardMock } from 'src/app/data/mocks/global-board-mock';

import { GlobalBoardComponent } from './global-board.component';

describe('GlobalBoardComponent', () => {
  let component: GlobalBoardComponent;
  let fixture: ComponentFixture<GlobalBoardComponent>;

  @Component({
    selector: 'app-local-board',
    template: '',
  })
  class LocalBoardComponentMock {
    @Input() localBoard: LocalBoard | null = null;
    @Input() currentPlayer: MarkType | null = null;
    @Input() gbMark: MarkType | null = null;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalBoardComponent, LocalBoardComponentMock],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit move event when makeMove() is called', () => {
    const spy = spyOn(component.makeMoveEvent, 'emit');
    const localMove: LocalMove = { mark: MarkType.PLAYER1, markIndex: 0 };

    component.makeMove(localMove, 0);

    expect(spy).toHaveBeenCalled();
  });

  it('should display local boards', () => {
    component.globalBoard = globalBoardMock;
    fixture.detectChanges();

    const lbs = fixture.debugElement
      .queryAll(By.css('app-local-board'))
      .map((lb) => lb.nativeElement);

    expect(lbs.length).toEqual(9);
  });
});
