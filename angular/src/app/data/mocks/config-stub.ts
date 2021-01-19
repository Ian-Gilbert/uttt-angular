import { asyncScheduler, Observable, scheduled } from 'rxjs';
import { Config } from '../config.model';
import { configMock } from './config-mock';

export const configServiceStub = {
  get(): Observable<Config> {
    return scheduled([configMock], asyncScheduler);
  },
};
