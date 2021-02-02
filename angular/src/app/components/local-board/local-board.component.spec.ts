import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LocalBoard } from 'src/app/data/local-board.model';
import { MarkType } from 'src/app/data/mark-type.enum';
import { localBoardMock } from 'src/app/data/mocks/local-board-mock';

import { LocalBoardComponent } from './local-board.component';

describe('LocalBoardComponent', () => {
  let component: LocalBoardComponent;
  let fixture: ComponentFixture<LocalBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalBoardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit move event when makeMove() is called', () => {
    const spy = spyOn(component.makeMoveEvent, 'emit');
    component.currentPlayer = MarkType.PLAYER1;

    component.makeMove(0);

    expect(spy).toHaveBeenCalled();
  });

  it('should not emit move event if current player is null', () => {
    const spy = spyOn(component.makeMoveEvent, 'emit');

    component.makeMove(0);

    expect(spy).not.toHaveBeenCalled();
  });

  it('should create 9 marks when localBoard is not null', () => {
    component.localBoard = localBoardMock;
    fixture.detectChanges();

    const marks = fixture.debugElement.queryAll(By.css('.mark')).map((mark) => mark.nativeElement);

    expect(marks.length).toEqual(9);
  });

  it('should be in focus if localBoard is in focus', () => {
    component.localBoard = localBoardMock;
    component.localBoard.focus = true;
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('.container')).nativeElement;

    expect(container.outerHTML).toContain('focus');
    expect(container.outerHTML).not.toContain('player1Win');
    expect(container.outerHTML).not.toContain('player2Win');
    expect(container.outerHTML).not.toContain('draw');
  });

  it('should show player 1 win if gmMark is in player 1', () => {
    component.localBoard = localBoardMock;
    component.localBoard.focus = false;
    component.gbMark = MarkType.PLAYER1;
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('.container')).nativeElement;

    expect(container.outerHTML).not.toContain('focus');
    expect(container.outerHTML).toContain('player1Win');
    expect(container.outerHTML).not.toContain('player2Win');
    expect(container.outerHTML).not.toContain('draw');
  });

  it('should show player 2 win if gmMark is in player 2', () => {
    component.localBoard = localBoardMock;
    component.localBoard.focus = false;
    component.gbMark = MarkType.PLAYER2;
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('.container')).nativeElement;

    expect(container.outerHTML).not.toContain('focus');
    expect(container.outerHTML).not.toContain('player1Win');
    expect(container.outerHTML).toContain('player2Win');
    expect(container.outerHTML).not.toContain('draw');
  });

  it('should show draw if gbMark is draw', () => {
    component.localBoard = localBoardMock;
    component.localBoard.focus = false;
    component.gbMark = MarkType.DRAW;
    fixture.detectChanges();

    const container = fixture.debugElement.query(By.css('.container')).nativeElement;

    expect(container.outerHTML).not.toContain('focus');
    expect(container.outerHTML).not.toContain('player1Win');
    expect(container.outerHTML).not.toContain('player2Win');
    expect(container.outerHTML).toContain('draw');
  });

  it('should set mark to player1Selectable if mark is selectable and current player is player1', () => {
    component.localBoard = localBoardMock;
    component.localBoard.focus = true;
    component.currentPlayer = MarkType.PLAYER1;
    fixture.detectChanges();

    const marks = fixture.debugElement.queryAll(By.css('.mark')).map((mark) => mark.nativeElement);

    for (const mark of marks) {
      expect(mark.outerHTML).toContain('player1Selectable');
      expect(mark.outerHTML).not.toContain('player2Selectable');
      expect(mark.outerHTML).not.toContain('player1Mark');
      expect(mark.outerHTML).not.toContain('player2Mark');
    }
  });

  it('should set mark to player2Selectable if mark is selectable and current player is player2', () => {
    component.localBoard = localBoardMock;
    component.localBoard.focus = true;
    component.currentPlayer = MarkType.PLAYER2;
    fixture.detectChanges();

    const marks = fixture.debugElement.queryAll(By.css('.mark')).map((mark) => mark.nativeElement);

    for (const mark of marks) {
      expect(mark.outerHTML).not.toContain('player1Selectable');
      expect(mark.outerHTML).toContain('player2Selectable');
      expect(mark.outerHTML).not.toContain('player1Mark');
      expect(mark.outerHTML).not.toContain('player2Mark');
    }
  });

  it('should set mark to player1Mark if mark is player1', () => {
    const lb: LocalBoard = {
      board: [MarkType.PLAYER1],
      focus: false,
      playable: false,
    };
    component.localBoard = lb;
    fixture.detectChanges();

    const mark = fixture.debugElement.queryAll(By.css('.mark'))[0].nativeElement;

    expect(mark.outerHTML).not.toContain('player1Selectable');
    expect(mark.outerHTML).not.toContain('player2Selectable');
    expect(mark.outerHTML).toContain('player1Mark');
    expect(mark.outerHTML).not.toContain('player2Mark');
  });

  it('should set mark to player2Mark if mark is player2', () => {
    const lb: LocalBoard = {
      board: [MarkType.PLAYER2],
      focus: false,
      playable: false,
    };
    component.localBoard = lb;
    fixture.detectChanges();

    const mark = fixture.debugElement.queryAll(By.css('.mark'))[0].nativeElement;

    expect(mark.outerHTML).not.toContain('player1Selectable');
    expect(mark.outerHTML).not.toContain('player2Selectable');
    expect(mark.outerHTML).not.toContain('player1Mark');
    expect(mark.outerHTML).toContain('player2Mark');
  });
});
