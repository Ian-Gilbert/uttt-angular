import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { configServiceStub } from 'src/app/data/mocks/config-stub';
import { utttServiceStub } from 'src/app/data/mocks/uttt-service-stub';
import { ConfigService } from 'src/app/services/config/config.service';
import { UtttService } from 'src/app/services/uttt/uttt.service';

import { GameOptionsComponent } from './game-options.component';

describe('GameOptionsComponent', () => {
  let component: GameOptionsComponent;
  let fixture: ComponentFixture<GameOptionsComponent>;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameOptionsComponent],
      providers: [
        HttpClient,
        { provide: UtttService, useValue: utttServiceStub },
        { provide: ConfigService, useValue: configServiceStub },
        { provide: Router, useValue: routerSpy },
      ],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
