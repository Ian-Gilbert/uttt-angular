import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBoardComponent } from './global-board.component';

describe('GlobalBoardComponent', () => {
  let component: GlobalBoardComponent;
  let fixture: ComponentFixture<GlobalBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalBoardComponent ]
    })
    .compileComponents();
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
