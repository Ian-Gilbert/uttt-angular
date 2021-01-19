import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { UtttObject } from 'src/app/data/uttt-object.model';
import { Move } from 'src/app/data/move.model';
import { UtttService } from 'src/app/services/uttt/uttt.service';

@Component({
  selector: 'app-local-game',
  templateUrl: './local-game.component.html',
  styleUrls: ['./local-game.component.css'],
})
export class LocalGameComponent implements OnInit {
  public gameObject: UtttObject | null = null;

  constructor(
    private readonly service: UtttService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.service.get(params['id']).subscribe((game) => (this.gameObject = game));
    });
  }

  makeMove(move: Move): void {
    if (this.gameObject) {
      this.service.put(this.gameObject.id, move).subscribe((game) => (this.gameObject = game));
    }
  }

  deleteGame(): void {
    if (this.gameObject) {
      this.service.delete(this.gameObject.id).subscribe(() => this.router.navigateByUrl('/'));
    }
  }
}
