import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'zone.js/dist/zone-testing';

// jasmine staff
declare var jasmine;
import jasmineRequire from 'jasmine-core/lib/jasmine-core/jasmine.js';
window['jasmineRequire'] = jasmineRequire;
import 'jasmine-core/lib/jasmine-core/jasmine-html.js';
import 'jasmine-core/lib/jasmine-core/boot.js';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

import { getTestBed } from '@angular/core/testing';

import './app/hello.component.spec.ts';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then((ref) => {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
      window['ngRef'].destroy();
    }
    window['ngRef'] = ref;

    // Otherwise, log the boot error
  })
  .catch((err) => console.error(err));

// get fresh instance of jasmine and
bootstrap();

function bootstrap() {
  // this looks like workaround to get 100% fresh clear run.
  // window['jasmineRef'] does nothing - it is just a flag
  // if it is not defined - we have clear run
  // if not - lets reload
  if (window['jasmineRef']) {
    location.reload();
    return;
  } else {
    window.onload(undefined); // overwrited by jasmine, initialize env
    window['jasmineRef'] = jasmine.getEnv();
  }

  // First, initialize the Angular testing environment.
  getTestBed().initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
}
