import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { app } from './app';

@NgModule({
    imports: [
        BrowserModule,
        UpgradeModule
    ]
})
export class AppModule {
    constructor(private upgrade: UpgradeModule) {
    }

    ngDoBootstrap(): void {
        this.upgrade.bootstrap(document.documentElement, ['app'], {strictDi: true});
    }
}