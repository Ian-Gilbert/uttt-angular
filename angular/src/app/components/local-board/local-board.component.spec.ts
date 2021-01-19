import { ComponentFixture, TestBed } from '@angular/core/testing';

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
});
