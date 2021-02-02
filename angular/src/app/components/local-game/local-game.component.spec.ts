import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component, Input } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { GlobalBoard } from 'src/app/data/global-board.model';
import { MarkType } from 'src/app/data/mark-type.enum';
import { updatedUtttObjectMock, utttObjectMock } from 'src/app/data/mocks/uttt-object-mock';
import { utttServiceStub } from 'src/app/data/mocks/uttt-service-stub';
import { Move } from 'src/app/data/move.model';
import { UtttService } from 'src/app/services/uttt/uttt.service';

import { LocalGameComponent } from './local-game.component';

describe('LocalGameComponent', () => {
  let component: LocalGameComponent;
  let fixture: ComponentFixture<LocalGameComponent>;

  @Component({})
  class HomeComponentStub {}

  @Component({
    selector: 'app-game-options',
  })
  class GameOptionsComponentStub {}

  @Component({
    selector: 'app-global-board',
  })
  class GlobalBoardComponentStub {
    @Input() globalBoard: GlobalBoard | null = null;
    @Input() currentPlayer: MarkType | null = null;
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocalGameComponent, GlobalBoardComponentStub, GameOptionsComponentStub],
      providers: [
        HttpClient,
        { provide: UtttService, useValue: utttServiceStub },
        { provide: ActivatedRoute, useValue: { params: of({ id: '0' }) } },
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([{ path: '', component: HomeComponentStub }]),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize game object', fakeAsync(() => {
    component.ngOnInit();

    tick();

    expect(component.gameObject).toBe(utttObjectMock);
  }));

  it('should make move when makeMove() is called and gameObject is not null', fakeAsync(() => {
    component.gameObject = utttObjectMock;
    const move: Move = { mark: MarkType.PLAYER1, lbIndex: 0, markIndex: 0 };

    component.makeMove(move);

    tick();

    expect(component.gameObject).toBe(updatedUtttObjectMock);
  }));

  it('should not call makeMove() if gameObject is null', fakeAsync(() => {
    component.gameObject = null;
    const move: Move = { mark: MarkType.PLAYER1, lbIndex: 0, markIndex: 0 };

    component.makeMove(move);

    tick();

    expect(component.gameObject).toBeNull();
  }));
});
