import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalBoardComponent } from '../local-board/local-board.component';

import { GlobalBoardComponent } from './global-board.component';

describe('GlobalBoardComponent', () => {
  let component: GlobalBoardComponent;
  let fixture: ComponentFixture<GlobalBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalBoardComponent, LocalBoardComponent],
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
});
