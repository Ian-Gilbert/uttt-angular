import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigService } from 'src/app/services/config/config.service';
import { UtttService } from 'src/app/services/uttt/uttt.service';

@Component({
  selector: 'app-game-options',
  templateUrl: './game-options.component.html',
  styleUrls: ['./game-options.component.css']
})
export class GameOptionsComponent implements OnInit {
  gameId: string = '';

  tabs: string[] = [];
  selectedTab: string = "";

  opponents: string[] = [];
  selectedOpponent: string = "";

  firstTurn: string[] = [];
  selectedFirstTurn: string = "";

  difficulties: string[] = [];
  selectedDifficulty: string = "";

  constructor(private readonly service: UtttService, private readonly router: Router, private readonly config: ConfigService) { }

  ngOnInit(): void {
    this.config.get().subscribe((cfg) => {
      this.tabs.push(cfg.gameOptions.localGame.name);
      this.tabs.push(cfg.gameOptions.onlineGame.name);
      this.selectedTab = this.tabs[0];

      this.opponents = cfg.gameOptions.localGame.options.opponents;
      this.selectedOpponent = this.opponents[0];

      this.firstTurn = cfg.gameOptions.localGame.options.firstTurn;
      this.selectedFirstTurn = this.firstTurn[0];

      this.difficulties = cfg.gameOptions.localGame.options.difficulties;
      this.selectedDifficulty = this.difficulties[0];
    });
  }

  switchTab(tabName: string) {
    this.selectedTab = tabName;
  }

  continueLocalGame() {
    this.router.navigate(['local-game', this.gameId]);
  }

  newLocalGame() {
    this.service.post().subscribe(
      (game) => this.router.navigate(['local-game', game.id])
    );
  }

  continueOnlineGame() { }

  newOnlineGame() { }
}
