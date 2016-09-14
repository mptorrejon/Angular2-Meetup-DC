/// <reference path="../typings/globals/es6-shim/index.d.ts" />
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './App/app.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule( AppModule );
