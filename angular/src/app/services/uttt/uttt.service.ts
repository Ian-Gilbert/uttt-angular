import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigService } from '../config/config.service';
import { concatMap, map } from 'rxjs/operators';
import { UtttObject } from 'src/app/data/uttt-object.model';
import { Move } from 'src/app/data/move.model';

@Injectable({
  providedIn: 'root',
})
export class UtttService {
  private readonly utttUrl$: Observable<string>;

  constructor(private readonly http: HttpClient, config: ConfigService) {
    const config$ = config.get();
    this.utttUrl$ = config$.pipe(map((cfg) => `${cfg.api.uttt.base}${cfg.api.uttt.uri.uttt}`));
  }

  get(id: string): Observable<UtttObject> {
    return this.utttUrl$.pipe(
      map((url) => url.concat(`/${id}`)),
      concatMap((url) => this.http.get<UtttObject>(url))
    );
    // return of(utttObjectMock);
  }

  post(): Observable<UtttObject> {
    return this.utttUrl$.pipe(concatMap((url) => this.http.post<UtttObject>(url, null)));
    // return of('id');
  }

  put(id: string, move: Move): Observable<UtttObject> {
    // const params = new HttpParams()
    //   .set('player', player.toString())
    //   .set('lbIndex', lbIndex.toString())
    //   .set('markIndex', markIndex.toString());

    return this.utttUrl$.pipe(
      map((url) => url.concat(`/${id}`)),
      concatMap((url) => this.http.put<UtttObject>(url, move))
    );
    // return of(utttObjectMock);
  }

  delete(id: string): Observable<void> {
    return this.utttUrl$.pipe(
      map((url) => url.concat(`/${id}`)),
      concatMap((url) => this.http.delete<void>(url))
    );
    // return of();
  }
}
