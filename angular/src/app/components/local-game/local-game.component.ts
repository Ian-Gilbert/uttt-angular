import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { GameObject } from 'src/app/data/game-object.model';
import { MoveObject } from 'src/app/data/move-object.model';
import { UtttService } from 'src/app/services/uttt/uttt.service';

@Component({
  selector: 'app-local-game',
  templateUrl: './local-game.component.html',
  styleUrls: ['./local-game.component.css']
})
export class LocalGameComponent implements OnInit {
  public gameObject: GameObject | null = null;

  constructor(private readonly service: UtttService, private readonly route: ActivatedRoute, private readonly router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.get(params['id']).subscribe(
        (game) => this.gameObject = game
      );
    });
  }

  makeMove(move: MoveObject): void {
    if (this.gameObject) {
      this.service.put(this.gameObject.id, move)
        .subscribe(
          (game) => this.gameObject = game
      );
    }
  }

  deleteGame() {
    if (this.gameObject) {
      this.service.delete(this.gameObject.id).subscribe(
        () => this.router.navigateByUrl("/")
      );
    }
  }
}
