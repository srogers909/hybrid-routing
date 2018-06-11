import 'zone.js';
import 'reflect-metadata';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setAngularJSGlobal } from '@angular/upgrade/static';
import * as angular from 'angular';
import { AppModule } from './app.module';

setAngularJSGlobal(angular);
platformBrowserDynamic().bootstrapModule(AppModule);