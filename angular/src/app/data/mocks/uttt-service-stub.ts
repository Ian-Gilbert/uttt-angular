import { Observable, of } from 'rxjs';
import { Move } from '../move.model';
import { UtttObject } from '../uttt-object.model';
import { utttObjectMock } from './uttt-object-mock';

export const utttServiceStub = {
  get(id: string): Observable<UtttObject> {
    return of(utttObjectMock);
  },

  post(): Observable<UtttObject> {
    return of(utttObjectMock);
  },

  put(id: string, move: Move): Observable<UtttObject> {
    return of(utttObjectMock);
  },

  delete(id: string): Observable<void> {
    return of();
  },
};
