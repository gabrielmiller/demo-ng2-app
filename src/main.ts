import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CatchatAppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(CatchatAppComponent);
