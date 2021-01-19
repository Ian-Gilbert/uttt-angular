import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { configServiceStub } from 'src/app/data/mocks/config-mock';
import { utttObjectMock } from 'src/app/data/mocks/uttt-object-mock';
import { moveObjectMock } from 'src/app/data/mocks/move-mock';
import { ConfigService } from '../config/config.service';

import { UtttService } from './uttt.service';

describe('UtttService', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let service: UtttService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ConfigService, useValue: configServiceStub }],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(UtttService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get a game by its id', fakeAsync(() => {
    let req: TestRequest;

    service.get('0').subscribe((res) => {
      expect(res).toBe(utttObjectMock);
    });

    tick();

    req = httpTestingController.expectOne('test/0');
    req.flush(utttObjectMock);
  }));

  it('should create a new game', fakeAsync(() => {
    let req: TestRequest;

    service.post().subscribe((res) => {
      expect(res).toBe(utttObjectMock);
    });

    tick();

    req = httpTestingController.expectOne('test');
    req.flush(utttObjectMock);
  }));

  it('should update a game with a move by its id', fakeAsync(() => {
    let req: TestRequest;

    service.put('0', moveObjectMock).subscribe((res) => {
      expect(res).toBe(utttObjectMock);
    });

    tick();

    req = httpTestingController.expectOne('test/0');
    req.flush(utttObjectMock);
  }));

  it('should delete a game by its id', fakeAsync(() => {
    let req: TestRequest;

    service.delete('0').subscribe();

    tick();

    req = httpTestingController.expectOne('test/0');
    req.flush(null);
  }));
});
