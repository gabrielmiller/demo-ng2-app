import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CatchatAppComponent } from '../app/catchat.component';

beforeEachProviders(() => [CatchatAppComponent]);

describe('App: Catchat', () => {
  it('should create the app',
      inject([CatchatAppComponent], (app: CatchatAppComponent) => {
    expect(app).toBeTruthy();
  }));
});
