import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { utttServiceStub } from 'src/app/data/mocks/uttt-service-stub';
import { UtttService } from 'src/app/services/uttt/uttt.service';
import { GameOptionsComponent } from '../game-options/game-options.component';
import { GlobalBoardComponent } from '../global-board/global-board.component';
import { LocalBoardComponent } from '../local-board/local-board.component';

import { LocalGameComponent } from './local-game.component';

describe('LocalGameComponent', () => {
  let component: LocalGameComponent;
  let fixture: ComponentFixture<LocalGameComponent>;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        LocalGameComponent,
        GlobalBoardComponent,
        GameOptionsComponent,
        LocalBoardComponent,
      ],
      providers: [
        HttpClient,
        { provide: UtttService, useValue: utttServiceStub },
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: { params: of({ id: '123' }) } },
      ],
      imports: [HttpClientTestingModule],
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
});
