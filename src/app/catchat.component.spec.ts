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

  it('should have as title \'catchat works!\'',
      inject([CatchatAppComponent], (app: CatchatAppComponent) => {
    expect(app.title).toEqual('catchat works!');
  }));
});
