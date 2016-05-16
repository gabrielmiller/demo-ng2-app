import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { CatchatAppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(CatchatAppComponent, [
  FIREBASE_PROVIDERS,
  defaultFirebase('https://brilliant-heat-1652.firebaseio.com')
]);
