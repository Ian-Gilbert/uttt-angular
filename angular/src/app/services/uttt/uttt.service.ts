import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { concatMap, map } from 'rxjs/operators';
import { GameObject } from 'src/app/data/game-object.model';
import { MoveObject } from 'src/app/data/move-object.model';

@Injectable({
  providedIn: 'root'
})
export class UtttService {
  private readonly utttUrl$: Observable<string>;

  constructor(private readonly http: HttpClient, config: ConfigService) {
    const config$ = config.get();
    this.utttUrl$ = config$.pipe(
      map((cfg) => `${cfg.api.uttt.base}${cfg.api.uttt.uri.uttt}`)
    );
  }

  get(id: string): Observable<GameObject> {
    return this.utttUrl$.pipe(
      map((url) => url.concat(`/${id}`)),
      concatMap((url) => this.http.get<GameObject>(url))
    );
    // return of(gameObjectMock);
  }

  post(): Observable<GameObject> {
    return this.utttUrl$.pipe(
      concatMap((url) => this.http.post<GameObject>(url, null))
    );
    // return of('id');
  }

  put(id: string, move: MoveObject): Observable<GameObject> {
    // const params = new HttpParams()
    //   .set('player', player.toString())
    //   .set('lbIndex', lbIndex.toString())
    //   .set('markIndex', markIndex.toString());
    
    return this.utttUrl$.pipe(
      map((url) => url.concat(`/${id}`)),
      concatMap((url) => this.http.put<GameObject>(url, move))
    );
    // return of(gameObjectMock);
  }

  delete(id: string): Observable<void> {
    return this.utttUrl$.pipe(
      map((url) => url.concat(`/${id}`)),
      concatMap((url) => this.http.delete<void>(url))
    );
    // return of();
  }
}
