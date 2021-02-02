import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { configMock } from 'src/app/data/mocks/config-mock';
import { configServiceStub } from 'src/app/data/mocks/config-stub';
import { utttServiceStub } from 'src/app/data/mocks/uttt-service-stub';
import { ConfigService } from 'src/app/services/config/config.service';
import { UtttService } from 'src/app/services/uttt/uttt.service';

import { GameOptionsComponent } from './game-options.component';

describe('GameOptionsComponent', () => {
  let component: GameOptionsComponent;
  let fixture: ComponentFixture<GameOptionsComponent>;

  @Component({})
  class LocalGameComponentStub {}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameOptionsComponent],
      providers: [
        HttpClient,
        { provide: UtttService, useValue: utttServiceStub },
        { provide: ConfigService, useValue: configServiceStub },
      ],
      imports: [
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'local-game/0', component: LocalGameComponentStub },
        ]),
      ],
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

  it('should initialize config game options', fakeAsync(() => {
    component.ngOnInit();

    tick();

    expect(component.tabs).toEqual([
      configMock.gameOptions.localGame.name,
      configMock.gameOptions.onlineGame.name,
    ]);
    expect(component.selectedTab).toEqual(configMock.gameOptions.localGame.name);

    expect(component.gameModes).toEqual(configMock.gameOptions.localGame.options.gameModes);
    expect(component.selectedGameMode).toEqual(
      configMock.gameOptions.localGame.options.gameModes[0]
    );

    expect(component.opponents).toEqual(configMock.gameOptions.localGame.options.opponents);
    expect(component.selectedFirstTurn).toEqual(
      configMock.gameOptions.localGame.options.opponents[0]
    );

    expect(component.difficulties).toEqual(configMock.gameOptions.localGame.options.difficulties);
    expect(component.selectedDifficulty).toEqual(
      configMock.gameOptions.localGame.options.difficulties[0]
    );
  }));

  // it('should route to existing local game', () => {
  //   component.gameId = '0';
  //   component.continueLocalGame();
  // });

  // it('should route to new local game', () => {
  //   component.newLocalGame();
  // });

  it('should create list element for each tab in tabs', () => {
    component.tabs = ['local', 'online'];
    fixture.detectChanges();

    const tabElements = fixture.debugElement
      .queryAll(By.css('.tabs ul li'))
      .map((tab) => tab.nativeElement);

    expect(tabElements.length).toEqual(2);
    expect(tabElements[0].innerHTML).toContain('local');
    expect(tabElements[1].innerHTML).toContain('online');
  });

  it('should set only selected tab class to is-active', () => {
    component.tabs = ['local', 'online'];
    component.selectedTab = 'local';
    fixture.detectChanges();

    const tabElements = fixture.debugElement
      .queryAll(By.css('.tabs ul li'))
      .map((tab) => tab.nativeElement);

    expect(tabElements[0].outerHTML).toContain('is-active');
    expect(tabElements[1].outerHTML).not.toContain('is-active');
  });

  it('should switch tabs', () => {
    component.tabs = ['local', 'online'];
    component.switchTab('online');
    fixture.detectChanges();

    const tabElements = fixture.debugElement
      .queryAll(By.css('.tabs ul li'))
      .map((tab) => tab.nativeElement);

    expect(component.selectedTab).toEqual('online');
    expect(tabElements[0].outerHTML).not.toContain('is-active');
    expect(tabElements[1].outerHTML).toContain('is-active');
  });

  it('should display local game options when local game tab is selected', () => {
    component.tabs = ['local', 'online'];
    component.selectedTab = 'local';
    fixture.detectChanges();

    const label = fixture.debugElement.query(By.css('#localGameIDLabel')).nativeElement;

    expect(label.innerHTML).toContain('local game');
  });

  it('should not display bot options when player game mode is selected', () => {
    component.tabs = ['local', 'online'];
    component.selectedTab = 'local';
    component.gameModes = ['player', 'bot'];
    component.selectedGameMode = 'player';
    fixture.detectChanges();

    const selects = fixture.debugElement
      .queryAll(By.css('select'))
      .map((element) => element.nativeElement);

    expect(selects.length).toEqual(1);
  });

  it('should display bot options when bot game mode is selected', () => {
    component.tabs = ['local', 'online'];
    component.selectedTab = 'local';
    component.gameModes = ['player', 'bot'];
    component.selectedGameMode = 'bot';
    fixture.detectChanges();

    const selects = fixture.debugElement
      .queryAll(By.css('select'))
      .map((element) => element.nativeElement);

    expect(selects.length).toEqual(3);
  });

  it('should display online game options when online game tab is selected', () => {
    component.tabs = ['local', 'online'];
    component.selectedTab = 'online';
    fixture.detectChanges();

    const label = fixture.debugElement.query(By.css('#onlineGameIDLabel')).nativeElement;

    expect(label.innerHTML).toContain('online game');
  });
});
